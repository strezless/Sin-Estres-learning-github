---
title: Abonnement und Nutzung für Dein Enterprise-Konto anzeigen
intro: 'Du kannst das aktuelle Abonnement, die Lizenznutzung, die Rechnungen, den Zahlungsverlauf und andere Abrechnungsinformationen für Dein Enterprise-Konto anzeigen.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: Enterprise-Inhaber und Abrechnungsmanager können auf alle Abrechnungseinstellungen für Enterprise-Konen zugreifen und diese verwalten.
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Unternehmen
---

### Informationen zur Abrechnung für Enterprise-Konten

Enterprise-Konten sind derzeit für {% data variables.product.prodname_enterprise %}-Kunden verfügbar, die per Rechnung bezahlen. Billing for all of the organizations and {% data variables.product.prodname_ghe_server %} instances connected to your enterprise account are aggregated into a single bill charge for all of your paid {% data variables.product.prodname_dotcom_the_website %} services (including paid licenses in organizations, {% data variables.large_files.product_name_long %} data packs,{% if currentVersion == "free-pro-team@latest" or ver_gt "enterprise-server@3.0" %} {% data variables.product.prodname_GH_advanced_security %} usage,{% endif %} and subscriptions for {% data variables.product.prodname_marketplace %} apps).

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.enterprise-accounts.billing-microsoft-ea-overview %} For more information, see "[Connecting an Azure subscription to your enterprise](/github/setting-up-and-managing-your-enterprise/connecting-an-azure-subscription-to-your-enterprise)."{% endif %}

For more information about managing billing managers, see "[Inviting people to manage your enterprise](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)."

### Abonnement und Nutzung für Dein Enterprise-Konto anzeigen

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Under "User
{% if currentVersion == "free-pro-team@latest" %}Licenses{% else %}licenses{% endif %}", view your total licenses, number of consumed licenses, and your subscription expiration date.
  {% if currentVersion == "free-pro-team@latest" %}![License and subscription information in enterprise billing settings](/assets/images/help/business-accounts/billing-license-info.png){% else %}
  ![Lizenz- und Abonnementinformationen in Enterprise-Abrechnungseinstellungen](/assets/images/enterprise/enterprise-server/enterprise-server-billing-license-info.png){% endif %}
1. Optionally, to view details for license usage or download a
{% if currentVersion == "free-pro-team@latest" %}CSV{% elsif enterpriseServerVersions contains currentVersion %}JSON{% endif %} file with license details{% if currentVersion == "free-pro-team@latest" %}, to the right of "User Licenses"{% endif %}, click **View {% if currentVersion == "free-pro-team@latest" %}details{% elsif enterpriseServerVersions contains currentVersion %}users{% endif %}** or {% if currentVersion == "free-pro-team@latest" %}{% octicon "download" aria-label="The download icon" %}{% elsif enterpriseServerVersions contains currentVersion %}**Export license usage**{% endif %}.{% if currentVersion == "free-pro-team@latest" %}
  !["View details" button and button with download icon to the right of "User Licenses"](/assets/images/help/business-accounts/billing-license-info-click-view-details-or-download.png){% endif %}
{% if currentVersion == "free-pro-team@latest" or ver_gt "enterprise-server@3.0" %}
1. Optionally, to view usage details for other features, in the left sidebar, click **Billing**. ![Registerkarte „Billing“ (Abrechnung) auf der Seitenleiste mit den Einstellungen des Enterprise-Kontos](/assets/images/help/business-accounts/settings-billing-tab.png)

### Weiterführende Informationen

- "[About billing for GitHub Actions](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions#about-billing-for-github-actions)"
- "[About billing for Git Large File Storage](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-git-large-file-storage)"
- "[About licensing for {% data variables.product.prodname_GH_advanced_security %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-licensing-for-github-advanced-security)"

{% endif %}
