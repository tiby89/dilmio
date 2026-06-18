# CLAUDE.md — Reglas del proyecto DILMIO GOD

Este archivo es la barandilla de seguridad para Claude Code.
Léelo entero antes de tocar una sola línea del theme.
Si una instrucción de una tarea entra en conflicto con este archivo, **este archivo gana**, y debes avisarlo antes de continuar.

> **Estado del documento:** actualizado 14-JUN-2026 sobre el export `theme_export__dilmio-com-safe_dev__14JUN2026-0517pm`. Refleja la arquitectura CSS y el flujo de trabajo reales, no la intención original.

---

## 0. Verdad operativa actual (leer primero)

- **Se trabaja directamente sobre la LIVE.** No hay productos reales que vender todavía, así que no hay riesgo de romper ventas. El riesgo real que queda es **perder trabajo**, no perder pedidos.
- **El theme operativo y live es `202471244107`.** El nombre interno "SAFE_DEV" es engañoso: este theme **está sirviendo en producción ahora mismo**. Tratarlo como tal.
- **Backup antes de cada fase es obligatorio.** El Operador guarda backups manuales de cada paso. Ningún cambio empieza sin que exista un backup del estado anterior.
- **Backup theme de referencia:** `DILMIO_DEV #201618030923`. **No se toca jamás**, bajo ninguna circunstancia.
- Como se trabaja en live, la regla dura que protege el trabajo es: **push siempre quirúrgico con `--only`** (ver sección 9). Nunca un push genérico que pueda machacar archivos no tocados.

---

## 1. Objetivo de DILMIO GOD

DILMIO es una **theme maestra ecommerce premium y clonable**, basada en el theme "Sense" de Shopify, orientada a convertir en móvil con una experiencia de producto premium.

El objetivo del plan GOD es evolucionar el theme hacia una arquitectura robusta, limpia y reutilizable en distintos nichos —cambiando colores, logo, textos globales y estilo visual mediante **tokens y skins**— **sin rehacer la arquitectura**.

El theme no es una sola tienda: es una base replicable. Todo lo que se construya debe poder clonarse a un nicho nuevo sin reescribir componentes.

El estándar no es "que se vea limpio". Es: **apariencia premium real, jerarquía editorial, confianza, conversión, y cero estética AliExpress/dropshipping barato.**

---

## 2. Entorno fijo

```text
Repo local:        D:\DILMIO
Theme local:       D:\DILMIO\theme\sense-clean
GitHub:            https://github.com/tiby89/dilmio.git
Rama:              master
Theme live/operativo: 202471244107   (es la LIVE — ver sección 0)
Backup intocable:  DILMIO_DEV #201618030923
```

---

## 3. Decisiones aprobadas

Fijadas. No se debaten por tarea; forman el marco del plan GOD.

1. Una sola plantilla de producto maestra: **`product.dilmio.json`** es la base real del producto GOD. Editable solo bajo la excepción controlada de la sección 7.
2. `product.json` queda como backup técnico, **no como flujo operativo**.
3. La página de producto se adapta al contenido disponible: basic / premium / flagship.
4. DSERS es **materia prima**, no producto final.
5. Los productos DSERS no se publican directamente.
6. La descripción DSERS no debe dominar la página.
7. Debe existir un **fallback compacto anti-DSERS** para productos incompletos.
8. Un producto importado nunca debe parecer AliExpress/dropshipping barato.
9. Evolucionar hacia Online Store 2.0, dynamic sources y metaobjects donde tenga sentido.
10. Metacampos ordenados y reducidos: admin limpio y externalizable.
11. **Design system clonable vía tokens + skins** (ya implementado, ver sección 10).
12. Catálogo hacia un collection grid premium.
13. Carrito lateral hacia un cart drawer premium orientado a conversión.
14. Home modular, premium y adaptable a nichos.
15. Páginas auxiliares coherentes con la marca.
16. Todo se valida primero en **móvil**.
17. El theme `202471244107` es el live operativo; se trabaja sobre él con backup previo (sección 0).
18. No se hace **publish** de ningún otro theme salvo aprobación literal del Operador.

---

## 4. Fases GOD

El trabajo sigue este orden. No se adelanta trabajo de una fase posterior dentro de una anterior.

