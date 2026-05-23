# PRODUCT_LOG.md — DILMIO

> Registro de productos analizados, en test o descartados.
> Una entrada por producto. No borrar entradas — marcar como descartado/muerto si procede.

---

## Formato de entrada

```
---
Product:
Source:
Unit cost:
Estimated price:
Estimated margin:
Supplier:
Shipping time:
Legal risk:         low / medium / high
Market saturation:  low / medium / high
Creative angle:
Pack potential:     yes / no / maybe
Status:             pending / approved / discarded / testing / winner / dead
Learning:
---
```

---

## Estados posibles

| Status    | Meaning                                          |
|-----------|--------------------------------------------------|
| pending   | Identified, not yet evaluated                    |
| approved  | Meets criteria, ready to build landing           |
| discarded | Ruled out before testing (margin, legal, supply) |
| testing   | Live test running                                |
| winner    | Profitable, scaling                              |
| dead      | Tested, did not convert or not viable            |

---

## Criterios de aprobación (resumen)

Un producto es candidato si pasa todos estos:
- Resuelve un problema claro o tiene demostración visual fuerte
- Explicable en vídeo en menos de 5 segundos
- Margen suficiente después de producto + envío + pasarela + impuestos + ads
- No frágil, pesado ni complejo de devolver
- Sin categoría legalmente problemática
- Sin claims médicos o milagrosos
- Potencial de pack o AOV alto
- Vendible en España y/o Rumanía sin complicaciones

Ver criterios completos: docs/DILMIO_OS.md sección 5.

---

## Registro

*(vacío — añadir primer producto cuando comience Phase 7)*

---
Product:
Source:
Unit cost:
Estimated price:
Estimated margin:
Supplier:
Shipping time:
Legal risk:
Market saturation:
Creative angle:
Pack potential:
Status: pending
Learning:
---
