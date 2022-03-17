---
title: Abonnement und Nutzung für Dein Enterprise-Konto anzeigen
intro: 'Du kannst das aktuelle Abonnement, die Lizenznutzung, die Rechnungen, den Zahlungsverlauf und andere Abrechnungsinformationen für Dein Enterprise-Konto anzeigen.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: 'Enterprise-Inhaber und Abrechnungsmanager können auf alle Abrechnungseinstellungen für Enterprise-Konen zugreifen und diese verwalten. Weitere Information über die Verwaltung von Abrechnungsmanagern findest Du unter „[Personen zur Verwaltung Deines Enterprise-Kontos einladen](/articles/inviting-people-to-manage-your-enterprise-account)."'
redirect_from:
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Informationen zur Abrechnung für Enterprise-Konten

Enterprise-Konten sind derzeit für {% data variables.product.prodname_enterprise %}-Kunden verfügbar, die per Rechnung bezahlen. Die Abrechnung für alle Organisationen und {% data variables.product.prodname_ghe_server %}-Instanzen, die mit Deinem Enterprise-Konto verbunden sind, wird in eine einzige Rechnung für alle Deine bezahlten {% data variables.product.prodname_dotcom_the_website %}-Dienste zusammengefasst (inklusive bezahlte Lizenzen in Organisationen, {% data variables.large_files.product_name_long %}-Datenpakete und Abonnements für {% data variables.product.prodname_marketplace %}-Apps).

### Abonnement und Nutzung für Dein Enterprise-Konto anzeigen

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
4. Under "User
{% if currentVersion == "free-pro-team@latest" %}Licenses{% else %}licenses{% endif %}", view your total licenses, number of consumed licenses, and your subscription expiration date.
  {% if currentVersion == "free-pro-team@latest" %}![License and subscription information in enterprise billing settings](/assets/images/help/business-accounts/billing-license-info.png){% else %}
  ![Lizenz- und Abonnementinformationen in Enterprise-Abrechnungseinstellungen](/assets/images/enterprise/enterprises/enterprise-server-billing-license-info.png){% endif %}
5. To view details of the user licenses currently in use, click **View {% if currentVersion == "free-pro-team@latest" %}details{% else %}users{% endif %}**.
