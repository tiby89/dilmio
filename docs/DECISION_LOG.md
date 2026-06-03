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

---
Date: 2026-05-23
Decision: Phase 3 minimum technical landing built as 3 standalone files: dilmio-product-landing.liquid, dilmio-product.js, dilmio-product.css.
Reason: Self-contained, no dependency on Sense theme JS components. Fully reusable across products.
Risk: No blocking risk identified after static review and manual QA.
Expected result: Any product can be assigned via the customizer product picker and the landing works without code changes.
Status: completed
---

---
Date: 2026-05-23
Decision: Shopify testing target is DILMIO_DEV (theme ID 201618030923, unpublished). Never push to Sense live or DILMIO_BASE_CLEAN.
Reason: Isolate all development risk from the live store.
Risk: If the wrong theme ID is used in a push command, live theme could be overwritten.
Expected result: Live theme (Sense #201391046987) remains untouched at all times during development.
Status: active
---

---
Date: 2026-05-23
Decision: Phase 3.1 manual QA passed on DILMIO_DEV. All 8 test scenarios confirmed working.
Reason: Mandatory gate before Phase 4 per LANDING_TEST_CHECKLIST.md and CLAUDE.md.
Risk: None — all tests passed including sold-out, sticky sync, mobile and network inspection.
Expected result: Phase 4 Technical QA can begin once Operator approves.
Status: completed
---

---
Date: 2026-05-23
Decision: Phase 4 conversion structure built as flat section settings, not Shopify blocks.
Reason: Shopify blocks were confusing and too slow for DILMIO customizer workflow. Flat settings (benefit_1–4, faq_question/answer_1–3) are faster and simpler for the Operator.
Risk: Maximum of 4 benefits and 3 FAQ items without adding code. Sufficient for current phase.
Expected result: Hero, benefits, trust, and FAQ fully editable from section settings panel. No blocks panel required.
Status: completed
---

---
Date: 2026-05-23
Decision: Phase 4 visual QA passed on DILMIO_DEV. All conversion blocks confirmed working.
Reason: Mandatory gate before Phase 5.
Risk: None — hero, benefits, trust, FAQ, mobile layout, add to cart and sticky all confirmed working. No DILMIO JS errors.
Expected result: Phase 5 Design and trust can begin once Operator approves.
Status: completed
---

---
Date: 2026-05-23
Decision: Added optional demo video block to product landing using flat settings and HTML5 video tag.
Reason: Temporary placeholder media needed while finishing theme. Supplier and advertiser videos can be pasted as a direct MP4 URL without code changes.
Risk: Requires a direct HTTPS MP4 URL. YouTube, Vimeo, and social media URLs will not work with the video tag. HTTP URLs will be blocked by browser mixed-content policy.
Expected result: Operator can toggle the video block on/off and swap URLs per product via the customizer. Block is not final ad creative and not treated as UGC or customer proof.
Status: completed
---

---
Date: 2026-05-24
Decision: All future Shopify theme pushes must use --only and --nodelete. Full pushes are banned unless explicitly approved by the Operator.
Reason: A full `shopify theme push` to DILMIO_DEV overwrote templates/*.json and config/settings_data.json, destroying all manually configured customizer settings (homepage layout, product assignment, video block, text blocks). Settings cannot be recovered from git — they live only in the remote Shopify theme.
Risk: If --only is forgotten, the next full push will again wipe customizer settings silently.
Expected result: Only the files named in --only are uploaded. templates/*.json and config/settings_data.json are never touched unless the Operator explicitly approves. Customizer settings are preserved across all future pushes.
Status: active
---

---
Date: 2026-05-24
Decision: Product template product.dilmio.json created. Product is loaded from Shopify URL context on real product pages; product picker retained as fallback for non-product and demo pages.
Reason: Real product pages already have the product in URL context — forcing a product picker assignment for every product would be unnecessary and fragile. Fallback via product picker keeps demo and non-product pages functional.
Risk: Shopify Admin product template dropdown shows templates from the live theme only. Template "dilmio" will not appear in Admin for products until it is present in the live theme. Testing must be done via DILMIO_DEV theme editor.
Expected result: Any product URL viewed through DILMIO_DEV renders the DILMIO Product Landing without requiring manual product picker configuration per product.
Status: completed
---

---
Date: 2026-05-24
Decision: Phase 6A manual QA passed. Known limitation: product.dilmio.json shares section settings (copy, benefits, FAQ) across all products using the template. Unique per-product landing content is not yet solved.
Reason: Shopify JSON templates use section settings that are global to the template unless scoped with metafields or dynamic sources. No solution was built in Phase 6A — it was out of scope.
Risk: If two products use the dilmio template, they will show identical copy unless metafields are implemented. Not a blocker for single-product testing but will become one at scale.
Expected result: Future phase (to be defined by Operator) will implement product metafields or Shopify dynamic sources to allow unique landing content per product without code changes.
Status: resolved — solved in Phase 6B MVP
---

---
Date: 2026-05-24
Decision: Phase 6B MVP implemented. On real product pages (request.page_type == 'product'), all MVP content fields read from product metafields only. Section settings are fallback only for non-product/demo contexts. The default filter was removed to prevent bleed-through.
Reason: Multiple products using product.dilmio.json were inheriting shared section settings content, making every product appear to have the same landing text. Metafields must be the sole source of truth for product-specific content on product pages.
Risk: If a product has no metafields set, the MVP content fields render as blank on its product page. The Operator must populate metafields per product in Shopify Admin before the landing is meaningful. This is intentional behavior, not a bug.
Expected result: Each product URL shows only its own metafield content. No content bleed-through between products. Section settings remain the design tool for non-product contexts such as homepage or demo.
Status: completed
---

---
Date: 2026-05-24
Decision: Phase 6B MVP QA passed. Sticky behavior must be tested via the real product preview URL, not from inside the Shopify theme editor.
Reason: The theme editor renders the storefront inside an iframe where IntersectionObserver scroll behavior differs from a real storefront page. Sticky appeared broken in the editor but worked correctly at the real preview URL.
Risk: Future developers may incorrectly declare sticky broken when testing from the theme editor. Sticky must always be validated at the real preview URL.
Expected result: Sticky confirmed functional on real product URL with DILMIO_DEV preview (theme ID 201618030923).
Status: completed
---

---
Date: 2026-05-25
Decision: Phase 6C (Home + catalog basic ecommerce structure) completed entirely in Shopify Admin / customizer. No theme files changed. No push performed.
Reason: Homepage layout, navigation menus, collections, and legal pages are Shopify Admin configuration — not theme code. Pushing templates/*.json or config/settings_data.json would overwrite these settings silently (precedent: incident 2026-05-24).
Risk: If a full theme push is run in the future, all Admin-configured settings (menus, homepage featured collection, page assignments) will be overwritten silently. The --only + --nodelete rule is mandatory.
Expected result: Store has a functional homepage, curated Catálogo collection, header/footer navigation, Tracking page, Contact page, and all legal policy pages. /collections/all is not linked publicly. Product page renders DILMIO landing via DILMIO_DEV.
Status: completed
---

---
Date: 2026-05-25
Decision: templates/*.json and config/settings_data.json must never be pushed unless the Operator explicitly approves each file by name.
Reason: These files contain the Shopify customizer state (menus, homepage sections, product assignments). They are managed remotely in Shopify Admin, not in git. Pushing them overwrites the remote state with whatever the local copy says, which may be stale or empty.
Risk: Silent data loss of all customizer configuration with every full push.
Expected result: All future push commands use --only targeting only liquid/CSS/JS files. templates/*.json and config/settings_data.json are treated as read-only from Claude Code's perspective.
Status: active
---

---
Date: 2026-05-25
Decision: "Home + catalog basic ecommerce structure" reclassified from Phase 7 to Phase 6C.
Reason: CLAUDE.md defines Phase 7 as "First real product" (product selection, margin validation, supplier validation, pack potential). The home/catalog/menu work is store infrastructure, not product validation. Labeling it Phase 7 created a false signal that the product step was complete.
Risk: git commit c26a9d0 still says "docs: close Phase 7 ecommerce structure" — this cannot be changed. The docs are now correct; the commit message is a known historical discrepancy.
Expected result: THEME_STATUS.md and DECISION_LOG.md consistently name the phase 6C. Phase 7 shows as Pending. Phase 8 shows as blocked until Phase 7 is complete. No false sense of progress on product validation.
Status: active
---
---
Date: 2026-05-29
Decision: DILMIO_DEV (theme ID 201618030923) es ahora el tema LIVE/publicado de la tienda. Sustituye al estado anterior donde el live era Sense (#201391046987) y DILMIO_DEV era unpublished.
Reason: El Operator publicó DILMIO_DEV intencionalmente. La tienda real ahora sirve el theme de desarrollo DILMIO.
Risk: Los push a un tema live requieren confirmación TTY interactiva — Claude Code no puede ejecutarlos de forma no interactiva. Todos los push a DILMIO_DEV deben hacerse manualmente desde la terminal del Operator (PowerShell), confirmando con Y. La regla --only + --nodelete sigue siendo obligatoria para no sobreescribir templates/*.json ni config/settings_data.json.
Expected result: Cambios visibles directamente en la tienda live tras cada push manual. Sense (#201391046987) queda como borrador de respaldo.
Status: active
---

---
Date: 2026-05-29
Decision: Reformulada la política de reviews y social proof (DILMIO_OS sección 12 y CLAUDE.md Phase 6). Se permite construir infraestructura de reviews/etiquetas en cualquier fase y mostrar reviews importadas (ej. AliExpress vía app tipo Loox/Judge.me) siempre que se marque el origen de forma visible.
Reason: La regla anterior bloqueaba trabajo legítimo (construir el sistema, etiquetas editoriales honestas) al mezclar "construir infraestructura" con "mostrar datos falsos". Sin prueba social la conversión sufre. Importar reviews con origen marcado es práctica legal y estándar del sector.
Risk: Directiva Omnibus (España/UE): las reviews importadas deben marcarse como valoración del producto/fabricante, nunca presentarse como experiencia de compra en DILMIO. Mostrarlas como propias sin marcar origen es práctica comercial engañosa y sancionable. La regla nueva conserva esta condición como obligatoria.
Expected result: DILMIO puede mostrar prueba social desde el primer producto, de forma legal, sin frenar el desarrollo del theme. Reviews propias se añaden cuando haya ventas reales.
Status: active
---

---
Date: 2026-05-29
Decision: Añadida sección 0 "Contexto estratégico maestro" a DILMIO_OS, con prioridad sobre el resto del documento. El theme es una plantilla maestra reutilizable; la fase actual prioriza dejarlo todo 10/10 (diseño, reviews, tracking, medición) antes de buscar producto o lanzar tráfico.
Reason: El theme se reutilizará en múltiples proyectos/nichos. La inversión en pulir la plantilla se amortiza en cada proyecto futuro. Evita que el sistema o los agentes presionen para vender antes de tiempo.
Risk: Riesgo de perfeccionismo prolongado. Mitigado porque el salto a producto lo decide el Operator explícitamente.
Expected result: Plantilla maestra completa y reutilizable antes de salir al mercado. Chats futuros entienden el contexto sin repetición.
Status: active
---

---
Date: 2026-06-01
Decision: Integrar el seguimiento de envíos del cliente con la app 17TRACK (descartada Track123). La página de tracking vive en /apps/17track, generada por la app, no como página del theme.
Reason: 17TRACK ofrece 200 envíos/mes en plan gratuito (vs 50 de Track123), mayor base de datos de carriers chinos, portal de devoluciones incluido y modo "ocultar origen China" — mejor encaje para dropshipping en fase de test. Usar /apps/17track evita crear y mantener una sección de theme propia y aprovecha la personalización del panel de la app.
Risk: La página /apps/17track es externa al theme: no hereda el degradado de fondo ni se puede estilar con el CSS global del theme de forma fiable. El estilo se controla desde el panel de 17TRACK (Estilo + CSS personalizado). Si se desinstala la app, los enlaces del menú a /apps/17track quedan rotos y hay que repuntarlos.
Expected result: Cliente puede rastrear su pedido en español, con estilo coherente DILMIO (verde #3E4A2D, Poppins, crema), desde los menús de header y footer. Sin tocar archivos del theme ni git.
Status: active
---

---
Date: 2026-06-01
Decision: Intento de fix del espacio vacío en /apps/17track (desktop) revertido. El espacio venía del CSS Grid del body en layout/theme.liquid (grid-template-rows con 1fr en <main>, que estira el contenido en páginas cortas). Se aplicó una clase condicional body.page--tracking que cambiaba el grid a "auto auto auto auto" solo en esa página (commit 58f4131), pero el Operator no aprobó el resultado y se revirtió.
Reason: El fix funcionaba técnicamente (espacio eliminado, footer pegado al widget), pero el resultado visual no convenció al Operator. Se priorizó no dejar un cambio no deseado en una plantilla maestra reutilizable.
Risk: El espacio vacío en desktop persiste en /apps/17track. Es cosmético, solo desktop, página de baja visita (post-compra). Causa raíz identificada: el 1fr del grid del body. Cualquier fix futuro debe ser scoped a esa página para no afectar otras páginas cortas.
Expected result: layout/theme.liquid queda en su estado original. Espacio vacío aceptado como deuda cosmética menor.
Status: reversed
---

---
Date: 2026-06-01
Decision: Sistema nativo de reviews curadas implementado con Shopify Metaobjects (no metafields planos). Metaobject dilmio_review + metafield de producto custom.dilmio_reviews (tipo list.metaobject_reference). Nueva sección sections/dilmio-reviews.liquid + assets/dilmio-reviews.css. Sin JavaScript, sin apps externas.
Reason: El componente se reutilizará en futuros proyectos/nichos. Metaobjects escalan mejor que 12+ metafields planos por producto, mantienen datos separados del diseño y son más limpios en Admin. En páginas de producto la sección lee SIEMPRE el product de la URL (request.page_type == 'product'); el product picker queda solo como fallback para demos/no-producto — mismo patrón anti-bleed-through de Phase 6B.
Risk: El metafield debe crearse como Lista (list.metaobject_reference), no como referencia única — una referencia única no es iterable y rompe el render (incidente resuelto en esta sesión). La clave debe ser exactamente custom.dilmio_reviews (plural). source_note existe en el metaobject pero NO se renderiza (nota interna). review_video_url se renderiza solo como enlace de texto, sin embeds. Compliance: solo reviews reales/verificables, sin badge 'compra verificada', sin puntuación global inventada (DILMIO_OS sección 12 + Directiva Omnibus).
Expected result: Cada producto muestra solo sus propias reviews (máx 3). Producto sin reviews oculta la sección por completo en web publicada (aviso de ayuda solo en editor). Móvil: scroll horizontal con scroll-snap. Desktop: grid de 3 columnas. Commits: 80faf02 (sección+css), 36f0888 (fix bleed-through URL product).
Status: completed
---

---
Date: 2026-06-03
Decision: Resincronizar THEME_STATUS.md con git. Fase real Phase 6 (6B MVP, 6C home, 6D marca, reviews), HEAD 36f0888 — no "Phase 7 completada / e2221b0".
Reason: El status quedó congelado en e2221b0 mientras git avanzó 22 commits. El commit 3224d5e ya reclasificó el home como 6C, contradiciendo el "Phase 7 completada".
Risk: Una sesión futura se reubica con datos falsos y repite trabajo o se salta QA. Agravado porque Claude Desktop no ve las sesiones de Claude Code.
Expected result: THEME_STATUS.md refleja HEAD, fase y archivos reales. Se aplica la regla 10 de CLAUDE.md: actualizar THEME_STATUS.md en el MISMO commit que el código.
Status: active
---

---
Date: 2026-06-03
Decision: Registrar formalmente que DILMIO_DEV (#201618030923) es el theme LIVE/publicado desde 2026-05-29. Sense (#201391046987) queda unpublished. Toda referencia previa a "live theme: Sense — untouched" o "DILMIO_DEV unpublished" queda obsoleta.
Reason: El cambio a live ocurrió el 2026-05-29 pero solo vivía como entrada sin commitear en el working tree. CLAUDE.md y entradas previas del log siguen describiendo el estado invertido, lo que engaña a futuras sesiones.
Risk: Cada push va ahora directo a producción. --only --nodelete deja de ser prudencia y pasa a ser crítico. Un push erróneo rompe la tienda en vivo, no un theme de pruebas. Sin backup fiable no hay vía de restauración.
Expected result: El estado live/unpublished queda registrado y consolidado. Pendiente (no en esta entrada): actualizar CLAUDE.md y los bloques de THEME_STATUS.md que aún digan "live = Sense".
Status: active
---
