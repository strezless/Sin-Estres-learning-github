---
title: 管理分支保护规则
intro: '您可以创建分支保护规则对一个或多个分支实施某些工作流程，例如要求批准审查或通过状态检查才能将拉取请求合并到受保护分支。'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/configuring-protected-branches
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
  - /articles/enabling-required-status-checks
  - /github/administering-a-repository/enabling-required-status-checks
  - /articles/enabling-branch-restrictions
  - /github/administering-a-repository/enabling-branch-restrictions
  - /articles/enabling-required-reviews-for-pull-requests
  - /github/administering-a-repository/enabling-required-reviews-for-pull-requests
  - /articles/enabling-required-commit-signing
  - /github/administering-a-repository/enabling-required-commit-signing
  - /github/administering-a-repository/requiring-a-linear-commit-history
  - /github/administering-a-repository/enabling-force-pushes-to-a-protected-branch
  - /github/administering-a-repository/enabling-deletion-of-a-protected-branch
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
permissions: 拥有仓库管理员权限的人可以管理分支保护规则。
topics:
  - 仓库
---

### 关于分支保护规则

{% data reusables.repositories.branch-rules-example %}

您还可以使用通配符语法 `*` 为仓库中的所有当前和未来分支创建规则。 由于 {% data variables.product.company_short %} 对 `File.fnmatch` 语法使用 `File::FNM_PATHNAME` 标记，因此通配符与目录分隔符 (`/`) 不匹配。 例如，`qa/*` 将匹配以 `qa/` 开头并包含单个斜杠的所有分支。 您可以通过 `qa/**/*` 包含多个斜杠，也可以通过 `qa**/**/*` 扩展 `qa` 字符串，使规则更具包容性。 有关分支规则语法选项的更多信息，请参阅 [fnmatch 文档](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch)。

如果仓库有多个影响相同分支的受保护分支规则，则包含特定分支名称的规则具有最高优先级。 如果有多个受保护分支规则引用相同的特定规则名称，则最先创建的分支规则优先级更高。

提及特殊字符（如 `*`、`?` 或 `]`）的受保护分支按其创建的顺序应用，因此含有这些字符的规则创建时间越早，优先级越高。

要创建对现有分支规则的例外，您可以创建优先级更高的新分支保护规则，例如针对特定分支名称的分支规则。

有关每个可用分支保护设置的更多信息，请参阅“[关于受保护分支](/github/administering-a-repository/about-protected-branches)”。

### 创建分支保护规则

创建分支规则时，指定的分支不必是仓库中现有的分支。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
1. （可选）启用必需拉取请求审查。
   - 在“Protect matching branches（保护匹配分支）”下，选择 **Require pull request reviews before merging（合并前必需拉取请求审查）**。 ![拉取请求审查限制复选框](/assets/images/help/repository/PR-reviews-required.png)
   - 单击 **Required approving reviews（必需批准审查）**下拉菜单，然后选择要对分支要求的批准审查数量。 ![用于选择必需审查批准数量的下拉菜单](/assets/images/help/repository/number-of-required-review-approvals.png)
   - （可选）要在将代码修改提交推送到分支时忽略拉取请求批准审查，请选择 **Dismiss stale pull request approvals when new commits are pushed（推送新提交时忽略旧拉取请求批准）**。 ![在推送新提交时，关闭旧拉取请求批准的复选框](/assets/images/help/repository/PR-reviews-required-dismiss-stale.png)
   - （可选）要在拉取请求影响具有指定所有者的代码时要求代码所有者审查，请选择 **Require review from Code Owners（需要代码所有者审查）**。 更多信息请参阅“[关于代码所有者](/github/creating-cloning-and-archiving-repositories/about-code-owners)”。 ![代码所有者的必需审查](/assets/images/help/repository/PR-review-required-code-owner.png)
   - （可选）如果仓库属于组织，请选择 **Restrict who can dismiss pull request reviews（限制谁可以忽略拉取请求审查）**。 然后，搜索并选择有权忽略拉取请求审查的人员或团队。 更多信息请参阅“[忽略拉取请求审查](/github/collaborating-with-issues-and-pull-requests/dismissing-a-pull-request-review)”。 ![限制可以忽略拉取请求审查的人员复选框](/assets/images/help/repository/PR-review-required-dismissals.png)
1. （可选）启用必需状态检查。
   - 选中 **Require status checks to pass before merging（合并前必需状态检查通过）**。 ![必需状态检查选项](/assets/images/help/repository/required-status-checks.png)
   - （可选）要确保使用受保护分支上的最新代码测试拉取请求，请选择 **Require branches to be up to date before merging（要求分支在合并前保持最新）**。 ![宽松或严格的必需状态复选框](/assets/images/help/repository/protecting-branch-loose-status.png)
   - 从可用状态检查列表中，选择您想要设为必需的检查。 ![可用状态检查列表](/assets/images/help/repository/required-statuses-list.png)
1. （可选）选择 **Require signed commits（必需签名提交）**。 ![必需签名提交选项](/assets/images/help/repository/require-signed-commits.png)
1. （可选）选择 **Require linear history（必需线性历史记录）**。 ![必需的线性历史记录选项](/assets/images/help/repository/required-linear-history.png)
1. 视情况可选择 **Include administrators（包括管理员）**。 ![包括管理员复选框](/assets/images/help/repository/include-admins-protected-branches.png)
1. （可选）{% if currentVersion == "free-pro-team@latest" %}如果仓库由组织拥有，可使用 {% data variables.product.prodname_team %} 或 {% data variables.product.prodname_ghe_cloud %}{% endif %} 启用分支限制。
   - 选择 **Restrict who can push to matching branches（限制谁可以推送到匹配分支）**。 ![分支限制复选框](/assets/images/help/repository/restrict-branch.png)
   - 搜索并选择有权限推送到受保护分支的人员、团队或应用程序。 ![分支限制搜索](/assets/images/help/repository/restrict-branch-search.png)
1. （可选）在“Rules applied to everyone including administrators（适用于包括管理员在内的所有人规则）”下，选择 **Allow force pushes（允许强制推送）**。 ![允许强制推送选项](/assets/images/help/repository/allow-force-pushes.png)
1. （可选）选择 **Allow deletions（允许删除）**。 ![允许分支删除选项](/assets/images/help/repository/allow-branch-deletions.png)
1. 单击 **Create（创建）**。

### 编辑分支保护规则

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. 在要编辑的分支保护规则的右侧，单击 **Edit（编辑）**。 ![编辑按钮](/assets/images/help/repository/edit-branch-protection-rule.png)
1. 对分支保护规则进行所需的更改。
1. 单击 **Save changes（保存更改）**。 ![Edit message 按钮](/assets/images/help/repository/save-branch-protection-rule.png)

### 删除分支保护规则

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
1. 在要删除的分支保护规则的右侧，单击 **Delete（删除）**。 ![删除按钮](/assets/images/help/repository/delete-branch-protection-rule.png)
