---
title: webhook イベントとペイロード
intro: 'webhook イベントごとに、イベントの発生日時、ペイロードの例、およびペイロードオブジェクトパラメータに関する説明を確認できます。'
product: '{% data reusables.gated-features.enterprise_account_webhooks %}'
redirect_from:
  - /early-access/integrations/webhooks/
  - /v3/activity/events/types/
  - /webhooks/event-payloads
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


{% if currentVersion == "free-pro-team@latest" %}

{% endif %}

{% data reusables.webhooks.webhooks_intro %}

このページに表示されているイベントをサブスクライブする webhook を作成できます。 各 webhook イベントには、webhook プロパティの説明とペイロードの例が含まれています。 詳しい情報については「[webhook を作成する](/webhooks/creating/)」を参照してください。

### webhook ペイロードオブジェクトの共通プロパティ

各 webhook イベントペイロードには、イベント固有のプロパティも含まれています。 固有のプロパティは、個々のイベントタイプのセクションにあります。

| キー       | 種類       | 説明                                                                     |
| -------- | -------- | ---------------------------------------------------------------------- |
| `action` | `string` | ほとんどの webhook ペイロードには、イベントをトリガーした特定のアクティビティを含む `action` プロパティが含まれています。 |
{% data reusables.webhooks.sender_desc %} このプロパティは、すべての webhook ペイロードに含まれています。
{% data reusables.webhooks.repo_desc %} イベントがリポジトリ内のアクティビティから発生した場合、webhook ペイロードには `repository` プロパティが含まれます。
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %} 詳しい情報については、「[{% data variables.product.prodname_github_app %} を構築する](/apps/building-github-apps/)」を参照してください。

