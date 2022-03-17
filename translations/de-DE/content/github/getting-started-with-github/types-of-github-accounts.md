---
title: Arten von GitHub-Konten
intro: 'Ihr Benutzerkonto ist Ihre Identität auf {% data variables.product.product_location %}. Your user account can be a member of any number of organizations.{% if currentVersion == "free-pro-team@latest" %} Organizations can belong to enterprise accounts.{% endif %}'
redirect_from:
  - /manage-multiple-clients/
  - /managing-clients/
  - /articles/what-s-the-difference-between-user-and-organization-accounts/
  - /articles/differences-between-user-and-organization-accounts/
  - /articles/types-of-github-accounts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion == "free-pro-team@latest" %}
For a full list of features for each
{% data variables.product.product_name %} product, see "[{% data variables.product.prodname_dotcom %}'s products](/github/getting-started-with-github/githubs-products)."
{% endif %}

### Persönliche Benutzerkonten

Jede Person, die {% data variables.product.product_location %} benutzt, hat ihr eigenes Benutzerkonto, welches folgendes umfasst:

{% if currentVersion == "free-pro-team@latest" %}

- Unbegrenzte Anzahl an öffentlichen und privaten Repositorys mit {% data variables.product.prodname_free_user %}
- Unbegrenzte Anzahl Mitarbeiter mit {% data variables.product.prodname_free_user %}
- Zusätzliche Funktionen für private Repositorys mit {% data variables.product.prodname_pro %}
- Möglichkeit, [Mitarbeiter zu einem Repository einzuladen](/articles/inviting-collaborators-to-a-personal-repository)

{% else %}

- Unbegrenzte Anzahl an Repositorys und [Mitarbeitern](/articles/permission-levels-for-a-user-account-repository)
- Möglichkeit, [eine unbegrenzte Anzahl an Repository-Mitarbeitern einzuladen](/articles/inviting-collaborators-to-a-personal-repository)

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% tip %}

**Tips**:

- Du kannst ein Konto für mehrere Zwecke verwenden, beispielsweise für den persönlichen Gebrauch und für das Geschäft. Wir empfehlen, nicht mehr als ein Konto zu erstellen. Weitere Informationen findest Du unter „[Mehrere Benutzerkonten zusammenführen](/articles/merging-multiple-user-accounts).“
- Benutzerkonten sind an sich für Menschen vorgesehen. Bei Bedarf kannst Du aber auch ein Benutzerkonto für einen Roboter erstellen, beispielsweise für einen Continuous Integration (CI)-Bot.

{% endtip %}

{% else %}

{% tip %}

**Tipp**: Benutzkonten sind an sich für Menschen vorgesehen. Bei Bedarf können Sie aber auch ein Benutzerkonto für einen Roboter erstellen, beispielsweise für einen Continuous Integration (CI)-Bot.

{% endtip %}

{% endif %}

### Organisations-Konten

Organisationen sind gemeinsame Konten, in denen Personengruppen projektübergreifend zusammenarbeiten können. Inhaber und Administratoren können den Mitgliederzugriff auf Daten und Projekte der Organisation mit komplexen Sicherheits- und Administrationsfunktionen verwalten.

{% data reusables.organizations.organizations_include %}

{% if currentVersion == "free-pro-team@latest" %}

### Enterprise-Konten

Mit Enterprise-Konten können Sie die Richtlinien und Abrechnungen mehrerer {% data variables.product.prodname_dotcom_the_website %}-Organisationen zentral verwalten. {% data reusables.gated-features.enterprise-accounts %}

{% endif %}

### Weiterführende Informationen

{% if currentVersion == "free-pro-team@latest" %}- "[Signing up for a new {% data variables.product.prodname_dotcom %} account](/articles/signing-up-for-a-new-github-account)"
- „[Produkte von {% data variables.product.prodname_dotcom %}](/articles/githubs-products)"{% endif %}
- „[Neues Organisationskonto erstellen](/articles/creating-a-new-organization-account)“
