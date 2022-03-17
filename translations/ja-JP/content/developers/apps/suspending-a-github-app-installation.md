---
title: GitHub Appのインストールのサスペンド
intro: '{% data reusables.shortdesc.suspending_a_github_app %}'
redirect_from:
  - /apps/managing-github-apps/suspending-a-github-app-installation
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - github apps
---

### GitHub Appのサスペンド

GitHub Appを所有・管理するインテグレーター、すなわちGitHub Appのオーナーは、インストールしたGitHub AppをREST APIを使用してJWTでサスペンドまたはサスペンド解除できます。 詳しい情報については、[GitHub App REST API](/rest/reference/apps)を参照してください。

GitHub Appをインストールしたユーザ、すなわちインストールオーナーは、アプリケーションのインストール設定からのみGitHub Appをサスペンドまたはサスペンド解除できます。 インストールオーナーは、インストールしたアプリケーションを、APIを使用してサスペンドまたはサスペンド解除することはできません。

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. サスペンドする{% data variables.product.prodname_github_app %}を選択します。
![アプリケーションの選択](/assets/images/github-apps/github_apps_select-app.png)
{% data reusables.user-settings.github_apps_advanced %}
6. インストールのサスペンド設定の隣にある、[**Suspend**]または[**Unsuspend**]をクリックします。 ![GitHub Appのサスペンド](/assets/images/github-apps/suspend-a-github-app.png)
