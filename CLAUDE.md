# CLAUDE.md — Reglas del proyecto DILMIO

Este archivo es la barandilla de seguridad para Claude Code.
Léelo entero antes de tocar una sola línea del theme.
Si alguna instrucción de una tarea entra en conflicto con este archivo, este archivo gana, y debes avisarlo antes de continuar.

---

## 1. Objetivo de DILMIO

DILMIO es un theme de Shopify personalizado basado en el theme "Sense", orientado a ecommerce con landings de producto de aspecto premium.

El objetivo de esta ronda de trabajo es, sobre el theme que ya existe:

1. Limpiar el código sin perder funcionalidad.
2. Terminar la landing de producto para que tenga apariencia ecommerce premium y convierta mejor.
3. Reunir los estilos propios de DILMIO en un CSS central editable, reutilizable para futuros proyectos/nichos.
4. Mejorar el JavaScript para que la experiencia se sienta premium.

El theme debe quedar **reutilizable para varios nichos**: la personalidad visual se cambia mediante tokens de diseño, no reescribiendo componentes.

No se trata de montar un sistema de gestión pesado. Se trata de terminar y pulir el theme con un flujo ligero, seguro y con rollback.

---

## 2. Fases aprobadas (orden obligatorio)

El trabajo sigue este orden. No se adelanta trabajo de una fase posterior dentro de una anterior.

- **Fase 0 — Baseline Git.** Guardar el theme actual tal cual está, como punto de retorno garantizado.
- **Fase 1 — Micro-limpieza crítica.** Solo bugs funcionales. Nada de rediseño. Nada de CSS profundo. Nada de consolidación.
- **Fase 2 — Landing premium.** Completar lo que falta para que la landing parezca ecommerce premium.
- **Fase 3 — CSS centralizado.** Crear/consolidar `assets/dilmio.css` con tokens de diseño.
- **Fase 4 — JavaScript premium.** Mejorar interacción, estados, sticky CTA, variantes, FAQ, galería.
- **Fase 5 — Limpieza final + QA.** Eliminar duplicados reales, revisar mobile/desktop, validar casos límite.

Trabajas siempre dentro de la fase activa. Si una tarea parece requerir saltar de fase, no lo hagas: detente y avísalo.

---

## 3. Reglas duras de seguridad

- No tocar el theme **live** bajo ninguna circunstancia. Todo va a SAFE_DEV.
- Hacer cambios **pequeños y atómicos**. Un cambio coherente por commit.
- Trabajar **una tarea/issue cada vez** (ver punto 5).
- **No hacer cambios no relacionados** con la tarea actual (ver punto 6).
- **No inventar metafields.** Usar solo los que existen realmente en la tienda. Si falta uno, avisar; no crearlo por tu cuenta.
- **No hardcodear contenido de nicho** si puede ser configurable vía settings o metafields. El theme debe servir para varios nichos.
- Mostrar **diff, riesgos y QA** antes de considerar una tarea terminada (ver punto 11).
- Si algo no se entiende, **no se borra**: se marca y se pregunta. Mucho "código muerto" aparente maneja en realidad un caso límite (una variante, un breakpoint, un estado sold-out).

---

## 4. Archivos sensibles (no tocar sin aprobación explícita)

Estos archivos NO se modifican sin que el Operador apruebe explícitamente el cambio en esa misma tarea:

- `config/settings_data.json`
- `config/settings_schema.json`
- `templates/*.json`

Si una tarea exige tocar uno de estos archivos, **párate antes de hacerlo**, explica por qué es necesario y qué cambiarías, y espera aprobación. Si un cambio los modifica de forma colateral, señálalo de forma destacada en el reporte (punto 11).

---

## 5. Una tarea cada vez

Solo hay una tarea activa en cada momento, ligada a una issue concreta de GitHub.

- No empieces una segunda tarea hasta cerrar la actual.
- No agrupes varias issues en un mismo cambio "ya que estoy".
- El alcance de la tarea es exactamente lo que dice la issue, ni más ni menos.

---

## 6. No scope creep

- Si trabajando en una tarea descubres otro problema (un bug, una mejora, una idea), **no lo arregles dentro de la tarea actual**.
- Anótalo (para crear una issue nueva o añadirlo al backlog) y sigue con lo que estabas haciendo.
- Mezclar arreglos no relacionados es lo que hace que un diff sea irrevisable y que se pierda el control de qué cambió qué.

