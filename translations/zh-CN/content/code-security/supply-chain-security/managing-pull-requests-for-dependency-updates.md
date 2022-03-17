---
title: 管理依赖项更新的所有拉取请求
intro: '您可以按和其他拉取请求大致相同的方式管理 {% data variables.product.prodname_dependabot %} 提出的拉取请求，但也有一些额外的选项。'
redirect_from:
  - /github/administering-a-repository/managing-pull-requests-for-dependency-updates
versions:
  free-pro-team: '*'
topics:
  - 仓库
---

### 关于 {% data variables.product.prodname_dependabot %} 拉取请求

{% data reusables.dependabot.pull-request-introduction %}

当 {% data variables.product.prodname_dependabot %} 提出拉取请求时，将以您为仓库选择的方式通知您。 每个拉取请求都包含关于来自包管理器的拟议变更的详细信息。 这些拉取请求将遵循仓库中定义的正常检查和测试。 此外，如果有足够的信息，您将看到兼容性分数。 这也有助于您决定是否合并变更。 有关此分数的信息，请参阅“[关于 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)”。

如果您有多个依赖项要管理，可能会希望为每个包管理器自定义配置，以便拉取请求拥有特定的审查者、受理人和标签。 更多信息请参阅“[自定义依赖项更新](/github/administering-a-repository/customizing-dependency-updates)。”

### 查看 {% data variables.product.prodname_dependabot %} 拉取请求

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-pr %}
1. 安全和版本更新的任何拉取请求都很容易识别。
    - 作者为 [dependabot](https://github.com/dependabot)，即 {% data variables.product.prodname_dependabot %} 使用的自动程序帐户。
    - 默认情况下，它们拥有 `dependencies` 标签。

### 更改 {% data variables.product.prodname_dependabot %} 拉取请求的变基策略

默认情况下，{% data variables.product.prodname_dependabot %} 会自动为拉取请求变基，以解决各种冲突。 如果您喜欢手动处理合并冲突，可以使用 `rebase-strategy` 选项禁用此功能。 详情请参阅“[依赖项更新的配置选项](/github/administering-a-repository/configuration-options-for-dependency-updates#rebase-strategy)。”

### 管理带注释命令的 {% data variables.product.prodname_dependabot %} 拉取请求

{% data variables.product.prodname_dependabot %} 会响应注释中的简单命令。 每个拉取请求都包含处理拉取请求的命令的详细信息，例如：合并、压缩、重新打开、关闭拉取请求或对其进行变基。 其目的是让您尽可能轻松地将这些自动生成的拉取请求分类。

如果您通过运行任何命令来忽略依赖项或版本，{% data variables.product.prodname_dependabot %} 将集中存储仓库的首选项。 虽然这是一种快速解决方案，但对于拥有多个参与者的仓库而言，最好是显式定义要在配置文件中忽略的依赖项和版本。 这样可以让所有参与者都能轻松了解某个特定依赖项为什么无法自动更新。 更多信息请参阅“[依赖项更新的配置选项](/github/administering-a-repository/configuration-options-for-dependency-updates#ignore)。”
