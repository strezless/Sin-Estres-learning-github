1. Navega a donde está registrado tu ejecutor auto-hospedado:
   * **En un repositorio organizacional**: navega a la página principal y da clic en {% octicon "gear" aria-label="The Settings gear" %} **Configuración**.
   * {% if currentVersion == "free-pro-team@latest" %}**Si estás utilizando una cuenta empresarial**: navega hasta tu cuenta empresrial al visitar `https://github.com/enterprises/ENTERPRISE-NAME`, reemplazando a `ENTERPRISE-NAME` con el nombre de tu cuenta empresarial.{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}**Si utilizas un ejecutor a nivel empresarial**:

     1. En la esquina superior derecha de cualquier página, da clic en {% octicon "rocket" aria-label="The rocket ship" %}.
     1. En la barra lateral izquierda, da clic en **Resumen empresarial**.
     1. {% endif %} En la barra lateral de empresa, {% octicon "law" aria-label="The law icon" %} **Políticas**.
1. Navega a los ajustes de {% data variables.product.prodname_actions %}:
   * **En un repositorio de organización**: da clic en **Acciones** en la barra lateral izquierda.

     ![Configuración de acciones](/assets/images/help/settings/settings-sidebar-actions.png)
   * {% if currentVersion == "free-pro-team@latest" %}**Si utilizas una cuenta empresarial**{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}**Si utilizas un ejecutor a nivel de empresa**{% endif %}: Haz clic en **Acciones** debajo de "Políticas {% octicon "law" aria-label="The law icon" %}".