- **GOD 0** — Sincronización y fuente de verdad. Local, GitHub y theme live alineados; auditar qué existe realmente, no trabajar sobre exports viejos.
- **GOD 1** — Producto único maestro. `product.dilmio.json` como base real.
- **GOD 2** — Fallback compacto anti-DSERS.
- **GOD 3** — Admin limpio: metacampos, dynamic sources, metaobjects.
- **GOD 4** — Design system clonable (tokens + skins). *Base ya construida; ver sección 10.*
- **GOD 5** — Collection grid premium.
- **GOD 6** — Cart drawer premium.
- **GOD 7** — Home premium modular.
- **GOD 8** — Páginas auxiliares coherentes.
- **GOD 9** — QA móvil + guía operativa mínima para subir productos.

### GOD 7.0 — Premium Visual System Audit (paso transversal, modo SOLO LECTURA)

Antes de seguir tocando, hay una auditoría transversal pendiente que **no modifica nada**:

- **Modo:** solo lectura. No se edita, no se empuja, no se commitea.
- **Alcance:** home, collection, product, header/footer y CSS actual.
- **Entrega esperada:** por qué la home no parece premium; qué es genérico; qué conservar; qué rehacer; qué archivos mandan de verdad; propuesta visual premium; revisión de la arquitectura CSS; plan GOD 7.1; riesgos; rollback; confirmación de que no se modificó nada.

GOD 7.0 (audit) es un paso previo a la fase GOD 7 (home modular); no es la misma cosa. Sirve para dirigir el resto.

Trabajas siempre dentro de la fase activa. Si una tarea parece requerir saltar de fase, **no lo hagas: detente y avísalo.**

---

## 5. Estado actual del código (contexto vivo)

### Skin activa
`layout/theme.liquid` carga, en este orden:
```liquid
{{ 'base.css' | asset_url | stylesheet_tag }}
{{ 'dilmio-tokens.css' | asset_url | stylesheet_tag }}
{{ 'dilmio-skin-monolux.css' | asset_url | stylesheet_tag }}
```
El servidor live (`202471244107`) también carga `dilmio-skin-monolux.css`.
**Monolux es una prueba técnica RADICAL (monocromo grafito+crema), no el diseño final aprobado.** Su propio archivo declara un bloque `[4] OVERRIDES DE TEST` que debe eliminarse al cerrar la fase de skins.

### Cambios técnicos subidos pero NO commiteados (GOD 6.4)
Subidos al theme live, sin commit en Git ni push a GitHub:
- Skins/tokenización: `dilmio-skin-monolux.css`, `dilmio-skin-natural.css`, `dilmio-skin-template.css`, `dilmio-narrative.css`, `dilmio-reviews.css`, `dilmio-brand-home.css`, `section-email-signup-banner.css`
- Trust bar tokenizada: `sections/dilmio-trust-bar.liquid`

**Pendiente:** decidir qué entra antes de commitear GOD 6.4.

### Trust bar
La barra "Envío gratis a toda España" **no es un color scheme de Shopify**; es la sección custom `sections/dilmio-trust-bar.liquid`. Pasó de `background-color: #3E4A2D` a `background-color: var(--dilmio-primary, #3E4A2D)` para seguir la skin activa.

### Tracking / 17TRACK
La página usa `templates/page.order-tracking.json` + `sections/main-page.liquid`, pero **el formulario lo genera 17TRACK (app externa)** — clases `ant-btn`, `ClassicFormTab`, etc. El verde venía del panel de 17TRACK, no del theme. **No parchear tracking desde el theme** salvo excepción justificada; primero revisar la config de 17TRACK.

### Estados estables de referencia en GitHub
```text
GOD 5.3b — commit 2c0a2fd — Polish collection shell styling
GOD 6.1  — commit d03af65 — Consolidate DILMIO color tokens
```
Tras GOD 6.1 hubo experimentos de skin/paleta; no todos están commiteados.

---

## 6. Reglas duras de seguridad

- **No tocar `DILMIO_DEV #201618030923`** nunca.
- **No hacer `publish`** de ningún theme salvo aprobación literal del Operador.
- **Backup previo** a cada fase (lo gestiona el Operador, pero confírmalo antes de cambios grandes).
- Cambios **pequeños y atómicos**: un cambio coherente por commit.
- **Una tarea cada vez** (sección 8).
- **No scope creep** (sección 9): si descubres otro problema, anótalo, no lo arregles dentro de la tarea actual.
- **No inventar metafields.** Usar solo los que existen. Si falta uno, avisar; no crearlo.
- **No hardcodear contenido de nicho** si puede ser configurable vía settings/metafields/tokens.
- Si algo no se entiende, **no se borra**: se marca y se pregunta. Mucho "código muerto" maneja un caso límite (variante, breakpoint, sold-out).
- Mostrar **diff, riesgos y QA** antes de dar una tarea por terminada (sección 13).

