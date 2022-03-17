---
title: 将用户转换为组织
redirect_from:
  - /articles/what-is-the-difference-between-create-new-organization-and-turn-account-into-an-organization/
  - /articles/explaining-the-account-transformation-warning/
  - /articles/converting-a-user-into-an-organization
intro: 您可以将用户帐户转换为组织。 这样可以对属于组织的仓库设置更细化的权限。
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - 帐户
---

{% warning %}

**警告**：在将用户转换为组织之前，请记住以下几点：

 - 您将**不再**能够登录被转换的用户帐户。
 - 您将**不再**能够创建或修改被转换的用户帐户所拥有的 Gist。
 - **无法**将组织转换回用户。
 - SSH 密钥、OAuth 令牌、作业档案、 反应、及关联的用户信息**不会**传输到组织。 这只适用于被转换的用户帐户，而不适用于该用户帐户的任何协作者。
 - 使用被转换用户帐户进行的任何提交**将不再链接**到该帐户。 提交本身**将**保持原状。

{% endwarning %}

### 保留个人用户帐户并手动创建新组织

如果您希望组织的名称与目前用于个人帐户的名称相同，或者要保留个人用户帐户的信息不变，则必须创建一个新组织，然后将您的仓库转让给该组织，而不是将用户帐户转换为组织。

1. 要保留当前用户帐户的名称供您个人使用，请[将您个人用户帐户的名称更改为](/articles/changing-your-github-username)一个好听的新名称。
2. [使用个人用户帐户的原名称创建一个新组织](/articles/creating-a-new-organization-from-scratch)。
3. [将您的仓库转让](/articles/transferring-a-repository)给新组织帐户。

### 自动将个人帐户转换为组织

也可以将个人用户帐户直接转换为组织。 转换帐户：
 - 按原样保留仓库，无需手动将其转让给另一个帐户
 - 自动邀请协作者加入与他们以前的权限相当的团队
 {% if currentVersion == "free-pro-team@latest" %}-对 {% data variables.product.prodname_pro %} 上的用户帐户，自动将帐单转移到[付费 {% data variables.product.prodname_team %}](/articles/about-billing-for-github-accounts)，任何时候都无需重新输入付款信息、调整结算周期或双重付费{% endif %}

1. 创建新的个人帐户，转换后您将用它来登录 GitHub 以及访问组织和仓库。
2.  [离开](/articles/removing-yourself-from-an-organization)要转换的用户帐户此前加入的任何组织。
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
5. 在“Transform account（转换帐户）”下，单击 **Turn <username> into an organization（将 <username> 转换为组织）**。 ![组织转换按钮](/assets/images/help/settings/convert-to-organization.png)
6. 在 Account Transformation Warning（帐户转换警告）对话框中，查看并确认转换。 请注意，此框中的信息与本文顶部的警告信息相同。 ![转换警告](/assets/images/help/organizations/organization-account-transformation-warning.png)
7. 在“Transform your user into an organization（将用户转换为组织）”页面的“Choose an organization owner（选择组织所有者）”下，选择您在前面创建的备用个人帐户或您信任的其他用户来管理组织。 ![添加组织所有者页面](/assets/images/help/organizations/organization-add-owner.png)
8. 选择新组织的订阅，并在提示时输入帐单信息。
9. 单击 **Create Organization（创建组织）**。
10. 登录在第一步中创建的新用户帐户，然后使用上下文切换器访问您的新组织。

{% tip %}

**提示**：将用户帐户转换为组织时，我们会将属于该帐户的仓库中的协作者作为*外部协作者*添加到新组织。 然后，您可以根据需要邀请*外部协作者*成为新组织的成员。 更多信息请参阅“[组织的权限级别](/organizations/managing-peoples-access-to-your-organization-with-roles/permission-levels-for-an-organization#outside-collaborators)”。

{% endtip %}

### 延伸阅读
- "[设置团队](/articles/setting-up-teams)"
{% if currentversion == "free proteam@latest" %}-"[邀请用户加入您的组织](/articles/inviting-users-to-join-your-organization)"{% endif %}
- “[访问组织](/articles/accessing-an-organization)”
