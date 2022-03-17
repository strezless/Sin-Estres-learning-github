---
title: ワークフローを再実行する
intro: ワークフローのインスタンスを再実行できます。 ワークフローの再実行では、ワークフローの実行をトリガーした元のイベントと同じ 「GITHUB_SHA」（コミット SHA）と「GITHUB_REF」（Git ref）が使用されます。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.navigate-to-workflow %}
{% data reusables.repositories.view-run %}
1. ワークフローの右上部から、**Re-run jobs（ジョブの再実行）**ドロップダウンメニューを使い、**Re-run all jobs（すべてのジョブを再実行）**を選択してください。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down-updated.png){% else %}![Re-run checks drop-down menu](/assets/images/help/repository/rerun-checks-drop-down.png){% endif %}
