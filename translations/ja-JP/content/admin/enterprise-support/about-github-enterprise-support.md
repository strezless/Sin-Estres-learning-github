---
title: GitHub Enterprise Supportについて
intro: '{% data variables.contact.github_support %} は、{% data variables.product.product_name %} で発生した問題のトラブルシューティングに役立ちます。'
redirect_from:
  - /enterprise/admin/enterprise-support/about-github-enterprise-support
versions:
  enterprise-server: '*'
  github-ae: '*'
---

{% note %}

**注釈**: {% data reusables.support.data-protection-and-privacy %}

{% endnote %}

### {% data variables.contact.enterprise_support %} について

{% data variables.product.product_name %} には英語 {% if enterpriseServerVersions contains currentVersion %} と日本語の {% data variables.contact.enterprise_support %} が含まれます{% endif %}。

{% if enterpriseServerVersions contains currentVersion %}
以下については、
{% data variables.contact.contact_enterprise_portal %} を通じて {% data variables.contact.enterprise_support %} に連絡できます。
 - {% data variables.product.product_name %} のインストールと利用
 - 調査対象となっているエラーの原因の特定および検証
{% endif %}

{% data variables.contact.enterprise_support %} から得られるすべてのメリットに加えて、{% if enterpriseServerVersions contains currentVersion %}{% data variables.contact.premium_support %}{% else %} では以下が提供{% data variables.product.product_name %}{% endif %}されます。
  - GitHub Enterprise サポートページを通じた書面による 24 時間 365 日のサポート
  - 24 時間 365 日の電話サポート
  - {% if currentVersion == "github-ae@latest" %}初期レスポンス時間が保証された{% endif %}拡張サービスレベルアグリーメント(SLA) {% if enterpriseServerVersions contains currentVersion %}{% endif %}
{% if currentVersion == "github-ae@latest" %}
  - 担当のテクニカルサービスアカウントマネージャー
  - 四半期ごとのサポートレビュー
  - 管理者サービスのマネジメント
{% else if enterpriseServerVersions contains currentVersion %}
  - テクニカルアカウントマネージャー
  - プレミアムコンテンツへのアクセス
  - 定期的なヘルスチェック
  - 管理者稼働時間のマネジメント
{% endif %}

{% data reusables.support.government-response-times-may-vary %}

{% if enterpriseServerVersions contains currentVersion %}
詳細は、「[{% data variables.product.prodname_ghe_server %}の{% data variables.contact.premium_support %}について](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)」を参照してください。
{% endif %}

{% data reusables.support.scope-of-support %}

### {% data variables.contact.enterprise_support %} への連絡

{% if enterpriseServerVersions contains currentVersion %}{% data variables.contact.contact_enterprise_portal %}{% elsif currentVersion == "github-ae@latest" %}{% data variables.contact.ae_azure_portal %}{% endif %} を通じて {% data variables.contact.enterprise_support %} に連絡し、問題を書面でレポートすることができます。 詳しい情報については、「[{% data variables.contact.github_support %} からの支援を受ける](/admin/enterprise-support/receiving-help-from-github-support)」を参照してください。

### 営業時間

{% if enterpriseServerVersions contains currentVersion %}
#### 英語でのサポート
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
緊急ではない標準的な問題の場合、英語でのサポートは週末とアメリカの休日をのぞく週 5 日 24 時間提供しています。 （アメリカの祝日は除く） 返信までの標準的な時間は 24 時間です。

急を要する問題については、{% else %}{% endif %}米国の祝日を含む、24時間年中無休で対応しています。 （アメリカの祝日は除く）

{% data reusables.support.government-response-times-may-vary %}

{% if enterpriseServerVersions contains currentVersion  %}
#### 日本語でのサポート

緊急ではない問題については、日本語でのサポートを月曜日から金曜日、日本時間午前9:00から午後5:00まで提供します。これは日本の国民の祝日を除きます。 緊急の問題については、アメリカの祝日を含む、24時間年中無休で英語でサポートを提供しています。 （アメリカの祝日は除く）

また、 {% data variables.contact.enterprise_support %} におけるアメリカおよび日本の祝祭日は「[休日のスケジュール](#holiday-schedules)」を参照してください。{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### 休日のスケジュール

急を要する問題については、アメリカおよび日本の祝日を含め、24時間年中無休で英語で対応します。 {% if enterpriseServerVersions contains currentVersion  %} と 日本{% endif %} の祝祭日。

#### アメリカ合衆国の祝日

{% data variables.contact.enterprise_support %} は、以下の米国の祝日を休日としています。 {% if enterpriseServerVersions contains currentVersion  %}、ただし、緊急チケットに対してはグローバルサポートチームが対応可能です{% endif %}。

| アメリカ合衆国の祝日 祝日               | 対象となる日付                     |
| --------------------------- | --------------------------- |
| New Year's Day              | January 1                   |
| Martin Luther King, Jr. Day | Third Monday in January     |
| Presidents' Day             | Third Monday in February    |
| Memorial Day                | Last Monday in May          |
| Independence Day            | July 4                      |
| Labor Day                   | First Monday in September   |
| Veterans Day                | November 12                 |
| Thanksgiving Day            | Fourth Thursday in November |
| Day after Thanksgiving      | Fourth Friday in November   |
| Christmas Eve               | December 24                 |
| Christmas Day               | December 25                 |
| Day after Christmas         | December 28                 |
| New Year's Eve              | December 31                 |

#### 日本の祝日

{% data variables.contact.enterprise_support %} は、12月28日～1月3日、および「[国民の祝日について-内閣府](https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html)」に記載されている祝日は、日本語サポートを提供していません。

{% data reusables.enterprise_enterprise_support.installing-releases %}
{% endif %}

### サポートチケットへの優先度の割り当て

{% data variables.contact.enterprise_support %} へのお問い合わせ時に、チケットの優先度を {% data variables.product.support_ticket_priority_urgent %}、{% data variables.product.support_ticket_priority_high %}、{% data variables.product.support_ticket_priority_normal %}、または {% data variables.product.support_ticket_priority_low %} の 4 つから選択できます。

{% data reusables.support.github-can-modify-ticket-priority %}

{% if enterpriseServerVersions contains currentVersion  %}
{% data reusables.support.ghes-priorities %}
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.support.ghae-priorities %}
{% endif %}

### サポートチケットの解決とクローズ

{% data reusables.support.enterprise-resolving-and-closing-tickets %}

### 参考リンク

{% if enterpriseServerVersions contains currentVersion %}
- [{% data variables.product.prodname_ghe_server %} ライセンスアグリーメント](https://enterprise.github.com/license)のサポートに関するセクション 10{% endif %}
- 「[{% data variables.contact.github_support %} からの支援を受ける](/admin/enterprise-support/receiving-help-from-github-support)」{% if enterpriseServerVersions contains currentVersion %}
- 「[チケットのサブミットの準備](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)」{% endif %}
- [チケットのサブミット](/enterprise/admin/guides/enterprise-support/submitting-a-ticket)
