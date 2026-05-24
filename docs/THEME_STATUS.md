# THEME_STATUS.md — DILMIO

> Este es el archivo principal para reubicarse entre sesiones.
> Cuando te pierdas: pega este archivo + `git status` + último mensaje de Claude Code.

---

## Estado actual

```
Current phase:          Phase 6A — DILMIO product template (completed)
Last completed phase:   Phase 6A — DILMIO product template
Current objective:      Await Operator approval for Phase 6B.
```

---

## Theme

```
Theme folder:   theme/sense-clean/
Git status:     On branch master — working tree clean
Last commit:    923b96a feat: add DILMIO product template

Shopify target: DILMIO_DEV
Theme ID:       201618030923
Role:           unpublished
Live theme:     Sense (#201391046987) — untouched
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
```

---

## Situación

```
Blockers:
- None. Phase 6A complete and manual QA passed.

Next action:
- Await Operator approval to begin Phase 6B.

Do not start yet:
- Phase 6B
- Reviews
- Product automation
- Any ads or traffic
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
| F6    | Conversion infrastructure   | In Progress (6A done) |
| F7    | First real product          | Pending   |
| F8    | Creatives and traffic test  | Pending   |

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
