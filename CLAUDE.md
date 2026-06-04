# CLAUDE.md — DILMIO Operating Rules for Claude Code

Version: 1.0
Project: DILMIO — dilmio.com
Platform: Shopify / Theme: Sense (modified)

---

## 1. What is this project

DILMIO is a Shopify ecommerce built for fast product testing.
The goal is NOT to build a beautiful complete store.
The goal IS to build a clean, modular, reusable product landing system
that works technically before any design, reviews, apps or paid traffic.

Read this file fully before doing anything.

---

## 2. Sources of truth

These two files override any assumption or prior knowledge:

```
docs/DILMIO_OS.md               → project objective, roles, rules, criteria
docs/LANDING_TEST_CHECKLIST.md  → mandatory QA before advancing to reviews or ads
```

If you are unsure about anything, read those files first.
Do not act on memory. Act on what those files say.

---

## 3. Roles

| Role             | Tool                          | Can edit files |
|------------------|-------------------------------|----------------|
| Dilmio Operator  | ChatGPT                       | No             |
| Second Opinion   | Claude web                    | No             |
| Theme Engineer   | Claude Code                   | Yes            |
| Theme Reviewer   | Claude Code subagent / Claude | No             |
| Shopify QA       | Human + ChatGPT               | No             |
| Compliance Guard | ChatGPT / Claude              | No             |

**Only Theme Engineer (Claude Code) may edit files.**
All other roles review, audit, propose and approve — never edit directly.

---

## 4. Operational route — 8 phases

You must know which phase you are in before doing anything.
You must not advance to the next phase without explicit approval.

---

### Phase 1 — Clean base

Objective: eliminate previous chaos.
Responsible: Human + ChatGPT.
Files affected: folder structure only.

Required output:
```
DILMIO/
├─ CLAUDE.md
├─ docs/
│  ├─ DILMIO_OS.md
│  ├─ LANDING_TEST_CHECKLIST.md
│  ├─ DECISION_LOG.md
│  ├─ THEME_STATUS.md
│  └─ PRODUCT_LOG.md
├─ theme/
│  └─ sense-clean/
└─ backups/
```

Do not advance if:
- no backup exists
- theme/sense-clean/ is missing
- CLAUDE.md is not in place

---

### Phase 2 — Claude Code system setup

Objective: Claude Code must not improvise.
Responsible: ChatGPT designs, human configures, Claude Code executes.

Actions:
1. Open Claude Code inside the DILMIO folder.
2. Run /init if needed.
3. Validate CLAUDE.md is loaded and understood.
4. Do NOT edit any files yet.
5. Run first audit: read project structure and docs only.
6. Report what you found.

Required output (Claude Code must confirm all of these):
- What project this is and what the goal is.
- Which files are sources of truth.
- Which files can be touched.
- Which files must never be touched.
- When to stop.

Do not advance if:
- Claude Code has not read CLAUDE.md
- Claude Code proposes changes without a written plan
- Claude Code wants to edit more than 3 files at once without approval
- First audit has not been completed

---

### Phase 3 — Minimum technical landing

Objective: build the technical machine, not beautiful design.
Responsible: Theme Engineer.

Allowed files (initial scope):
```
sections/dilmio-product-landing.liquid
assets/dilmio-product.js
assets/dilmio-product.css
```

Must include:
- product selected via Shopify customizer (product picker in schema)
- product read from section.settings.product
- variants rendered dynamically from product.options_with_values
- dynamic price per variant
- stock display per variant
- CTA disabled if variant is sold out or combination is invalid
- quantity-based packs
- sticky add to cart
- /cart/add.js with real variant.id and correct quantity
- graceful degradation if no product is selected

Must NOT be done in this phase:
- reviews
- upsells
- external apps
- complete homepage
- animations
- product automation
- premium design

Do not advance if:
- any product is hardcoded
- option1 is assumed to be Color or option2 is assumed to be Pack
- cart is triggered by title, handle or text instead of variant.id
- sold-out variant can still be added to cart
- sticky and offer block are not synchronized

