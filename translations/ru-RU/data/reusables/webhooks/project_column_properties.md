| Клавиша               | Тип       | Description                                                                                                                         |
| --------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `действие`            | `строка`  | The action that was performed on the project column. Can be one of `created`, `edited`, `moved` or `deleted`.                       |
| `changes`             | `объект`  | The changes to the project column if the action was `edited`.                                                                       |
| `changes[name][from]` | `строка`  | The previous version of the name if the action was `edited`.                                                                        |
| `after_id`            | `integer` | The id of the column that this column now follows if the action was "moved". Will be `null` if it is the first column in a project. |
| `project_column`      | `объект`  | The [project column](/rest/reference/projects#columns) itself.                                                                      |
