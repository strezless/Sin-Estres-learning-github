---
title: リポジトリの GitHub アクションの無効化や制限
intro: 'リポジトリのオーナーは、特定のリポジトリの {% data variables.product.prodname_actions %} の無効化、有効化、および制限ができます。'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
topics:
  - repositories
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### リポジトリの {% data variables.product.prodname_actions %} 権限について

{% data reusables.github-actions.disabling-github-actions %} {% data variables.product.prodname_actions %} の詳細は、「[{% data variables.product.prodname_actions %}について](/actions/getting-started-with-github-actions/about-github-actions)」を参照してください。

リポジトリで {% data variables.product.prodname_actions %} を有効化できます。 {% data reusables.github-actions.enabled-actions-description %} リポジトリの {% data variables.product.prodname_actions %} を完全に無効化することができます。 {% data reusables.github-actions.disabled-actions-description %}

または、リポジトリで {% data variables.product.prodname_actions %} を有効化して、ワークフローで実行できるアクションを制限することもできます。 {% data reusables.github-actions.enabled-local-github-actions %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.23" %}

### リポジトリの {% data variables.product.prodname_actions %} 権限を管理する

{% note %}

**注釈:** Organization に優先ポリシーがあるか、優先ポリシーのある Enterprise アカウントによって管理されている場合、これらの設定を管理できない場合があります。 For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization)" or {% if currentVersion == "free-pro-team@latest" %}"[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)."{% elsif currentVersion ver_gt "enterprise-server@2.21"%}"[Enforcing {% data variables.product.prodname_actions %} policies for your enterprise](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)."{% endif %}

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
4. [Actions permissions] で、オプションを選択します。 ![このリポジトリのアクションを有効化、無効化、または制限する](/assets/images/help/repository/enable-repo-actions.png)

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

### リポジトリの {% data variables.product.prodname_actions %} 権限を管理する

You can disable all workflows for a repository or set a policy that configures which actions can be used in a repository.

{% data reusables.actions.actions-use-policy-settings %}

{% note %}

**注釈:** Organization に優先ポリシーがあるか、優先ポリシーのある Enterprise アカウントによって管理されている場合、これらの設定を管理できない場合があります。 For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization)" or {% if currentVersion == "free-pro-team@latest" %}"[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account)."{% elsif currentVersion ver_gt "enterprise-server@2.21" %}"[Enforcing {% data variables.product.prodname_actions %} policies for your enterprise](/enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)."

{% endif %}

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Under **Actions permissions**, select an option. ![Set actions policy for this organization](/assets/images/help/repository/actions-policy.png)
1. [**Save**] をクリックします。

### Allowing specific actions to run

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
1. Under **Actions permissions**, select **Allow select actions** and add your required actions to the list. ![Add actions to allow list](/assets/images/help/repository/actions-policy-allow-list.png)
2. [**Save**] をクリックします。
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### プライベートリポジトリのフォークのワークフローを有効にする

{% data reusables.github-actions.private-repository-forks-overview %}

#### リポジトリのプライベートフォークポリシーを設定する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.settings-sidebar-actions %}
{% data reusables.github-actions.private-repository-forks-configure %}
{% endif %}
