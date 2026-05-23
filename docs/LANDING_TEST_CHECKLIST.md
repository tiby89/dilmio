\# LANDING TEST CHECKLIST — DILMIO

\#\# Objetivo

Antes de lanzar anuncios, comprobar que la landing añade al carrito la variante correcta, con la cantidad correcta, sin errores JavaScript y funcionando en móvil.

\---

\#\# Preparación antes de cada prueba

1\. Abrir landing en incógnito o limpiar carrito.  
2\. Abrir DevTools.  
3\. Network → filtrar por \`cart\`.  
4\. Console → vigilar errores JavaScript.  
5\. Comprobar que \`/cart/add.js\` recibe:  
   \- \`id\` numérico válido;  
   \- \`quantity\` correcta.

\---

\#\# Pruebas obligatorias

\#\#\# 1\. Producto sin variantes

Configurar producto simple sin opciones.

Debe ocurrir:  
\- no aparecen swatches ni selectores;  
\- CTA activo;  
\- añade 1 unidad;  
\- carrito muestra producto correcto.

\---

\#\#\# 2\. Producto con Color \+ Talla

Configurar producto con:  
\- Color: Negro / Blanco  
\- Talla: S / M / L

Debe ocurrir:  
\- aparecen ambos grupos de opciones;  
\- cambiar color/talla actualiza variante;  
\- carrito recibe la variante exacta;  
\- no añade siempre la primera variante.

\---

\#\#\# 3\. Pack como cantidad

Configurar producto sin opción Pack.

En customizer:  
\- \`show\_pack\` activo;  
\- pack 1: \`pack\_quantity \= 1\`;  
\- pack 2: \`pack\_quantity \= 3\`;  
\- \`pack\_value\` vacío.

Debe ocurrir:  
\- pack 3 añade 3 unidades de la misma variante;  
\- Network muestra \`quantity: 3\`.

\---

\#\#\# 4\. Variante agotada

Configurar una variante sin stock.

Debe ocurrir:  
\- CTA muestra “Agotado”;  
\- botón desactivado;  
\- al cambiar a variante con stock, CTA vuelve a activarse.

\---

\#\#\# 5\. Sticky \+ Offer mismo producto

Configurar mismo producto en offer-block y sticky-card.

Debe ocurrir:  
\- cambiar variante en offer actualiza sticky;  
\- precio sticky cambia;  
\- CTA sticky añade la variante correcta;  
\- quantity se respeta.

\---

\#\# Pruebas móviles obligatorias

Repetir en viewport móvil:

\- producto simple;  
\- Color \+ Talla;  
\- pack como cantidad;  
\- variante agotada.

Debe ocurrir:  
\- CTA visible y usable;  
\- selectores cómodos;  
\- no hay errores JS;  
\- \`/cart/add.js\` recibe \`id\` y \`quantity\` correctos.

\---

\#\# Señales de OK

\- \`/cart/add.js\` body: \`{"id": número, "quantity": número}\`  
\- carrito muestra producto y variante correctos;  
\- no hay errores en Console;  
\- variante agotada no se puede añadir;  
\- pack cantidad añade cantidad correcta;  
\- sticky no se desincroniza.

\---

\#\# No avanzar a reviews hasta que

\- Producto sin variantes OK.  
\- Color \+ Talla OK.  
\- Pack como cantidad OK.  
\- Variante agotada OK.  
\- Sticky \+ Offer mismo producto OK.  
\- Prueba móvil OK.  
\- Sin errores JavaScript.  
\- Carrito recibe siempre \`id\` válido y \`quantity\` correcta.  
