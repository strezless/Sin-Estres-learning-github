---
title: Ver la suscripción y el uso de tu cuenta de empresa
intro: 'Puedes ver la suscripción actual, el uso de la licencia, las facturas, el historial de pagos y otra información de facturación de tu cuenta de empresa.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
permissions: 'Los propietarios de la empresa y los gerente de facturación pueden acceder y administrar todas las configuraciones de facturación para las cuentas de empresa.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise-account/viewing-the-subscription-and-usage-for-your-enterprise-account
  - /articles/viewing-the-subscription-and-usage-for-your-enterprise-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Acerca de la facturación para las cuentas de empresa

Las cuentas empresariales actualmente están disponibles para los clientes de {% data variables.product.prodname_enterprise %} que pagan por factura. La facturación para todas las organizaciones e instancias de {% data variables.product.prodname_ghe_server %} conectadas con tu cuenta empresarial se conjunta en un solo cargo por factura para todos tus servicios pagados de {% data variables.product.prodname_dotcom_the_website %} (incluyendo las licencias pagadas en organizaciones, paquetes de datos de {% data variables.large_files.product_name_long %}, y suscripciones a las apps de {% data variables.product.prodname_marketplace %}).

Para obtener más información acerca de administrar a los gerentes de facturación, consulta la sección "[Invitar a las personas a administrar tu empresa](/github/setting-up-and-managing-your-enterprise/inviting-people-to-manage-your-enterprise)".

### Ver la suscripción y el uso de tu cuenta de empresa

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.license-tab %}
1. Debajo de
"{% if currentVersion == "free-pro-team@latest" %}Licencias{% else %}licencias{% endif %}de usuario", visualiza el total de tus licencias, cantidad de licencias utilizadas, y la fecha de vencimiento de tu suscripción.
  {% if currentVersion == "free-pro-team@latest" %}![License and subscription information in enterprise billing settings](/assets/images/help/business-accounts/billing-license-info.png){% else %}
  ![Información de licencia y suscripción en las configuraciones de facturación de la empresa](/assets/images/enterprise/enterprises/enterprise-server-billing-license-info.png){% endif %}
1. Optionally, to view details for license usage or download a {% if currentVersion == "free-pro-team@latest" %}CSV{% elsif enterpriseServerVersions contains currentVersion %}JSON{% endif %} file with license details{% if currentVersion == "free-pro-team@latest" %}, to the right of "User Licenses"{% endif %}, click **View {% if currentVersion == "free-pro-team@latest" %}details{% elsif enterpriseServerVersions contains currentVersion %}users{% endif %}** or {% if currentVersion == "free-pro-team@latest" %}{% octicon "download" aria-label="The download icon" %}{% elsif enterpriseServerVersions contains currentVersion %}**Export license usage**{% endif %}.{% if currentVersion == "free-pro-team@latest" %} !["View details" button and button with download icon to the right of "User Licenses"](/assets/images/help/business-accounts/billing-license-info-click-view-details-or-download.png){% endif %}
