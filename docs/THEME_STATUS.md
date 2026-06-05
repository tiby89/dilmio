# THEME_STATUS.md — DILMIO

> Este es el archivo principal para reubicarse entre sesiones.
> Cuando te pierdas: pega este archivo + `git status` + último mensaje de Claude Code.

---

## Estado actual

```
Current phase:          Phase 8D-1 + session cleanup — COMPLETED 2026-06-05
Last completed phase:   Phase 8D-1 — 4 OS2.0 narrative sections created; 3 killed from landing;
                        metafield cleanup + reordering in Admin; strategic decisions logged.
Current objective:      DESIGN PHASE (landing premium 7 secciones) — pendiente de plan en próxima sesión
Last commit:            2fd5b08 docs: log session decisions — killed sections, postponed OS2.0, redefined landing, metafield cleanup
                        (NOTE: 17TRACK work lives in Shopify Admin / 17TRACK app config — not in git)
```

---

## Theme

```
Theme folder:   theme/sense-clean/
Git status:     On branch master — working tree clean
Last commit:    47c48e7 feat: add SVG trust icon infrastructure

LIVE theme (dilmio.com):
  Name:   DILMIO_DEV
  ID:     201618030923
  Role:   LIVE (published as of 2026-05-29) — serves dilmio.com

WORKING theme for Phase 8D+ (structural OS2.0 work):
  Name:   DILMIO_SAFE_DEV_8D
  ID:     202268836171
  Role:   unpublished — safe clone created 2026-06-05

Previous live: Sense (#201391046987) — unpublished

RULE (8D+): All pushes for phases 8D-8G go to --theme 202268836171.
  NEVER push structural 8D+ work to 201618030923 directly.
  Publish to live (201618030923) only after full QA, via Admin > Themes > Publish.
```

---

## Archivos

```
Files changed (Phase 4):
- theme/sense-clean/sections/dilmio-product-landing.liquid  [modified — hero, benefits, trust, FAQ added; schema refactored to flat settings]
- theme/sense-clean/assets/dilmio-product.css               [modified — hero, benefits, trust, FAQ styles added]

Commits (Phase 4):
- ff4a110 feat: add Phase 4 conversion structure to product landing
- 59e9690 fix: simplify Phase 4 benefits and FAQ settings

Tests passed (Phase 4 visual QA on DILMIO_DEV):
- Hero: headline and subheadline render correctly
- Benefits: flat settings work, only non-blank items render, checkmark style correct
- Trust bullets: render and display correctly
- FAQ: flat question/answer settings work, answers expand correctly via details/summary
- Mobile layout: usable, no layout breaks
- Add to cart: still works after Phase 4 changes
- Phase 3 cart/variant/sticky behavior: fully preserved
- Console: no DILMIO JavaScript errors (only Shopify/theme-editor warnings)

Files changed (Phase 4 addendum — demo video):
- theme/sense-clean/sections/dilmio-product-landing.liquid  [modified — optional demo video block and schema settings added]
- theme/sense-clean/assets/dilmio-product.css               [modified — demo video styles appended]

Commits (Phase 4 addendum):
- 8c0ac34 feat: add optional demo video block to product landing

Tests passed (demo video visual QA on DILMIO_DEV):
- Video visible and plays correctly
- Video plays on mobile, no fullscreen takeover (playsinline confirmed)
- No layout break / no horizontal overflow
- Add to cart and sticky still work
- No blocking DILMIO JavaScript errors

Note: Demo video block is for temporary website/placeholder media only.
Not final ad creative. Not verified UGC or customer proof.

Files changed (Phase 6A — DILMIO product template):
- theme/sense-clean/templates/product.dilmio.json  [added — product template pointing to dilmio-product-landing section]

Commits (Phase 6A):
- 923b96a feat: add DILMIO product template

Tests passed (Phase 6A manual QA on DILMIO_DEV):
- templates/product.dilmio.json exists locally and remotely on DILMIO_DEV (theme ID 201618030923)
- Template "dilmio" appears in DILMIO_DEV theme editor template picker
- Product page renders DILMIO Product Landing correctly
- Product loaded from product URL context (no product picker required for real product pages)
- Product picker retained as fallback for non-product and demo pages
- Sense live theme (#201391046987) remains untouched

Known limitation (Phase 6A):
- product.dilmio.json shares section settings across all products using the template.
- Resolved in Phase 6B MVP via product metafields.

Files changed (Phase 6B MVP — product metafields):
- theme/sense-clean/sections/dilmio-product-landing.liquid  [modified — metafield-first content resolution with request.page_type branching]

Commits (Phase 6B MVP):
- 8eb5e8d feat: add Phase 6B MVP product metafield fallbacks
- e2221b0 fix: prevent product template content fallback bleed-through

Metafields implemented (Phase 6B MVP):
- custom.dilmio_hero_headline       (single line text)
- custom.dilmio_hero_subheadline    (single line text)
- custom.dilmio_demo_video_url      (single line text)
- custom.dilmio_benefit_1           (single line text)
- custom.dilmio_benefit_2           (single line text)
- custom.dilmio_benefit_3           (single line text)
- custom.dilmio_faq_question_1      (single line text)
- custom.dilmio_faq_answer_1        (multi-line text)

Tests passed (Phase 6B MVP manual QA on DILMIO_DEV):
- Product with metafields displays product-specific metafield content
- Product without metafields does not inherit shared product template fallback content
- Product picker fallback retained for non-product/demo contexts
- Add to cart works / variants work
- Sticky appears when main Add to Cart is out of view; shows correct product and works
- Mobile layout does not break
- Console: only Shopify/Polaris/WebPixelManager warnings — no blocking DILMIO JavaScript errors

Known limitation (Phase 6B MVP):
- MVP covers: hero headline/subheadline, demo video URL, benefits 1-3, FAQ question/answer 1.
- Not yet covered: benefit 4, how-it-works steps, trust bullets, FAQ 2-3, video heading/caption.
- Future expansion can add remaining fields without structural changes.

Files changed (Phase 6C — Home + catalog basic ecommerce structure):
- NO theme files changed. All work done in Shopify Admin / customizer only.

Shopify Admin actions completed (Phase 6C):
- Manual collection created: Catálogo (handle: catalogo)
- Homepage configured in DILMIO_DEV (featured collection set to Catálogo)
- Header menu configured: Inicio, Catálogo, Tracking, Contacto
- Footer menu configured: Contacto, Order Tracking, Política de privacidad,
  Términos del servicio, Política de devoluciones, Política de envío
- Order Tracking page created (default page template)
- Contact page already existed — no action needed
- Legal policies reviewed/created in Shopify Admin
- /collections/all not linked publicly

No commits for Phase 6C:
- No theme files were changed.
- templates/*.json and config/settings_data.json must not be pushed.
- Shopify Admin settings live remotely and must not be overwritten by theme push.

Tests passed (Phase 6C QA on DILMIO_DEV — navigation and pages only):
- Homepage loads / Catalog link works / Catalog shows curated products only
- Product card links to product page / Product page renders DILMIO landing
- Tracking page works / Contact page works / Footer legal links work
- Mobile layout works / No blocking DILMIO JavaScript errors
```

