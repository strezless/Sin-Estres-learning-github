---
title: 用户帐户仓库的权限级别
intro: '用户帐户拥有的仓库有两种权限级别：仓库所有者和协作者。'
redirect_from:
  - /articles/permission-levels-for-a-user-account-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 关于用户帐户仓库的权限级别

用户帐户拥有的仓库有一个所有者。 所有权权限无法与其他用户帐户共享。

您还可以{% if currentVersion == "free-pro-team@latest" %}邀请{% else %}添加{% endif %} {% data variables.product.product_name %} 上的用户成为仓库的协作者。 更多信息请参阅“[邀请协作者参加个人仓库](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)”。

{% tip %}

**提示：**如果需要对用户帐户拥有的仓库实施更细致的权限，请考虑将仓库转让给组织。 更多信息请参阅“[转让仓库](/github/administering-a-repository/transferring-a-repository#transferring-a-repository-owned-by-your-user-account)”。

{% endtip %}

### 所有者对用户帐户拥有仓库的权限

仓库所有者对仓库具有完全控制权。 除了任何协作者可以执行的操作外，仓库所有者还可以执行以下操作。

| 操作                                                                                                                                                                                          | 更多信息                                                                                                                                                                                                                                        |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% if currentVersion == "free-pro-team@latest" %}邀请协作者{% else %}添加协作者{% endif %}                                                                                                            |                                                                                                                                                                                                                                             |
| "[邀请个人仓库的协作者](/github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository)"                                                                    |                                                                                                                                                                                                                                             |
| 更改仓库的可见性                                                                                                                                                                                    | “[设置仓库可见性](/github/administering-a-repository/setting-repository-visibility)” |{% if currentVersion == "free-pro-team@latest" %}
| 限制与仓库的交互                                                                                                                                                                                    | "[Limiting interactions in your repository](/github/building-a-strong-community/limiting-interactions-in-your-repository)" |{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
| 重命名分支，包括默认分支                                                                                                                                                                                | "[重命名分支](/github/administering-a-repository/renaming-a-branch)" 
{% endif %}
| 合并受保护分支上的拉取请求（即使没有批准审查）                                                                                                                                                                     | "[关于受保护分支](/github/administering-a-repository/about-protected-branches)"                                                                                                                                                                    |
| 删除仓库                                                                                                                                                                                        | "[删除仓库](/github/administering-a-repository/deleting-a-repository)"                                                                                                                                                                          |
| 管理仓库的主题                                                                                                                                                                                     | "[使用主题对仓库分类](/github/administering-a-repository/classifying-your-repository-with-topics)" |{% if currentVersion == "free-pro-team@latest" %}
| 管理仓库的安全性和分析设置                                                                                                                                                                               | "[管理仓库的安全和分析设置](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" |{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| 为私有仓库启用依赖项图                                                                                                                                                                                 | “[探索仓库的依赖项](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)” |{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| 删除包                                                                                                                                                                                         | “[删除包](/github/managing-packages-with-github-packages/deleting-a-package)” 
{% endif %}
| 自定义仓库的社交媒体预览                                                                                                                                                                                | "[自定义仓库的社交媒体预览](/github/administering-a-repository/customizing-your-repositorys-social-media-preview)"                                                                                                                                      |
| 从仓库创建模板                                                                                                                                                                                     | "[创建模板仓库](/github/creating-cloning-and-archiving-repositories/creating-a-template-repository)" |{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
| 接收                                                                                                                                                                                          |                                                                                                                                                                                                                                             |
| {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}有漏洞依赖项{% data variables.product.prodname_dependabot_alerts %}{% else %}安全警报{% endif %} | "[关于有漏洞依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)" |{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| 忽略仓库中的 {% data variables.product.prodname_dependabot_alerts %}                                                                                                                            | "[查看和更新仓库中的漏洞依赖项](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"                                                                                                               |
| 管理私有仓库的数据使用                                                                                                                                                                                 | “[管理私有仓库的数据使用设置](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)”
{% endif %}
| 定义仓库的代码所有者                                                                                                                                                                                  | "[关于代码所有者](/github/creating-cloning-and-archiving-repositories/about-code-owners)"                                                                                                                                                          |
| 存档仓库                                                                                                                                                                                        | "[关于存档仓库](/github/creating-cloning-and-archiving-repositories/about-archiving-repositories)" |{% if currentVersion == "free-pro-team@latest" %}
| 创建安全通告                                                                                                                                                                                      | "[关于 {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)"                                                                                              |
| 显示赞助按钮                                                                                                                                                                                      | “[在仓库中显示赞助按钮](/github/administering-a-repository/displaying-a-sponsor-button-in-your-repository)”                                                                                                                                           |
| 允许或禁止自动合并拉取请求                                                                                                                                                                               | "[管理仓库中的拉取请求自动合并](/github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository)" | {% endif %}

### 协作者对用户帐户拥有仓库的权限

个人仓库的协作者可以拉取（读取）仓库的内容并向仓库推送（写入）更改。

{% note %}

**注：**在私有仓库中，仓库所有者只能为协作者授予写入权限。 协作者不能对用户帐户拥有的仓库具有只读权限。

{% endnote %}

协作者还可以执行以下操作。

| 操作                          | 更多信息                                                                                                                                                                                 |
|:--------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 复刻仓库                        | "[About forks](/github/collaborating-with-issues-and-pull-requests/about-forks)" |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
| 重命名除默认分支以外的分支               | "[重命名分支](/github/administering-a-repository/renaming-a-branch)" 
{% endif %}
| 在仓库中创建、编辑和删除关于提交、拉取请求和议题的评论 | <ul><li>"[关于议题](/github/managing-your-work-on-github/about-issues)"</li><li>"[评论拉取请求](/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request)"</li><li>"[管理破坏性评论](/github/building-a-strong-community/managing-disruptive-comments)"</li></ul>                                                                                                                                                            |
| 在仓库中创建、分配、关闭和重新打开议题         | "[使用议题管理工作](/github/managing-your-work-on-github/managing-your-work-with-issues)"                                                                                                    |
| 在仓库中管理议题和拉取请求的标签            | "[标记议题和拉取请求](/github/managing-your-work-on-github/labeling-issues-and-pull-requests)"                                                                                                |
| 在仓库中管理议题和拉取请求的里程碑           | "[创建和编辑议题及拉取请求的里程碑](/github/managing-your-work-on-github/creating-and-editing-milestones-for-issues-and-pull-requests)"                                                              |
| 将仓库中的议题或拉取请求标记为重复项          | "[关于重复的议题和拉取请求](/github/managing-your-work-on-github/about-duplicate-issues-and-pull-requests)"                                                                                      |
| 在仓库中创建、合并和关闭拉取请求            | "[通过拉取请求提议工作更改](/github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests)" |{% if currentVersion == "free-pro-team@latest" %}
| 启用或禁用自动合并拉取请求               | "[自动合并拉取请求](/github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request)"{% endif %}
| 将建议的更改应用于仓库中的拉取请求           | "[在拉取请求中加入反馈](/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request)"                                                                      |
| 从仓库的复刻创建拉取请求                | "[从复刻创建拉取请求](/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork)"                                                                               |
| 提交影响拉取请求可合并性的拉取请求审查         | "[审查拉取请求中提议的更改](/github/collaborating-with-issues-and-pull-requests/reviewing-proposed-changes-in-a-pull-request)"                                                                   |
| 为仓库创建和编辑 wiki               | "[关于 wikis](/github/building-a-strong-community/about-wikis)"                                                                                                                        |
| 为仓库创建和编辑发行版                 | “[管理仓库中的发行版](/github/administering-a-repository/managing-releases-in-a-repository)”                                                                                                  |
| 作为仓库的代码所有者                  | "[关于代码所有者](/articles/about-code-owners)" |{% if currentVersion == "free-pro-team@latest" %}
| 发布、查看或安装包                   | "[发布和管理包](/github/managing-packages-with-github-packages/publishing-and-managing-packages)" 
{% endif %}
| 作为仓库协作者删除自己                 | "[从协作者的仓库删除您自己](/github/setting-up-and-managing-your-github-user-account/removing-yourself-from-a-collaborators-repository)"                                                         |

### 延伸阅读

- "[组织的仓库权限级别](/articles/repository-permission-levels-for-an-organization)"
