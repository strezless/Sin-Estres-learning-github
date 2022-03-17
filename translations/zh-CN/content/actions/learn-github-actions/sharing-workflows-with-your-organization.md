---
title: 与组织共享工作流程
shortTitle: 与组织共享工作流程
intro: '了解如何通过共享工作流模板、机密和自托管运行器，使用组织功能与团队协作。'
redirect_from:
  - /actions/configuring-and-managing-workflows/sharing-workflow-templates-within-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'how_to'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 概览

如果需要与您的团队共享工作流程和其他 {% data variables.product.prodname_actions %} 功能，则考虑在 {% data variables.product.prodname_dotcom %} 组织内协作。 组织允许您集中存储和管理机密、构件和自托管运行器。 您也可以在 `.github` 仓库中创建工作流程模板，并与您组织中的其他用户共享。

### 创建工作流程模板

对组织的 `.github` 仓库具有写入权限的用户可以创建工作流程模板。 然后，有权限创建工作流程的组织成员便可使用这些模板。 工作流程模板可用于在组织的公共仓库中创建新的工作流程；要使用模板在私有仓库中创建工作流程，该组织必须是企业或 GitHub One 计划的一部分。

此过程展示如何创建工作流程模板和元数据文件。 元数据文件描述在用户新建工作流程时如何向其显示模板。

1. 如果组织中没有名为 `.github` 的公共仓库，请新建一个。
1. 创建一个名为 `workflow-templates` 的目录。
1. 在 `workflow-templates` 目录中创建新的工作流程文件。

   如果需要引用仓库的默认分支，可以使用 `$default-branch` 占位符。 使用模板创建工作流程时，占位符将自动替换为仓库默认分支的名称。

   例如，下面这个名为 `octo-organization-ci.yml` 的文件展示了一个基本的工作流程。

   ```yaml
   name: Octo Organization CI

   on:
     push:
       branches: [ $default-branch ]
     pull_request:
       branches: [ $default-branch ]

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
         - uses: actions/checkout@v2

         - name: Run a one-line script
           run: echo Hello from Octo Organization
   ```
1. 在 `workflow-templates` 目录中创建元数据文件。 元数据文件必须与工作流程文件同名，但扩展名不是 `.yml`，而必须附加 `.properties.json`。 例如，下面这个名为 `octo-organization-ci.properties.json` 的文件包含名为 `octo-organization-ci.yml` 的工作流程文件的元数据：
   ```yaml
   {
       "name": "Octo Organization Workflow",
       "description": "Octo Organization CI workflow template.",
       "iconName": "example-icon",
       "categories": [
           "Go"
       ],
       "filePatterns": [
           "package.json$",
           "^Dockerfile",
           ".*\\.md$"
       ]
   }
   ```
   * `name` - **必要。**工作流程模板的名称。 这会显示在可用模板列表中。
   * `description` - **必要。**工作流程模板的描述。 这会显示在可用模板列表中。
   * `iconName` - **必要。**定义模板列表中工作流程项目的图标。 `iconName` 必须是同名的 SVG 图标，且必须存储在 `workflow-templates` 目录中。 例如，名为 `example-icon.svg` 的 SVG 文件被引用为 `example-icon`。
   * `categories` - **可选。**定义工作流程的语言类别。 当用户查看可用模板时，匹配相同语言的模板将更加突出。 有关可用语言类别的信息，请参阅https://github.com/github/linguist/blob/master/lib/linguist/languages.yml。
   * `filePatterns` - **可选。**如果用户仓库在其根目录中有符合定义的正则表达式的文件，则允许使用模板。

要添加另一个工作流模板，请将您的文件添加到同一 `workflow-templates` 目录中。 例如：

![工作流程模板文件](/assets/images/help/images/workflow-template-files.png)

### 使用组织的工作流程模板

此程序展示组织成员如何查找并使用工作流程模板来创建新的工作流程。 只要是组织成员，都可以使用组织的工作流程模板。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. 如果您的仓库已经有工作流程：在左上角单击 **New workflow（新工作流程）**。 ![创建新工作流程](/assets/images/help/repository/actions-new-workflow.png)
1. 组织的工作流程模板位于其自己名为“_组织名称_创建的工作流程”的区域中。 在您想要使用的模板名称下，单击 **Set up this workflow（设置此工作流程）**。 ![设置此工作流程](/assets/images/help/settings/actions-create-starter-workflow.png)


### 在组织内共享机密

您可以在组织内集中管理您的机密，然后将其提供给选定的仓库。 这也意味着您可以在一个位置更新机密，并且将更改应用于使用该机密的所有仓库工作流程。

在组织中创建密码时，可以使用策略来限制可以访问该密码的仓库。 例如，您可以将访问权限授予所有仓库，也可以限制仅私有仓库或指定的仓库列表拥有访问权限。

{% data reusables.github-actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.github-actions.sidebar-secret %}
1. 单击 **New secret（新建密码）**。
1. 在 **Name（名称）**输入框中键入密码的名称。
1. 输入密码的 **Value（值）**。
1. 从 **Repository access（仓库访问权限）**下拉列表，选择访问策略。
1. 单击 **Add secret（添加密码）**。

### 在组织内共享自托管运行器

组织管理员可以将其自托管的运行器添加到组，然后创建控制哪些仓库可访问该组的策略。

更多信息请参阅“[使用组管理对自托管运行器的访问](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)”。


### 后续步骤

要继续了解 {% data variables.product.prodname_actions %}，请参阅“[{% data variables.product.prodname_actions %} 的安全强化](/actions/learn-github-actions/security-hardening-for-github-actions)”。
