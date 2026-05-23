# THEME_STATUS.md — DILMIO

> Este es el archivo principal para reubicarse entre sesiones.
> Cuando te pierdas: pega este archivo + `git status` + último mensaje de Claude Code.

---

## Estado actual

```
Current phase:          Phase 2 — Claude Code system setup
Last completed phase:   Phase 1 — Clean base
Current objective:      Complete Claude Code onboarding/audit before Phase 3.
```

---

## Theme

```
Theme folder:   theme/sense-clean/
Git status:     On branch master — working tree clean
Last commit:    88e37a9 chore: initial DILMIO clean base
```

---

## Archivos

```
Files changed:
- docs/THEME_STATUS.md only

Tests passed:
- Phase 1 structure verified (CLAUDE.md, docs/, theme/sense-clean/, backups/ all present)
- Git initialized and clean
- Phase 2 audit completed

Tests failed:
- None
```

---

## Situación

```
Blockers:
- THEME_STATUS.md update not committed yet
- Phase 3 not approved yet

Next action:
- Show diff, then wait for Operator approval to commit the status update

Do not start yet:
- Phase 3 technical landing
- Reviews
- Product automation
- Any ads or traffic
```

---

## Referencia rápida de fases

| Phase | Name                        | Status      |
|-------|-----------------------------|-------------|
| F1    | Clean base                  | In progress |
| F2    | Claude Code system setup    | Not started |
| F3    | Minimum technical landing   | Not started |
| F4    | Technical QA                | Not started |
| F5    | Design and trust            | Not started |
| F6    | Conversion infrastructure   | Not started |
| F7    | First real product          | Not started |
| F8    | Creatives and traffic test  | Not started |

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