---

```
Files changed (Grupo B — Home/marca 6C/6D visual, commits 630af09..256d4fa):
- theme/sense-clean/assets/dilmio-brand-home.css      [NEW — home brand styles: hero, trust cards, categories, carousel, criteria]
- theme/sense-clean/sections/dilmio-brand-home.liquid [NEW — home brand section: hero, categories, products, criteria, newsletter]
- theme/sense-clean/sections/dilmio-trust-bar.liquid  [NEW — trust bar section: countdown configurable + text-only mode]
- theme/sense-clean/assets/section-email-signup-banner.css [modified — newsletter banner styles]

Untracked (not yet committed — related to this group):
- theme/sense-clean/assets/dilmio-icon-shield.svg
- theme/sense-clean/assets/dilmio-icon-box.svg
- theme/sense-clean/assets/dilmio-icon-return.svg
- theme/sense-clean/assets/dilmio-icon-headset.svg

Commits (Grupo B):
- 630af09 feat: add DILMIO trust bar section
- d2fc03e feat: add DILMIO brand home section
- 84d76d4 fix: improve DILMIO brand home visual spacing
- b8a4080 fix: refine DILMIO hero and trust card layout
- 903592f fix: improve DILMIO home mobile categories and hierarchy
- ee9ee63 fix: integrate DILMIO hero image with cream gradient
- 0315c19 fix: redesign DILMIO hero structure
- cd46944 fix: compact DILMIO hero CTA
- 4bf4eb0 fix: rebuild DILMIO hero as full-bleed composition
- 9104309 fix: improve DILMIO hero readability and mobile CTA
- acfd082 fix: align DILMIO newsletter and home sections
- 256d4fa feat: refine DILMIO brand home phase 6D

Tests passed (QA manual DILMIO_DEV, Operator, 2026-06-04):
- Desktop: hero completo (imagen, título, subtítulo, CTA), trust bar 4 items legibles,
  categorías con imagen y texto, carrusel navegable, tarjetas criterio OK, newsletter OK
- Móvil: hero adaptado sin corte, CTA visible sin scroll, trust bar visible,
  categorías sin desbordamiento, carrusel swipeable, tarjetas criterio OK,
  newsletter usable, sin desbordamiento horizontal
- Console: sin errores JS (solo warnings Shopify/Polaris)

Files changed (Grupo C — Header + footer, commits 5925c40 / beeb643 / 0794c05):
- theme/sense-clean/sections/header.liquid           [modified — global header styles in {% style %}; logo selector expanded to .header__heading-link for internal pages]
- theme/sense-clean/sections/footer.liquid           [modified — copyright text, powered_by_link commented]
- theme/sense-clean/assets/dilmio-footer.css         [NEW — footer desktop/mobile layout, contrast, input, copyright]

Fix técnico documentado (header):
- El logo va en <h1 class="header__heading"> solo en la home (SEO). En páginas internas
  queda solo <a class="header__heading-link">. El grid .header--middle-left apuntaba a
  .header__heading (inexistente en internas), por eso el logo caía mal.
  Solución: el selector del grid ahora incluye .header__heading-link.

Commits (Grupo C):
- 5925c40 fix: global header styles + logo position on internal pages, removed home-only scope
- beeb643 feat: premium polish - card hover, criteria shadow, trust bar text-only mode
- 0794c05 feat: mobile hero, footer desktop/mobile polish, carousel mobile rework, criteria compact, copyright

Tests passed (QA manual DILMIO_DEV, Operator, 2026-06-04):
- Desktop: logo bien posicionado en home, catálogo, producto, contacto, tracking
- Menú desktop centrado (logo izq, nav centro, iconos derecha)
- Footer: copyright visible, sin "Powered by Shopify", links legales funcionan
- Móvil: logo OK en home y páginas internas, hamburguesa funciona, footer completo
  y links pulsables

Files changed (Grupo D — Tracking/17TRACK — NETO CERO):
- Ningún archivo del theme cambió en el rango e2221b0..36f0888 para este grupo.
- commit 58f4131 (fix: empty space below 17TRACK widget) fue revertido por a25919c.
- layout/theme.liquid queda en su estado de e2221b0. Espacio vacío desktop aceptado como
  deuda cosmética menor (solo post-compra, baja visita). Causa raíz: 1fr grid del body.

Commits (Grupo D):
- 58f4131 fix: remove empty space below 17TRACK widget on tracking page (desktop) — REVERTIDO
- a25919c Revert "fix: remove empty space below 17TRACK widget on tracking page (desktop)"

Context — integración 17TRACK (NOT in git, trabajo en Shopify Admin / app panel):
- App 17TRACK instalada (descartada Track123: 200 envíos/mes vs 50, más carriers chinos,
  portal de devoluciones incluido).
- Tracking page: /apps/17track (generada por la app, NO es página del theme).
- Menús reapuntados a /apps/17track (header: "Seguimiento", footer: "Tracking de pedido").
- Estilo: Poppins, #3E4A2D, cream inputs, "Powered by 17TRACK" oculto.
- Trust bar fix: per-section CSS del bloque trust bar en customizer (no en git).
  (* { color: #FDFBF7 !important; } — theme-level CSS no afecta páginas de app de forma fiable)
- Background: crema sólido #F0F4EC (degradado del theme no heredable por páginas de app).
  Ver DECISION_LOG.md entrada 2026-06-01.

Files changed (Grupo E — Reviews nativas, commits 80faf02 / 36f0888):
- theme/sense-clean/sections/dilmio-reviews.liquid   [NEW — curated reviews section, metaobject-driven]
- theme/sense-clean/assets/dilmio-reviews.css        [NEW — card styles, mobile scroll-snap, desktop 3-col grid]

Commits (Grupo E):
- 80faf02 feat: add native reviews section with metaobject support
- 36f0888 fix: reviews section reads URL product on product pages to prevent bleed-through

Arquitectura reviews (Shopify Admin — NOT in git):
- Metaobject: dilmio_review (campos: reviewer_name, rating, review_text, review_image,
  review_date, review_video_url, source_note)
- Product metafield: custom.dilmio_reviews — tipo list.metaobject_reference → dilmio_review
  CRÍTICO: debe ser Lista (list), NO referencia única — single ref no es iterable y rompe el render
  La clave debe ser exactamente custom.dilmio_reviews (plural)
- Patrón anti-bleed-through: en product pages (request.page_type == 'product') la sección lee
  el product de la URL; product picker solo como fallback en demos/no-producto (mismo patrón 6B)
- Móvil: scroll horizontal con scroll-snap
- Desktop: grid de 3 columnas
- Sin reviews: sección completamente oculta en web publicada
- Empty-state (mensaje de ayuda al Operator): solo visible en request.design_mode (editor)
- source_note: existe en el metaobject pero NO se renderiza (campo de nota interna)
- review_video_url: renderiza solo como enlace de texto, sin embeds

Limitaciones conocidas (reviews):
- Iteración global Liquid capada a 50 metaobject_references por producto
- Pregunta abierta: ¿Shopify Flow puede hacer append a un campo list.metaobject_reference?
  Sin confirmar. Investigar si se necesita automatizar la asignación de reviews a productos.
- Orphan metaobject/metafield en singular (dilmio_review singular) pendiente de borrar
  en Admin — no bloquea, solo cleanup.

Tests passed (QA manual DILMIO_DEV, Operator, 2026-06-04):
- Producto con reviews: sección visible, muestra solo reviews del producto correcto
- Estrellas, nombre, texto, fecha e imagen visibles
- Desktop: grid 3 columnas OK
- Producto sin reviews: sección completamente oculta
- Móvil: scroll horizontal con scroll-snap funcional

Files changed (Rating en product cards — 2026-06-04):
- theme/sense-clean/snippets/card-product.liquid      [modified — .dilmio-card-rating block + CSS load]
- theme/sense-clean/sections/dilmio-brand-home.liquid [modified — .dilmio-card-rating block added to home product cards]
- theme/sense-clean/assets/dilmio-card-rating.css     [NEW — scoped card rating styles]

Commits (Rating en product cards):
- 5cf58c8 feat: add proportional star rating to product cards via metafields
- 72bf877 fix: clamp card rating to max 5 to prevent star overflow

Tests passed (QA manual DILMIO_DEV, Operator, 2026-06-04):
- Catálogo desktop + móvil: estrellas proporcionales, nota con coma decimal, count OK
- Home "Selección destacada" desktop + móvil: rating visible y correcto
- Alineación: centrado en catálogo (hereda text-align del contexto vía inline-flex),
  izquierda en home — ambos consistentes con títulos y precios de cada card
- Producto sin metafields: sin rating visible (degradación silenciosa confirmada)
- Clamp avg [0–5]: avg=7 → muestra "5,0" + 5 estrellas llenas; avg=4,7 → sin cambio

Files changed (Phase 6 completion — CTA español + trust icons, 2026-06-04):
- theme/sense-clean/sections/dilmio-product-landing.liquid [modified — CTA labels español]
- theme/sense-clean/assets/dilmio-product.js               [modified — z-index sticky 200→999, double-init protection]
- theme/sense-clean/assets/dilmio-product.css              [modified — sticky z-index fix]
- theme/sense-clean/assets/dilmio-icon-shield.svg          [NEW]
- theme/sense-clean/assets/dilmio-icon-box.svg             [NEW]
- theme/sense-clean/assets/dilmio-icon-return.svg          [NEW]
- theme/sense-clean/assets/dilmio-icon-headset.svg         [NEW]

Commit (Phase 6 completion):
- ca390d8 feat: CTA español, z-index sticky, SVG trust icons + status sync

Files changed (Demo split layout + FALLBACK schema labels, 2026-06-04):
- theme/sense-clean/sections/dilmio-product-landing.liquid [modified — video block redesigned as .dilmio-demo-section/.dilmio-demo-split two-column; heading moved to .dilmio-demo-header above split; autoplay fixed to 4 static attrs (autoplay muted loop playsinline); schema content fields marked FALLBACK with info notes]
- theme/sense-clean/assets/dilmio-product.css              [modified — .dilmio-demo-section (bg crema, border-radius 20px, padding centrado); .dilmio-demo-split (flex 2-col, gap 56px); .dilmio-demo-split__video (aspect-ratio 9/16, border-radius 18px, shadow); .dilmio-demo-split__content (card blanca, border); mobile stack ≤749px]

Commit (Demo layout):
- a810ca6 Refine product demo layout and clarify fallback schema labels

Files changed (Metafield migration + schema cleanup, 2026-06-04):
- theme/sense-clean/sections/dilmio-product-landing.liquid [modified — benefit_4/FAQ 2-3/how_it_works migrados a metafields (patrón 6B); schema limpiado a toggles + títulos globales + trust bullets; pack has_packs guard; keys corregidas para benefit_4 y FAQ 2/3 (custom.custom_dilmio_*)]

Commit (Metafield migration):
- f319a2c refactor: migrate product content to metafields, clean schema, fix keys

Metafields activos por producto — estado final (namespace: custom):
- hero_headline, hero_subheadline, demo_video_url → custom.dilmio_*
- benefit_1, benefit_2, benefit_3                → custom.dilmio_benefit_*
- benefit_4                                      → custom.custom_dilmio_benefit_4  ← prefijo doble (deuda técnica)
- faq_question_1, faq_answer_1                   → custom.dilmio_faq_*
- faq_question_2, faq_answer_2                   → custom.custom_dilmio_faq_question_2 / faq_answer_2  ← prefijo doble
- faq_question_3, faq_answer_3                   → custom.custom_dilmio_faq_question_3 / faq_answer_3  ← prefijo doble
- how_it_works_heading, how_step_1/2/3_title/text → custom.dilmio_how_*
- dilmio_reviews                                 → list.metaobject_reference → dilmio_review
- dilmio_rating_avg (decimal), dilmio_rating_count (integer) → card rating

Schema limpio — Theme Editor solo expone:
- Toggles: show_benefits, show_trust, show_faq, show_demo_video, show_how_it_works, show_pack
- Títulos globales: benefits_title, faq_title, demo_video_heading
- Trust bullets: trust_1/2/3 (globales, no por producto)
- Pack: pack_label_1/2/3, pack_quantity_1/2/3

Tests passed (metafield migration, DILMIO_DEV, 2026-06-04):
- Benefit 1-4, FAQ 1-3, demo video, how it works leen de metafields ✓
- Pack: label "PACK" no aparece sin packs configurados ✓
- Benefits title en card del split ✓
- Schema limpio: sin campos de contenido de producto en Theme Editor ✓

Files changed (Phase 8B — GOD theme nucleus hardening, 2026-06-05):
- theme/sense-clean/sections/dilmio-product-landing.liquid [modified — landing_product contract
  (no pisa product global); hero fallback a product.title; placeholder seguro con request.design_mode;
  id="dilmio-buy-core" añadido; data-add-label/data-sold-out-label/data-unavailable-label en CTAs;
  pack_section_label desde schema; 3 nuevos schema settings (cta_add_to_cart_label,
  cta_sold_out_label, pack_section_label con select)]
- theme/sense-clean/assets/dilmio-product.js [modified — applyCTAState lee labels desde
  el.dataset en vez de strings hardcodeados; fallback a strings originales si dataset vacío]

Commit (Phase 8B):
- 17993bd refactor: harden product landing core labels and product resolution

Schema changes (Phase 8B):
- cta_add_to_cart_label (text, default "Añadir al carrito") → label del CTA principal y sticky
- cta_sold_out_label (text, default "Agotado") → label de agotado en CTA principal y sticky
- pack_section_label (select: Pack/Plan/Licencia/Sesiones/Cantidad, default "Pack")
- show_pack default=false confirmado

Tests passed (Phase 8B QA, DILMIO_DEV, Operator, 2026-06-05):
- Hero fallback: producto sin dilmio_hero_headline → muestra product.title ✓
- Labels dinámicos: cambiar cta_add_to_cart_label en customizer → CTA y sticky actualizados ✓
- Variante agotada: cta_sold_out_label configurado → texto correcto + CTA se re-activa ✓
- Sticky en URL real de preview — sincronizado correctamente ✓
- Dos productos distintos con template dilmio: cada uno muestra SU contenido sin bleed-through ✓
```

