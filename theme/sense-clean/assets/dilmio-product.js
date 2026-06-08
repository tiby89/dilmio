(function () {
  'use strict';

  document.querySelectorAll('[id^="dilmio-landing-"]').forEach(function (section) {
    if (section.dataset.dilmioInitialized === 'true') return;
    section.dataset.dilmioInitialized = 'true';
    var sectionId = section.dataset.sectionId;
    var variantsEl = document.getElementById('dilmio-variants-' + sectionId);

    if (!variantsEl) return; // No product selected — exit cleanly

    var variants = JSON.parse(variantsEl.textContent);
    var selectedOptions = {}; // { optionIndex: selectedValue }
    var selectedQuantity = 1;
    var isPosting = false;

    var priceEl = document.getElementById('dilmio-price-' + sectionId);
    var ctaEl = document.getElementById('dilmio-cta-' + sectionId);
    var errorEl = document.getElementById('dilmio-error-' + sectionId);
    var stickyEl = document.getElementById('dilmio-sticky-' + sectionId);
    var stickyCtaEl = document.getElementById('dilmio-sticky-cta-' + sectionId);
    var stickyPriceEl = document.getElementById('dilmio-sticky-price-' + sectionId);
    var stickyVariantEl = document.getElementById('dilmio-sticky-variant-' + sectionId);
    var optionBtns = section.querySelectorAll('.dilmio-option-btn');
    var packBtns = section.querySelectorAll('.dilmio-pack-btn');

    // Initialise selectedOptions from Liquid-rendered is-selected state
    optionBtns.forEach(function (btn) {
      if (btn.classList.contains('is-selected')) {
        selectedOptions[parseInt(btn.dataset.optionIndex, 10)] = btn.dataset.value;
      }
    });

    // Initialise selectedQuantity from first rendered selected pack
    var firstSelectedPack = section.querySelector('.dilmio-pack-btn.is-selected');
    if (firstSelectedPack) {
      selectedQuantity = parseInt(firstSelectedPack.dataset.quantity, 10) || 1;
    }

    // Return the variant matching all currently selected options, or null
    function resolveVariant() {
      var optionKeys = Object.keys(selectedOptions);
      return variants.find(function (v) {
        return optionKeys.every(function (idx) {
          return v['option' + (parseInt(idx, 10) + 1)] === selectedOptions[idx];
        });
      }) || null;
    }

    // Set CTA state on a single button element
    function applyCTAState(el, variant) {
      if (!el) return;
      var addLabel = el.dataset.addLabel || '';
      var soldOutLabel = el.dataset.soldOutLabel || '';
      var unavailableLabel = el.dataset.unavailableLabel || '';
      if (!variant) {
        el.disabled = true;
        el.textContent = unavailableLabel;
        el.dataset.variantId = '';
      } else if (!variant.available) {
        el.disabled = true;
        el.textContent = soldOutLabel;
        el.dataset.variantId = variant.id;
      } else {
        el.disabled = false;
        el.textContent = addLabel;
        el.dataset.variantId = variant.id;
      }
    }

    // Sync all UI elements to reflect the given variant
    function updateUI(variant) {
      var price = variant ? variant.price_formatted : null;

      if (priceEl && price) priceEl.textContent = price;
      if (stickyPriceEl && price) stickyPriceEl.textContent = price;
      if (stickyVariantEl && variant) stickyVariantEl.textContent = variant.title;

      applyCTAState(ctaEl, variant);
      applyCTAState(stickyCtaEl, variant);

      if (errorEl) {
        errorEl.style.display = 'none';
        errorEl.textContent = '';
      }
    }

    // Option button click: update state and resolve variant
    optionBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx = parseInt(btn.dataset.optionIndex, 10);
        selectedOptions[idx] = btn.dataset.value;

        section
          .querySelectorAll('.dilmio-option-btn[data-option-index="' + idx + '"]')
          .forEach(function (b) {
            b.classList.toggle('is-selected', b.dataset.value === btn.dataset.value);
          });

        updateUI(resolveVariant());
      });
    });

    // Pack button click: update quantity
    packBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectedQuantity = parseInt(btn.dataset.quantity, 10) || 1;
        packBtns.forEach(function (b) {
          b.classList.toggle('is-selected', b === btn);
        });
      });
    });

    // POST to /cart/add.js, then redirect to /cart
    function addToCart(variantId) {
      if (isPosting || !variantId) return;
      isPosting = true;

      [ctaEl, stickyCtaEl].forEach(function (el) {
        if (el) { el.classList.add('is-loading'); el.disabled = true; }
      });
      if (errorEl) { errorEl.style.display = 'none'; errorEl.textContent = ''; }

      fetch('/cart/add.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: parseInt(variantId, 10), quantity: selectedQuantity })
      })
        .then(function (res) {
          if (!res.ok) {
            return res.json().then(function (data) {
              throw new Error(data.description || (errorEl && errorEl.dataset.errorAdd) || '');
            });
          }
          window.location.href = '/cart';
        })
        .catch(function (err) {
          isPosting = false;
          var variant = resolveVariant();

          [ctaEl, stickyCtaEl].forEach(function (el) {
            if (!el) return;
            el.classList.remove('is-loading');
            el.disabled = !(variant && variant.available);
          });

          if (errorEl) {
            errorEl.textContent = err.message || errorEl.dataset.errorGeneric || '';
            errorEl.style.display = 'block';
          }
        });
    }

    if (ctaEl) {
      ctaEl.addEventListener('click', function () { addToCart(ctaEl.dataset.variantId); });
    }
    if (stickyCtaEl) {
      stickyCtaEl.addEventListener('click', function () { addToCart(stickyCtaEl.dataset.variantId); });
    }

    // Show sticky when main CTA leaves the viewport
    if (stickyEl && ctaEl && 'IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          stickyEl.classList.toggle('is-visible', !entry.isIntersecting);
          stickyEl.setAttribute('aria-hidden', entry.isIntersecting ? 'true' : 'false');
        });
      }, { threshold: 0 }).observe(ctaEl);
    }

    // Sync JS state with Liquid-rendered initial state
    updateUI(resolveVariant());
  });

}());
