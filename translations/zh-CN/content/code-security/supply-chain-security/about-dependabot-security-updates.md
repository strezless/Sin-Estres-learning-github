---
title: 关于 Dependabot 安全更新
intro: '{% data variables.product.prodname_dependabot %} 可通过提出安全更新拉取请求为您修复有漏洞依赖项。'
shortTitle: 关于 Dependabot 安全更新
redirect_from:
  - /github/managing-security-vulnerabilities/about-github-dependabot-security-updates
  - /github/managing-security-vulnerabilities/about-dependabot-security-updates
versions:
  free-pro-team: '*'
topics:
  - 安全
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "About Dependabot security updates".-->

### 关于 {% data variables.product.prodname_dependabot_security_updates %}

{% data variables.product.prodname_dependabot_security_updates %} 使您更容易修复仓库中的有漏洞依赖项。 如果启用此功能，当 {% data variables.product.prodname_dependabot %} 针对仓库依赖关系图中的有漏洞依赖项发出警报时，{% data variables.product.prodname_dependabot %} 将自动尝试修复它。 更多信息请参阅“[关于漏洞依赖项的警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”和“[配置 {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-dependabot-security-updates)”。

{% data variables.product.prodname_dotcom %} may send {% data variables.product.prodname_dependabot %} alerts to repositories affected by a vulnerability disclosed by a recently published {% data variables.product.prodname_dotcom %} security advisory. 更多信息请参阅“[关于 {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories#dependabot-alerts-for-published-security-advisories)”。


{% data variables.product.prodname_dependabot %} 将检查是否可以在不破坏仓库依赖关系图的情况下将有漏洞依赖项升级到已修复版本。 然后，{% data variables.product.prodname_dependabot %} 提出拉取请求以将依赖项更新到包含补丁的最低版本，并将拉取请求链接到 {% data variables.product.prodname_dependabot %} 警报，或者在警报中报告错误。 更多信息请参阅“[排查 {% data variables.product.prodname_dependabot %} 错误](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)”。

{% note %}

**注**

{% data variables.product.prodname_dependabot_security_updates %} 功能适用于已启用依赖关系图和 {% data variables.product.prodname_dependabot_alerts %} 的仓库。 您将在完整的依赖关系图中看到针对已发现的每个有漏洞依赖项的 {% data variables.product.prodname_dependabot %} 警报。 但是，安全更新仅针对清单或锁定文件中指定的依赖项而触发。 {% data variables.product.prodname_dependabot %} 无法更新未明确定义的间接或过渡依赖项。 更多信息请参阅“[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#dependencies-included)”。

{% endnote %}

您可以启用相关功能 {% data variables.product.prodname_dependabot_version_updates %}，这样无论 {% data variables.product.prodname_dependabot %} 是否检测到过期的依赖项，都可以提出拉取请求，以将清单更新到依赖项的最新版本。 更多信息请参阅“[关于 {% data variables.product.prodname_dependabot %} 版本更新](/github/administering-a-repository/about-dependabot-version-updates)”。

{% data reusables.dependabot.pull-request-security-vs-version-updates %}

### 关于安全更新的拉取请求

每个拉取请求都包含快速、安全地查看提议的修复程序并将其合并到项目中所需的全部内容。 这包括漏洞的相关信息，如发行说明、变更日志条目和提交详细信息。 无法访问仓库的 {% data variables.product.prodname_dependabot_alerts %} 的任何人都看不到拉取请求所解决的漏洞详细信息。

当您合并包含安全更新的拉取请求时，仓库的相应 {% data variables.product.prodname_dependabot %} 警报将被标记为已解决。 有关 {% data variables.product.prodname_dependabot %} 拉取请求的更多信息，请参阅“[管理依赖项更新的拉取请求](/github/administering-a-repository/managing-pull-requests-for-dependency-updates)”。

{% data reusables.dependabot.automated-tests-note %}

### 关于兼容性分数

{% data variables.product.prodname_dependabot_security_updates %} 可能包括兼容性分数，以便您了解更新漏洞是否可能导致对项目的重大更改。 这些分数是根据已生成相同安全更新的其他公共仓库中的 CI 测试计算的。 更新的兼容性分数是在依赖项的特定版本之间进行更新时，CI 运行被视为通过的百分比。

### 关于 {% data variables.product.prodname_dependabot %} 安全更新通知

您可以在 {% data variables.product.company_short %} 上过滤通知以显示 {% data variables.product.prodname_dependabot %} 安全更新。 更多信息请参阅“[从收件箱管理通知](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#dependabot-custom-filters)”。