webhook イベントの一意のプロパティは、[イベント API](/rest/reference/activity#events) を使用するときに `payload` プロパティにあるプロパティと同じです。 例外の 1 つは、[`push` イベント](#push) です。 `push` イベント webhook ペイロードの一意のプロパティとイベント API の`payload` プロパティは異なります。 webhook ペイロードには、より詳細な情報が含まれています。

{% tip %}

**注釈:** ペイロードの上限は 25 MB です。 イベントにより大きなペイロードが生成された場合、webhook は起動しません。 これは、たとえば多数のブランチまたはタグが一度にプッシュされた場合の `create` イベントで発生する可能性があります。 確実にデリバリが行われるよう、ペイロードサイズを監視することをお勧めします。

{% endtip %}

#### デリバリヘッダ

webhook によって設定されている URL エンドポイントに配信される HTTP POST ペイロードには、いくつかの特別なヘッダが含まれています。

| ヘッダ                           | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `X-GitHub-Event`              | デリバリをトリガーしたイベントの名前。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `X-GitHub-Delivery`           | デリバリを識別するための [GUID](http://en.wikipedia.org/wiki/Globally_unique_identifier)。{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
| `X-GitHub-Enterprise-Version` | HTTP POST ペイロードを送信した {% data variables.product.prodname_ghe_server %} インスタンスのバージョン。                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `X-GitHub-Enterprise-Host`    | HTTP POST ペイロードを送信した {% data variables.product.prodname_ghe_server %} インスタンスのホスト名。{% endif %}{% if currentVersion != "github-ae@latest" %}
| `X-Hub-Signature`             | このヘッダは、webhook が [`secret`](/rest/reference/repos#create-hook-config-params) で設定されている場合に送信されます。 これはリクエスト本文の HMAC hex digest であり、SHA-1 ハッシュ関数と HMAC `key`としての `secret` を使用して生成されます。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} `X-Hub-Signature` は、既存の統合との互換性のために提供されているため、より安全な `X-Hub-Signature-256` を代わりに使用することをお勧めします。{% endif %}{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `X-Hub-Signature-256`         | このヘッダは、webhook が [`secret`](/rest/reference/repos#create-hook-config-params) で設定されている場合に送信されます。 これはリクエスト本文の HMAC hex digest であり、SHA-256 ハッシュ関数と HMAC `key` としての `secret` を使用して生成されます。{% endif %}

また、リクエストの `User-Agent` には、プレフィックスに `GitHub-Hookshot/` が付けられます。

#### デリバリの例

```shell
> POST /payload HTTP/1.1

> Host: localhost:4567
> X-GitHub-Delivery: 72d3162e-cc78-11e3-81ab-4c9367dc0958{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
> X-GitHub-Enterprise-Version: 2.15.0
> X-GitHub-Enterprise-Host: example.com{% endif %}{% if currentVersion != "github-ae@latest" %}
> X-Hub-Signature: sha1=7d38cdd689735b008b3c702edd92eea23791c5f6{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
> X-Hub-Signature-256: sha256=d57c68ca6f92289e6987922ff26938930f6e66a2d161ef06abdf1859230aa23c{% endif %}
> User-Agent: GitHub-Hookshot/044aadd
> Content-Type: application/json
> Content-Length: 6615
> X-GitHub-Event: issues

> {
>   "action": "opened",
>   "issue": {
>     "url": "{% data variables.product.api_url_pre %}/repos/octocat/Hello-World/issues/1347",
>     "number": 1347,
>     ...
>   },
>   "repository" : {
>     "id": 1296269,
>     "full_name": "octocat/Hello-World",
>     "owner": {
>       "login": "octocat",
>       "id": 1,
>       ...
>     },
>     ...
>   },
>   "sender": {
>     "login": "octocat",
>     "id": 1,
>     ...
>   }
> }
```

### check_run

{% data reusables.webhooks.check_run_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

#### 利用の可否

- リポジトリ webhook は、リポジトリ内の `created` および `completed` イベントタイプのペイロードのみを受信します
- Organization webhook は、リポジトリで `created` および `completed` イベントタイプのペイロードのみを受信します
- `checks:read` 権限のある {% data variables.product.prodname_github_app %} は、アプリがインストールされているリポジトリで発生する `created` および `completed` イベントのペイロードを受信します。 `rerequested` および `requested_action` イベントタイプを受信するには、アプリケーションに `checks:write` 権限が必要です。 `rerequested` および `requested_action` イベントタイプのペイロードは、リクエストされている {% data variables.product.prodname_github_app %} にのみ送信されます。 `checks:write` のある {% data variables.product.prodname_github_app %} は、この webhook イベントに自動的にサブスクライブされます。

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.check_run_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.check_run.created }}

### check_suite

{% data reusables.webhooks.check_suite_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

#### 利用の可否

- リポジトリ webhook は、リポジトリ内の `completed` イベントタイプのペイロードのみを受信します
- Organization webhook は、リポジトリで `completed` イベントタイプのペイロードのみを受信します
- `checks:read` 権限のある {% data variables.product.prodname_github_app %} は、アプリがインストールされているリポジトリで発生する `created` および `completed` イベントのペイロードを受信します。 `requested` および `rerequested` イベントタイプを受信するには、アプリケーションに `checks:write` 権限が必要です。 `requested` および `rerequested` イベントタイプのペイロードは、リクエストされている {% data variables.product.prodname_github_app %} にのみ送信されます。 `checks:write` のある {% data variables.product.prodname_github_app %} は、この webhook イベントに自動的にサブスクライブされます。

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.check_suite_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.check_suite.completed }}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### code_scanning_alert

{% data reusables.webhooks.code_scanning_alert_event_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `security_events :read` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.code_scanning_alert_event_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
`sender` | `object` | `action` が `reopened_by_user` または `closed_by_user` の場合、`sender` オブジェクトは、イベントをトリガーしたユーザになります。 `sender` オブジェクトは、他のすべてのアクションでは空になっています。

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.code_scanning_alert.reopened }}

### commit_comment

{% data reusables.webhooks.commit_comment_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `contents` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.commit_comment_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.commit_comment.created }}
{% endif %}

### content_reference

{% data reusables.webhooks.content_reference_short_desc %}

webhook イベントは、登録したドメインの特異性に基づいてトリガーされます。 たとえば、サブドメイン (`https://subdomain.example.com`) を登録すると、サブドメインの URL のみがこのイベントをトリガーします。 ドメイン (`https://example.com`) を登録すると、ドメインとすべてのサブドメインの URL がこのイベントをトリガーします。 新しいコンテンツ添付ファイルを作成するには、「[コンテンツ添付ファイルの作成](/rest/reference/apps#create-a-content-attachment)」を参照してください。

このイベントを受信できるのは {% data variables.product.prodname_github_app %} のみです。 {% data variables.product.prodname_github_app %} には、このイベントをサブスクライブするための `content_references` `write` 権限が必要です。

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.content_reference.created }}

### create

{% data reusables.webhooks.create_short_desc %}

{% note %}

**注釈:** 一度に 3 つ以上のタグをプッシュすると、このイベントの webhook を受信しません。

