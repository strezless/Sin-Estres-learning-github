---
title: Enabling automatic access to GitHub.com actions using GitHub Connect
intro: 'Enterprise インスタンスの {% data variables.product.prodname_actions %} が {% data variables.product.prodname_dotcom_the_website %} のアクションを使用できるようにするには、{% data variables.product.product_location_enterprise %} を {% data variables.product.prodname_ghe_cloud %} に接続します。'
permissions: '接続された {% data variables.product.prodname_ghe_cloud %} Organization または Enterprise アカウントの所有者でもある {% data variables.product.prodname_ghe_server %} のサイト管理者は、すべての {% data variables.product.prodname_dotcom_the_website %} アクションへのアクセスを有効にできます。'
redirect_from:
  - /enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

デフォルトでは、{% data variables.product.prodname_ghe_server %} の {% data variables.product.prodname_actions %} ワークフローは {% data variables.product.prodname_dotcom_the_website %} または [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace?type=actions) から直接アクションを使用できません。

To make all actions from {% data variables.product.prodname_dotcom_the_website %} available on your enterprise instance, you can use {% data variables.product.prodname_github_connect %} to integrate {% data variables.product.prodname_ghe_server %} with {% data variables.product.prodname_ghe_cloud %}. For other ways of accessing actions from {% data variables.product.prodname_dotcom_the_website %}, see "[About using actions on {% data variables.product.prodname_ghe_server %}](/admin/github-actions/about-using-actions-on-github-enterprise-server)."

### すべての {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスを有効化する

{% data variables.product.product_location_enterprise %} 上の {% data variables.product.prodname_dotcom_the_website %} からのすべてのアクションへのアクセスを有効にする前に、{% data variables.product.product_location_enterprise %} を {% data variables.product.prodname_dotcom_the_website %} に接続する必要があります。 詳細は、「[{% data variables.product.prodname_ghe_server %}を{% data variables.product.prodname_ghe_cloud %}に接続する](/enterprise/{{ currentVersion }}/admin/guides/installation/connecting-github-enterprise-server-to-github-enterprise-cloud)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
1. Under "Server can use actions from GitHub.com in workflows runs", use the drop-down menu and select **Enabled**. ![Drop-down menu to actions from GitHub.com in workflows runs](/assets/images/enterprise/site-admin-settings/enable-marketplace-actions-drop-down.png)
1. {% data reusables.actions.enterprise-limit-actions-use %}
