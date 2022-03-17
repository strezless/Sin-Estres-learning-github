---
title: 为您的组织设置 GitHub Sponsors
intro: '您的组织可以加入 {% data variables.product.prodname_sponsors %} 以接受对您工作的付款。'
redirect_from:
  - /articles/setting-up-github-sponsorship-for-your-organization
  - /articles/receiving-sponsorships-as-a-sponsored-organization
permissions: '组织所有者可以为组织设置 {% data variables.product.prodname_sponsors %}。'
versions:
  free-pro-team: '*'
topics:
  - sponsors
---

### 加入 {% data variables.product.prodname_sponsors %}

{% data reusables.sponsors.you-can-be-a-sponsored-organization %} {% data reusables.sponsors.stripe-supported-regions %}

收到邀请您的组织加入 {% data variables.product.prodname_sponsors %} 的邀请后，您可以完成以下步骤以成为被赞助的组织。

要作为组织外部的个人贡献者加入 {% data variables.product.prodname_sponsors %}，请参阅“[为用户帐户设置 {% data variables.product.prodname_sponsors %}](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)”。

{% data reusables.sponsors.navigate-to-github-sponsors %}
{% data reusables.sponsors.view-eligible-accounts %}
3. 在组织的右侧，单击 **Join the waitlist（加入等待列表）**。
{% data reusables.sponsors.contact-info %}
{% data reusables.sponsors.accept-legal-terms %}

### 填写被赞助组织资料

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-profile-tab %}
{% data reusables.sponsors.short-bio %}
{% data reusables.sponsors.add-introduction %}
{% data reusables.sponsors.meet-the-team %}
{% data reusables.sponsors.edit-featured-work %}
{% data reusables.sponsors.opt-in-to-being-featured %}
{% data reusables.sponsors.save-profile %}

### 创建赞助等级

{% data reusables.sponsors.tier-details %}

{% data reusables.sponsors.maximum-tier %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.navigate-to-sponsor-tiers-tab %}
{% data reusables.sponsors.click-add-tier %}
{% data reusables.sponsors.tier-price-description %}
{% data reusables.sponsors.save-tier-draft %}
{% data reusables.sponsors.review-and-publish-tier %}
{% data reusables.sponsors.add-more-tiers %}

### 提交您的银行信息

作为被赞助组织，您必须在受支持的区域接收支付到组织专用银行帐户的赞助款。 您可以通过如 [Open Collective](https://opencollective.com/) 和 [Stripe Atlas](https://stripe.com/atlas) 之类的服务获得企业银行帐户。 您的组织合法经营的区域与您银行帐户所在的区域必须匹配。 为组织设置 {% data variables.product.prodname_sponsors %} 的人员也必须居住在同一受支持的区域。 {% data reusables.sponsors.stripe-supported-regions %}

{% data reusables.sponsors.double-check-stripe-info %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.create-stripe-account %}

有关使用 Open Collective 设置 Stripe Connect 的更多信息，请参阅 Open Collective 文档中的[设置 {% data variables.product.prodname_sponsors %}](https://docs.opencollective.com/help/collectives/github-sponsors)。

### 提交您的税务信息

{% data reusables.sponsors.tax-form-information-org %}

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.settings-tab %}
{% data reusables.sponsors.country-of-residence %}
{% data reusables.sponsors.overview-tab %}
{% data reusables.sponsors.tax-form-link %}

### 在您的 {% data variables.product.prodname_dotcom %} 帐户上启用双重身份验证 (2FA)。

在您的组织成为被赞助的组织之前，您必须在 {% data variables.product.product_name %} 帐户上启用 2FA。 更多信息请参阅“[配置双重身份验证](/articles/configuring-two-factor-authentication)”。

### 向 {% data variables.product.prodname_dotcom %} 提交申请以请求批准

{% data reusables.sponsors.navigate-to-sponsors-dashboard %}
{% data reusables.sponsors.request-approval %}

{% data reusables.sponsors.github-review-app %}

### 延伸阅读
- "[关于 {% data variables.product.prodname_sponsors %}](/articles/about-github-sponsors)"
- "[通过 {% data variables.product.prodname_sponsors %} 接受赞助](/github/supporting-the-open-source-community-with-github-sponsors/receiving-sponsorships-through-github-sponsors)"