{% endnote %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `contents` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.create_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.create }}

### delete

{% data reusables.webhooks.delete_short_desc %}

{% note %}

**注釈:** 一度に 3 つ以上のタグを削除すると、このイベントの webhook を受信しません。

{% endnote %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `contents` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.delete_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.delete }}

### deploy_key

{% data reusables.webhooks.deploy_key_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.deploy_key_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.deploy_key.created }}

### deployment

{% data reusables.webhooks.deployment_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `deployments` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

| キー           | 種類                                                                                                                                          | 説明                                                 |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
| `action`     | `string`                                                                                                                                    | 実行されたアクション。 `created` を指定可。{% endif %}
| `deployment` | `オブジェクト`                                                                                                                                    | [デプロイメント](/rest/reference/repos#list-deployments)。 |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.deployment }}

### deployment_status

{% data reusables.webhooks.deployment_status_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `deployments` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

| キー                                 | 種類                                                                                                                                          | 説明                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
| `action`                           | `string`                                                                                                                                    | 実行されたアクション。 `created` を指定可。{% endif %}
| `deployment_status`                | `オブジェクト`                                                                                                                                    | [デプロイメントステータス](/rest/reference/repos#list-deployment-statuses)。      |
| `deployment_status["state"]`       | `string`                                                                                                                                    | 新しい状態。 `pending`、`success`、`failure`、`error` のいずれかを指定可。              |
| `deployment_status["target_url"]`  | `string`                                                                                                                                    | ステータスに追加されたオプションのリンク。                                                |
| `deployment_status["description"]` | `string`                                                                                                                                    | オプションの人間可読の説明がステータスに追加。                                              |
| `deployment`                       | `オブジェクト`                                                                                                                                    | このステータスが関連付けられている [デプロイメント](/rest/reference/repos#list-deployments)。 |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.deployment_status }}

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

### Enterprise

{% data reusables.webhooks.enterprise_short_desc %}

#### 利用の可否

- GitHub Enterprise webhook。 詳しい情報については「[グローバル webhook](/rest/reference/enterprise-admin#global-webhooks/)」を参照してください。

#### webhook ペイロードオブジェクト

| キー       | 種類       | 説明                                                                            |
| -------- | -------- | ----------------------------------------------------------------------------- |
| `action` | `string` | 実行されたアクション。 `anonymous_access_enabled`、`anonymous_access_disabled` のいずれかを指定可。 |

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.enterprise.anonymous_access_enabled }}

{% endif %}

### フォーク

{% data reusables.webhooks.fork_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `contents` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.fork_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.fork }}

### github_app_authorization

{% data variables.product.prodname_github_app %} の承認を取り消すと、このイベントが発生します。 {% data variables.product.prodname_github_app %} は、デフォルトでこの webhook を受信し、このイベントをサブスクライブ解除できません。

{% data reusables.webhooks.authorization_event %}{% data variables.product.prodname_github_app %} 認証を必要とするユーザからサーバーへのリクエストの詳細については、「[{% data variables.product.prodname_github_app %} のユーザーの識別と認証](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)」を参照してください。

#### 利用の可否

- {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

| キー       | 種類       | 説明                          |
| -------- | -------- | --------------------------- |
| `action` | `string` | 実行されたアクション。 `revoked` を指定可。 |
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.github_app_authorization.revoked }}

### gollum

{% data reusables.webhooks.gollum_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `contents` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.gollum_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.gollum }}

### インストール

{% data reusables.webhooks.installation_short_desc %}

{% note %}

**Note:** This event replaces an event that will be deprecated. When you subscribe to this event, you will also receive the deprecated event `integration_installation` until it's permanently removed.

{% endnote %}

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**注釈:** {% data reusables.pre-release-program.suspend-installation-beta %} 詳しい情報については、「[{% data variables.product.prodname_github_app %} のインストールをサスペンドする](/apps/managing-github-apps/suspending-a-github-app-installation/)」を参照してください。

{% endnote %}
{% endif %}

#### 利用の可否

- {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.installation_properties %}
{% data reusables.webhooks.app_always_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.installation.deleted }}

### installation_repositories

{% data reusables.webhooks.installation_repositories_short_desc %}

{% note %}

`repository` property when the event occurs from activity in a repository.

{% endnote %}

#### 利用の可否

- {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.installation_repositories_properties %}
{% data reusables.webhooks.app_always_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.installation_repositories.added }}

### issue_comment

