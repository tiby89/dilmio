# DILMIO — Standard Product Content Guide

## Objetivo

Esta guía define cómo cargar productos estándar en Shopify Admin para mantener una apariencia ecommerce premium, consistente y reutilizable entre nichos. El theme DILMIO tiene la estructura correcta; el contenido es lo que determina si la ficha parece premium o una tienda de importación.

---

## 1. Principios generales

- No publicar contenido importado sin editar. Nunca pegar directamente desde AliExpress, CJ, o Temu.
- No usar textos de proveedor. El comprador compra en tu marca, no en la del fabricante.
- No mezclar specs técnicas con copy comercial. El copy vende; las specs informan. Van separados.
- No meter imágenes dentro de la descripción si ya están en la galería de medios. La galería es el sitio correcto.
- Priorizar claridad, escaneabilidad y confianza. El comprador escanea, no lee.
- El contenido debe leerse bien en mobile. Si en móvil parece un documento Word, hay que cortarlo.

---

## 2. Título del producto

**Formato recomendado:** nombre del producto + característica diferenciadora si aporta valor. Sin palabras de relleno.

**Longitud:** 40–70 caracteres.

**Regla de miniatura:** el título debe venderse solo junto a una imagen de 150×150 px. Si necesitas leer tres líneas para entender qué es el producto, el título es demasiado largo o vago.

**Ejemplo bueno:**
```
Collar de plata 925 ajustable · Minimalista
```

**Ejemplo malo:**
```
Collar de plata de alta calidad para mujer regalo San Valentín bonito elegante joyería
```

---

## 3. Vendor / marca

- Usar el nombre de marca o nicho configurado para esa tienda.
- Nunca usar el nombre del proveedor o fabricante.
- No dejar en blanco: el theme muestra el vendor en la ficha de producto.

---

## 4. Imágenes — regla de los 5

**Número recomendado:** 4–6 imágenes. Máximo 8.

**Orden ideal:**

1. **Hero:** producto limpio sobre fondo neutro. La primera imagen es la que convierte en mobile y en colecciones. No puede fallar.
2. **Lifestyle:** producto en uso o contexto real. Genera aspiración.
3. **Detalle:** textura, material, acabado, cierre, costura — lo que justifica el precio.
4. **Escala:** producto junto a una mano, objeto conocido o modelo. Da referencia de tamaño.
5. **Packaging / unboxing** *(opcional):* solo si la experiencia de packaging es diferenciadora para el nicho.
6. **Variante** *(si aplica):* cada color o talla con su imagen asignada correctamente en Shopify.

**Qué eliminar sin dudar:**
- Fotos con logo del proveedor o watermark visible.
- Infografías genéricas del proveedor (las que listan specs en inglés o chino con flechas).
- Fotos de fábrica o almacén.
- Imágenes duplicadas o casi duplicadas (mismo ángulo, diferente zoom).
- Capturas de pantalla de apps de proveedor.
- Fondos blancos de baja calidad con sombra de artefacto o recorte sucio.

**Qué mantener aunque no sea perfecto:**
- La mejor foto lifestyle disponible, aunque no sea de estudio profesional.
- La foto que muestra el tamaño/escala, aunque sea simple.

**Ratios recomendados:** 1:1 (cuadrado) o 4:5 (vertical). Nunca landscape 16:9 — se recorta mal en mobile y en tarjetas de colección.