---

### Phase 4 — Technical QA

Objective: prove the landing does not break.
Responsible: Human + Shopify QA + ChatGPT.

Mandatory checklist (from LANDING_TEST_CHECKLIST.md):

| Test                   | Requirement                             |
|------------------------|-----------------------------------------|
| Simple product         | Adds correct product, no selectors      |
| Color + Size variants  | Adds exact variant selected             |
| Quantity pack          | quantity: 3 in /cart/add.js if needed   |
| Sold-out variant       | CTA disabled, re-enables on valid switch|
| Sticky + Offer sync    | Variant, price and quantity in sync     |
| Mobile                 | Usable, no layout breaks                |
| Console                | Zero JavaScript errors                  |
| Network                | /cart/add.js receives id and quantity   |

Do not advance if:
- any single critical test fails

---

### Phase 5 — Design and trust

Objective: add visual design on top of a working technical base.
Responsible: Theme Engineer + Offer Strategist + Compliance Guard.

Work in this phase:
- visual identity (colors, typography, logo)
- landing visual structure
- product benefits copy
- guarantee section
- shipping policy
- return policy
- FAQ section
- trust badges
- legally safe copy (no medical claims, no miracle claims)

Do not advance if:
- design breaks mobile
- copy makes promises that cannot be proven
- trust signals are unclear
- cart stops working after visual changes

---

### Phase 6 — Conversion infrastructure

Objective: measurement and recovery before traffic.
Responsible: Ads Analyst + Compliance Guard + Theme Engineer if needed.

Work in this phase:
- Meta Pixel
- Shopify events / GA4
- basic email flow (welcome + abandoned cart)
- simple reviews/social proof system, preferably native, supporting real text, stars, photo/video when technically reasonable — no fake reviews
- privacy policy and cookies
- analytics dashboard
- simple reviews/social proof system, native or via app, supporting real text, 
  stars, photo/video. Imported reviews allowed only with visible origin marking 
  (shown as product valuation, never as DILMIO purchase experience). No fake reviews.

Review infrastructure may be built in any phase. Only real or properly-sourced 
data may be shown publicly.

---

### Phase 7 — First real product

Objective: insert a validatable product.
Responsible: Product Hunter + Supplier Manager + Offer Strategist.

Product must pass:
- sufficient margin after product cost, shipping, gateway, taxes and ads
- viable supplier with stock and reasonable delivery time
- low legal risk
- strong visual demonstration angle
- pack potential

Validate using the product and supplier criteria in DILMIO_OS.md sections 5 and 6.

---

### Phase 8 — Creatives and traffic test

Objective: launch minimum viable traffic with control.
Responsible: Creative Director + Ads Analyst.

Deliverables:
- 3–5 creatives
- 2–3 hooks
- 1 landing configured
- small budget
- clear criteria: kill / iterate / scale

Use metrics from DILMIO_OS.md section 11.

---

## 5. Technical rules for the theme

These rules apply in every phase. No exceptions.

```
- Never hardcode product handles, titles, variant names, colors, packs, prices or product-specific copy.
- Use product picker in section schema.
- Read product from section.settings.product.
- Render variants from product.options_with_values.
- Never assume option1 is Color or option2 is Pack.
- Add to cart only with real variant.id — never by handle, title or text.
- Packs must support quantity-based packs as the primary method.
- Sticky add to cart must stay synchronized with selected product, variant, price and quantity.
- If no product is selected, degrade gracefully — do not break the page.
- If a variant is sold out or invalid, disable the CTA.
- If /cart/add.js fails, reactivate the button and show an error message.
- Do not install apps unless explicitly approved by the Operator.
- Do not edit more than 3 files per phase without explicit approval.
- Do not modify the live Shopify theme. Work only inside /theme/sense-clean/ unless the Operator explicitly sets another theme folder.
```

---

## 6. Rules for Claude Code execution

