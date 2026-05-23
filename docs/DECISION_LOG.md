# DECISION_LOG.md — DILMIO

> Registro de decisiones relevantes: técnicas, de producto, de estrategia.
> Una entrada por decisión. No borrar entradas anteriores.

---

## Formato de entrada

```
---
Date:
Decision:
Reason:
Risk:
Expected result:
Status: pending / active / reversed / completed
---
```

---

## Registro

---
Date: 2026-05-23
Decision: Use Shopify Sense as base theme, work on a clean duplicate only.
Reason: Preserve original theme intact. All edits go into theme/sense-clean/.
Risk: If folder is renamed, CLAUDE.md path rule must be updated.
Expected result: Zero risk of breaking live theme during development.
Status: active
---

---
Date: 2026-05-23
Decision: DILMIO_OS.md and LANDING_TEST_CHECKLIST.md are the official sources of truth. They are not rewritten — only updated with explicit approval.
Reason: Avoid contradictory versions of the same document.
Risk: Documents become outdated if not maintained.
Expected result: Single source of truth for all agents and sessions.
Status: active
---

---
Date: 2026-05-23
Decision: Claude Code is the only agent that can edit files. All other roles review and approve only.
Reason: Prevent uncontrolled edits from multiple sources.
Risk: Bottleneck if Claude Code is slow or blocked.
Expected result: Clean, traceable edit history.
Status: active
---

---
Date: 2026-05-23
Decision: Reviews and social proof go in Phase 6, not before.
Reason: Reviews on an unstable technical base create compounded problems. Core must work first.
Risk: Slight delay in social proof, but landing is more reliable.
Expected result: Reviews added only when cart, variants and mobile are confirmed working.
Status: active
---

---
Date: 2026-05-23
Decision: No product or page automation before Phase 3 and Phase 4 are completed.
Reason: Automating a broken base scales the chaos, not the results.
Risk: Slower initial setup.
Expected result: Automation applied to a working system, not a broken one.
Status: active
---