{% data reusables.webhooks.issue_comment_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `issues` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.issue_comment_webhook_properties %}
{% data reusables.webhooks.issue_comment_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.issue_comment.created }}

### issues

{% data reusables.webhooks.issues_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `issues` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.issue_webhook_properties %}
{% data reusables.webhooks.issue_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Issue 編集時の webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.issues.edited }}

### ラベル

{% data reusables.webhooks.label_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `metadata` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

| キー                     | 種類       | 説明                                                  |
| ---------------------- | -------- | --------------------------------------------------- |
| `action`               | `string` | 実行されたアクション. `created`、`edited`、`deleted` のいずれかを指定可。 |
| `label`                | `オブジェクト` | ラベルが追加された。                                          |
| `changes`              | `オブジェクト` | アクションが `edited` の場合のラベルへの変更。                        |
| `changes[name][from]`  | `string` | アクションが`edited`だった場合の、以前のバージョンの名前。                   |
| `changes[color][from]` | `string` | アクションが `edited` の場合の以前のバージョンの色。                     |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.label.deleted }}

{% if currentVersion == "free-pro-team@latest" %}
### marketplace_purchase

GitHub Marketplace の購入に関連するアクティビティ。 {% data reusables.webhooks.action_type_desc %} 詳しい情報については、「[GitHub Marketplace](/marketplace/)」を参照してください。

#### 利用の可否

- {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

| キー       | 種類       | 説明                                                                                                            |
| -------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| `action` | `string` | [GitHub Marketplace](https://github.com/marketplace) プランに対して実行されたアクション。 次のいずれかになります。<ul><li>「purchased」- GitHub Marketplace プランを購入しました。 変更はアカウントですぐに有効になります。</li><li>「pending_change」- GitHub Marketplace プランをダウングレードまたはキャンセルしたときに、アカウントで変更が発生することを示す「pending_change」イベントを受け取ります。 新しいプランまたはキャンセルは、支払いサイクルの終了時に有効になります。  「キャンセル」または「変更」イベントタイプは、支払いサイクルが終了し、キャンセルまたは新しいプランが有効になると送信されます。</li><li>「pending_change_cancelled」- 保留中の変更をキャンセルしました。 保留中の変更には、支払いサイクルの終了時に有効になるプランのキャンセルとダウングレードが含まれます。 </li><li>「changed」- GitHub Marketplace プランをアップグレードまたはダウングレードしたため、変更がアカウントですぐに有効になります。</li><li>「cancelled」- GitHub Marketplace プランをキャンセルし、最後の支払いサイクルが終了しました。 変更はアカウントですぐに有効になります。</li></ul> |

このペイロードと各タイプの `action` のペイロードの詳細については、「[{% data variables.product.prodname_marketplace %} webhook イベント](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/)」を参照してください。

#### プラン購入時の webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

{% endif %}

### member

{% data reusables.webhooks.member_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `members` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.member_webhook_properties %}
{% data reusables.webhooks.member_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.member.added }}

### membership

{% data reusables.webhooks.membership_short_desc %}

#### 利用の可否

- Organization webhook
- `members` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.membership_properties %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.membership.removed }}

### メタ情報

このイベントが設定されている webhook が削除されました。 このイベントは、イベントがインストールされている特定のフックへの変更のみをリッスンします。 したがって、メタイベントを受信するフックごとに選択する必要があります。

#### 利用の可否

- リポジトリ webhook
- Organization webhook

#### webhook ペイロードオブジェクト

| キー        | 種類        | 説明                                                                                                           |
| --------- | --------- | ------------------------------------------------------------------------------------------------------------ |
| `action`  | `string`  | 実行されたアクション。 `deleted` を指定可。                                                                                  |
| `hook_id` | `integer` | 変更された webhook の ID。                                                                                          |
| `フック`     | `オブジェクト`  | 変更された webhook。 これには、webhook のタイプ (リポジトリ、Organization、ビジネス、アプリケーション、または GitHub Marketplace) に基づいて異なるキーが含まれます。 |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.meta.deleted }}

### マイルストーン

{% data reusables.webhooks.milestone_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `pull_requests` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.milestone_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.milestone.created }}

### Organization

{% data reusables.webhooks.organization_short_desc %}