Before every action:
1. Read CLAUDE.md.
2. Read the relevant docs for the current phase.
3. Understand the current state of the project.
4. Write a short plan (max 5 lines) and wait for approval.
5. Only after approval: make minimal changes.
6. After changes: show changed files, explain what must be tested, and stop.

Git rules:
- Before editing, run git status if Git is initialized.
- After editing, report changed files and git diff summary if available.
- Do not commit unless the Operator explicitly approves.
- Never delete files or reset changes without explicit approval.
- Each completed phase should be committed separately after human approval.

Never:
- continue automatically into the next phase
- edit files without a written plan
- edit more than 3 files without approval
- assume anything about product structure, variant names or option order
- improvise solutions not covered by the plan

---

## 7. Mandatory response format after each phase

After completing any phase, report exactly this:

```
PHASE COMPLETED: [phase name]

FILES CHANGED:
- [filename]: [what changed]

TESTS REQUIRED:
- [test 1]
- [test 2]

RISKS OR OPEN QUESTIONS:
- [if any]

RECOMMENDED NEXT PHASE:
- [phase name and first action]

STOP. Do not continue until approved.
```

---

## 8. Hard prohibitions

```
- Do not touch the live theme.
- Do not hardcode any product data.
- Do not add reviews before Phase 6.
- Do not install apps without approval.
- Do not continue to next phase without explicit go-ahead.
- Do not assume option names or variant structure.
- Do not edit more than 3 files per phase without approval.
- Do not skip the written plan before editing.
- Do not skip QA (Phase 4) under any circumstances.
- Do not create product import automation, page generation automation, DSers automation or Shopify Admin automation before Phase 3 and Phase 4 are completed.
- Do not run git reset, git clean, git checkout, git restore, or delete files without explicit Operator approval.
- Do not commit automatically.
```

---

## 9. First command — project audit (run this before anything else)

Use this command to start Phase 2 correctly:

```
Read CLAUDE.md, docs/DILMIO_OS.md and docs/LANDING_TEST_CHECKLIST.md.

Do not edit anything.

Audit the project structure and tell me:
1. Is the folder structure complete? (DILMIO_OS.md, LANDING_TEST_CHECKLIST.md, theme/sense-clean/, backups/)
2. Are the sources of truth readable and understood?
3. Which phase are we in right now?
4. What is blocking us from starting Phase 3?
5. List any risks or doubts before we proceed.

STOP after the audit. Do not propose code changes yet.
```
## 10. Regla de estado sincronizado (sources of truth en git)

`THEME_STATUS.md` no se actualiza a mano después del trabajo. Se actualiza
COMO PARTE del trabajo, en el mismo commit que el código.

Regla:
- Ninguna fase se considera terminada hasta que `docs/THEME_STATUS.md` refleje
  el estado real Y esté incluido en el mismo commit que los cambios de código
  de esa fase.
- El mensaje de commit debe nombrar la fase (ej: `feat(F8): ...`).
- Si se tomó una decisión relevante, `docs/DECISION_LOG.md` se actualiza en ese
  mismo commit (entrada nueva — nunca se borran entradas anteriores).
- `DECISION_LOG.md` es historial inmutable. `THEME_STATUS.md` es estado actual
  (se sobrescribe). No se fusionan.

Por qué:
Claude Desktop no ve las sesiones de Claude Code. Solo ve archivos + git log.
Si el estado va en un commit separado (o se actualiza a mano más tarde), Claude
Desktop no puede saber si el `THEME_STATUS.md` que lee es real o quedó viejo.
Estado y código en el mismo commit = el git log confirma que ambos son de la
misma foto.

Prohibido:
- Cerrar una fase sin actualizar `THEME_STATUS.md`.
- Actualizar `THEME_STATUS.md` en un commit aparte "para luego".
- Dejar el estado declarado y el código en commits distintos.
---

*This file is the contract between the Operator and Claude Code.
It does not replace DILMIO_OS.md or LANDING_TEST_CHECKLIST.md.
It tells Claude Code how to behave in this project.*