---

## 7. Archivos protegidos (no tocar ni incluir sin aprobación explícita)

No se modifican ni se incluyen en un push/commit sin que el Operador lo apruebe en esa misma tarea:

```text
config/settings_data.json      ← suele aparecer modificado local preexistente. NO incluir.
config/settings_schema.json
templates/*.json
.claude/                        ← suele aparecer untracked. NO incluir nunca.
backups/
zips/
DILMIO_DEV (backup theme)
archivos untracked no relacionados
```

Si una tarea exige tocar uno de estos, **párate antes**, explica por qué y qué cambiarías, y espera aprobación. Si un cambio los modifica de forma colateral, señálalo de forma destacada en el reporte (sección 13).

### Plantillas JSON protegidas

Todos los archivos `templates/*.json` son sensibles y requieren aprobación explícita antes de modificarse.

Excepción controlada:
- `templates/product.dilmio.json` es la plantilla maestra de producto DILMIO.
- Puede modificarse únicamente cuando la fase activa afecte directamente a la página de producto.
- Antes de guardar o commitear, Claude debe mostrar:
  1. objetivo del cambio,
  2. bloques afectados,
  3. diff previsto o diff real,
  4. riesgo visual/operativo.
- Nunca debe tocarse junto con cambios no relacionados de CSS, JS, settings o secciones salvo aprobación expresa.

---

## 8. Una tarea cada vez

Solo una tarea activa, ligada a una issue concreta de GitHub.
- No empezar una segunda hasta cerrar la actual.
- No agrupar varias issues "ya que estoy".
- El alcance es exactamente lo que dice la issue, ni más ni menos.

---

## 9. Shopify CLI — push quirúrgico obligatorio

El theme `202471244107` es el live operativo (sección 0). Por eso **todo push es quirúrgico**, nunca genérico.

**Reglas absolutas:**
- Usar siempre explícitamente `--theme 202471244107`. **Nunca** `theme current`.
- **Nunca** `publish` salvo aprobación literal.
- **Nunca** un push sin `--only`. No se permite push genérico.

**Push de archivos (el único permitido):**
```bash
shopify theme push --theme 202471244107 --only <archivo> --nodelete --allow-live
```
Repetir `--only` por cada archivo que entra. Listar siempre los archivos antes de empujar.

**Traer cambios hechos desde Shopify Admin (snapshot, sin machacar repo):**
```bash
shopify theme pull --theme 202471244107 --only "config/settings_data.json" --only "templates/*.json" --nodelete
```

**Flujo por tarea:**
1. `git status --short`
2. Ejecutar el cambio
3. `git diff`
4. Revisar que no entran archivos protegidos (sección 7)
5. Push quirúrgico con `--only`
6. QA visual y funcional en el live
7. Commit claro **solo tras aprobación del Operador**

---

## 10. Reglas para CSS — arquitectura real (tokens → skin → módulos)

> **La regla vieja de "un único `dilmio.css`" queda derogada.** No describe la realidad. La arquitectura actual es de **tres capas** y es coherente, clonable y la oficial a partir de ahora.

**Capa 1 — Tokens (`assets/dilmio-tokens.css`)**
Fuente única de verdad. Carga primero, en `theme.liquid`. Define en `:root` todos los colores, radios, sombras y spacing como variables `--dilmio-*`. Cambiar un nicho empieza aquí.

**Capa 2 — Skin (`assets/dilmio-skin-<name>.css`)**
Una skin activa a la vez, cargada **después** de tokens en `theme.liquid` para ganar en la cascada. Cada skin **redefine variables** (`monolux`, `natural`, `template`, `current` ≈ 105 vars cada una) y casi no lleva estructura. **La skin es la última capa de paleta: no debe cargar trabajo estructural.**
- Activa hoy: `dilmio-skin-monolux.css` (test radical, no final).
- Deuda conocida: el bloque `[4] OVERRIDES DE TEST` de monolux es temporal y debe eliminarse al cerrar la fase de skins.

**Capa 3 — Módulos por sección**
Cada sección carga su propio CSS desde su `.liquid`, no desde `theme.liquid`:
```text
dilmio-brand-home.css   → sections/dilmio-brand-home.liquid (home)
dilmio-product.css      → sections/dilmio-product-landing.liquid
dilmio-collection.css   → main-collection-product-grid / main-search
dilmio-narrative.css    → details / problem-solution / cta-final / before-after
dilmio-reviews.css      → sections/dilmio-reviews.liquid
dilmio-header.css        → sections/header.liquid
dilmio-footer.css        → sections/footer.liquid
dilmio-card-rating.css   → card-product / brand-home
```

