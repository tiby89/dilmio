# THEME_STATUS.md — DILMIO

> Este es el archivo principal para reubicarse entre sesiones.
> Cuando te pierdas: pega este archivo + `git status` + último mensaje de Claude Code.

---

## Estado actual

```
Current phase:          Phase 6C — Home + catalog basic ecommerce structure (completed)
Last completed phase:   Phase 6C — Home + catalog basic ecommerce structure
Current objective:      Await Operator approval to begin Phase 7 — First real product.
```

---

## Theme

```
Theme folder:   theme/sense-clean/
Git status:     On branch master — working tree clean
Last commit:    e2221b0 fix: prevent product template content fallback bleed-through

Shopify target: DILMIO_DEV
Theme ID:       201618030923
Role:           live (published — intentional as of 2026-05-26)
Previous live:  Sense (#201391046987) — now unpublished
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
- No layout break
- No horizontal overflow
- Add to cart still works
- Sticky still works
- No blocking DILMIO JavaScript errors

Note: Demo video block is for temporary website/placeholder media only.
Not final ad creative. Not verified UGC or customer proof.

Tests failed:
- None

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
- Unique landing content per product (copy, images, benefits, FAQ) is not yet solved.
- Future solution: product metafields or dynamic sources to scope settings per product.

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
- Add to cart works
- Variants work
- Sticky appears when main Add to Cart is out of view
- Sticky shows correct product and works
- Mobile layout does not break
- Console: only Shopify Theme Editor / Polaris / WebPixelManager / postMessage / Apollo warnings — no blocking DILMIO JavaScript errors

Known limitation (Phase 6B MVP):
- MVP covers: hero headline/subheadline, demo video URL, benefits 1-3, FAQ question/answer 1.
- Not yet covered: benefit 4, how-it-works steps, trust bullets, FAQ 2-3, video heading/caption.
- Future expansion can add remaining fields without structural changes.

Files changed (Phase 6C — Home + catalog basic ecommerce structure):
- NO theme files changed.
- All work done in Shopify Admin / customizer only.

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

Tests passed (Phase 6C QA on DILMIO_DEV):
- Homepage loads
- Catalog link works
- Catalog shows curated products only
- Product card links to product page
- Product page renders DILMIO landing in DILMIO_DEV preview
- Tracking page works
- Contact page works
- Footer legal links work
- Mobile layout works
- No blocking DILMIO JavaScript errors
```

---

## Situación

```
Blockers:
- None. Phase 6C complete and manual QA passed.

Next action:
- Await Operator approval to begin Phase 7 — First real product.

Do not start yet:
- Phase 7 — First real product (not started)
- Phase 8 — Creatives and traffic (blocked until Phase 7 complete)
- Any paid ads
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
| F6    | Conversion infrastructure   | Completed (6A + 6B MVP + 6C)   |
| F7    | First real product          | Pending                        |
| F8    | Creatives and traffic test  | Blocked until F7 complete      |

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
  Role:        unpublished

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
