# THEME_STATUS.md — DILMIO

> Este es el archivo principal para reubicarse entre sesiones.
> Cuando te pierdas: pega este archivo + `git status` + último mensaje de Claude Code.

---

## Estado actual

```
Current phase:          Phase 1 — Clean base
Last completed phase:   —
Current objective:      Set up folder structure, backup, and source documents before touching theme.
```

---

## Theme

```
Theme folder:   theme/sense-clean/
Git status:     Not initialized yet
Last commit:    —
```

---

## Archivos

```
Files changed:
- None yet

Tests passed:
- None yet

Tests failed:
- None yet
```

---

## Situación

```
Blockers:
- Git not initialized
- theme/sense-clean/ not confirmed present
- Old theme ZIP not confirmed inside backups/
- Initial clean commit not created

Next action:
- Step 1: Create full folder structure (DILMIO/ with docs/, theme/sense-clean/, backups/)
- Step 2: Place CLAUDE.md in root, all other .md files inside docs/
- Step 3: Save old theme ZIP inside backups/
- Step 4: Place clean Sense theme inside theme/sense-clean/
- Step 5 (only after all above): git init && git add . && git commit -m "chore: initial DILMIO clean base"
- Step 6: Open Claude Code inside DILMIO folder
- Step 7: Run Phase 2 audit command (see CLAUDE.md section 9)

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