---

## 7. Regla especial de Fase 1 (micro-limpieza crítica)

Esta es la regla más importante de todo el archivo durante la Fase 1:

> **En Fase 1, si algo no está funcionalmente roto, no se toca.**

- Fase 1 corrige **solo bugs funcionales**: cosas que no funcionan, que rompen, o que producen errores de consola.
- Ejemplos de lo que SÍ entra: metafields inconsistentes que provocan fallos silenciosos, condicionales de visibilidad que no se respetan (p. ej. `show_benefits`), settings referenciados que no existen, hardcodes graves, errores de consola.
- Lo que NO entra en Fase 1: CSS feo pero funcional, duplicados estéticos, reorganización de estilos, mover JS inline por gusto, rediseño. Todo eso espera a su fase (3 o 5).
- Si ves algo estético que ofende a la vista pero funciona: lo apuntas y sigues. No lo tocas.

---

## 8. Shopify CLI y SAFE_DEV

- Todo despliegue va al theme de pruebas **SAFE_DEV**, nunca al live.
- Push a pruebas:
  ```
  shopify theme push --theme SAFE_DEV --nodelete
  ```
- Cuando haya cambios hechos desde Shopify Admin, traerlos solo en los archivos sensibles (snapshot), no machacar el repo:
  ```
  shopify theme pull --theme SAFE_DEV --only "config/settings_data.json" --only "templates/*.json" --nodelete
  ```
- El flujo por tarea es: ejecutar el cambio → `git diff` → revisar archivos sensibles si los hubiera → push a SAFE_DEV → validación visual y funcional → commit claro.

---

## 9. Reglas para CSS

- **No consolidar el CSS hasta la Fase 3.** Antes de eso, no se reúnen estilos en un archivo central ni se reorganizan.
- En Fase 3, el destino es un único archivo: `assets/dilmio.css`, bien ordenado por secciones comentadas (tokens primero, luego componentes).
- Los **tokens de diseño** van al principio, en `:root` (colores, radios, sombras, spacing, tipografía). Los componentes consumen esos tokens en vez de valores fijos, para que un nicho nuevo se logre cambiando solo los tokens.
- **No se centraliza** el CSS que dependa de variables que Shopify inyecta desde el theme editor (colores y fuentes que el usuario configura en el Admin). Eso se queda en `{% style %}` dentro del `.liquid` correspondiente, porque Shopify lo genera dinámicamente.
- No usar CSS modular (varios archivos) para este theme: un único archivo ordenado es más fácil de editar.

---

## 10. Reglas para JavaScript premium

- **Vanilla JS**, sin frameworks pesados ni dependencias nuevas.
- Código **robusto e instance-safe**: nada de asumir que solo hay una instancia de un componente en la página (countdown, trust bar, galería, etc. deben funcionar con varias instancias).
- Estados claros en las interacciones (p. ej. add-to-cart: normal / loading / success / error / sold-out). Evitar doble click.
- Variantes sincronizadas con precio, disponibilidad, imagen, sticky CTA y URL.
- **Cero errores de consola.**
- Respetar `prefers-reduced-motion`.
- Quitar JS inline solo cuando tenga sentido y dentro de la fase adecuada, no por gusto en Fase 1.

---

## 11. Formato obligatorio de respuesta tras cada cambio

Después de cada cambio, antes de dar la tarea por terminada, responde SIEMPRE con esta estructura:

- **Archivos modificados:** lista de rutas tocadas.
- **Qué cambió:** descripción breve y concreta del cambio.
- **Riesgos:** qué podría romperse o qué efectos colaterales vigilar.
- **Cómo probarlo:** pasos concretos de QA en SAFE_DEV (qué mirar, en qué dispositivos, qué casos límite: producto sin vídeo, sin reviews, sin metafields, agotado, con variantes, etc.).
- **¿Tocó archivos sensibles?:** sí/no. Si sí, señalar cuáles (`config/settings_data.json`, `config/settings_schema.json`, `templates/*.json`) de forma destacada y confirmar que hubo aprobación.

No se considera terminada ninguna tarea sin este reporte.
