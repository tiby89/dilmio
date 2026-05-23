\# DILMIO OPERATING SYSTEM

Versión: 1.0    
Estado: Validación inicial ecommerce / dropshipping    
Dominio: dilmio.com    
Plataforma: Shopify    
Theme base: Sense modificado  

\---

\#\# 1\. Objetivo del proyecto

Crear un ecommerce legal, rentable y escalable basado en testeo rápido de productos, empezando con dropshipping o fulfillment ligero, y evolucionando hacia marca propia/importación cuando haya validación real.

Objetivo inicial:  
\- lanzar tests reales lo antes posible;  
\- validar productos con tráfico de pago;  
\- minimizar apps y costes innecesarios;  
\- crear una theme modular reutilizable para múltiples productos.

\---

\#\# 2\. Filosofía de trabajo

\- Priorizar ejecución sobre perfeccionismo.  
\- No construir infraestructura compleja antes de necesitarla.  
\- Sí construir componentes mínimos reutilizables si reducen fricción en futuros tests.  
\- No depender de apps externas salvo que ahorren mucho tiempo o sean críticas.  
\- Todo cambio técnico debe probarse antes de lanzar tráfico.  
\- La decisión final la dictan los datos: clicks, Add To Cart, compras, Cost Per Acquisition (CPA), margen.

\---

\#\# 3\. Herramientas principales

\#\#\# ChatGPT Proyecto DILMIO  
Rol: cerebro central, estrategia, auditoría, prompts y decisiones.

\#\#\# Claude  
Rol: segunda opinión, contraste de razonamiento y revisión de planes.

\#\#\# Claude Code  
Rol: ejecución técnica sobre archivos reales del theme.

\#\#\# Shopify  
Rol: tienda real, producto, carrito, checkout y landing.

\#\#\# Google Sheets / Docs  
Rol: base de datos viva de productos, proveedores, métricas y aprendizajes.

\---

\#\# 4\. Roles internos

\#\#\# Dilmio Operator  
Coordina el sistema y decide el siguiente paso.

\#\#\# Theme Engineer  
Shopify, Liquid, JavaScript, variantes, carrito, reviews nativas.

\#\#\# Product Hunter  
Busca y filtra productos.

\#\#\# Offer Strategist  
Define oferta, precio, packs, garantías, objeciones y estructura de landing.

\#\#\# Creative Director  
Crea hooks, guiones, UGC, Meta Ads, TikTok/Reels.

\#\#\# Supplier Manager  
Valida proveedores, stock, tiempos, costes y muestras.

\#\#\# Ads Analyst  
Analiza Cost Per Mille (CPM), Click-Through Rate (CTR), Cost Per Click (CPC), Cost Per Acquisition (CPA), Add To Cart (ATC), Conversion Rate (CVR) y rentabilidad.

\#\#\# Compliance Guard  
Revisa claims, productos sensibles, reseñas incentivadas, garantías, devoluciones, privacidad y confianza.

\---

\#\# 5\. Criterios de producto

Un producto es candidato si:  
\- resuelve un problema claro o tiene demostración visual fuerte;  
\- puede explicarse en vídeo en menos de 5 segundos;  
\- tiene margen suficiente después de producto, envío, pasarela, impuestos y ads;  
\- no es pesado, frágil o complejo de devolver;  
\- no está en categoría legalmente problemática;  
\- no depende de claims médicos, milagrosos o difíciles de probar;  
\- tiene potencial para packs o aumento del Average Order Value (AOV);  
\- puede venderse en España y/o Rumanía sin complicaciones excesivas.

Evitar inicialmente:  
\- electrónica compleja;  
\- productos sanitarios o de salud delicados;  
\- cosmética con claims fuertes;  
\- productos de bebés con riesgo de seguridad;  
\- productos muy pesados;  
\- productos con alta tasa de rotura;  
\- productos saturados sin ángulo diferencial.

\---

\#\# 6\. Criterios de proveedor

Evaluar:  
\- coste unitario;  
\- coste de envío;  
\- plazo real de entrega;  
\- stock disponible;  
\- posibilidad de muestra;  
\- fiabilidad;  
\- comunicación;  
\- fotos/vídeos disponibles;  
\- opción de branding futuro;  
\- devoluciones;  
\- escalabilidad.

Fuentes posibles:  
\- AliExpress;  
\- DSers;  
\- CJ Dropshipping;  
\- Zendrop;  
\- Alibaba EU Local Stock;  
\- proveedor directo;  
\- TikTok Shop;  
\- Amazon como benchmark, no como proveedor principal.

No fijar una sola fuente hasta validar producto.

\---

\#\# 7\. Reglas de oferta

