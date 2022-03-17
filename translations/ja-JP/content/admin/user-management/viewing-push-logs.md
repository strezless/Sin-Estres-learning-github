---
title: プッシュログの表示
intro: 'Site administrators can view a list of Git push operations for any repository on the enterprise.'
redirect_from:
  - /enterprise/admin/articles/viewing-push-logs/
  - /enterprise/admin/installation/viewing-push-logs
  - /enterprise/admin/user-management/viewing-push-logs
versions:
  enterprise-server: '*'
  github-ae: '*'
---

プッシュログの項目には次の情報が含まれています。

- プッシュを開始した人
- フォースプッシュであったかどうか
- プッシュされたブランチ
- プッシュするために使ったプロトコル
- プッシュ元の IP アドレス
- プッシュするために使った Git クライアント
- 操作前と操作後の SHA ハッシュ

### リポジトリのプッシュログを表示する

1. リポジトリにアクセスします。
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.security-tab %}
4. 左のサイドバーで、**Push Log（プッシュログ）** をクリックしてください。 ![プッシュログのタブ](/assets/images/enterprise/site-admin-settings/push-log-tab.png)

{% if enterpriseServerVersions contains currentVersion %}
### コマンドラインでリポジトリのプッシュログを表示する

1. SSHを使ってアプライアンスに接続してください。 詳しくは、"[管理シェル（SSH）へのアクセス方法](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)を参照してください。"
2. 適切な Git リポジトリで Audit log ファイルを開いてください。
  ```shell
  ghe-repo <em>コードオーナー</em>/<em>リポジトリ</em> -c "less audit_log"
  ```
{% endif %}