---

## Situación

```
Código commiteado (sesión 2026-06-03):
- CTA español ("Añadir al carrito" / "Agotado" / "No disponible"), z-index sticky 200→999,
  protección doble inicialización JS, 4 SVG trust icons → commit 311fd9a
- Grupos B+C ya no tienen código sin commitear para estos archivos.

Blockers:
- None. QA de Grupos B, C y E completado 2026-06-04.

Nota (2026-06-04):
- CLAUDE.md y DILMIO_OS.md commiteados.
- .gitignore creado. Orphan metaobject singular borrado en Admin por Operator.
- Working tree limpio. Listo para Phase 7.

Rating en product cards (2026-06-04):
- snippets/card-product.liquid: bloque .dilmio-card-rating añadido entre show_rating y price.
  Lee custom.dilmio_rating_avg (decimal) + custom.dilmio_rating_count (integer).
  Render condicional: solo si avg != blank AND count > 0.
  Estrellas: capa vacía gris + capa dorada width:{{ dilmio_pct }}% inline (avg × 20 | round).
  Display: "4,3 (428)" — coma decimal, Liquid puro, sin JS.
- assets/dilmio-card-rating.css: nuevo — estilos scopeados solo a .dilmio-card-rating*.
- Aplica a todas las cards del sitio (home, colección, búsqueda, relacionados).
- QA: catálogo + home desktop + móvil ✓

Arquitectura de datos migrada a metafields (2026-06-04):
- sections/dilmio-product-landing.liquid: contenido de producto migrado de section.settings a metafields.
- assets/dilmio-product.css: bloque .dilmio-demo-section + .dilmio-demo-split (video + benefits two-column).

Metafields activos por producto (namespace: custom):
  hero_headline, hero_subheadline, demo_video_url    → custom.dilmio_*
  benefit_1, benefit_2, benefit_3                    → custom.dilmio_benefit_*
  benefit_4                                          → custom.custom_dilmio_benefit_4
  faq_question_1, faq_answer_1                       → custom.dilmio_faq_*
  faq_question_2, faq_answer_2                       → custom.custom_dilmio_faq_question_2 / faq_answer_2
  faq_question_3, faq_answer_3                       → custom.custom_dilmio_faq_question_3 / faq_answer_3
  how_it_works_heading, how_step_1/2/3_title/text    → custom.dilmio_how_*

Schema limpio — Theme Editor solo expone:
  Toggles: show_benefits, show_trust, show_faq, show_demo_video, show_how_it_works, show_pack
  Títulos globales: benefits_title, faq_title, demo_video_heading
  Trust bullets: trust_1, trust_2, trust_3 (globales, no por producto)
  Pack settings: pack_label_1/2/3, pack_quantity_1/2/3

Deuda técnica — naming inconsistente en metafield keys:
  benefit_1/2/3 y FAQ 1 usan prefijo: custom.dilmio_*
  benefit_4, FAQ 2/3 usan prefijo doble: custom.custom_dilmio_*
  Causa probable (NO verificada): posible error humano al crear el key como
  custom_dilmio_* cuando el namespace custom ya estaba aplicado, produciendo
  custom.custom_dilmio_*. NO asumir esta causa como cierta. Antes de Phase 8H,
  verificar en Shopify Admin el namespace/key real de los 5 campos afectados
  (benefit_4, faq_question_2/3, faq_answer_2/3) y solo entonces escribir código.
  Impacto: ninguno funcional, pero naming no uniforme.
  Resolución futura: recrear los campos afectados con keys manuales (dilmio_benefit_4, etc.)
  o migrar datos y actualizar keys en Liquid cuando escale a múltiples productos.

QA pasado (Operator, DILMIO_DEV, 2026-06-04):
- Benefit 1-4, FAQ 1-3, demo video, how it works: leen de metafields en product pages ✓
- Pack: no aparece si show_pack=true pero sin packs configurados ✓
- Benefits title en card del split ✓
- Schema limpio: sin campos de contenido de producto en Theme Editor ✓

Phase 8B completada (2026-06-05):
- landing_product contract: product global nunca se pisa. landing_product resuelve por sección.
- Hero siempre renderiza; fallback a product.title si metafield vacío.
- Labels CTA/pack configurables desde schema, leídos por JS desde data attributes del DOM.
- id="dilmio-buy-core" añadido al contenedor del núcleo (CTA final futuro lo usará para scroll).
- Placeholder seguro: visible solo en editor (request.design_mode); frontend sin producto → nada.
- QA: dos productos distintos sin bleed-through ✓

Files changed (Phase 8C — SVG icon infrastructure, 2026-06-05):
- theme/sense-clean/assets/dilmio-icon-check.svg    [NEW]
- theme/sense-clean/assets/dilmio-icon-lightning.svg [NEW]
- theme/sense-clean/assets/dilmio-icon-lock.svg      [NEW]
- theme/sense-clean/assets/dilmio-icon-star.svg      [NEW]
- theme/sense-clean/assets/dilmio-icon-heart.svg     [NEW]
- theme/sense-clean/assets/dilmio-icon-truck.svg     [NEW]
- theme/sense-clean/assets/dilmio-icon-leaf.svg      [NEW]
- theme/sense-clean/assets/dilmio-icon-globe.svg     [NEW]
- theme/sense-clean/assets/dilmio-icon-award.svg     [NEW]
- theme/sense-clean/assets/dilmio-icon-chart.svg     [NEW]
- theme/sense-clean/assets/dilmio-icon-download.svg  [NEW]
- theme/sense-clean/assets/dilmio-icon-key.svg       [NEW]
- theme/sense-clean/assets/dilmio-icon-clock.svg     [NEW]
- theme/sense-clean/assets/dilmio-icon-users.svg     [NEW]
- theme/sense-clean/assets/dilmio-icon-phone.svg     [NEW]
- theme/sense-clean/snippets/dilmio-trust-icon.liquid [NEW — case/when render for all 19 icons]
- theme/sense-clean/sections/dilmio-product-landing.liquid [modified — trust render uses snippet;
  schema adds trust_icon_1/2/3 select (default: none); check != blank and != 'none']
- theme/sense-clean/assets/dilmio-product.css [modified — .dilmio-trust__item flex;
  .dilmio-trust__icon 14px; .dilmio-trust__icon svg display:block]

Commit (Phase 8C):
- 47c48e7 feat: add SVG trust icon infrastructure

Architecture note (Phase 8C):
- Root cause of icons not rendering: NOT isolated. Two changes were applied simultaneously
  and QA passed after both. Do NOT assume either alone was the fix:
  (1) Schema select default changed from "" to "none". Hypothesis: Shopify may not persist
      customizer selections when the schema default is an empty string. UNVERIFIED.
  (2) Render switched from `inline_asset_content` filter to `{% render %}` snippet.
      Claim that inline_asset_content cannot resolve dynamic section.settings variables
      is UNVERIFIED and probably incorrect. Snippet approach adopted as cleaner architecture.
- Lesson: always use a non-blank string as default for select settings in Shopify schema.
- Lesson: {% render 'snippet', param: value %} with a case/when is reliable for dynamic icons.
- 4 existing SVG assets (shield, box, return, headset) retained; covered by snippet.

Tests passed (Phase 8C QA, DILMIO_DEV, Operator, 2026-06-05):
- Trust bullets with icons (Truck / Shield / Return): SVG visible, aligned left of text ✓
- Trust bullets without icon (none selected): text only, no layout break ✓
- Mobile layout: no horizontal overflow ✓
- CTA principal and sticky: untouched, still working ✓
- cart, sticky, variants, product.dilmio.json: not touched ✓

Phase 8C completada (2026-06-05).

Phase 8D-0 completada (2026-06-05):
- DILMIO_SAFE_DEV_8D (#202268836171) created as unpublished duplicate of DILMIO_DEV.
- Live theme (201618030923) unchanged and still serving dilmio.com.
- All 8D+ structural pushes target 202268836171.

Phase 8D-1 completada (2026-06-05):
- 4 secciones narrativas OS2.0 creadas: dilmio-problem-solution.liquid,
  dilmio-before-after.liquid, dilmio-details.liquid, dilmio-cta-final.liquid
  + snippet dilmio-section-icon.liquid + dilmio-icon-x.svg
  + assets/dilmio-section-icon.css
- Commit: 20ddb97 feat: Phase 8D-1 narrative OS2.0 sections

Decisiones estratégicas sesión 2026-06-05 (ver DECISION_LOG.md para detalle):
1. Secciones muertas de la landing: Problema/Solución, Detalles, CTA Final.
   Archivos .liquid conservados en repo — inertes, no en product.dilmio.json.
   Problema/Solución redundante con Antes/Después (mismo trabajo, más visual).
   Detalles → foto de specs tipo Amazon. CTA Final → sticky ya cubre el scroll.
2. Rearquitectura a OS2.0 / metaobjects: POSPUESTA.
   Metafields planos mantenidos, solo podados y reordenados.
   Reactivar cuando haya catálogo validado que lo requiera.
3. Landing premium redefinida — 7 secciones en orden:
   1) Trust bar  2) Hero (carrusel + foto specs + compra + estrellas)
   3) Vídeo demo + FAQ  4) Beneficios  5) Cómo funciona
   6) Antes/Después  7) Reviews
   Criterio: "inteligencia, no cantidad" — lo visual prima.
4. Poda metacampos en Admin (irreversible):
   BORRADOS: dilmio_specs_table, Detalles DILMIO + metaobject dilmio_product_detail
   + entradas + nota, dilmio_problem_statement, dilmio_solution_statement.
   RENOMBRADOS (solo labels visibles, claves intactas): etiquetas legibles
   (Hero · Titular, Beneficio 1, Cómo funciona · Paso 1 título, etc.)
   reordenadas por flujo visual de la landing.
- Commit decisiones: 2fd5b08

Secciones de la landing — estado actual:
  ACTIVAS (en uso o planificadas):
  - dilmio-product-landing.liquid   → Buy Core (hero, variantes, CTA, sticky) [núcleo]
  - dilmio-trust-bar.liquid         → Trust bar [ya en template]
  - dilmio-before-after.liquid      → Antes/Después [OS2.0, pendiente añadir a template]
  - dilmio-reviews.liquid           → Reviews [ya en template, metaobject-driven]
  - Vídeo demo + FAQ, Beneficios, Cómo funciona: integrados en el núcleo (pendiente separar en diseño)

  INERTES (archivo en repo, NO en ningún template):
  - dilmio-problem-solution.liquid  → matada; redundante con Antes/Después
  - dilmio-details.liquid           → matada; sustituida por foto de specs
  - dilmio-cta-final.liquid         → matada; sticky cubre todo el scroll

Problema conocido abierto (desktop):
  Bloque vídeo+beneficios vacío en desktop si no hay URL de vídeo.
  Propuesta pendiente de validar en diseño: FAQ al lado del vídeo
  (split vídeo izq + FAQ der) para rellenar el layout sin depender del vídeo.

Next action:
  PHASE DE DISEÑO — pulido visual de la landing premium (7 secciones).
  Planificar en próxima sesión fresco con plan escrito antes de tocar archivos.
  Usar safe dev clone (202268836171). No improvisar — toca el núcleo.

Do not start yet:
  - Fase de diseño: requiere plan aprobado antes de editar. No improvisación.
  - Rearquitectura a metaobjects: sigue PENDING. No reactivar hasta catálogo validado.
  - Añadir secciones a product.dilmio.json: requiere aprobación explícita por archivo.

Do not touch:
- templates/*.json on live (201618030923)
- config/settings_data.json
```

