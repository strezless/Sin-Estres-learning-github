---
title: Visualizando seu uso do GitHub Packages (Pacotes do GitHub)
intro: 'Você pode visualizar detalhes do seu uso de armazenamento e transferência de dados para {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
---

### Visualizando o uso de {% data variables.product.prodname_registry %} para sua conta de usuário

Qualquer pessoa pode visualizar o uso de {% data variables.product.prodname_registry %} para sua própria conta de usuário.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.billing %}
{% data reusables.dotcom_billing.packages-data %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### Visualizando o uso de {% data variables.product.prodname_registry %} para a sua organização

Os proprietários da organização e gerentes de cobrança podem ver o uso do {% data variables.product.prodname_registry %} para uma organização. Para organizações gerenciadas por uma conta corporativa, somente os proprietários da organização podem visualizar o uso do {% data variables.product.prodname_registry %} na página de cobrança da organização.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.dotcom_billing.packages-data %}
{% data reusables.dotcom_billing.actions-packages-storage %}
{% data reusables.dotcom_billing.actions-packages-report-download %}

### Visualizando o uso de {% data variables.product.prodname_registry %} para sua conta corporativa

Proprietários de organizações e gestores de faturamento podem visualizar o uso de {% data variables.product.prodname_registry %} para uma conta corporativa.

{% note %}

**Nota:** Os detalhes de faturamento para contas corporativas somente resumem o uso de dados de armazenamento por organização. {% data reusables.github-actions.enterprise-billing-details %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.billing-tab %}
1. Em "
{% data variables.product.prodname_registry %}", veja os detalhes do uso da transferência de dados por organização na sua conta corporativa.
  ![Detalhes do uso da transferência de dados](/assets/images/help/billing/packages-data-enterprise.png)
{% data reusables.dotcom_billing.actions-packages-storage-enterprise-account %}
{% data reusables.enterprise-accounts.actions-packages-report-download-enterprise-accounts %}
