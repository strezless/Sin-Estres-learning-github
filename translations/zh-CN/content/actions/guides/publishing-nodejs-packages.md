---
title: 发布 Node.js 包
intro: 您可以将 Node.js 包发布到注册表，作为持续集成 (CI) 工作流程的一部分。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/publishing-nodejs-packages
  - /actions/language-and-framework-guides/publishing-nodejs-packages
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: tutorial
topics:
  - 打包
  - Publishing
  - Node
  - JavaScript
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 简介

本指南介绍如何创建一个工作流程，以在持续集成 (CI) 测试通过后将 Node.js 包发布到 {% data variables.product.prodname_registry %} 和 npm 注册表。 通过单个工作流程，您可以将包发布到单个注册表或多个注册表。

### 基本要求

建议基本了解工作流程配置选项和如何创建工作流程文件。 更多信息请参阅“[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

有关为 Node.js 项目创建 CI 工作流程的更多信息，请参阅“[将 Node.js 与 {% data variables.product.prodname_actions %} 一起使用](/actions/automating-your-workflow-with-github-actions/using-nodejs-with-github-actions)。”

您可能还发现基本了解以下内容是有帮助的：

- "[配置 npm 用于 {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages)"
- "[环境变量](/actions/reference/environment-variables)"
- [加密的密码](/actions/reference/encrypted-secrets)"
- "[工作流程中的身份验证](/actions/reference/authentication-in-a-workflow)"

### 关于包配置

 *package.json* 文件中的 `name` 和 `version` 字段创建唯一标识符，供注册表用来将包链接到注册表。 您可以在 *package.json* 文件中添加 `description` 字段，从而为包列表页面添加一个摘要。 更多信息请参阅 npm 文档中的“[创建 package.json 文件](https://docs.npmjs.com/creating-a-package-json-file)”和“[创建 Node.js 模块](https://docs.npmjs.com/creating-node-js-modules)”。

当本地 *.npmrc* 文件存在且指定了 `registry` 值时，`npm publish` 命令将使用 *.npmrc* 文件中配置的注册表。 {% data reusables.github-actions.setup-node-intro %}

您可以使用 `setup-node` 操作指定运行器上安装的 Node.js 版本。

如果在工作流程中添加步骤来配置 *package.json* 文件中的 `publishConfig` 字段，则无需使用 `setup-node` 操作指定注册表 url，但软件包仅限于发布到一个注册表。 更多信息请参阅 npm 文档中的“[publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)”。

### 发布包到 npm 注册表

每次创建新版本时，都可以触发工作流程来发布包。 以下示例中的工作流程在类型为 `created` 的 `release` 事件触发时运行。 如果 CI 测试通过，工作流程将包发布到 npm 注册表。

要根据工作流程中的 npm 注册表执行经过身份验证的操作，您需要将 npm 身份验证令牌作存储为密码。 例如，创建名为 `NPM_TOKEN` 的仓库密码。 更多信息请参阅“[创建和使用加密密码](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

默认情况下，npm 使用 *package.json* 文件的 `name` 字段来确定 npm 注册表。 当发布到全局命名空间时，您只需要包含包名称。 例如，您要发布一个名为 `npm-hello-world-test` 的包到 `https://www.npmjs.com/package/npm-hello-world-test`。

如果发布一个包含范围前缀的包，请将范围包含在 *package.json* 文件的名称中。 例如，如果 npm 范围前缀是 octocat 并且包名是 hello-world，则 *package.json* 文件中的 `name` 应为 `@octocat/hello-world`。 如果 npm 包使用范围前缀且包是公开的，则需使用选项 `npm publish --access public`。 这是 npm 需要用来防止有人无意中发布私有包的选项。

此示例将 `NPM_TOKEN` 密码存储在 `NODE_AUTH_TOKEN` 环境变量中。 当 `setup-node` 操作创建 *.npmrc* 文件时，会引用 `NODE_AUTH_TOKEN` 环境变量中的令牌。

{% raw %}
```yaml{:copy}
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # Setup .npmrc file to publish to npm
    - uses: actions/setup-node@v1
      with:
        node-version: '12.x'
        registry-url: 'https://registry.npmjs.org'
    - run: npm install
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```
{% endraw %}

在上面的示例中，`setup-node` 操作在运行器上创建一个包含以下内容的 *.npmrc* 文件：

```ini
//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}
registry=https://registry.npmjs.org/
always-auth=true
```

### 发布包到 {% data variables.product.prodname_registry %}

每次创建新版本时，都可以触发工作流程来发布包。 以下示例中的工作流程在类型为 `created` 的 `release` 事件发生时运行。 如果 CI 测试通过，工作流程会将包发布到 {% data variables.product.prodname_registry %}。

#### Configuring the destination repository

If you don't provide the `repository` key in your *package.json* file, then {% data variables.product.prodname_registry %} publishes a package in the {% data variables.product.prodname_dotcom %} repository you specify in the `name` field of the *package.json* file. For example, a package named `@my-org/test` is published to the `my-org/test` {% data variables.product.prodname_dotcom %} repository.

However, if you do provide the `repository` key, then the repository in that key is used as the destination npm registry for {% data variables.product.prodname_registry %}. For example, publishing the below *package.json* results in a package named `my-amazing-package` published to the `octocat/my-other-repo` {% data variables.product.prodname_dotcom %} repository.

```json
{
  "name": "@octocat/my-amazing-package",
  "repository": {
    "type": "git",
    "url": "https://github.com/octocat/my-other-repo.git"
  },
```

#### Authenticating to the destination repository

To authenticate to the {% data variables.product.prodname_registry %} registry in your workflow, you can use the `GITHUB_TOKEN` from your repository. It is created automatically and has _read_ and _write_ permissions for packages in the repository where the workflow runs. For more information, see "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow)."

If you want to publish your package to a different repository, you must use a personal access token (PAT) that has permission to write to packages in the destination repository. For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)" and "[Encrypted secrets](/actions/reference/encrypted-secrets)."

#### 示例工作流程

此示例将 `GITHUB_TOKEN` 密码存储在 `NODE_AUTH_TOKEN` 环境变量中。 当 `setup-node` 操作创建 *.npmrc* 文件时，会引用 `NODE_AUTH_TOKEN` 环境变量中的令牌。

{% raw %}
```yaml{:copy}
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # 设置 .npmrc 文件以发布到 GitHub 包
    - uses: actions/setup-node@v1
      with:
        node-version: '12.x'
        registry-url: 'https://npm.pkg.github.com'
        # 默认为拥有工作流程文件的用户或组织
        scope: '@octocat'
    - run: npm install
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

`setup-node` 操作在运行器上创建 *.npmrc* 文件。 使用 `scope` 输入到 `setup-node` 操作时，*.npmrc* 文件包含作用域前缀。 默认情况下，`setup-node` 操作在 *.npmrc* 文件中将作用域设置为包含该工作流程文件的帐户。

```ini
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
@octocat:registry=https://npm.pkg.github.com
always-auth=true
```

### 使用 yarn 发布包

如果您使用 Yarn 包管理器，可以使用 Yarn 安装和发布包。

{% raw %}
```yaml{:copy}
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # Setup .npmrc file to publish to npm
    - uses: actions/setup-node@v1
      with:
        node-version: '12.x'
        registry-url: 'https://registry.npmjs.org'
        # Defaults to the user or organization that owns the workflow file
        scope: '@octocat'
    - run: yarn
    - run: yarn publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```
{% endraw %}

### 发布包到 npm 和 {% data variables.product.prodname_registry %}

{% note %}

**注意：**如果需要发布到具有不同作用域前缀的注册表，则需修改运行器上的 *package.json* 文件以更改作用域前缀。 例如，如果将包发布到 npm 的 `@mona` 作用域和 {% data variables.product.prodname_registry %} 的 `@octocat` 作用域，则可在发布到 npm 之后和发布到 {% data variables.product.prodname_registry %} 之前，在运行器的 *package.json* 文件中将 `@mona` 作用域替换成 `@octocat`。

{% endnote %}

您可以使用每个注册表的 `setup-node` 操作将包发布到 npm 注册表和 {% data variables.product.prodname_registry %}。

如果将包发布到两个注册表，则需要确保 npm 上的作用域前缀与 {% data variables.product.prodname_dotcom %} 用户或组织名称匹配。 要将包发布到具有作用域前缀的公共注册表，可以使用 `npm publish --access public`。 更多信息请参阅 [`npm-scope`](https://docs.npmjs.com/misc/scope) 和 npm 文档中的“[创建和发布作用域的公共包](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)”。

确认 *package.json* 文件包含 {% data variables.product.prodname_dotcom %} 仓库和 npm 注册表的作用域。 例如，如果您计划将 `octocat/npm-hello-world-test` 仓库中的包发布到 {% data variables.product.prodname_dotcom %} 和 https://www.npmjs.com/package/@octocat/npm-hello-world-test，则 *package.json* 文件中的名称将是 `"name": "@octocat/npm-hello-world-test"`。

要根据 {% data variables.product.prodname_registry %} 注册表在工作流程中执行经验证的操作，可以使用 `GITHUB_TOKEN`。 `GITHUB_TOKEN` 默认存在于您的仓库中，并且对工作流程运行的仓库中的包具有读取和写入权限。 更多信息请参阅“[创建和使用加密密码](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

使用 `scope` 输入到 `setup-node` 操作时，操作将创建包含作用域前缀的 *.npmrc* 文件。 默认情况下，`setup-node` 操作在 *.npmrc* 文件中将作用域设置为拥有该工作流程文件的用户或组织。

此工作流程将调用 `setup-node` 操作两次。 每当 `setup-node` 操作运行时，都会覆盖 *.npmrc* 文件。 *.npmrc* 文件引用的令牌允许您对 `NODE_AUTH_TOKEN` 环境变量中的包注册表执行验证的操作。 工作流程在 `npm publish` 命令每次运行时设置 `NODE_AUTH_TOKEN` 环境变量，先通过令牌发布到 npm (`NPM_TOKEN`)，然后通过令牌发布到 {% data variables.product.prodname_registry %} (`GITHUB_TOKEN`)。

{% raw %}
```yaml{:copy}
name: Node.js Package
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    # 设置 .npmrc 文件以发布到 npm
    - uses: actions/setup-node@v1
      with:
        node-version: '10.x'
        registry-url: 'https://registry.npmjs.org'
    - run: npm install
    # 发布到 npm
    - run: npm publish --access public
      env:
        NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
    # 设置 .npmrc 文件以发布到 GitHub 包
    - uses: actions/setup-node@v1
      with:
        registry-url: 'https://npm.pkg.github.com'
        # 默认为拥有工作流程文件的用户或组织
        scope: '@octocat'
    # 发布到 GitHub 包
    - run: npm publish
      env:
        NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}