#### 利用の可否

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
- GitHub Enterprise webhook は、`created` および `deleted` イベントのみを受信します。 詳しい情報については「[グローバル webhook](/rest/reference/enterprise-admin#global-webhooks/)」を参照してください。{% endif %}
- Organization webhook は、`deleted`、`added`、`removed`、`renamed`、`invited` イベントのみを受信します
- `members` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

| キー           | 種類       | 説明                                                                                                                                                                                                                  |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`     | `string` | 実行されたアクション. {% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %} `created`、{% endif %} `deleted`、`renamed`、`member_added`、`member_removed`、`member_invited` のいずれかを指定可。 |
| `招待`         | `オブジェクト` | アクションが `member_invited` の場合、ユーザへの招待またはメール。                                                                                                                                                                          |
| `membership` | `オブジェクト` | ユーザと Organization 間のメンバーシップ。  アクションが `member_invited` の場合は存在しません。                                                                                                                                                   |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.organization.member_added }}

{% if currentVersion == "free-pro-team@latest" %}

### org_block

{% data reusables.webhooks.org_block_short_desc %}

#### 利用の可否

- Organization webhook
- `organization_administration` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

| キー             | 種類       | 説明                                           |
| -------------- | -------- | -------------------------------------------- |
| `action`       | `string` | 実行されたアクション。 `blocked`、`unblocked` のいずれかを指定可。 |
| `blocked_user` | `オブジェクト` | ブロックまたはブロック解除されたユーザに関する情報。                   |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.org_block.blocked }}

### package

{% data variables.product.prodname_registry %} に関連するアクティビティ。 {% data reusables.webhooks.action_type_desc %} {% data variables.product.prodname_registry %} の詳細については、「[{% data variables.product.prodname_registry %} を使用してパッケージを管理する](/github/managing-packages-with-github-packages)」を参照してください。

#### 利用の可否

- リポジトリ webhook
- Organization webhook

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.package_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.package.published }}
{% endif %}

### page_build

{% data reusables.webhooks.page_build_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `pages` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

| キー    | 種類        | 説明                                                                         |
| ----- | --------- | -------------------------------------------------------------------------- |
| `id`  | `integer` | ページビルドの一意の識別子。                                                             |
| `ビルド` | `オブジェクト`  | [GitHub Pages ビルドのリスト](/rest/reference/repos#list-github-pages-builds) 自体。 |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.page_build }}

### ping

{% data reusables.webhooks.ping_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- {% data variables.product.prodname_github_app %} は、アプリの登録に使用される `app_id` を使用して ping イベントを受信します

#### webhook ペイロードオブジェクト

| キー             | 種類        | 説明                                                                                                                                                                                                                                                                                                                 |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `zen`          | `string`  | GitHub zen のランダムな文字列。                                                                                                                                                                                                                                                                                              |
| `hook_id`      | `integer` | ping をトリガーした webhook の ID。                                                                                                                                                                                                                                                                                         |
| `フック`          | `オブジェクト`  | [webhook 設定](/rest/reference/repos#get-a-repository-webhook)。                                                                                                                                                                                                                                                      |
| `hook[app_id]` | `integer` | 新しい {% data variables.product.prodname_github_app %} を登録すると、{% data variables.product.product_name %} は登録時に指定した **webhook URL** に ping イベントを送信します。 イベントには、アプリケーションの[認証](/apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps/)に必要な `app_id` が含まれています。 |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.ping }}

### project_card

{% data reusables.webhooks.project_card_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `repository_projects` または `organization_projects` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.project_card_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.project_card.created }}

### project_column

{% data reusables.webhooks.project_column_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `repository_projects` または `organization_projects` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.project_column_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.project_column.created }}

### project

{% data reusables.webhooks.project_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `repository_projects` または `organization_projects` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.project_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.project.created }}

### public

{% data reusables.webhooks.public_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `metadata` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

| キー | 種類 | 説明 |
| -- | -- | -- |
|    |    |    |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.public }}

### pull_request

{% data reusables.webhooks.pull_request_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `pull_requests` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.pull_request_webhook_properties %}
{% data reusables.webhooks.pull_request_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

`review_requested` イベントと `review_request_removed` イベントのデリバリには、`requested_reviewer` という追加のフィールドがあります。

{{ webhookPayloadsForCurrentVersion.pull_request.opened }}

### pull_request_review

{% data reusables.webhooks.pull_request_review_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `pull_requests` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.pull_request_review_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.pull_request_review.submitted }}

### pull_request_review_comment

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `pull_requests` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.pull_request_review_comment_webhook_properties %}
{% data reusables.webhooks.pull_request_review_comment_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.pull_request_review_comment.created }}

### プッシュ

{% data reusables.webhooks.push_short_desc %}

{% note %}

**注釈:** 一度に 3 つ以上のタグをプッシュすると、このイベントの webhook を受信しません。

{% endnote %}

{% tip %}

**注釈**: 表に続く webhook ペイロードの例は、表に記載されているイベント API ペイロードとは大幅に異なります。 違いの中でも、webhook ペイロードには `sender` オブジェクトと `pusher` オブジェクトの両方が含まれています。 送信者とプッシャーは `push` イベントを開始した同じユーザですが、`sender` オブジェクトには詳細が含まれています。

{% endtip %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `contents` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

| キー                         | 種類        | 説明                                                                                                                                                                       |
| -------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ref`                      | `string`  | プッシュされた完全な [`git ref`](/rest/reference/git#refs)。 例: `refs/heads/main`。                                                                                                  |
| `before`                   | `string`  | プッシュ前の`ref` 上の最新のコミットのSHA。                                                                                                                                               |
| `after`                    | `string`  | プッシュ後の`ref`上の最新のコミットのSHA。                                                                                                                                                |
| `commits`                  | `array`   | プッシュされたコミットを示すコミットオブジェクトの配列。 （配列には最大で20のコミットが含まれる。 必要に応じて、[Commits API](/rest/reference/repos#commits) を使用して追加のコミットをフェッチできます。 この制限はタイムラインイベントにのみ適用され、webhookの配信には適用されない） |
| `commits[][id]`            | `string`  | コミットのSHA。                                                                                                                                                                |
| `commits[][timestamp]`     | `string`  | コミットの ISO 8601 タイムスタンプ。                                                                                                                                                  |
| `commits[][message]`       | `string`  | コミットメッセージ。                                                                                                                                                               |
| `commits[][author]`        | `オブジェクト`  | コミットのGit作者。                                                                                                                                                              |
| `commits[][author][name]`  | `string`  | Git作者の名前。                                                                                                                                                                |
| `commits[][author][email]` | `string`  | Git作者のメールアドレス。                                                                                                                                                           |
| `commits[][url]`           | `url`     | コミットAPIのリソースを指すURL。                                                                                                                                                      |
| `commits[][distinct]`      | `boolean` | このコミットが以前にプッシュされたいずれとも異なっているか。                                                                                                                                           |
| `commits[][added]`         | `array`   | コミットに追加されたファイルの配列。                                                                                                                                                       |
| `commits[][modified]`      | `array`   | コミットによって変更されたファイルの配列。                                                                                                                                                    |
| `commits[][removed]`       | `array`   | コミットから削除されたファイルの配列。                                                                                                                                                      |
| `pusher`                   | `オブジェクト`  | コミットをプッシュしたユーザ。                                                                                                                                                          |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.push }}

### リリース

{% data reusables.webhooks.release_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `contents` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.release_webhook_properties %}
{% data reusables.webhooks.release_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.release.published }}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
### repository_dispatch

