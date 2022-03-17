| Clave                  | Tipo        | Descripción                                                                         |
| ---------------------- | ----------- | ----------------------------------------------------------------------------------- |
| `Acción`               | `secuencia` | La acción que se realizó. Puede ser una de las siguientes:<ul><li>`submitted` - Se emitió una solicitud de extracción en un estado no pendiente.</li><li>`edited` - el cuerpo de una revisión se editó.</li><li>`dismissed` - Se descartó una revisión.</li></ul> |
| `solicitud_extracción` | `objeto`    | La [solicitud de extracción](/v3/pulls/) a la cual pertenece la revisión.           |
| `revisión`             | `objeto`    | La revisión que se afectó.                                                          |
| `changes[body][from]`  | `secuencia` | La versión previa del cuerpo si la acción se puso como `edited`.                    |