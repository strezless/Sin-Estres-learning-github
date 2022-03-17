---
title: 使用 Azure AD 为企业配置身份验证和预配
shortTitle: 使用 Azure AD 配置
intro: 您可以使用 Azure Active Directory (Azure AD) 中的租户作为身份提供程序 (IDP) 来集中管理 {% data variables.product.product_location %} 的身份验证和用户预配。
permissions: 企业所有者可在 {% data variables.product.product_name %} 上为企业配置身份验证和预配。
product: '{% data reusables.gated-features.saml-sso %}'
versions:
  github-ae: '*'
---

### 关于使用 Azure AD 进行身份验证和用户预配

Azure Active Directory (Azure AD) 是一项来自 Microsoft 的服务，它允许您集中管理用户帐户和 web 应用程序访问。 更多信息请参阅 Microsoft 文档中的[什么是 Azure Active Directory？](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis)。

要管理身份以及对 {% data variables.product.product_name %} 的访问，您可以使用 Azure AD 租户作为 SAML IdP 进行身份验证。 您也可以配置 Azure AD 自动预配帐户并获取 SCIM 会员资格，这样您可以创建 {% data variables.product.prodname_ghe_managed %} 用户，并从您的 Azure AD 租户管理团队和组织成员资格。

使用 Azure AD 对 {% data variables.product.prodname_ghe_managed %} 启用 SAML SSO 和 SCIM 后，您可以从 Azure AD 租户完成以下任务。

* 将 Azure AD 上的 {% data variables.product.prodname_ghe_managed %} 应用程序分配给用户帐户，以便在 {% data variables.product.product_name %} 上自动创建并授予对相应用户帐户的访问权限。
* 为 Azure AD 上的用户帐户取消分配 {% data variables.product.prodname_ghe_managed %} 应用程序，以在 {% data variables.product.product_name %} 上停用相应的用户帐户 。
* 为 Azure AD 上的 IdP 组分配 {% data variables.product.prodname_ghe_managed %} 应用程序，以为 IdP 组的所有成员授予对 {% data variables.product.product_name %} 上用户帐户的访问权限 。 此外，IdP 组也可以在 {% data variables.product.prodname_ghe_managed %} 上连接到团队及其父组织。
* 从 IdP 组取消分配 {% data variables.product.prodname_ghe_managed %} 应用程序来停用仅通过 IdP 组访问的所有 IdP 用户的 {% data variables.product.product_name %} 用户帐户，并从父组织中删除这些用户。 IdP 组将与 {% data variables.product.product_name %} 上的任何团队断开连接。

有关在 {% data variables.product.product_location %} 上管理企业的身份和访问权限的详细信息，请参阅“[管理企业的身份和访问权限](/admin/authentication/managing-identity-and-access-for-your-enterprise)”。 有关与 IdP 组同步团队的更多信息，请参阅“[同步团队与身份提供程序组](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)”。

### 基本要求

要使用 Azure AD 配置 {% data variables.product.product_name %} 的身份验证和用户预配，您必须有 Azure AD 帐户和租户。 更多信息请参阅 [Azure AD 网站](https://azure.microsoft.com/free/active-directory)和 Microsoft 文档中的[快速入门：创建 Azure Active Directory 租户](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant)。

{% data reusables.saml.assert-the-administrator-attribute %} 有关在来自 Azure AD 的 SAML 声明中包含 `administrator` 属性的详细信息， 请参阅 Microsoft 文档中的[如何：为企业应用程序自定义 SAML 令牌中发行的声明](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization)。

{% data reusables.saml.create-a-machine-user %}

### 使用 Azure AD 配置身份验证和用户预配

{% if currentVersion == "github-ae@latest" %}

1. 在 Azure AD 中，将 {% data variables.product.ae_azure_ad_app_link %} 添加到您的租户并配置单点登录。 更多信息请参阅 Microsoft 文档中的[教程：与 {% data variables.product.prodname_ghe_managed %} 的 Azure Active Directory 单点登录 (SSO) 集成](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial)。

1. 在 {% data variables.product.prodname_ghe_managed %} 中，输入 Azure AD 租户的详细信息。

    - {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

    - 如果已为使用其他 IdP 的 {% data variables.product.product_location %} 配置 SAML SSO，并且希望改为使用 Azure AD，您可以编辑配置。 更多信息请参阅“[配置企业的 SAML 单点登录](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise#editing-the-saml-sso-configuration)”。

1. 在 {% data variables.product.product_name %} 中启用用户预配，并在 Azure AD 中配置用户预配。 更多信息请参阅“[配置企业的用户预配](/admin/authentication/configuring-user-provisioning-for-your-enterprise#enabling-user-provisioning-for-your-enterprise)”。

{% endif %}
