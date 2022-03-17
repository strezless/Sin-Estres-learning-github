---
title: Enterprise アカウントのプランおよび利用状況を表示する
intro: 'Enterprise アカウントの、現在のプラン、ライセンスの利用、請求書、支払い履歴、その他支払い情報を表示できます。'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: 'Enterprise オーナーと支払いマネージャーは、Enterprise アカウントの支払い設定すべてに対するアクセスおよび管理が可能です。'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Enterprise アカウントの支払いについて

現時点では、Enterprise アカウントは請求書で支払いを行っている {% data variables.product.prodname_enterprise %} のお客様が利用できます。 Enterprise アカウントに接続されたすべての Organization および {% data variables.product.prodname_ghe_server %} インスタンスの支払いは、すべての有料の {% data variables.product.prodname_dotcom_the_website %} サービス (これには Organization の有料ライセンス、{% data variables.large_files.product_name_long %} のデータパック、{% data variables.product.prodname_marketplace %} アプリケーションに対するプランが含まれます) に対する単一の支払いに集約されます。

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} For more information, see "[Connecting an Azure subscription to your enterprise](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)."{% endif %}

For more information about managing billing managers, see "[Inviting people to manage your enterprise](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)."

### Enterprise アカウントのプランおよび利用状況を表示する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Under "User
{% if currentVersion == "free-pro-team@latest" %}Licenses{% else %}licenses{% endif %}", view your total licenses, number of consumed licenses, and your subscription expiration date.
  {% if currentVersion == "free-pro-team@latest" %}![License and subscription information in enterprise billing settings](/assets/images/help/business-accounts/billing-license-info.png){% else %}
  ![Enterprise 支払い設定のライセンスおよびプラン情報](/assets/images/enterprise/enterprises/enterprise-server-billing-license-info.png){% endif %}
1. Optionally, to view details for license usage or download a {% if currentVersion == "free-pro-team@latest" %}CSV{% elsif enterpriseServerVersions contains currentVersion %}JSON{% endif %} file with license details{% if currentVersion == "free-pro-team@latest" %}, to the right of "User Licenses"{% endif %}, click **View {% if currentVersion == "free-pro-team@latest" %}details{% elsif enterpriseServerVersions contains currentVersion %}users{% endif %}** or {% if currentVersion == "free-pro-team@latest" %}{% octicon "download" aria-label="The download icon" %}{% elsif enterpriseServerVersions contains currentVersion %}**Export license usage**{% endif %}.{% if currentVersion == "free-pro-team@latest" %} !["View details" button and button with download icon to the right of "User Licenses"](/assets/images/help/business-accounts/billing-license-info-click-view-details-or-download.png){% endif %}
