---
title: GitHub Enterprise Server でのアクションの使用について
intro: '{% data variables.product.prodname_ghe_server %} には、ほとんどの {% data variables.product.prodname_dotcom %} 作成のアクションが含まれ、{% data variables.product.prodname_dotcom_the_website %} および {% data variables.product.prodname_marketplace %} からの他のアクションへのアクセスを有効にするためのオプションがあります。'
redirect_from:
  - /enterprise/admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
  - /admin/github-actions/about-using-githubcom-actions-on-github-enterprise-server
versions:
  enterprise-server: '>=2.22'
topics:
  - enterprise
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data variables.product.prodname_actions %} ワークフローは_アクション_を使用できます。アクションは、ジョブを作成してワークフローをカスタマイズするために組み合わせることができる個々のタスクです。 独自のアクションの作成、または {% data variables.product.prodname_dotcom %} コミュニティによって共有されるアクションの使用やカスタマイズができます。

{% data reusables.actions.enterprise-no-internet-actions %}

### {% data variables.product.prodname_ghe_server %} にバンドルされている公式アクション

ほとんどの公式の {% data variables.product.prodname_dotcom %} 作成のアクションは自動的に {% data variables.product.prodname_ghe_server %} にバンドルされ、{% data variables.product.prodname_marketplace %} からある時点でキャプチャされます。 {% data variables.product.prodname_ghe_server %} インスタンスが更新されると、バンドルされている公式アクションも更新されます。

バンドルされている公式アクションには、`actions/checkout`, `actions/upload-artifact`、`actions/download-artifact`、`actions/labeler`、さまざまな `actions/setup-` などが含まれます。 Enterprise インスタンスに含まれるすべての公式アクションを確認するには、インスタンスの `Actions` Organization である (<code>https://<em>HOSTNAME</em>/actions</code>) を参照します。

各アクションは`actions` Organization 内のリポジトリであり、各アクションリポジトリには、ワークフローがアクションを参照するために使用できる必要なタグ、ブランチ、およびコミット SHA が含まれています。

{% note %}

**注釈:** セルフホストランナーを使用して {% data variables.product.prodname_ghe_server %} でセットアップアクション（`actions/setup-LANGUAGE` など）を使用する場合、インターネットにアクセスできないランナーでツールキャッシュをセットアップする必要がある場合があります。 詳しい情報については、「[インターネットアクセスを持たないセルフホストランナー上へのツールキャッシュのセットアップ](/enterprise/admin/github-actions/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access)」を参照してください。

{% endnote %}

### {% data variables.product.prodname_dotcom_the_website %} でアクションへのアクセスを設定する

Enterprise インスタンスのユーザが {% data variables.product.prodname_dotcom_the_website %} または {% data variables.product.prodname_marketplace %} から他のアクションにアクセスする必要がある場合、いくつかの設定オプションがあります。

推奨されるアプローチは、{% data variables.product.prodname_dotcom_the_website %} からのすべてのアクションへの自動アクセスを有効化することです。 これを行うには、{% data variables.product.prodname_github_connect %} を使用して {% data variables.product.prodname_ghe_server %} を {% data variables.product.prodname_ghe_cloud %} と統合します。 詳しい情報については、「[{% data variables.product.prodname_github_connect %} を使用した {% data variables.product.prodname_dotcom_the_website %} アクションへの自動アクセスを有効化する](/enterprise/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)」を参照してください。 {% data reusables.actions.enterprise-limit-actions-use %}

または、Enterprise で許可されるアクションをより厳密に制御する場合は、`actions-sync` ツールを使用してアクションを手動でダウンロードして Enterprise インスタンスに同期できます。 詳しい情報については、「[{% data variables.product.prodname_dotcom_the_website %} からのアクションを手動で同期する](/enterprise/admin/github-actions/manually-syncing-actions-from-githubcom)」を参照してください。
