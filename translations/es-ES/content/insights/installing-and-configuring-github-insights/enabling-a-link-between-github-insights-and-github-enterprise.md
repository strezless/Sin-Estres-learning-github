---
title: Habilitar enlace entre la información de GitHub y GitHub Enterprise
intro: 'Puedes habilitar un enlace que permitirá a los usuarios navegar desde {% data variables.product.prodname_ghe_server %} hacia {% data variables.product.prodname_insights %}.'
product: '{% data reusables.gated-features.github-insights %}'
permissions: 'Los administradores del sitio de {% data variables.product.prodname_ghe_server %} pueden habilitar un enlace entre {% data variables.product.prodname_ghe_server %} y {% data variables.product.prodname_insights %}.'
redirect_from:
  - /github/installing-and-configuring-github-insights/navigating-between-github-insights-and-github-enterprise
  - /github/installing-and-configuring-github-insights/enabling-a-link-between-github-insights-and-github-enterprise
versions:
  enterprise-server: '*'
---

Una vez que habilitas el enlace, cada usuario puede navegar directamente desde {% data variables.product.prodname_ghe_server %} hasta {% data variables.product.prodname_insights %}. Para obtener más información, consulta "[Navegar entre {% data variables.product.prodname_enterprise %} y {% data variables.product.prodname_insights %}](/insights/exploring-your-usage-of-github-enterprise/navigating-between-github-enterprise-and-github-insights)".

1. Conéctate al shell administrativo de {% data variables.product.prodname_ghe_server %}. Para obtener más información, consulta "[Acceder al shell administrativo (SSH)](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)."
2. Ejecuta el siguiente comando.
  ```shell
  ghe-config 'app.github.insights-available' 'true' && ghe-config-apply
  ```
3. Regresa a
{% data variables.product.prodname_ghe_server %}.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
7. Debajo de
{% octicon "gear" aria-label="The Settings gear" %} **Ajustes**, da clic en **{% data variables.product.prodname_insights %}**.
  {% note %}

  **Nota:** Después de ejecutar el comando de configuración, tarda varios minutos hasta que esta opción se vuelve disponible en {% data variables.product.prodname_enterprise %}. Si no ves **{% data variables.product.prodname_insights %}**, espera o reinicia {% data variables.product.prodname_enterprise %}.

  {% endnote %}

  ![Pestaña {% data variables.product.prodname_insights %}](/assets/images/help/business-accounts/github-insights-tab.png)
3. Debajo de "URL de la instancia de {% data variables.product.prodname_insights %}", escribe la URL del servidor que usa tu empresa para {% data variables.product.prodname_insights %}. ![URL de la instancia de {% data variables.product.prodname_insights %}](/assets/images/help/business-accounts/insights-instance-url.png)
4. Haz clic en **Save ** (guardar).
