---
title: 关于受保护分支
intro: '您可以通过设置分支保护规则来保护重要分支，这些规则定义协作者是否可以删除或强制推送到分支以及设置任何分支推送要求，例如通过状态检查或线性提交历史记录。'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-protected-branches
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
  - /articles/about-branch-restrictions
  - /github/administering-a-repository/about-branch-restrictions
  - /articles/about-required-status-checks
  - /github/administering-a-repository/about-required-status-checks
  - /articles/types-of-required-status-checks
  - /github/administering-a-repository/types-of-required-status-checks
  - /articles/about-required-commit-signing
  - /github/administering-a-repository/about-required-commit-signing
  - /articles/about-required-reviews-for-pull-requests
  - /github/administering-a-repository/about-required-reviews-for-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 仓库
---

### 关于分支保护规则

您可以通过创建分支保护规则，实施某些工作流程或要求，以规定协作者如何向您仓库中的分支推送更改，包括将拉取请求合并到分支。

默认情况下，每个分支保护规则都禁止强制推送到匹配的分支并阻止删除匹配的分支。 您可以选择禁用这些限制并启用其他分支保护设置。

默认情况下，分支保护规则的限制不适用于对仓库具有管理员权限的人。 您也可以选择包括管理员。

{% data reusables.repositories.branch-rules-example %} 关于分支名称模式的更多信息，请参阅“[管理分支保护规则](/github/administering-a-repository/managing-a-branch-protection-rule)”。

{% data reusables.pull_requests.you-can-auto-merge %}

### 关于分支保护设置

