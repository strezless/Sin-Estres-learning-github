---
title: Basisberechtigungen für eine Organisation festlegen
intro: Du kannst Basisberechtigungen für die Repositorys festlegen, die einer Organisation gehören.
permissions: Organisationsinhaber können Basisberechtigungen für eine Organisation festlegen.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/setting-base-permissions-for-an-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organisationen
  - teams
---

### Über Basisberechtigungen für eine Organisation

Du kannst Basisberechtigungen festlegen, die für alle Mitglieder einer Organisation gelten, wenn sie auf eines der Repositorys der Organisation zugreifen. Basisberechtigungen gelten nicht für externen Mitarbeiter.

{% if currentVersion == "free-pro-team@latest" %}By default, members of an organization will have **Read** permissions to the organization's repositories.{% endif %}

Wenn jemand mit Administratorberechtigungen auf die Repositorys einer Organisation einem Mitglied eine höhere Berechtigungsstufe für das Repository gewährt, überschreibt die höhere Berechtigungsstufe die Basisberechtigung.

### Basisberechtigungen festlegen

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
5. Wähle unter „Base permissions" (Basisberechtigungen) das Dropdownmenü, um neue Basisberechtigungen auszuwählen. ![Neue Berechtigungsstufe aus der Dropdownliste der Basisberechtigungen auswählen](/assets/images/help/organizations/base-permissions-drop-down.png)
6. Überprüfen Sie die Änderungen. Klicke zur Bestätigung auf **Change default permission to PERMISSION** (Ändere die Basisberechtigungen in BERECHTIGUNG). ![Überprüfen und Bestätigen der Änderung der Basisberechtigungen](/assets/images/help/organizations/base-permissions-confirm.png)

### Weiterführende Informationen

- „[Berechtigungsebenen für die Repositorys einer Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)“
- „[Externe Mitarbeiter zu Organisations-Repositorys hinzufügen](/organizations/managing-access-to-your-organizations-repositories/adding-outside-collaborators-to-repositories-in-your-organization)“
