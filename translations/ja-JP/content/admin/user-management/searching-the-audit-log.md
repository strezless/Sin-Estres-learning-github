---
title: Audit log を検索する
intro: 'Site administrators can search an extensive list of audited actions on the enterprise.'
redirect_from:
  - /enterprise/admin/articles/searching-the-audit-log/
  - /enterprise/admin/installation/searching-the-audit-log
  - /enterprise/admin/user-management/searching-the-audit-log
versions:
  enterprise-server: '*'
  github-ae: '*'
---

### 検索クエリの構文

AND/ORの論理演算子で区切られた値のペア:1つ以上のキーを使って、検索クエリを構成します。

|             キー | 値                                       |
| --------------:| --------------------------------------- |
|     `actor_id` | アクションを開始したユーザアカウントの ID                  |
|        `actor` | アクションを開始したユーザアカウントの名前                   |
| `oauth_app_id` | アクションに関連付けられている OAuth アプリケーションの ID      |
|       `action` | Name of the audited action              |
|      `user_id` | アクションによって影響を受けたユーザの ID                  |
|          `ユーザ` | アクションによって影響を受けたユーザの名前                   |
|      `repo_id` | アクションによって影響を受けたリポジトリの ID （妥当な場合）        |
|         `repo` | アクションによって影響を受けたリポジトリの名前 （妥当な場合）         |
|     `actor_ip` | アクション元の IP アドレス                         |
|   `created_at` | アクションが作成された時間                           |
|         `from` | アクション元の View                            |
|         `note` | イベント固有の他の情報（プレーンテキストまたは JSON フォーマット）    |
|          `org` | アクションによって影響を受けたOrganizationの名前（該当する場合）  |
|       `org_id` | アクションによって影響を受けたOrganizationの ID（該当する場合） |

たとえば、2017 年の初めからリポジトリ `octocat/Spoon-Knife` に影響を与えたすべてのアクションを確認するには、次のようにします:

  `repo:"octocat/Spoon-Knife" AND created_at:[2017-01-01 TO *]`

For a full list of actions, see "[Audited actions](/admin/user-management/audited-actions)."

### Audit log を検索する

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
4. 検索クエリを入力します。![検索クエリ](/assets/images/enterprise/site-admin-settings/search-query.png)
