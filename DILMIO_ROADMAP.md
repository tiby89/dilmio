# DILMIO ROADMAP VIVO

## Leyenda de estados

* [ ] Pendiente
* [~] En progreso
* [x] Hecho
* [-] Descartado / congelado
* [!] Bloqueado / depende de otra decisión

## Última actualización / roles

Última actualización: 2026-06-18

Responsable de estrategia:

* Usuario + ChatGPT

Ejecutor técnico:

* Claude Code

Fuente de historial técnico:

* GitHub commits

Fuente estratégica viva:

* DILMIO_ROADMAP.md

Regla:
Claude Code no debe decidir prioridades estratégicas sin aprobación. Antes de proponer, planificar o ejecutar una nueva fase GOD, debe revisar este archivo.

## Estado actual estable

Última fase cerrada:

* [x] GOD 13.3 — Unify product landing background and video system
* Commit: 80aba4f
* Estado: cerrado y pusheado a GitHub
* No publish
* DILMIO_DEV #201618030923 no tocado

Resumen GOD 13.3:

* Fondo product landing unificado en var(--dilmio-cream-bg)
* Vídeo editorial integrado con sección transparente y frame oscuro interno
* Detección automática portrait/landscape por JS
* Flash visual eliminado con is-detecting
* Cards demo/benefits unificadas con var(--dilmio-cream-section)

## Próxima acción aprobada

* [ ] GOD 13.4 — Product Landing Conversion Flow

Objetivo:
Optimizar el flujo de conversión de la product landing sin rediseño radical y sin romper lo aprobado en GOD 13.3.

## Prioridad inmediata

### [ ] GOD 13.4 — Product Landing Conversion Flow

Cambios previstos:

* [ ] Mantener hero actual con foto premium + galería + columna de compra
* [ ] Subir vídeo en uso justo después del hero
* [ ] Reducir aire muerto entre hero y vídeo
* [ ] Añadir labels "Antes" / "Después" al módulo before-after
* [ ] Sacar "Instrucciones de uso" del centro del embudo
* [ ] Colocar beneficios antes de opiniones
* [ ] Colocar opiniones antes de FAQ
* [ ] Añadir CTA final antes del footer
* [ ] Usar el mismo texto de botón que el CTA principal del hero
* [ ] No añadir precio tachado
* [ ] No añadir urgencia falsa
* [ ] No añadir bundle todavía
* [ ] No añadir lógica nueva de descuentos

Flujo objetivo:
Hero compra → vídeo uso → antes/después → beneficios → opiniones → FAQ → CTA final → footer

Criterio de cierre GOD 13.4:

* [ ] Push quirúrgico a SAFE_DEV/live #202471244107 confirmado
* [ ] Visual QA aprobado por el usuario
* [ ] Commit creado
* [ ] Push a GitHub confirmado
* [ ] config/settings_data.json no incluido
* [ ] .claude/ no incluido
* [ ] No publish
* [ ] DILMIO_DEV #201618030923 no tocado

## Roadmap por áreas

### Product Landing pendiente

* [ ] Consolidar product.dilmio como plantilla maestra clonable
* [ ] Mejorar estados cuando falten vídeo, before-after, FAQ o reseñas
* [ ] Revisar galería con vídeo como asset destacado sin sacrificar foto principal
* [ ] Mejorar CTA final premium
* [ ] Revisar sticky ATC mobile/desktop
* [ ] Mantener contenido por producto vía metafields
* [ ] QA con productos de distinta calidad visual
* [ ] Mejorar garantía/devolución como bloque visible de confianza
* [ ] Revisar si instrucciones deben quedar como bloque final, pestaña o microcopy

### Home pendiente

* [ ] Revisar si la home necesita una última fase de premiumización
* [ ] Mejorar módulos clonables por nicho
* [ ] Revisar brand story, FAQ, categorías y featured products
* [ ] Posible mejora de best sellers / editorial collection
* [ ] Mantener motion suave sin sobrecargar
* [ ] Evitar volver a meter bloques que generen demasiado espacio vacío

### Collection / catálogo pendiente

* [ ] Quick add premium
* [ ] Cards con microinteracciones
* [ ] Badges clonables
* [ ] Mejor presentación de precio/oferta solo si hay oferta real
* [ ] Predictive search premium
* [ ] Search results premium
* [ ] Grid mobile orientado a conversión
* [ ] Evitar estética AliExpress / DSERS

### Cart / checkout pre-checkout pendiente

* [ ] Cart drawer premium final
* [ ] Cross-sell ligero
* [ ] Mensaje de envío gratis más estratégico
* [ ] Garantía/devolución más visible
* [ ] Empty cart premium
* [ ] QA mobile completo
* [ ] Revisar sticky/cart mobile

### Header / Mobile menu / Search pendiente

* [ ] QA global del menú móvil premium
* [ ] Revisar desktop header
* [ ] Revisar search/account/cart icons
* [ ] Predictive search premium
* [ ] Revisar integración del header en PDP, home, collection y fallback product

### Sistema clonable / skins

* [ ] Skin Generator externo/local, no integrado en runtime Shopify
* [ ] Generar assets/dilmio-skin-[nicho].css
* [ ] Mantener catálogo pequeño de skins oficiales
* [ ] Activar skin en theme.liquid después de dilmio-tokens.css
* [ ] Mantener tokens limpios y clonables
* [ ] Documentar flujo para clonar otro nicho
* [ ] No conservar pruebas visuales fallidas

