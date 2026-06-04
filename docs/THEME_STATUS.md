# THEME_STATUS.md — DILMIO

> Este es el archivo principal para reubicarse entre sesiones.
> Cuando te pierdas: pega este archivo + `git status` + último mensaje de Claude Code.

---

## Estado actual

```
Current phase:          Phase 6 — Conversion infrastructure (COMPLETED)
Last completed phase:   Phase 6 — Conversion infrastructure (6A + 6B MVP + 6C + 6D + reviews)
Current objective:      Phase 6 cerrada. Await Operator approval para Phase 7.
Last commit:            5cf58c8 feat: add proportional star rating to product cards via metafields
                        (NOTE: 17TRACK work lives in Shopify Admin / 17TRACK app config — not in git)
```

---

## Theme

```
Theme folder:   theme/sense-clean/
Git status:     On branch master — working tree clean
Last commit:    36f97fa docs: commit governance files, add .gitignore, clean working tree

Shopify target: DILMIO_DEV
Theme ID:       201618030923
Role:           LIVE (published — DILMIO_DEV is now the live theme as of 2026-05-29)
Previous live:  Sense (#201391046987) — now unpublished

IMPORTANT: Pushes to live require manual TTY confirmation from Operator terminal.
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
- theme/sense-clean/snippets/card-product.liquid  [modified — .dilmio-card-rating block + CSS load]
- theme/sense-clean/assets/dilmio-card-rating.css [NEW — scoped card rating styles]

Tests passed (QA manual DILMIO_DEV, Operator, 2026-06-04):
- Catálogo desktop + móvil: estrellas proporcionales, nota con coma decimal, count OK
- Home "Selección destacada" desktop + móvil: rating visible y correcto
- Alineación: centrado en catálogo (hereda text-align del contexto vía inline-flex),
  izquierda en home — ambos consistentes con títulos y precios de cada card
- Producto sin metafields: sin rating visible (degradación silenciosa confirmada)
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
- QA pendiente: Operator verifica en DILMIO_DEV.

Next action:
- Operator decide inicio de Phase 7 — First real product

Do not start yet:
- Phase 7 — First real product (pending Operator go-ahead)
- Phase 8 — Creatives and traffic (pending Phase 7)

Do not touch:
- templates/*.json
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

TARGET (always explicit):
  Theme name:  DILMIO_DEV
  Theme ID:    201618030923
  Role:        LIVE (published as of 2026-05-29)

WORKING DIRECTORY FOR ALL PUSH COMMANDS:
  D:\DILMIO\theme\sense-clean\

SAFE COMMANDS:

  Liquid + CSS only:
  shopify theme push \
    --only sections/dilmio-product-landing.liquid \
    --only assets/dilmio-product.css \
    --theme 201618030923 \
    --nodelete

  Liquid + CSS + JS:
  shopify theme push \
    --only sections/dilmio-product-landing.liquid \
    --only assets/dilmio-product.css \
    --only assets/dilmio-product.js \
    --theme 201618030923 \
    --nodelete

FLAGS EXPLAINED:
  --only      whitelist — only named files are uploaded, nothing else
  --theme     explicit target — no interactive prompt, no wrong-theme risk
  --nodelete  remote files absent locally are not deleted
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
