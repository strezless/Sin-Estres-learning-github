| 键                     | 类型    | 描述                                                                      |
| --------------------- | ----- | ----------------------------------------------------------------------- |
| `action`              | `字符串` | 在项目上执行的操作。 可以是以下项之一：`created`、`edited`、`closed`、`reopened` 或 `deleted`。 |
| `changes`             | `对象`  | 对项目的更改，如果操作为 `edited`。                                                  |
| `changes[name][from]` | `字符串` | 名称的先前版本（如果操作为 `edited`）。                                                |
| `changes[body][from]` | `字符串` | 正文的先前版本，如果操作为 `edited`。                                                 |
| `project`             | `对象`  | [项目](/rest/reference/projects)本身。                                       |
