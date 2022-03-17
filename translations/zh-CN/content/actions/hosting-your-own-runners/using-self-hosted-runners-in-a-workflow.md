---
title: 在工作流程中使用自托管的运行器
intro: 要在工作流程中使用自托管的运行器，您可以使用标签为作业指定运行器类型。
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
  - /actions/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

有关创建自定义和默认标签的信息，请参阅“[将标签与自托管运行器一起使用](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)。”

### 在工作流程中使用自托管的运行器

标签允许您根据其共同特征向特定类型的自托管运行器发送工作流程作业。 例如，如果您的作业需要特定的硬件组件或软件包。 您可以将一个自定义标签分配给运行器，然后将您的作业配置为仅在带该标签的运行器中执行。

{% data reusables.github-actions.self-hosted-runner-labels-runs-on %}

更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)”。

### 使用默认标签路由作业

在被添加到 {% data variables.product.prodname_actions %} 后，自托管运行器将自动收到某些标签。 这些被用于指出其操作系统和硬件平台：

* `self-hosted`：应用到所有自托管运行器的默认标签。
* `linux`、`windows` 或 `macOS`：根据操作系统应用。
* `x64`、`ARM` 或 `ARM64`：根据硬件架构应用。

您可以使用您工作流程的 YAML 将作业发送到这些标签的组合。 在此示例中，与所有三个标签匹配的自托管运行器将有资格运行该作业：

```yaml
runs-on: [self-hosted, linux, ARM64]
```

- `self-hosted` - 在自托管运行器上运行此作业。
- `linux` - 仅使用基于 Linux 的运行器。
- `ARM64` - 仅使用基于 ARM64 硬件的运行器。

默认标签是固定的，无法更改或删除。 如果您需要对作业路由的更多控制，考虑使用自定义标签。

### 使用自定义标签路由作业

您可以随时创建自定义标签并将其分配给您的自托管运行器。 自定义标签允许您根据其标注将作业发送给特定的自托管运行器类型。

例如，如果您的某个作业需要特定类型的图形硬件，则可以创建名为 `gpu` 的自定义标签，并将其分配给安装了该硬件的运行器。 然后，与所有已分配的标签匹配的自托管运行器将有资格运行该作业。

此示例显示组合默认标签和自定义标签的作业：

```yaml
runs-on: [self-hosted, linux, x64, gpu]
```

- `self-hosted` - 在自托管运行器上运行此作业。
- `linux` - 仅使用基于 Linux 的运行器。
- `x64` - 仅使用基于 x64 硬件的运行器。
- `gpu` - 此自定义标签已被手动分配给安装了 GPU 硬件的自托管运行器。

这些标签累计运行，所以自托管运行器的标签必须匹配所有四个标签才能处理该作业。

### 自托管运行器的路由优先级

将作业路由到自托管运行器时，{% data variables.product.prodname_dotcom %} 将查找与作业的 `runs-on` 标签匹配的运行器：

1. {% data variables.product.prodname_dotcom %} 先在仓库级别搜索运行器，然后在组织级别搜索运行器{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}，然后在企业级别搜索运行器{% endif %}。
2. 然后，将作业发送到第一个联机且空闲的匹配运行器。
   - 如果所有匹配的联机运行器都处于忙碌状态，则作业将在匹配联机运行器数量最多的级别排队。
   - 如果所有匹配的运行器都处于脱机状态，则作业将在匹配脱机运行器数量最多的级别排队。
   - 如果在任何级别都没有匹配的运行器，则作业将失败。
   - 如果作业排队的时间超过 24 小时，则作业将失败。