**Multi-nicho:** el fondo neutro (#F5F5F5 o blanco) es intercambiable entre nichos. Si las imágenes hero son consistentes, cambiar de nicho solo requiere cambiar tokens de color, no rehacer fotografía.

---

## 5. Descripción del producto

**El problema habitual:** los productos importados traen una descripción que mezcla copy comercial genérico + specs técnicas + imágenes adicionales + texto de proveedor + a veces HTML roto. Publicar eso destruye la percepción premium.

**Formato recomendado (de arriba a abajo en el editor de Shopify):**

### Bloque 1 — Párrafo editorial (2–3 frases)
- Qué es el producto y por qué le importa al comprador.
- Tono: directo, sin adjetivos vacíos. Habla de la persona, no del objeto.

**Bien:**
> Diseñado para quien no quiere elegir entre estilo y comodidad. Se ajusta a cualquier escote sin abroches complicados y aguanta el día sin perder brillo.

**Mal:**
> Este increíble collar de alta calidad está hecho con los mejores materiales y es perfecto para cualquier ocasión especial o cotidiana.

### Bloque 2 — Bullets de beneficio (3–5 máximo)
- Un beneficio por línea. Concreto y verificable.
- No usar specs técnicas aquí (eso va en Detalles).

**Bien:**
- Se ajusta de 40 a 55 cm sin herramientas
- No mancha ni irrita la piel en uso prolongado
- Llega en caja de regalo lista para entregar

**Mal:**
- Material: acero inoxidable 316L color plateado
- Longitud: 40 cm / 15.7 inch a 55 cm / 21.7 inch
- Muy bonito y de alta calidad

### Bloque 3 — Detalles del producto *(si hace falta)*
- Specs limpias: material, dimensiones, peso, colores disponibles.
- Formato de lista simple. Sin HTML importado ni tablas con estilos inline.
- Texto corto por línea. Nada de frases completas para datos técnicos.

### Bloque 4 — Nota de confianza *(1 frase, opcional)*
- Garantía, política de devolución o mensaje de confianza brevísimo.

**Bien:**
> 30 días para devolverlo si no es lo que esperabas.

**Longitud total recomendada:** legible en 20 segundos. Si lleva más, es demasiado largo.

---

## 6. Regla específica para SPECIFICATIONS

El bloque `SPECIFICATIONS` es el error más común en productos importados. Aparece como texto largo con specs en inglés o con formato de tabla rota, copiado directamente del proveedor.

**Cuándo usarlo:** solo si el producto tiene specs que el comprador necesita para tomar la decisión de compra (talla, capacidad, voltaje, compatibilidad de piezas).

**Cuándo NO usarlo:** si las specs son puramente del fabricante y el comprador no las necesita (número de modelo, código de color interno, certificaciones industriales irrelevantes para el consumidor).

**Cómo traducir y limpiar:**
- Traducir todo al idioma del nicho.
- Eliminar los campos que no aportan nada al comprador final.
- Unificar el formato: misma estructura entre todos los productos de la tienda.
- Sin HTML crudo ni tablas con `style="..."` inline.
- Renombrar el encabezado: "Detalles del producto" o "Especificaciones" — nunca "SPECIFICATIONS" en mayúsculas si el nicho está en español.

**Ejemplo bueno:**
```
Material: Acero inoxidable 316L
Largo ajustable: 40 a 55 cm
Peso: 12 g
Incluye: Caja de regalo
```

**Ejemplo malo:**
```
SPECIFICATIONS:
- Stainless steel 316L material with high quality plating
- Adjustable length: 40CM/15.7" to 55CM/21.7"
- Net weight: 12g, package weight: 50g
- Certificate: CE, RoHS
- Model number: NK-2024-SS-ADJ-GRY
```

---

## 7. Beneficios

Los bullets de beneficio son el puente entre las características técnicas y la decisión de compra.

**Regla:** un beneficio responde a "¿para qué me sirve esto a mí?", no a "¿de qué está hecho?".

| Característica técnica | Beneficio real |
|---|---|
| Acero 316L hipoalergénico | No irrita la piel en uso prolongado |
| Mecanismo de cierre magnético | Se pone y quita en segundos, sin ayuda |
| Caja de cartón reciclado | Llega listo para regalar, sin embalaje de plástico |

**Evitar:**
- "Alta calidad" — no dice nada concreto.
- "Muy práctico" — ¿práctico cómo?
- "Perfecto para cualquier ocasión" — es lo que dice todo el mundo.

---

## 8. Tono de texto

- **Directo:** una frase, una idea.
- **Comercial pero no exagerado:** habla de lo real, no de lo ideal.
- **Premium sin sonar falso:** evitar superlativos sin respaldo.
- **Centrado en uso real:** cómo mejora el día a día del comprador.
- **Evitar:** "increíble", "perfecto", "alta calidad", "de primera", "insuperable", salvo que haya una razón concreta que lo justifique inmediatamente después.

---

## 9. Checklist antes de publicar

### Título y texto
- [ ] El título tiene menos de 70 caracteres
- [ ] No hay adjetivos vacíos ("increíble", "alta calidad", "perfecto")
- [ ] La descripción es legible en menos de 20 segundos
- [ ] No hay texto del proveedor copiado sin editar
- [ ] No hay specs mezcladas con copy editorial
- [ ] No hay texto en inglés o chino si el nicho está en español
- [ ] No hay HTML roto ni estilos inline visibles

### Imágenes
- [ ] La primera imagen vende el producto en miniatura
- [ ] Hay entre 4 y 8 imágenes (no más)
- [ ] No hay imágenes con logo de proveedor o watermark
- [ ] No hay infografías genéricas del proveedor
- [ ] Las imágenes de variante están asignadas a su variante en Shopify
- [ ] No hay imágenes casi duplicadas

### Mobile
- [ ] La primera imagen se ve bien recortada a cuadrado (1:1)
- [ ] La descripción no produce scroll kilométrico en teléfono
- [ ] El trust block bajo el ATC se ve limpio y no desborda

### Estructura
- [ ] El campo Vendor/Marca está relleno
- [ ] El precio tiene sentido respecto al posicionamiento del nicho
- [ ] No hay imágenes metidas dentro de la descripción si ya están en la galería

---

## 10. Ejemplo de estructura ideal

**Producto de ejemplo:** organizador de tapas ajustable para cocina

---

**Título:**
```
Organizador de tapas ajustable para cocina · 3 tamaños
```

**Descripción:**

Mantén el cajón en orden sin sacrificar espacio. Se ajusta a tapas de 16 a 32 cm y encaja en cualquier cajón estándar sin herramientas.

- Ajustable de 16 a 32 cm de diámetro
- Separa hasta 6 tapas sin que se caigan
- Compatible con tapas redondas y ovaladas
- Se limpia en el lavavajillas

**Detalles del producto:**
```
Material: Plástico ABS libre de BPA
Ancho ajustable: 24 a 38 cm
Alto: 8 cm
Color disponible: Blanco, gris antracita
```

**Nota de confianza:**
> Si no encaja en tu cajón, lo cambiamos sin preguntas.

---

## 11. Qué NO hacer nunca

- Pegar contenido de AliExpress, CJ o Temu tal cual, sin editar.
- Dejar `SPECIFICATIONS` en inglés si el nicho está en español.
- Subir 12–20 imágenes casi iguales porque "más es mejor".
- Usar fotos con watermark del proveedor visible.
- Meter specs irrelevantes para el comprador (número de modelo, código interno).
- Meter imágenes adicionales dentro del campo descripción si ya están en la galería de medios.
- Publicar sin revisar cómo queda en mobile.
- Usar el nombre del proveedor como vendor/marca.
- Dejar la descripción vacía o con lorem ipsum.

---

## 12. Mantenimiento

Esta guía se actualiza cuando:

- La plantilla estándar de producto (`templates/product.json`) evolucione con nuevos bloques.
- Se creen metafields específicos en Shopify Admin para datos estructurados (specs, beneficios, preguntas frecuentes). En ese caso se añadirá una sección de metafields con los nombres exactos a rellenar.
- Se añada un segundo nicho con requisitos de contenido diferentes.

La guía vive en `docs/STANDARD_PRODUCT_CONTENT_GUIDE.md` dentro del repositorio del theme. Cualquier cambio sigue el flujo normal de commits del proyecto.
