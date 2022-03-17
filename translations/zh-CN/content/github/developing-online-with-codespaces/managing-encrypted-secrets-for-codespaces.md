---
title: 管理代码空间的加密密码
intro: 您可以在代码空间中存储要通过环境变量访问的敏感信息（如令牌）。
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
---

{% note %}

**注意：**{% data variables.product.prodname_codespaces %} 加密密码目前处于测试阶段，可能会更改。

{% endnote %}

### 关于 {% data variables.product.prodname_codespaces %} 的加密密码

您可以将要在代码空间中使用的加密密码添加到您的用户帐户。 例如，您可能想要存储和访问以下敏感信息作为加密密码。

- 对云服务的个人访问令牌
- 服务主体
- 订阅标识符

您可以选择哪些仓库应有权访问每个密码。 然后，您可以在为有权访问密码的仓库创建的任何代码空间中使用该密码。

### 添加密码

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. 在“Codespaces secrets（代码空间密码）”的右侧，单击 **New secret（新建密码）**。 !["新建密码"按钮](/assets/images/help/settings/codespaces-new-secret-button.png)
1. 在“Name（名称）”下，输入密码的名称。 !["名称"文本框](/assets/images/help/settings/codespaces-secret-name-field.png)
{% data reusables.user_settings.codespaces-secret-value %}
{% data reusables.user_settings.codespaces-secret-repository-access %}
1. 单击 **Add secret（添加密码）**。

### 编辑密码

您可以更新现有密码的值，也可以更改哪些仓库可以访问密码。

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. 在“Codespaces secrets（代码空间密码）”下您要编辑的密码右侧，单击 **Update（更新）**。 !["更新" 按钮](/assets/images/help/settings/codespaces-secret-update-button.png)
1. 在“Value（值）”下，单击 **enter a new value（输入新值）**。 !["输入新值" 链接](/assets/images/help/settings/codespaces-secret-update-value-text.png)
{% data reusables.user_settings.codespaces-secret-value %}
{% data reusables.user_settings.codespaces-secret-repository-access %}
1. （可选）要删除密码对仓库的访问权限，请取消选择仓库。 ![删除对仓库访问权限的复选框](/assets/images/help/settings/codespaces-secret-repository-checkboxes.png)
1. 单击 **Save changes（保存更改）**。

### 删除密码

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. 在“Codespaces secrets（代码空间密码）”下您要删除的密码右侧，单击 **Delete（删除）**。 !["删除" 按钮](/assets/images/help/settings/codespaces-secret-delete-button.png)
1. 阅读警告，然后单击 **OK（确定）**。 ![确认删除密码](/assets/images/help/settings/codespaces-secret-delete-warning.png)
