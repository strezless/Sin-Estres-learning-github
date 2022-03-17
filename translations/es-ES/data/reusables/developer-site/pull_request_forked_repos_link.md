##### Eventos de solicitud de extracción para repositorios bifurcados

{% note %}

**Nota:** los flujos de trabajo no se ejecutan en repositorios base privados cuando abres una solicitud de extracción desde un repositorio bifurcado.

{% endnote %}

Cuando creas una solicitud de extracción desde un repositorio bifurcado al repositorio base, {% data variables.product.prodname_dotcom %} envía el evento `pull_request` al repositorio base y no se producen eventos de solicitud de extracción en el repositorio bifurcado.

Los flujos de trabajo no se ejecutan en repositorios bifurcados por defecto. Debes habilitar las Acciones de GitHub en la pestaña **Actions (Acciones)** del repositorio bifurcado.

{% data reusables.actions.forked-secrets %} Los permisos para el `GITHUB_TOKEN` en los repositorios bifurcados son de solo lectura. Para obtener más información, consulta "[Autenticar con el GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)".

{% note %}

**Nota:** Los flujos de trabajo que se activan mediante las solicitudes de cambios del {% data variables.product.prodname_dependabot %} se tratan como si fueran de un repositorio bifurcado y también están sujetas a estas restricciones.

{% endnote %}
