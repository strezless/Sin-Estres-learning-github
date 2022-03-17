---
title: Gerenciar a publicação dos sites do GitHub Pages para a sua organização
intro: 'Você pode controlar se os integrantes da organização podem publicar sites de {% data variables.product.prodname_pages %} a partir de repositórios na organização{% if currentVersion == "free-pro-team@latest" %} e restringir as visibilidades que os integrantes podem escolher para os sites{% endif %}.'
permissions: 'Os proprietários da organização podem gerenciar a publicação de sites de {% data variables.product.prodname_pages %} a partir de repositórios na organização.'
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization
topics:
  - organizations
  - teams
---

{% if currentVersion == "free-pro-team@latest" %}
Se a sua organização usar
{% data variables.product.prodname_ghe_cloud %}, você poderá optar por permitir que os integrantes da organização criem sites publicados publicadamente, privadamente, ambos ou nenhum. Caso contrário, você pode optar por permitir ou negar a publicação pública. Para obter mais informações sobre controle de acesso para sites de {% data variables.product.prodname_pages %}, consulte "[Alterar a visibilidade do seu site de {% data variables.product.prodname_pages %}](/github/working-with-github-pages/changing-the-visibility-of-your-github-pages-site)".
{% endif %}

Se você não permitir a publicação de sites de {% data variables.product.prodname_pages %}, todos os sites publicados permanecerão publicados. Você pode remover manualmente a publicação do site. Para obter mais informações, consulte "[Cancelar a publicação de um site do {% data variables.product.prodname_pages %}](/github/working-with-github-pages/unpublishing-a-github-pages-site)".

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}{% if currentVersion == "free-pro-team@latest" %}
1. Em "Criação de páginas", selecione as visibilidades que você deseja permitir e desmarque as visibilidades que você não deseja permitir. ![Checkboxes to allow or disallow creation of {% data variables.product.prodname_pages %} sites](/assets/images/help/organizations/github-pages-creation-checkboxes.png){% else %}
1. Em "Criação de páginas", marque ou desmarque **Permitir que os integrantes publiquem sites**. ![Unselected checkbox for "Allow members to publish sites" option](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png){% endif %}
1. Clique em **Salvar**.

### Leia mais

- "[Sobre o {% data variables.product.prodname_pages %}](/github/working-with-github-pages/about-github-pages)"
