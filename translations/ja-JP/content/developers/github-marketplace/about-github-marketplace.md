---
title: GitHub Marketplaceについて
intro: 'アプリケーションやアクションを全{% data variables.product.product_name %}ユーザと共有できる{% data variables.product.prodname_marketplace %}について学びましょう。'
redirect_from:
  - /apps/marketplace/getting-started/
  - /marketplace/getting-started
versions:
  free-pro-team: '*'
---

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace)は、{% data variables.product.prodname_dotcom %}のワークフローを拡張し、改善したい開発者とあなたをつなぎます。 {% data variables.product.prodname_marketplace %}で利用する、開発者のための無料及び有料のツールをリストできます。 {% data variables.product.prodname_marketplace %}は、開発者に{% data variables.product.prodname_actions %}とアプリケーションという2種類のツールを提供します。それぞれのツールは、{% data variables.product.prodname_marketplace %}への追加に際して異なるステップを必要とします。

### GitHub Actions

{% data reusables.actions.actions-not-verified %}

{% data variables.product.prodname_marketplace %}における{% data variables.product.prodname_actions %}の公開について学ぶには、 「[アクションをGitHub Marketplaceで公開する](/actions/creating-actions/publishing-actions-in-github-marketplace)」を参照してください。

### アプリケーション

誰でも他のユーザと{% data variables.product.prodname_marketplace %}でアプリケーションを共有できますが、有料プランを含めることができるのは{% data variables.product.company_short %}に検証されたユーザのみです。 詳しい情報については、「[検証済みの作者について](/developers/github-marketplace/about-verified-creators)」を参照してください。

{% data variables.product.prodname_marketplace %}のアプリケーション作成に関心があり、{% data variables.product.prodname_github_apps %}や{% data variables.product.prodname_oauth_app %}に慣れていない場合は、「[{% data variables.product.prodname_github_apps %}を構築する](/developers/apps/building-github-apps)」や「[{% data variables.product.prodname_oauth_app %}を構築する](/developers/apps/building-oauth-apps)」を参照してください。

{% data reusables.marketplace.github_apps_preferred %}、{% data variables.product.prodname_marketplace %}ではOAuthと{% data variables.product.prodname_github_app %}をどちらもリストできます。 詳しい情報については、「[{% data variables.product.prodname_github_apps %}と{% data variables.product.prodname_oauth_app %}の違い](/apps/differences-between-apps/)」および「[{% data variables.product.prodname_oauth_app %}を{% data variables.product.prodname_github_apps %}に移行する](/apps/migrating-oauth-apps-to-github-apps/)」を参照してください。

{% data variables.product.prodname_marketplace %}に関する質問がある場合は、{% data variables.contact.contact_support %}に直接お問い合わせください。

### アプリケーションを{% data variables.product.prodname_marketplace %}に公開する

アプリケーションを作成したら、{% data variables.product.prodname_marketplace %}に公開して他のユーザと共有できます。 その手順を要約すると以下の通りです。

1. 他のリポジトリで期待通りに動作するよう、またベストプラクティスのガイドラインに沿うよう、アプリケーションをよく確認します。 詳しい情報については、「[アプリケーションのセキュリティにおけるベストプラクティス](/developers/github-marketplace/security-best-practices-for-apps)」および「[アプリケーションを載せるための要件](/developers/github-marketplace/requirements-for-listing-an-app#best-practice-for-customer-experience)」を参照してください。

1. ユーザの支払いリクエストを追跡するため、アプリケーションにwebhookイベントを追加します。 {% data variables.product.prodname_marketplace %} API、webhookイベント、および支払いリクエストの詳しい情報については、「[アプリケーションでの{% data variables.product.prodname_marketplace %} APIの利用](/developers/github-marketplace/using-the-github-marketplace-api-in-your-app)」を参照してください。

1. ドラフトの{% data variables.product.prodname_marketplace %}リストを作成します。 詳しい情報については、「[アプリケーションのリストのドラフト](/developers/github-marketplace/drafting-a-listing-for-your-app)」を参照してください。

1. 価格プランを追加します。 詳しい情報については、「[リストに対する価格プランの設定](/developers/github-marketplace/setting-pricing-plans-for-your-listing)」を参照してください。

1. 無料または有料アプリケーションとして{% data variables.product.prodname_marketplace %}に掲載するための要件を満たしているかどうか確認します。 詳しい情報については、「[アプリケーションを載せるための要件](/developers/github-marketplace/requirements-for-listing-an-app)」を参照してください。

1. 「[{% data variables.product.prodname_marketplace %}開発者同意書](/articles/github-marketplace-developer-agreement/)」の条項を読み、同意します。

1. {% data variables.product.prodname_marketplace %}に掲載するリストをサブミットし、アプリケーションを販売したい場合は検証をリクエストします。 詳しい情報については、「[公開するリストをサブミットする](/developers/github-marketplace/submitting-your-listing-for-publication)」を参照してください。

質問や追加の手順について、オンボーディング担当者がご連絡します。 たとえば、有料プランを追加した場合は、検証プロセスを完了し、財務的オンボーディングを完了させる必要があります。 リストが承認されると、アプリケーションはただちに{% data variables.product.prodname_marketplace %}で公開されます。

### アプリケーションの実績を確認する

掲載されているアプリケーションのメトリクスや取引情報にアクセスできます。 詳しい情報については、以下を参照してください。

- [リストのメトリクスの参照](/developers/github-marketplace/viewing-metrics-for-your-listing)
- [リストの取引の表示](/developers/github-marketplace/viewing-transactions-for-your-listing)
