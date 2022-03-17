---
title: Configurar la conexión entre GitHub Insights y GitHub Enterprise
intro: 'Puedes administrar de qué manera {% data variables.product.prodname_insights %} se conecta con {% data variables.product.prodname_enterprise %}.'
product: '{% data reusables.gated-features.github-insights %}'
permissions: 'Las personas con permisos de administrador para {% data variables.product.prodname_insights %} pueden configurar la conexión con {% data variables.product.prodname_enterprise %}.'
versions:
  enterprise-server: '*'
---

{% data reusables.github-insights.settings-tab %}
2. Under
{% octicon "gear" aria-label="The gear icon" %} Settings, click **Enterprise**.
  ![Laboratorio de Empresa](/assets/images/help/insights/enterprise-tab.png)
{% data reusables.github-insights.enterprise-api-url %}
{% data reusables.github-insights.app-id %}
{% data reusables.github-insights.client-id %}
{% data reusables.github-insights.client-secret %}
{% data reusables.github-insights.private-key %}
{% data reusables.github-insights.webhook-secret %}
{% data reusables.github-insights.skip-ssl %}
10. Haz clic en **Save (Guardar)**.
{% data reusables.github-insights.insights-license %}
11. Haz clic en **Update License (Actualizar licencia)**.
