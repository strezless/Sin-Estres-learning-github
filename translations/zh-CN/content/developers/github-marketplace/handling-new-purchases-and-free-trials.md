---
title: 处理新购买和免费试用
intro: '当客户购买您的 {% data variables.product.prodname_marketplace %} 应用程序的付费计划、免费试用版或免费版本时，您将收到 [`marketplace_purchase` 事件](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events) web 挂钩，挂钩中带有可启动购买流程的 `purchased` 操作。'
redirect_from:
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-github-apps/
  - /apps/marketplace/administering-listing-plans-and-user-accounts/supporting-purchase-plans-for-oauth-apps/
  - /apps/marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials/
  - /marketplace/integrating-with-the-github-marketplace-api/handling-new-purchases-and-free-trials
versions:
  free-pro-team: '*'
topics:
  - marketplace
---



{% warning %}

如果在 {% data variables.product.prodname_marketplace %} 中提供 {% data variables.product.prodname_github_app %}，您的应用程序必须按照 OAuth 授权流程来识别用户。 您不需要设置单独的 {% data variables.product.prodname_oauth_app %} 来支持此流程。 更多信息请参阅“[识别和授权 {% data variables.product.prodname_github_apps %} 的用户](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)”。

{% endwarning %}

### 步骤 1. 首次购买和 web 挂钩事件

客户在购买 {% data variables.product.prodname_marketplace %} 应用程序之前，需要选择[上架产品计划](/marketplace/selling-your-app/github-marketplace-pricing-plans/)。 他们还要选择是从个人帐户还是从组织帐户购买应用程序。

客户通过单击 **Complete order and begin installation（完成订单并开始安装）**来完成购买。

然后，{% data variables.product.product_name %} 将带有 `purchased` 操作的 [`marketplace_purchase`](/webhooks/event-payloads/#marketplace_purchase) web 挂钩发送到您的应用程序。

从 `marketplace_purchase` web 挂钩读取 `effective_date` 和 `marketplace_purchase` 对象，以确定客户购买了哪个计划、何时开始结算周期以及何时开始下一个结算周期。

如果您的应用程序提供免费试用版，则从 web 挂钩读取 `marketplace_purchase[on_free_trial]` 属性。 如果该值为 `true`，则应用程序需要跟踪免费试用开始日期 (`effective_date`) 和免费试用结束日期 (`free_trial_ends_on`)。 使用 `free_trial_ends_on` 日期在应用程序的 UI 中显示免费试用剩余天数。 您可以在横幅或[帐单 UI](/marketplace/selling-your-app/billing-customers-in-github-marketplace/#providing-billing-services-in-your-apps-ui) 中显示它。 要了解如何在免费试用结束前处理取消，请参阅“[处理计划取消](/developers/github-marketplace/handling-plan-cancellations)”。 请参阅“[处理计划更改](/developers/github-marketplace/handling-plan-changes)”，了解在免费试用期满后如何从免费试用版过渡到付费计划。

有关 `marketplace_purchase` 事件有效负载的示例，请参阅“[{% data variables.product.prodname_marketplace %} web 挂钩事件](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)”。

### 步骤 2. 安装

如果您的应用程序是 {% data variables.product.prodname_github_app %}， {% data variables.product.product_name %} 在客户购买时会提示他们选择应用程序可以访问哪些仓库。 然后，{% data variables.product.product_name %} 将应用程序安装在客户选择的帐户上，并授予对所选仓库的访问权限。

此时，如果您在 {% data variables.product.prodname_github_app %} 设置中指定了**设置 URL** ，则 {% data variables.product.product_name %} 将客户重定向到该 URL。 如果您没有指定设置 URL，则无法处理购买 {% data variables.product.prodname_github_app %} 的购买。

{% note %}

**注：****设置 URL** 在 {% data variables.product.prodname_github_app %} 设置中被描述为可选项，但如果您要在 {% data variables.product.prodname_marketplace %} 中提供应用程序，则它为必填字段。

{% endnote %}

如果您的应用程序是 {% data variables.product.prodname_oauth_app %}，{% data variables.product.product_name %} 不会在任何地方安装它。 相反，{% data variables.product.product_name %} 会将客户重定向到您在 [{% data variables.product.prodname_marketplace %} 上架信息](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#listing-urls)中指定的**安装 URL**。

当客户购买 {% data variables.product.prodname_oauth_app %} 时，{% data variables.product.product_name %} 会将客户重定向到您选择的 URL（设置 URL 或安装 URL），并且该 URL 将客户选择的定价计划包含为查询参数：`marketplace_listing_plan_id`。

### 步骤 3. 授权

当客户购买您的应用程序时，您必须通过 OAuth 授权流程发送客户：

* 如果您的应用程序是 {% data variables.product.prodname_github_app %}，只要 {% data variables.product.product_name %} 将客户重定向到**设置 URL** 便开始授权。 请遵循“[识别和授权 {% data variables.product.prodname_github_apps %} 的用户](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)”中的步骤。

* 如果您的应用程序是 {% data variables.product.prodname_oauth_app %}，只要 {% data variables.product.product_name %} 将客户重定向到**安装 URL** 便开始授权。 请遵循“[授权 {% data variables.product.prodname_oauth_apps %}](/apps/building-oauth-apps/authorizing-oauth-apps/)”中的步骤。

对于任一类型的应用程序，第一步都是将客户重定向到 https://github.com/login/oauth/authorize。

客户完成授权后，您的应用程序将收到客户的 OAuth 访问令牌。 下一步将需要使用此令牌。

{% note %}

**注：**授权客户免费试用时，请授予他们与付费计划相同的访问权限。  试用期结束后，将其移至付费计划。

{% endnote %}

### 步骤 4. 预配客户帐户

您的应用程序必须为所有新购买预配客户帐户。 使用在[步骤 3. 授权](#step-3-authorization)中收到的客户访问令牌，调用“[列出经验证用户的订阅](/rest/reference/apps#list-subscriptions-for-the-authenticated-user)”端点。 响应将包括客户的 `account` 信息，并显示他们是否在使用免费试用版 (`on_free_trial`)。 使用此信息完成设置和预配。

{% data reusables.marketplace.marketplace-double-purchases %}

如果客户是为组织按用户购买应用程序，您可以提示客户选择哪些组织成员将有权访问所购买的应用程序。

您可以自定义组织成员获取应用程序访问权限的方式。 以下是一些建议：

**统一定价：**如果客户是使用统一定价为组织购买应用程序，您的应用程序可以通过 API [获取组织的所有成员](/rest/reference/orgs#list-organization-members)，并提示组织管理员选择哪些成员作为集成者一方的付费用户。

**每单位定价：**一种预配每单位席位的方法，允许用户在登录应用程序时占用一个席位。 一旦客户达到席位数阈值，您的应用程序就可以提醒用户他们需要通过 {% data variables.product.prodname_marketplace %} 进行升级。