### Admin / operación

* [ ] Mantener admin limpio
* [ ] Evitar duplicar contenido global y contenido por producto
* [ ] Usar metafields/metaobjects cuando aporte claridad
* [ ] Crear checklist de carga de producto
* [ ] Crear checklist QA antes de publicar
* [ ] Mantener product landing admin simple
* [ ] Documentar qué campos son globales y cuáles son por producto

## Dependencias / bloqueos

* [!] Bundles dependen de decidir app/lógica real de descuento
* [!] Reviews reales dependen de elegir app de reviews
* [!] Precio tachado depende de tener precio anterior real
* [!] Cross-sell depende de catálogo real, no productos dummy
* [!] A/B testing depende de tener tráfico real
* [!] UGC/testimonios en vídeo depende de tener contenido real o estrategia de adquisición

## Inbox de ideas nuevas

Regla:
Las ideas nuevas se apuntan aquí primero si no está claro dónde van. No se implementan desde Inbox. Primero deben clasificarse como inmediata, pendiente, futura, bloqueada o descartada.

* [ ] Vacío por ahora

## Ideas futuras, no ahora

* [ ] Bundles
* [ ] Packs de 2 unidades
* [ ] Upsell/cross-sell
* [ ] Reviews reales mediante app
* [ ] Landing por nicho
* [ ] A/B testing
* [ ] Bloques de garantía fuerte
* [ ] Comparativas contra alternativa tradicional
* [ ] UGC/testimonios en vídeo
* [ ] Sistema avanzado de badges
* [ ] Secciones por temporada/campaña
* [ ] Herramienta tipo ThemePilot / LaunchGuard basada en este sistema de roadmap vivo, safety rails y prompts ejecutables

## Ideas descartadas o congeladas

* [-] Precio tachado si no hay precio anterior real
* [-] Urgencia falsa
* [-] Bundles sin lógica real de Shopify
* [-] Vídeo vertical sustituyendo la foto principal del hero
* [-] Integrar Skin Generator dentro del runtime Shopify
* [-] Mantener pruebas fallidas de skins
* [-] Convertir DILMIO en una tienda parcheada producto por producto

## Objetivos cerrados recientes

* [x] GOD 13.3 — Unify product landing background and video system — commit 80aba4f
* [x] GOD 13.2 — Polish product landing thumbnail indicator — commit 30b6127
* [x] GOD 13.1 — Remove redundant product landing blocks — commit 242e8eb
* [x] GOD 13.0 — Clean product landing admin architecture — commit 6bef091
* [x] GOD 12.8 — Integrate product landing hero header — commit c6651a4
* [x] GOD 12.6 — Polish product landing gallery and trust layout — commit 287dc29
* [x] GOD 12.5 — Add brand story and FAQ support to home — commit b8cfde2
* [x] GOD 12.4 — Compact editorial reveal banner — commit 1f540d6
* [x] GOD 12.3a — Polish desktop hero ambient — commit e7a2200
* [x] GOD 12.2 — Polish premium categories and reveal animation — commit cbbd09c
* [x] GOD 12.1 — Clean home trust and arrows — commit 7efe3fe
* [x] GOD 11.4b — Implement premium bottom-up mobile menu — commit 7816f59
* [x] GOD 11.3c — Implement editorial scroll reveal banner — commit 700556e
* [x] GOD 11.1 — Implement premium integrated home hero — commit c507c33

## Criterio general de cierre de fase

Una fase GOD solo se considera cerrada si cumple:

* [ ] Implementación terminada
* [ ] Push quirúrgico a SAFE_DEV/live #202471244107 confirmado cuando aplique
* [ ] Visual QA aprobado por el usuario
* [ ] Commit creado
* [ ] Push a GitHub confirmado
* [ ] config/settings_data.json no incluido
* [ ] .claude/ no incluido
* [ ] No publish salvo aprobación explícita
* [ ] DILMIO_DEV #201618030923 no tocado
* [ ] Roadmap actualizado si la fase cambia prioridades, cierra objetivos o descarta ideas

## Reglas de decisión

* Cada idea nueva debe clasificarse como: inmediata, pendiente, futura, bloqueada o descartada
* No implementar ideas futuras dentro de una fase actual sin aprobación explícita
* No tocar DILMIO_DEV #201618030923
* No publish sin aprobación explícita
* No incluir config/settings_data.json
* No incluir .claude/
* No commitear hasta aprobación visual
* Priorizar impacto visible premium sobre micro-limpiezas invisibles
* Mobile-first siempre
* Mantener DILMIO como theme premium clonable, no como tienda parcheada producto por producto
* Evitar urgencia falsa, descuentos falsos o patrones que bajen percepción premium
* No hacer fases enormes sin dividirlas en aprobaciones visuales claras
* No hacer microfases invisibles si no aportan impacto real

## Riesgos permanentes

* Convertir DILMIO en una tienda parcheada producto por producto
* Meter urgencia falsa y perder percepción premium
* Duplicar contenido entre Theme Editor y metafields
* Hacer fases demasiado pequeñas sin impacto visible
* Hacer fases demasiado grandes y difíciles de aprobar visualmente
* Romper mobile por optimizar desktop
* Depender demasiado de productos dummy
* Tocar settings_data.json por accidente
* Publicar sin aprobación explícita
* Tocar DILMIO_DEV #201618030923 por error
* Crear código visualmente bonito pero difícil de clonar por nicho