**Principios:**
- Los componentes **consumen tokens**, no valores fijos. Un nicho nuevo se logra cambiando tokens + skin, sin tocar estructura.
- **No** se centraliza el CSS que dependa de variables que Shopify inyecta desde el theme editor (colores/fuentes configurables en Admin): eso se queda en `{% style %}` dentro del `.liquid`, porque Shopify lo genera dinámicamente.
- **No** colapsar todo en un único archivo monstruo ni dispersar en 20 archivos sin criterio. La estructura de tres capas es la oficial.
- Los cambios de CSS van **dentro de la fase que les corresponde**, no en consolidaciones sueltas de otra fase.
- Cualquier replanteo de esta arquitectura sale de la auditoría GOD 7.0, no de parches por tarea.

---

## 11. Reglas para JavaScript premium

- **Vanilla JS**, sin frameworks ni dependencias nuevas.
- **Instance-safe:** nada de asumir una sola instancia (countdown, trust bar, galería… deben funcionar con varias).
- Estados claros (add-to-cart: normal / loading / success / error / sold-out). Evitar doble click.
- Variantes sincronizadas con precio, disponibilidad, imagen, sticky CTA y URL.
- **Cero errores de consola.**
- Respetar `prefers-reduced-motion`.
- Quitar JS inline solo cuando tenga sentido y en la fase adecuada.

---

## 12. Reglas de diagnóstico y honestidad

**Si algo se ve mal, comprobar en orden antes de proponer solución:**
1. ¿Viene del theme (Liquid)?
2. ¿Viene de Liquid inline / `{% style %}`?
3. ¿Viene de un CSS asset?
4. ¿Viene de contenido del Admin (settings/metafields)?
5. ¿Viene de una app externa (p. ej. 17TRACK)?
6. Solo entonces, proponer solución. **No asumir.**

**Apps externas:** no asumir que es bug del theme; revisar el panel de la app. No meter `!important` salvo que sea inevitable, y si se usa, **documentarlo como excepción**.

**Honestidad (regla dura).** Claude Code **no inventa**:
- outputs de Shopify CLI
- URLs de preview
- confirmaciones de push
- estados de Git
- cambios que no se ejecutaron

Si no puede ejecutar algo, **lo dice**. Nunca simula un resultado.

---

## 13. Formato obligatorio de cierre tras cada cambio

Antes de dar una tarea por terminada, responder SIEMPRE con esta estructura:

- **Archivos modificados:** rutas exactas tocadas.
- **Qué cambió:** descripción breve y concreta.
- **Riesgos:** qué podría romperse o qué vigilar.
- **Cómo probarlo:** QA concreto en el live (qué mirar, qué dispositivos, casos límite: sin vídeo, sin reviews, sin metafields, agotado, con variantes…). Móvil primero.
- **Git:** hash del commit si lo hubo; archivos incluidos.
- **Confirmaciones:** que NO se incluyó `config/settings_data.json`; que NO se incluyó `.claude/`; que NO hubo `publish`; que NO se tocó `DILMIO_DEV`.
- **¿Tocó archivos protegidos?** sí/no. Si sí, señalarlos de forma destacada y confirmar que hubo aprobación.

Ninguna tarea se considera terminada sin este reporte.

---

## 14. Roadmap vivo del proyecto

La fuente estratégica viva del proyecto es `DILMIO_ROADMAP.md` en la raíz del repo.

Antes de proponer, planificar o ejecutar nuevas fases GOD, Claude Code debe revisar `DILMIO_ROADMAP.md`.

`CLAUDE.md` contiene reglas operativas, safety rails y contexto técnico.

`DILMIO_ROADMAP.md` contiene prioridades, pendientes, ideas futuras, bloqueos, descartes y objetivos cerrados.

No duplicar todo el roadmap dentro de `CLAUDE.md` para evitar contradicciones.

Si una idea nueva aparece durante el trabajo, debe clasificarse en `DILMIO_ROADMAP.md` como inmediata, pendiente, futura, bloqueada o descartada antes de ejecutarla.

Cuando una fase se cierre y se pushee a GitHub, actualizar `DILMIO_ROADMAP.md` marcando la fase como `[x]`, moviendo lo que corresponda a objetivos cerrados y actualizando la próxima acción aprobada.
