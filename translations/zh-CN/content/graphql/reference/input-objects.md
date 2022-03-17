---
title: 输入对象
redirect_from:
  - /v4/input_object
  - /v4/reference/input_object
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 关于输入对象

[输入对象](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects)可描述为“可组合对象”，因为它们包含一组用于定义对象的输入字段。

例如，[`CommitAuthor`](/graphql/reference/input-objects#commitauthor) 需要一个名为 `emails` 的字段。 为 `emails` 提供一个值可将 `CommitAuthor` 转变成包含电子邮件地址的 `User` 对象列表。 请注意，[对象](/graphql/reference/objects) **may（可能）**包含输入对象，然而，[突变](/graphql/reference/mutations) **require（需要）**输入对象。

更多信息请参阅“[关于突变](/graphql/guides/forming-calls-with-graphql#about-mutations)。”

{% for item in graphql.schemaForCurrentVersion.inputObjects %}
  {% include graphql-input-object %}
{% endfor %}
