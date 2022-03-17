---
title: 使用组来管理访问 AE 托管的运行器
intro: 您可以使用策略来限制对已添加到组织或企业的 {% data variables.actions.hosted_runner %} 的访问。
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

### 关于 {% data variables.actions.hosted_runner %} 组

{% data variables.actions.hosted_runner %} 组用于控制对组织和企业级 {% data variables.actions.hosted_runner %} 的访问。 企业管理员可以配置访问策略，用以控制企业中的哪些组织可以访问运行器组。 组织管理员可以配置访问策略，用以控制组织中的哪些组织可以访问运行器组。

当企业管理员授予组织对运行器组的访问权限时，组织管理员可以看到组织的 {% data variables.actions.hosted_runner %} 设置中列出的运行器组。 然后，组织管理员可以为企业运行器组分配其他细致的仓库访问策略。

新运行器在创建时，将自动分配给默认组。 运行器每次只能在一个组中。 您可以将运行器从默认组移到另一组。 更多信息请参阅“[将 {% data variables.actions.hosted_runner %} 移动到组](#moving-an-ae-hosted-runner-to-a-group)”。

### 为组织创建 {% data variables.actions.hosted_runner %} 组

所有组织都有一个默认的 {% data variables.actions.hosted_runner %} 组。 企业帐户中的组织可以创建其他运行器组。 组织管理员可以允许单个仓库访问运行器组。

{% data variables.actions.hosted_runner %} 在创建时会自动分配给默认组，并且每次只能成为一个组的成员。 您可以将运行器从默认组移到您创建的任何组。

创建组时，必须选择用于定义哪些仓库有权访问运行器组的策略。

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions %}
1. 在 **Self-hosted runners（自托管运行器）**部分，单击 **Add new（新增）**，然后单击 **New group（新组）**。

    ![添加运行器组](/assets/images/help/settings/actions-hosted-runner-add-new-group.png)

1. 输入运行程序组的名称，并分配仓库访问策略。

     您可以配置一个运行器组可供一组特定的仓库或组织中所有仓库访问。 默认情况下，只有私有仓库可以访问运行器组中的运行器，但您可以覆盖此设置。 ![添加运行器组选项](/assets/images/help/settings/actions-org-add-runner-group-options.png)

1. 单击 **Save group（保存组）**创建组并应用策略。

### 为企业创建 {% data variables.actions.hosted_runner %} 组

企业可以将其 {% data variables.actions.hosted_runner %} 添加到组以进行访问管理。 企业可以创建供企业帐户中特定组织访问的 {% data variables.actions.hosted_runner %} 组。 然后，组织管理员可以为企业运行器组分配其他细致的仓库访问策略。

{% data variables.actions.hosted_runner %} 在创建时会自动分配给默认组，并且每次只能成为一个组的成员。 您可以在注册过程中将运行器分配给特定组，也可以稍后将运行器从默认组移到自定义组。

创建组时，必须选择用于定义哪些组织有权访问运行器组的策略。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. 单击 **Self-hosted runners（自托管运行器）**选项卡。
1. 单击 **Add new（新增）**，然后单击 **New group（新组）**。

    ![添加运行器组](/assets/images/help/settings/actions-hosted-runner-add-new-group.png)

1. 输入运行程序组的名称，并分配组织访问策略。

   您可以配置运行器组供特定的组织列表或企业中所有组织访问。  默认情况下，只有私有仓库可以访问运行器组中的运行器，但您可以覆盖此设置。 ![添加运行器组选项](/assets/images/help/settings/actions-enterprise-account-add-runner-group-options.png)

1. 单击 **Save group（保存组）**创建组并应用策略。

### 更改 {% data variables.actions.hosted_runner %} 组的访问策略

您可以更新运行器组的访问策略，或重命名运行器组。

{% data reusables.github-actions.hosted-runner-configure-runner-group-access %}

### 将 {% data variables.actions.hosted_runner %} 移动到组

新的 {% data variables.actions.hosted_runner %} 将自动分配给默认组，然后可以移到另一个组。

1. 在设置页面的 **Self-hosted runners（自托管运行器）**部分，找到要移动的运行器的当前组，并展开组成员列表。 ![查看运行器组成员](/assets/images/help/settings/actions-hosted-runner-group-members.png)
1. 选中运行器旁边的复选框，然后单击 **Move to group（移动到组）**以查看可用的目的地。 ![运行器组成员移动](/assets/images/help/settings/actions-hosted-runner-group-member-move.png)
1. 要移动运行器，请单击目标组。 ![运行器组成员移动](/assets/images/help/settings/actions-hosted-runner-group-member-move-destination.png)

### 删除 {% data variables.actions.hosted_runner %} 组

{% data variables.actions.hosted_runner %} 在其组被删除时将自动返回到默认组。

1. 在设置页面的 **Self-hosted runners（自托管运行器）**部分，找到您想要删除的组，并单击 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} 按钮。 ![查看运行器组设置](/assets/images/help/settings/actions-hosted-runner-group-kebab.png)

1. 要删除组，请单击 **Remove group（删除组）**。

    ![查看运行器组设置](/assets/images/help/settings/actions-hosted-runner-group-remove.png)

1. 查看确认提示，然后单击 **Remove this runner group（删除此运行器组）**。