Cada producto debe tener:  
\- propuesta de valor clara;  
\- beneficio principal;  
\- 3-5 beneficios secundarios;  
\- objeciones previstas;  
\- precio base;  
\- pack recomendado;  
\- garantía;  
\- política de envío clara;  
\- preguntas frecuentes;  
\- prueba social si existe.

Packs posibles:  
\- 1 unidad;  
\- 2 unidades con descuento;  
\- 3 unidades o pack familiar;  
\- pack visual;  
\- pack como cantidad;  
\- pack como variante real en Shopify.

\---

\#\# 8\. Reglas técnicas del theme

Theme base: Sense modificado.

Principios:  
\- No hardcodear productos concretos.  
\- Usar product picker en schema.  
\- Leer producto desde section.settings.product.  
\- Renderizar variantes desde product.options\_with\_values.  
\- No asumir que option1 es Color ni option2 es Pack.  
\- Añadir al carrito siempre con variant.id.  
\- No añadir por handle, título ni texto.  
\- El sticky y el offer block deben sincronizarse por productId y variantId.  
\- Si los productos no coinciden, cada sección debe funcionar de forma independiente.  
\- Si no hay producto seleccionado, degradar sin romper.  
\- Si variante agotada, CTA desactivado.  
\- Si combinación inválida, CTA desactivado.  
\- Si /cart/add.js falla, reactivar botón y mostrar error.  
\- No tocar múltiples archivos sin necesidad.  
\- Claude Code debe trabajar por pasos y detenerse tras cada fase.

\---

\#\# 9\. Estado actual del theme

Componentes actuales:  
\- offer-block-dilmio.liquid  
\- sticky-product-card-dilmio.liquid  
\- sticky sincronizado con variantes  
\- producto dinámico mediante product picker  
\- packs:  
  \- variante real;  
  \- cantidad;  
  \- visual  
\- carrito vía /cart/add.js con fallback a /cart  
\- checklist de pruebas manuales creada

Pendiente:  
\- pruebas reales en Shopify;  
\- sistema de reviews manuales con fotos/vídeos;  
\- optimización mobile;  
\- limpieza final.

\---

\#\# 10\. Checklist técnica antes de lanzar ads

No lanzar tráfico si falla:  
\- producto sin variantes;  
\- producto con Color \+ Talla;  
\- pack como cantidad;  
\- variante agotada;  
\- sticky \+ offer con mismo producto;  
\- prueba móvil;  
\- /cart/add.js recibe id numérico válido;  
\- /cart/add.js recibe quantity correcta;  
\- sin errores JavaScript en Console;  
\- carrito muestra variante correcta.

\---

\#\# 11\. Métricas de ads

Métricas clave:  
\- Cost Per Mille (CPM)  
\- Click-Through Rate (CTR)  
\- Cost Per Click (CPC)  
\- Add To Cart (ATC)  
\- Conversion Rate (CVR)  
\- Cost Per Acquisition (CPA)  
\- Average Order Value (AOV)  
\- margen neto  
\- breakeven CPA

Reglas generales:  
\- Si hay clicks baratos pero no Add To Cart, revisar landing/oferta.  
\- Si hay Add To Cart pero no compra, revisar precio, confianza, checkout o envío.  
\- Si no hay clicks, revisar creativo/hook/producto.  
\- Si CPA supera breakeven sin señales positivas, matar o reformular.

\---

\#\# 12\. Reviews y social proof

Objetivo:  
Crear sistema nativo de reseñas sin depender inicialmente de Loox/Judge.me.

Reglas:  
\- permitir reviews reales con texto, estrellas, foto y vídeo;  
\- permitir que clientes envíen reseñas por WhatsApp/email;  
\- evitar reseñas falsas;  
\- si hay incentivo, comunicarlo de forma legal y transparente cuando proceda;  
\- no importar reviews dudosas.

\---

\#\# 13\. Registro de decisiones

Formato:

Fecha:  
Decisión:  
Motivo:  
Riesgo:  
Resultado esperado:  
Estado:

\---

\#\# 14\. Registro de productos

Formato:

Producto:  
Fuente:  
Coste:  
Precio estimado:  
Margen:  
Proveedor:  
Plazo envío:  
Riesgo legal:  
Saturación:  
Ángulo creativo:  
Estado: pendiente / aprobado / descartado / testado / ganador / muerto  
Aprendizaje:

\---

\#\# 15\. Próximos pasos

1\. Terminar pruebas técnicas del theme.  
2\. Crear sistema nativo de reviews.  
3\. Elegir primer producto real.  
4\. Crear producto en Shopify.  
5\. Configurar landing.  
6\. Crear 3-5 creatividades.  
7\. Lanzar test pequeño.  
8\. Analizar datos.  
9\. Iterar o matar.  