---

## Referencia rápida de fases

| Phase | Name                        | Status    |
|-------|-----------------------------|-----------|
| F1    | Clean base                  | Completed |
| F2    | Claude Code system setup    | Completed |
| F3    | Minimum technical landing   | Completed |
| F4    | Minimum conversion landing  | Completed |
| F5    | Design and trust            | Completed |
| F6    | Conversion infrastructure   | Completed (6A + 6B MVP + 6C + 6D + reviews)           |
| F7    | First real product          | Pending   |
| F8    | Creatives and traffic test  | Blocked until F6 QA + F7 complete |
| 8B    | GOD nucleus hardening       | Completed (2026-06-05) |
| 8C    | SVG icon infrastructure     | Completed (2026-06-05) |
| 8D-0  | Create Safe Dev Clone       | Completed (2026-06-05) |
| 8D-1  | OS2.0 narrative sections   | Completed (2026-06-05) — 4 created; 3 killed from landing |
| 8E    | Design phase (landing)     | Pending — plan required before touching core |
| 8H    | Key normalization          | Blocked until 8G complete |

---

## Shopify Push Workflow

```
INCIDENT (2026-05-24):
A full `shopify theme push` to DILMIO_DEV overwrote the remote
templates and config, losing all manually configured customizer
settings (homepage, product assignment, video block, text blocks).

RULE FROM NOW ON:
Never run a full theme push.
Always use --only and --nodelete to push only the changed files.
Never push templates/*.json or config/settings_data.json
unless explicitly approved by the Operator.

TARGETS (as of Phase 8D-0):

  LIVE theme (dilmio.com) — do NOT push structural 8D+ work here:
    Theme name:  DILMIO_DEV
    Theme ID:    201618030923
    Role:        LIVE (published as of 2026-05-29)

  WORKING theme for Phase 8D+ — push all structural work here:
    Theme name:  DILMIO_SAFE_DEV_8D
    Theme ID:    202268836171
    Role:        unpublished (safe dev clone)

  8D+ structural work goes to the duplicate (202268836171).
  Publish to live (201618030923) only after full QA,
  via Admin > Themes > Publish.
  Live theme is never pushed to directly during phases 8D-8G.

WORKING DIRECTORY FOR ALL PUSH COMMANDS:
  D:\DILMIO\theme\sense-clean\

SAFE COMMANDS (Phase 8D+, target = safe dev clone):

  Liquid + CSS only:
  shopify theme push \
    --only sections/dilmio-product-landing.liquid \
    --only assets/dilmio-product.css \
    --theme 202268836171 \
    --nodelete

  Liquid + CSS + JS:
  shopify theme push \
    --only sections/dilmio-product-landing.liquid \
    --only assets/dilmio-product.css \
    --only assets/dilmio-product.js \
    --theme 202268836171 \
    --nodelete

FLAGS EXPLAINED:
  --only      whitelist — only named files are uploaded, nothing else
  --theme     explicit target — no interactive prompt
  --nodelete  remote files absent locally are not deleted

RISK — DILMIO_DEV IS LIVE:
  Before any structural phase touching templates/*.json, section architecture,
  cart, sticky, or product core, verify the target theme ID and whether it is
  live. If the current target is live, duplicate the theme and work on a safe
  dev copy before implementation.
```

---

## Cómo actualizar este archivo

Después de cada fase, actualizar manualmente:

1. `Current phase` → fase en curso
2. `Last completed phase` → la que acaba de terminar
3. `Current objective` → qué se está haciendo ahora
4. `Git status` → pegar output de `git status`
5. `Last commit` → mensaje del último commit aprobado
6. `Files changed` → qué tocó Claude Code
7. `Tests passed / failed` → resultado del checklist
8. `Blockers` → qué impide avanzar
9. `Next action` → primer paso concreto
10. `Do not start yet` → qué está explícitamente bloqueado
