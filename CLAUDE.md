# CLAUDE.md — Reglas del proyecto DILMIO GOD

Este archivo es la barandilla de seguridad para Claude Code.
Léelo entero antes de tocar una sola línea del theme.
Si alguna instrucción de una tarea entra en conflicto con este archivo, este archivo gana, y debes avisarlo antes de continuar.

---

## 1. Objetivo de DILMIO GOD

DILMIO es una **theme maestra ecommerce premium y clonable**, basada en el theme "Sense" de Shopify, orientada a convertir en móvil con una experiencia de producto premium.

El objetivo del plan GOD es evolucionar el theme hacia una arquitectura robusta, limpia y reutilizable en distintos nichos, cambiando colores, logo, textos globales y estilo visual mediante tokens de diseño, **sin rehacer la arquitectura**.

El theme no es un proyecto de una sola tienda: es una base replicable. Todo lo que se construya debe poder clonarse a un nicho nuevo sin reescribir componentes.

---

## 2. Decisiones aprobadas

Estas decisiones están fijadas. No se debaten por tarea; forman el marco del plan GOD.

1. Usar una sola plantilla de producto maestra.
2. La plantilla predeterminada de Shopify no debe ser el flujo real para productos publicados.
3. La página de producto debe adaptarse según el contenido disponible: basic, premium o flagship.
4. DSERS debe considerarse una fuente de materia prima, no producto final.
5. Los productos importados desde DSERS no deben publicarse directamente.
6. La descripción DSERS no debe dominar la página de producto.
7. La plantilla debe incluir un fallback compacto anti-DSERS para productos incompletos.
8. Se debe evitar que un producto importado parezca AliExpress/dropshipping barato.
9. El sistema debe evolucionar hacia Online Store 2.0, dynamic sources y metaobjects donde tenga sentido.
10. Los metacampos deben ordenarse y reducirse para que el admin sea más limpio y externalizable.
11. La theme debe tener un design system clonable: colores, botones, cards, radios, sombras, spacing y tono visual centralizados.
12. El catálogo debe evolucionar hacia un collection grid premium.
13. El carrito lateral debe convertirse en un cart drawer premium orientado a conversión.
14. La home debe ser modular, premium y adaptable a distintos nichos.
15. Las páginas auxiliares deben ser coherentes con la marca.
16. Todo debe validarse primero en móvil.
17. SAFE_DEV (`202471244107`) es el entorno de pruebas.
18. LIVE no se toca salvo aprobación explícita del Operador.

---

## 3. Fases GOD (orden obligatorio)

El trabajo sigue este orden. No se adelanta trabajo de una fase posterior dentro de una anterior.

- **FASE GOD 0 — Sincronización y fuente de verdad.** Confirmar que código local, GitHub y SAFE_DEV están alineados. Auditar qué secciones, snippets, assets y templates existen realmente. Evitar trabajar sobre exports antiguos.
- **FASE GOD 1 — Producto único maestro.** Convertir la arquitectura de producto hacia una única plantilla maestra. `product.dilmio.json` debe convertirse en la base real del producto GOD. `product.json` puede quedar como backup técnico, pero no como flujo operativo.
- **FASE GOD 2 — Fallback compacto anti-DSERS.** Crear una experiencia de producto limpia aunque falten metacampos premium. La descripción importada no debe romper la página ni dominar el diseño. El producto incompleto debe verse compacto, ordenado y vendible.
- **FASE GOD 3 — Admin limpio: metacampos, dynamic sources y metaobjects.** Reducir el caos de metacampos sueltos. Mantener metacampos simples para datos básicos y usar metaobjects para contenido repetitivo como beneficios, FAQ, reviews, detalles, pasos de uso, problema/solución y antes/después.
- **FASE GOD 4 — Design system clonable.** Centralizar la identidad visual en tokens o variables: color principal, color secundario, fondo, superficies, texto, botones, cards, radios, sombras, spacing y estilo visual.
- **FASE GOD 5 — Collection grid premium.** Mejorar catálogo, cards, badges, precios, ratings, imágenes, filtros y bloques editoriales de colección.
- **FASE GOD 6 — Cart drawer premium.** Crear o mejorar el carrito lateral con barra de envío gratis, upsell/cross-sell, regalo opcional, ahorro visible, CTA fuerte a checkout y microconfianza.
- **FASE GOD 7 — Home premium modular.** Revisar la home como sistema modular reutilizable: hero, trust bar, categorías, productos destacados, bloque editorial, bestseller, CTA final y footer.
- **FASE GOD 8 — Páginas auxiliares coherentes.** Contacto, tracking, políticas, FAQ, devoluciones, envío, privacidad, términos y 404 deben parecer parte de la misma marca premium.
- **FASE GOD 9 — QA móvil + documentación operativa mínima.** Validar móvil primero. Crear una guía mínima operativa para subir productos: importar desde DSERS como borrador, limpiar título, filtrar imágenes, rellenar campos básicos, revisar preview móvil y publicar.

Trabajas siempre dentro de la fase activa. Si una tarea parece requerir saltar de fase, no lo hagas: detente y avísalo.

---

## 4. Reglas duras de seguridad

