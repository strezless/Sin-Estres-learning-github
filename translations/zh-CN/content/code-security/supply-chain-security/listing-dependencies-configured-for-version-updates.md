---
title: 列出为版本更新配置的依赖项
intro: '您可以查看由 {% data variables.product.prodname_dependabot %} 监视更新的依赖项。'
redirect_from:
  - /github/administering-a-repository/listing-dependencies-configured-for-version-updates
versions:
  free-pro-team: '*'
topics:
  - 仓库
---

{% data reusables.dependabot.beta-note %}

### 查看由 {% data variables.product.prodname_dependabot %} 监视的依赖项

启用版本更新后，可以使用仓库依赖关系图中的 **{% data variables.product.prodname_dependabot %}** 选项卡确认配置是否正确。 更多信息请参阅“[启用和禁用版本更新](/github/administering-a-repository/enabling-and-disabling-version-updates)”。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
{% data reusables.dependabot.click-dependabot-tab %}
5. 或者，要查看为包管理器监视的文件，请单击关联的 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}。 ![受监视的依赖项文件](/assets/images/help/dependabot/monitored-dependency-files.png)

如果缺少任何依赖项，请检查日志文件是否有错误。 如果缺少任何包管理器，请审查配置文件。

### 查看 {% data variables.product.prodname_dependabot %} 日志文件

1. 在 **{% data variables.product.prodname_dependabot %}** 选项卡上，单击 **Last checked *TIME* ago**（上次检查时间以前），查看 {% data variables.product.prodname_dependabot %} 在上次检查版本更新时生成的日志文件。 ![查看日志文件](/assets/images/help/dependabot/last-checked-link.png)
2. 或者，要返回版本检查，请单击 **Check for updates（检查更新）**。 ![检查更新](/assets/images/help/dependabot/check-for-updates.png)
