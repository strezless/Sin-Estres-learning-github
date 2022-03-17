---
title: High Availabilityレプリカの削除
intro: '{% data variables.product.prodname_ghe_server %} レプリカへのレプリケーションを一時的に停止することも、レプリケーションを恒久的に削除することもできます。'
redirect_from:
  - /enterprise/admin/installation/removing-a-high-availability-replica
  - /enterprise/admin/enterprise-management/removing-a-high-availability-replica
versions:
  enterprise-server: '*'
---

### 一時的なレプリケーションの停止

1. 必要に応じて、Geo-replication レプリカ用の Geo DNS エントリを削除することで、そのレプリカにユーザトラフィックを処理させないようにします。
2. レプリケーションを一時的に停止させたいレプリカで、ghe-repl-stop を実行します。
  ```shell
  $ ghe-repl-stop
  ```
3. レプリケーションを再開するには、`ghe-repl-start` を実行します。
  ```shell
  $ ghe-repl-start
  ```

### レプリケーションの恒久的な削除

1. 必要に応じて、Geo-replication レプリカ用の Geo DNS エントリを削除することで、そのレプリカにユーザトラフィックを処理させないようにします。
2. レプリケーションを削除するレプリカで、`ghe-repl-stop` を実行します。
  ```shell
  $ ghe-repl-stop
  ```
3. レプリカでレプリケーション状態を解除するには、`ghe-repl-teardown` を実行します。
  ```shell
  $ ghe-repl-teardown
  ```

  {% if currentVersion ver_gt "enterprise-server@2.22" %}
  {% note %}

  **Note:** If you have {% data variables.product.prodname_actions %} enabled, you should decommission the former replica server or update its {% data variables.product.prodname_actions %} configuration to use different external storage. For more information, see "[High availability for {% data variables.product.prodname_actions %}](/admin/github-actions/high-availability-for-github-actions#high-availability-replicas)."

  {% endnote %}
  {% endif %}