对于每个分支保护规则，您可以选择启用或禁用以下设置。
- [合并前必需拉取请求审查](#require-pull-request-reviews-before-merging)
- [合并前必需状态检查](#require-status-checks-before-merging)
- [要求签名提交](#require-signed-commits)
- [需要线性历史记录](#require-linear-history)
- [包括管理员](#include-administrators)
- [限制谁可以推送到匹配的分支](#restrict-who-can-push-to-matching-branches)
- [允许强制推送](#allow-force-pushes)
- [允许删除](#allow-deletions)

#### 合并前必需拉取请求审查

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

如果启用必需审查，则协作者只能通过由所需数量的具有写入权限之审查者批准的拉取请求向受保护分支推送更改。

如果具有管理员权限的人在审查中选择 **Request changes（申请更改）**选项，则拉取请求必需经此人批准后才可合并。 如果申请更改拉取请求的审查者没有空，则具有仓库写入权限的任何人都可忽略阻止审查。

{% data reusables.repositories.review-policy-overlapping-commits %}

如果协作者尝试将待处理或被拒绝审查的拉取请求合并到受保护分支，则该协作者将收到错误消息。

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```

（可选）您可以选择在推送提交时忽略旧拉取请求批准。 如果有人将修改代码的提交推送到已批准的拉取请求，则该批准将被忽略，拉取请求无法合并。 这不适用于协作者推送不修改代码的提交，例如将基础分值合并到拉取请求的分支。 有关基础分支的信息，请参阅“[关于拉取请求](/articles/about-pull-requests)”。

（可选）您可以限制特定人员或团队忽略拉取请求审查的权限。 更多信息请参阅“[忽略拉取请求审查](/articles/dismissing-a-pull-request-review)”。

（可选）您可以选择要求代码所有者进行审查。 如果这样做，则任何影响代码的拉取请求都必须得到代码所有者的批准，才能合并到受保护分支。

#### 合并前必需状态检查

必需状态检查确保在协作者可以对受保护分支进行更改前，所有必需的 CI 测试都已通过。 更多信息请参阅“[配置受保护分支](/articles/configuring-protected-branches/)”和“[启用必需状态检查](/articles/enabling-required-status-checks)”。 更多信息请参阅“[关于状态检查](/github/collaborating-with-issues-and-pull-requests/about-status-checks)”。

必须配置仓库使用状态 API 后才可启用必需状态检查。 更多信息请参阅 REST 文档中的“[仓库](/rest/reference/repos#statuses)”。

启用必需状态检查后，必须通过所有必需状态检查，协作者才能将更改合并到受保护分支。 所有必需状态检查通过后，必须将任何提交推送到另一个分支，然后合并或直接推送到受保护分支。

{% note %}

**注：**对仓库具有写入权限的任何个人或集成可以在仓库中设置任何状态检查的状态。 {% data variables.product.company_short %} 无法验证检查的作者是否被授权创建具有特定名称的检查或修改现有状态。 在合并拉取请求之前，应验证合并框中列出的每个状态的作者是否符合预期。

{% endnote %}

您可以将必需状态检查设置为“宽松”或“严格”。 您选择的必需状态检查类型确定合并之前是否需要使用基础分支将您的分支保持最新状态。

| 必需状态检查的类型 | 设置                                                                              | 合并要求                         | 考虑因素                                                                          |
| --------- | ------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------- |
| **严格**    | 选中 **Require branches to be up to date before merging（合并前需要分支保持最新状态）**复选框。      | 在合并之前，**必须**使用基础分支使分支保持最新状态。 | 这是必需状态检查的默认行为。 可能需要更多构建，因为在其他协作者将拉取请求合并到受保护基础分支后，您需要使头部分支保持最新状态。              |
| **宽松**    | **不**选中 **Require branches to be up to date before merging（合并前需要分支保持最新状态）**复选框。 | 在合并之前，**不**必使用基础分支使分支保持最新状态。 | 您将需要更少的构建，因为在其他协作者合并拉取请求后，您不需要使头部分支保持最新状态。 如果存在与基础分支不兼容的变更，则在合并分支后，状态检查可能会失败。 |
| **已禁用**   | **不**选中 **Require status checks to pass before merging（合并前需要状态检查通过）**复选框。       | 分支没有合并限制。                    | 如果未启用必需状态检查，协作者可以随时合并分支，无论它是否使用基础分支保持最新状态。 这增加了不兼容变更的可能性。                     |

有关故障排除信息，请参阅“[必需状态检查故障排除](/github/administering-a-repository/troubleshooting-required-status-checks)”。

#### 要求签名提交

在分支上启用必需提交签名时，贡献者{% if currentVersion == "free-pro-team@latest" %}和自动程序{% endif %}只能将已经签名并验证的提交推送到分支。 更多信息请参阅“[关于提交签名验证](/articles/about-commit-signature-verification)”。

{% note %}

**注：**如果协作者将未签名的提交推送到要求提交签名的分支，则协作者需要变基提交以包含验证的签名，然后将重写的提交强制推送到分支。

{% endnote %}

如果提交已进行签名和验证，则始终可以将本地提交推送到分支。 {% if currentVersion == "free-pro-team@latest" %}您也可以使用 {% data variables.product.product_name %} 上的拉请求将已经签名和验证的提交合并到分支。 但除非您是拉取请求的作者，否则不能将拉取请求压缩并合并到 {% data variables.product.product_name %} 。{% else %}但不能将拉取请求合并到 {% data variables.product.product_name %} 上的分支。{% endif %} 您可以在本地 {% if currentVersion == "free-pro-team@latest" %}压缩和{% endif %}合并拉取请求。 更多信息请参阅“[在本地检出拉取请求](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)”。

{% if currentVersion == "free-pro-team@latest" %} 有关合并方法的更多信息，请参阅“[关于 {% data variables.product.prodname_dotcom %} 上的合并方法](/github/administering-a-repository/about-merge-methods-on-github)”。{% endif %}

#### 需要线性历史记录

强制实施线性提交历史记录可阻止协作者将合并提交推送到分支。 这意味着合并到受保护分支的任何拉取请求都必须使用压缩合并或变基合并。 严格的线性提交历史记录可以帮助团队更容易回溯更改。 有关合并方法的更多信息，请参阅“[关于拉取请求合并](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)”。

在需要线性提交历史记录之前，仓库必须允许压缩合并或变基合并。 更多信息请参阅“[配置拉取请求合并](/github/administering-a-repository/configuring-pull-request-merges)”。

#### 包括管理员

默认情况下，受保护分支规则不适用于对仓库具有管理员权限的人。 您可以启用此设置将管理员纳入受保护分支规则。

#### 限制谁可以推送到匹配的分支

{% if currentVersion == "free-pro-team@latest" %}
如果您的仓库由组织拥有，您可以使用
{% data variables.product.prodname_team %} 或 {% data variables.product.prodname_ghe_cloud %} 启用分支限制。
{% endif %}

启用分支限制时，只有已授予权限的用户、团队或应用程序才能推送到受保护的分支。 您可以在受保护分支的设置中查看和编辑对受保护分支具有推送权限的用户、团队或应用程序。

您只能向对仓库具有 write 权限的用户、团队或已安装的 {% data variables.product.prodname_github_apps %} 授予推送到受保护分支的权限。 对仓库具有管理员权限的人员和应用程序始终能够推送到受保护分支。

#### 允许强制推送

默认情况下，{% data variables.product.product_name %} 阻止对所有受保护分支的强制推送。 对受保护分支启用强制推送时，只要具有仓库写入权限，任何人（包括具有管理员权限的人）都可以强制推送到该分支。

启用强制推送不会覆盖任何其他分支保护规则。 例如，如果分支需要线性提交历史记录，则无法强制推送合并提交到该分支。

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}如果站点管理员阻止强制推送到仓库中的所有分支，您不能启用强制推送到受保护分支。 更多信息请参阅“[阻止强制推送到用户帐户或组织拥有的仓库](/enterprise/{{ currentVersion }}/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)”。

如果站点管理员只阻止强制推送到默认分支，您仍然可以为任何其他受保护分支启用强制推送。{% endif %}

#### 允许删除

默认情况下，您不能删除受保护的分支。 启用删除受保护分支后，任何对仓库至少拥有写入权限的人都可以删除分支。