このイベントは、{% data variables.product.prodname_github_app %} が「[リポジトリディスパッチイベントの作成](/rest/reference/repos#create-a-repository-dispatch-event)」エンドポイントに `POST` リクエストを送信したときに発生します。

#### 利用の可否

- この webhook を受信するには、{% data variables.product.prodname_github_app %} に `contents` 権限が必要です。

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.repository_dispatch }}
{% endif %}

### リポジトリ

{% data reusables.webhooks.repository_short_desc %}

#### 利用の可否

- リポジトリ webhook は、`deleted` を除くすべてのイベントタイプを受け取ります
- Organization webhook
- `metadata` 権限のある {% data variables.product.prodname_github_app %} は、`deleted` を除くすべてのイベントタイプを受信します

#### webhook ペイロードオブジェクト

| キー       | 種類       | 説明                                                   |
| -------- | -------- | ---------------------------------------------------- |
| `action` | `string` | 実行されたアクション. これは次のいずれかになります。<ul><li>「created」- リポジトリが作成されます。</li><li>「deleted」- リポジトリが削除されます。</li><li>「archived」- リポジトリがアーカイブされます。</li><li>「unarchived」- リポジトリがアーカイブ解除されます。</li>{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}<li>「anonymous_access_enabled」- リポジトリは [enabled for anonymous Git access](/rest/overview/api-previews#anonymous-git-access-to-repositories)、「anonymous_access_disabled」 - リポジトリは [disabled for anonymous Git access](/rest/overview/api-previews#anonymous-git-access-to-repositories)</li>{% endif %}<li>「edited」- リポジトリの情報が編集されます。</li><li>「renamed」- リポジトリの名前が変更されます。</li><li>「transferred」- リポジトリが転送されます。</li><li>「publicized」- リポジトリが公開されます。</li><li> 「privatized」- リポジトリが非公開になります。</li></ul> |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.repository.publicized }}

{% if currentVersion == "free-pro-team@latest"%}
### repository_import

{% data reusables.webhooks.repository_import_short_desc %} 個人リポジトリでこのイベントを受信するには、インポートする前に空のリポジトリを作成する必要があります。 このイベントは、[GitHub Importer](/articles/importing-a-repository-with-github-importer/) または[Source imports API](/rest/reference/migrations#source-imports) のいずれかを使用してトリガーできます。

#### 利用の可否

- リポジトリ webhook
- Organization webhook

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.repository_import_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.repository_import }}

