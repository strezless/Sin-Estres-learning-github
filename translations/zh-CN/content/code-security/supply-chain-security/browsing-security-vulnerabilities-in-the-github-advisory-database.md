---
title: 浏览 GitHub Advisory Database 中的安全漏洞
intro: '{% data variables.product.prodname_advisory_database %} 允许您浏览或搜索影响 {% data variables.product.company_short %} 上开源项目的漏洞。'
shortTitle: 浏览公告数据库
redirect_from:
  - /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
versions:
  free-pro-team: '*'
topics:
  - 安全
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

### 关于安全漏洞

{% data reusables.repositories.a-vulnerability-is %}

如果我们检测到 {% data variables.product.prodname_advisory_database %} 中存在会影响您的仓库所依赖的软件包的任何漏洞，{% data variables.product.product_name %} 将会向您发送 {% data variables.product.prodname_dependabot_alerts %}。 更多信息请参阅“[关于易受攻击的依赖项的警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”。

### 关于 {% data variables.product.prodname_advisory_database %}

{% data variables.product.prodname_advisory_database %} 包含已映射到 {% data variables.product.company_short %} 依赖关系图跟踪的软件包的安全漏洞列表。 {% data reusables.repositories.tracks-vulnerabilities %}

每个安全通告都包含有关漏洞的信息，包括说明、严重程度、受影响的包、包生态系统、受影响的版本和修补版本、影响以及可选信息（如引用、解决方法和积分）。 此外，国家漏洞数据库列表中的公告包含 CVE 记录链接，通过链接可以查看漏洞、其 CVSS 得分及其质化严重等级的更多详细信息。 更多信息请参阅国家标准和技术研究所 (National Institute of Standards and Technology) 的“[国家漏洞数据库](https://nvd.nist.gov/)”。

我们在[常见漏洞评分系统 (CVSS) 第 5 节](https://www.first.org/cvss/specification-document)中定义了以下四种可能的严重性等级。
- 低
- 中
- 高
- 关键

{% data variables.product.prodname_advisory_database %} 使用上述 CVSS 级别。 如果 {% data variables.product.company_short %} 获取 CVE，{% data variables.product.prodname_advisory_database %} 将使用 CVSS 版本 3.1。 如果 CVE 是导入的，则 {% data variables.product.prodname_advisory_database %} 支持 CVSS 版本 3.0 和 3.1。

{% data reusables.repositories.github-security-lab %}

### 访问 {% data variables.product.prodname_advisory_database %} 中的通告

1. 导航到 https://github.com/advisories。
2. （可选）要过滤列表，请使用任意下拉菜单。 ![下拉过滤器](/assets/images/help/security/advisory-database-dropdown-filters.png)
3. 单击任何通告以查看详情。

{% note %}

也可以使用 GraphQL API 访问数据库。 更多信息请参阅“[`security_advisory` web 挂钩事件](/webhooks/event-payloads/#security_advisory)”。

{% endnote %}

### 搜索 {% data variables.product.prodname_advisory_database %}

您可以搜索数据库，并使用限定符缩小搜索范围。 例如，您可以搜索在特定日期、特定生态系统或特定库中创建的通告。

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| 限定符                   | 示例                                                                                                                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GHSA-ID`             | [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) 将显示使用此 {% data variables.product.prodname_advisory_database %} ID 的通告。 |
| `CVE-ID`              | [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) 将显示使用此 CVE ID 号的通告。                                                                |
| `ecosystem:ECOSYSTEM` | [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) 只显示影响 NPM 包的通告。                                                     |
| `severity:LEVEL`      | [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) 只显示严重程度高的公告。                                                        |
| `affects:LIBRARY`     | [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) 只显示影响 lodash 库的通告。                                                |
| `cwe:ID`              | [**cwe:352**](https://github.com/advisories?query=cwe%3A352) 将只显示使用此 CWE 编号的通告。                                                                             |
| `credit:USERNAME`     | [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) 将只显示计入“octocat”用户帐户的通告。                                                          |
| `sort:created-asc`    | [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) 按照时间顺序对通告排序，最早的通告排在最前面。                                       |
| `sort:created-desc`   | [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) 按照时间顺序对通告排序，最新的通告排在最前面。                                     |
| `sort:updated-asc`    | [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) 按照更新顺序排序，最早更新的排在最前面。                                          |
| `sort:updated-desc`   | [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) 按照更新顺序排序，最近更新的排在最前面。                                        |
| `is:withdrawn`        | [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) 只显示已经撤销的通告。                                                           |
| `created:YYYY-MM-DD`  | [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) 只显示此日期创建的通告。                                              |
| `updated:YYYY-MM-DD`  | [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) 只显示此日期更新的通告。                                              |

### 查看有漏洞的仓库

对于 {% data variables.product.prodname_advisory_database %} 中的任何漏洞，您可以查看哪些仓库具有该漏洞的 {% data variables.product.prodname_dependabot %} 警报。 要查看有漏洞的仓库，您必须有权访问该仓库的 {% data variables.product.prodname_dependabot_alerts %}。 更多信息请参阅“[关于易受攻击的依赖项的警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)”。

1. 导航到 https://github.com/advisories。
2. 单击通告。
3. 在通告页面的顶部，单击 **Dependabot alerts（Dependabot 警报）**。 ![Dependabot 警报](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. （可选）要过滤列表，请使用搜索栏或下拉菜单。 “Organization（组织）”下拉菜单用于按所有者（组织或用户）过滤 {% data variables.product.prodname_dependabot_alerts %}。 ![用于过滤警报的搜索栏和下拉菜单](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. 有关漏洞的更多详细信息，以及有关如何修复有漏洞的仓库的建议，请单击仓库名称。

### 延伸阅读

- MITRE 的[“漏洞”定义](https://cve.mitre.org/about/terminology.html#vulnerability)