- No tocar el theme **live** bajo ninguna circunstancia. Todo va a SAFE_DEV (`202471244107`).
- Hacer cambios **pequeños y atómicos**. Un cambio coherente por commit.
- Trabajar **una tarea/issue cada vez** (ver sección 6).
- **No hacer cambios no relacionados** con la tarea actual (ver sección 7).
- **No inventar metafields.** Usar solo los que existen realmente en la tienda. Si falta uno, avisar; no crearlo por tu cuenta.
- **No hardcodear contenido de nicho** si puede ser configurable vía settings o metafields. El theme debe servir para varios nichos.
- Mostrar **diff, riesgos y QA** antes de considerar una tarea terminada (ver sección 12).
- Si algo no se entiende, **no se borra**: se marca y se pregunta. Mucho "código muerto" aparente maneja en realidad un caso límite (una variante, un breakpoint, un estado sold-out).

---

## 5. Archivos sensibles (no tocar sin aprobación explícita)

Estos archivos NO se modifican sin que el Operador apruebe explícitamente el cambio en esa misma tarea:

- `config/settings_data.json`
- `config/settings_schema.json`
- `templates/*.json`

Si una tarea exige tocar uno de estos archivos, **párate antes de hacerlo**, explica por qué es necesario y qué cambiarías, y espera aprobación. Si un cambio los modifica de forma colateral, señálalo de forma destacada en el reporte (sección 12).

---

## 6. Una tarea cada vez

Solo hay una tarea activa en cada momento, ligada a una issue concreta de GitHub.

- No empieces una segunda tarea hasta cerrar la actual.
- No agrupes varias issues en un mismo cambio "ya que estoy".
- El alcance de la tarea es exactamente lo que dice la issue, ni más ni menos.

---

## 7. No scope creep

- Si trabajando en una tarea descubres otro problema (un bug, una mejora, una idea), **no lo arregles dentro de la tarea actual**.
- Anótalo (para crear una issue nueva o añadirlo al backlog) y sigue con lo que estabas haciendo.
- Mezclar arreglos no relacionados es lo que hace que un diff sea irrevisable y que se pierda el control de qué cambió qué.

---

## 8. Regla especial para fases de auditoría y migración (GOD 0, GOD 1, GOD 3)

En fases de auditoría, sincronización o reestructuración de metacampos:

> **No eliminar, renombrar ni migrar nada sin confirmación del Operador.**

- Auditar y reportar primero. Ejecutar después, con aprobación explícita.
- Un metacampo "sin uso aparente" puede estar en uso en otra plantilla, regla de descuento o app de terceros.
- Un template "redundante" puede ser el fallback de productos con configuración especial.
- Si algo parece muerto: se marca, se reporta y se espera instrucción.

---

## 9. Shopify CLI y SAFE_DEV

- Todo despliegue va al theme de pruebas **SAFE_DEV** (`202471244107`), nunca al live.
- Push a pruebas:
  ```
  shopify theme push --theme 202471244107 --nodelete
  ```
- Cuando haya cambios hechos desde Shopify Admin, traerlos solo en los archivos sensibles (snapshot), no machacar el repo:
  ```
  shopify theme pull --theme 202471244107 --only "config/settings_data.json" --only "templates/*.json" --nodelete
  ```
- El flujo por tarea es: ejecutar el cambio → `git diff` → revisar archivos sensibles si los hubiera → push a SAFE_DEV → validación visual y funcional → commit claro.

---

## 10. Reglas para CSS

- El destino es un único archivo `assets/dilmio.css`, bien ordenado por secciones comentadas (tokens primero, luego componentes).
- Los **tokens de diseño** van al principio, en `:root` (colores, radios, sombras, spacing, tipografía). Los componentes consumen esos tokens en vez de valores fijos, para que un nicho nuevo se logre cambiando solo los tokens.
- **No se centraliza** el CSS que dependa de variables que Shopify inyecta desde el theme editor (colores y fuentes que el usuario configura en el Admin). Eso se queda en `{% style %}` dentro del `.liquid` correspondiente, porque Shopify lo genera dinámicamente.
- No usar CSS modular (varios archivos) para este theme: un único archivo ordenado es más fácil de editar.
- No consolidar CSS de una sola vez en una tarea de otra fase: los cambios de CSS van dentro de la fase que les corresponde.

---

## 11. Reglas para JavaScript premium

- **Vanilla JS**, sin frameworks pesados ni dependencias nuevas.
- Código **robusto e instance-safe**: nada de asumir que solo hay una instancia de un componente en la página (countdown, trust bar, galería, etc. deben funcionar con varias instancias).
- Estados claros en las interacciones (p. ej. add-to-cart: normal / loading / success / error / sold-out). Evitar doble click.
- Variantes sincronizadas con precio, disponibilidad, imagen, sticky CTA y URL.
- **Cero errores de consola.**
- Respetar `prefers-reduced-motion`.
- Quitar JS inline solo cuando tenga sentido y dentro de la fase adecuada.

---

## 12. Formato obligatorio de respuesta tras cada cambio

Después de cada cambio, antes de dar la tarea por terminada, responde SIEMPRE con esta estructura:

- **Archivos modificados:** lista de rutas tocadas.
- **Qué cambió:** descripción breve y concreta del cambio.
- **Riesgos:** qué podría romperse o qué efectos colaterales vigilar.
- **Cómo probarlo:** pasos concretos de QA en SAFE_DEV (qué mirar, en qué dispositivos, qué casos límite: producto sin vídeo, sin reviews, sin metafields, agotado, con variantes, etc.).
- **¿Tocó archivos sensibles?:** sí/no. Si sí, señalar cuáles (`config/settings_data.json`, `config/settings_schema.json`, `templates/*.json`) de forma destacada y confirmar que hubo aprobación.

No se considera terminada ninguna tarea sin este reporte.
