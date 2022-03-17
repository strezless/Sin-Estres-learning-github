---
title: Administrar el nombre de la rama predeterminada para los repositorios en tu organización
intro: 'Puedes configurar el nombre de la rama predeterminada para los repositorios que los miembros crean en tu organización en {% data variables.product.product_location %}.'
permissions: Los propietarios de la organización pueden administrar el nombre de la rama predeterminada para los repositorios nuevos de la misma.
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
  github-ae: '*'
---

### Acerca de la administración del nombre de la rama predeterminada

Cuadno un miembro de tu organización crea un repositorio nuevo en la misma, éste contendrá una rama que será la predeterminada. Puedes cambiar el nombre que {% data variables.product.product_name %} utiliza para dicha rama en los repositorios nuevos que creen los miembros de tu organización. Para obtener màs informaciòn sobre la rama predeterminada, consulta la secciòn "[Acerca de las ramas](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)".

{% data reusables.branches.change-default-branch %}

Si un propietario de la empresa requirió una política para el nombre de la rama predeterminada de tu empresa, no puedes configurar dicho nombre en tu organización. En su lugar, puedes cambiar la rama predeterminada para los repositorios individuales. Para obtener más información, consulta las secciones {% if currentVersion == "free-pro-team@latest" %}"[Requerir políticas de administración de repositorios en tu empresa](/github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account#enforcing-a-policy-on-the-default-branch-name)"{% else %}"[Requerir políticas de administración de repositorios en tu empresa](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-the-default-branch-name)"{% endif %} y "[Cambiar la rama predeterminada](/github/administering-a-repository/changing-the-default-branch)".

### Configurar el nombre de la rama predeterminada

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.repository-defaults %}
3. Debajo de "Rama predeterminada del repositorio", da clic en **Cambiar el nombre de la rama predeterminada ahora**. ![Botón de ignorar](/assets/images/help/organizations/repo-default-name-button.png)
4. Teclea el nombre predeterminado que quisieras utilizar para las ramas nuevas. ![Caja de texto para ingresar el nombre predeterminado](/assets/images/help/organizations/repo-default-name-text.png)
5. Da clic en **Actualizar**. ![Botón de actualizar](/assets/images/help/organizations/repo-default-name-update.png)

### Further reading

- "[Administrar el nombre de la rama predeterminada para tus repositorios](/github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories)"