### repository_vulnerability_alert

{% data reusables.webhooks.repository_vulnerability_alert_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.repository_vulnerability_alert_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.repository_vulnerability_alert.create }}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}

### secret_scanning_alert

{% data reusables.webhooks.secret_scanning_alert_event_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `secret_scanning_alerts:read` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.secret_scanning_alert_event_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
`sender` | `object` | `action` が `resolved` または `reopened` の場合、`sender` オブジェクトは、イベントをトリガーしたユーザになります。 `sender` オブジェクトは、他のすべてのアクションでは空になっています。

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.secret_scanning_alert.reopened }}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@1.19" %}
### security_advisory

セキュリティアドバイザリに関連するアクティビティ。 セキュリティアドバイザリは、GitHub 上のソフトウェアのセキュリティ関連の脆弱性に関する情報を提供します。 セキュリティアドバイザリデータセットは、GitHub セキュリティアラートにも役立ちます。「[脆弱性のある依存関係のセキュリティアラートについて](/articles/about-security-alerts-for-vulnerable-dependencies/)」を参照してください。
{% endif %}

#### 利用の可否

- `security_events` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

| キー                  | 種類       | 説明                                                                              |
| ------------------- | -------- | ------------------------------------------------------------------------------- |
| `action`            | `string` | 実行されたアクション. アクションは、すべての新しいイベントに対して `published`、`updated`、`performed` のいずれかを指定可。 |
| `security_advisory` | `オブジェクト` | 概要、説明、重要度などの、セキュリティアドバイザリの詳細。                                                   |

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.security_advisory.published }}

{% if currentVersion == "free-pro-team@latest" %}
### スポンサーシップ

{% data reusables.webhooks.sponsorship_short_desc %}

スポンサーシップ webhook は、{% data variables.product.prodname_dotcom %} でのみ作成できます。 詳しい情報については、「[スポンサー付きアカウントのイベントの webhook を設定する](/github/supporting-the-open-source-community-with-github-sponsors/configuring-webhooks-for-events-in-your-sponsored-account)」を参照してください。

#### 利用の可否

- スポンサー付きアカウント

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.sponsorship_webhook_properties %}
{% data reusables.webhooks.sponsorship_properties %}
{% data reusables.webhooks.sender_desc %}

#### スポンサーシップ作成時の webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.sponsorship.created }}

#### スポンサーシップのダウングレード時の webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.sponsorship.downgraded }}

{% endif %}

### Star

{% data reusables.webhooks.star_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.star_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.star.created }}

### ステータス

{% data reusables.webhooks.status_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `statuses` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

| キー           | 種類        | 説明                                                                                                            |
| ------------ | --------- | ------------------------------------------------------------------------------------------------------------- |
| `id`         | `integer` | ステータスの一意の識別子。                                                                                                 |
| `sha`        | `string`  | コミット SHA。                                                                                                     |
| `state`      | `string`  | 新しい状態。 `pending`、`success`、`failure`、`error` のいずれかを指定可。                                                       |
| `説明`         | `string`  | オプションの人間可読の説明がステータスに追加。                                                                                       |
| `target_url` | `string`  | ステータスに追加されたオプションのリンク。                                                                                         |
| `ブランチ`       | `array`   | ステータスの SHA を含むブランチオブジェクトの配列。 各ブランチには特定の SHA が含まれていますが、SHA がブランチの先頭である場合とそうでない場合があります。 配列には最大 10 個のブランチが含まれます。 |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.status }}

### Team

{% data reusables.webhooks.team_short_desc %}

#### 利用の可否

- Organization webhook
- `members` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

| キー                                              | 種類        | 説明                                                                                                                                                                |
| ----------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `action`                                        | `string`  | 実行されたアクション. `created`、 `deleted`、`edited`、`added_to_repository`、`removed_from_repository` のいずれかを指定可。                                                              |
| `Team`                                          | `オブジェクト`  | Team 自体。                                                                                                                                                          |
| `変更`                                            | `オブジェクト`  | アクションが `edited` の場合の Team への変更。                                                                                                                                   |
| `changes[description][from]`                    | `string`  | アクションが `edited` の場合の以前のバージョンの説明。                                                                                                                                  |
| `changes[name][from]`                           | `string`  | アクションが`edited`だった場合の、以前のバージョンの名前。                                                                                                                                 |
| `changes[privacy][from]`                        | `string`  | アクションが `edited` の場合の以前のバージョンのTeam プライバシー。                                                                                                                         |
| `changes[repository][permissions][from][admin]` | `boolean` | アクションが `edited` の場合の、リポジトリに対する以前のバージョンの Team メンバーの `admin` 権限。                                                                                                    |
| `changes[repository][permissions][from][pull]`  | `boolean` | アクションが `edited` の場合の、リポジトリに対する以前のバージョンの Team メンバーの `pull` 権限。                                                                                                     |
| `changes[repository][permissions][from][push]`  | `boolean` | アクションが `edited` の場合の、リポジトリに対する以前のバージョンの Team メンバーの `push` 権限。                                                                                                     |
| `リポジトリ`                                         | `オブジェクト`  | アクションが `added_to_repository`、`removeed_from_repository`、`edited` の場合の、Team の範囲に追加または削除されたリポジトリ。 `edited` アクションの場合、`repository` には、リポジトリに対する Team の新しい権限レベルも含まれます。 |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.team.added_to_repository }}

### team_add

{% data reusables.webhooks.team_add_short_desc %}

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `members` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

| キー     | 種類       | 説明                                                                          |
| ------ | -------- | --------------------------------------------------------------------------- |
| `Team` | `オブジェクト` | 変更された [Team](/rest/reference/teams)。  **注釈:** 古いイベントではペイロードに含まていれない場合があります。 |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.team_add }}

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

### ユーザ

ユーザが `created` または `deleted` を指定した場合。

#### 利用の可否
- GitHub Enterprise webhook。 詳しい情報については「[グローバル webhook](/rest/reference/enterprise-admin#global-webhooks/)」を参照してください。

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.user.created }}

{% endif %}

### Watch

{% data reusables.webhooks.watch_short_desc %}

イベントのアクターは、リポジトリに Star を付けた[ユーザ](/rest/reference/users)であり、イベントのリポジトリは、Star を付けた[リポジトリ](/rest/reference/repos)です。

#### 利用の可否

- リポジトリ webhook
- Organization webhook
- `metadata` 権限のある {% data variables.product.prodname_github_app %}

#### webhook ペイロードオブジェクト

{% data reusables.webhooks.watch_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.watch.started }}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### workflow_dispatch

このイベントは、 ユーザが GitHub でワークフローの実行をトリガーするか、「[ワークフローディスパッチイベントの作成](/rest/reference/actions/#create-a-workflow-dispatch-event)」エンドポイントに `POST` リクエストを送信したときに発生します。 詳しい情報については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows#workflow_dispatch)」を参照してください。

#### 利用の可否

- この webhook を受信するには、{% data variables.product.prodname_github_app %} に `contents` 権限が必要です。

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.workflow_dispatch }}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### workflow_run

{% data variables.product.prodname_actions %} ワークフロー実行がリクエスト済または完了したとき。 詳しい情報については、「[ワークフローをトリガーするイベント](/actions/reference/events-that-trigger-workflows#workflow_run)」を参照してください。

#### 利用の可否

- `actions` または `contents`権限のある {% data variables.product.prodname_github_app %}.

#### webhook ペイロードオブジェクト

| キー       | 種類       | 説明                                                                     |
| -------- | -------- | ---------------------------------------------------------------------- |
| `action` | `string` | ほとんどの webhook ペイロードには、イベントをトリガーした特定のアクティビティを含む `action` プロパティが含まれています。 |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.sender_desc %}

#### webhook ペイロードの例

{{ webhookPayloadsForCurrentVersion.workflow_run }}
{% endif %}
