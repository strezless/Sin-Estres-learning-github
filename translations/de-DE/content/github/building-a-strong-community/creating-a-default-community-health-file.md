---
title: Eine Standard-Community-Unterstützungsdatei erstellen
intro: 'Du kannst Standard-Community-Unterstützungsdateien wie zum Beispiel CONTRIBUTING oder CODE_OF_CONDUCT erstellen. Standarddateien werden für alle öffentlichen Repositorys eines Kontos verwendet, das keine eigenen Dateien dieser Art enthält.'
redirect_from:
  - /articles/creating-a-default-community-health-file-for-your-organization
  - /github/building-a-strong-community/creating-a-default-community-health-file-for-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Informationen zu Standard-Community-Unterstützungsdateien

You can add default community health files to the root of a public repository called `.github` that is owned by an organization{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %}.

{% data variables.product.product_name %} wird Standarddateien für ein öffentliches Repository benutzen und anzeigen, sofern das Konto, dem das Repository gehört, über keine eigenen Dateien dieses Typs an den folgenden Stellen verfügt:
- im Root des Repositorys
- im Ordner `.github`
- im Ordner `docs`

Wenn z. B. jemand einen Issue oder Pull Request in einem öffentlichen Repository erstellt, das keine eigene CONTRIBUTING-Datei enthält, wird ein Link zur standardmäßigen CONTRIBUTING-Datei angezeigt. If a repository has any files in its own `.github/ISSUE_TEMPLATE` folder{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}, including issue templates or a *config.yml* file,{% endif %} none of the contents of the default `.github/ISSUE_TEMPLATE` folder will be used.

Standarddateien sind nicht in Klonen, Paketen oder Downloads von einzelnen Repositorys enthalten, da sie nur im `.github`-Repository gespeichert sind.

### Unterstützte Dateitypen

You can create defaults in your organization{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %} for the following community health files:

| Community-Unterstützungsdatei                                                                                                                                                                           | Beschreibung                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" %}
| *CODE_OF_CONDUCT.md*                                                                                                                                                                                  | Eine CODE_OF_CONDUCT-Datei legt die Standards für die Interaktion in einer Community fest. Weitere Informationen findest Du unter „[Deinem Projekt einen Verhaltenskodex hinzufügen](/articles/adding-a-code-of-conduct-to-your-project/)“.{% endif %}
| *CONTRIBUTING.md*                                                                                                                                                                                       | Eine CONTRIBUTING-Datei erläutert, wie zu Deinem Projekt beigetragen werden soll. For more information, see "[Setting guidelines for repository contributors](/articles/setting-guidelines-for-repository-contributors/)."{% if currentVersion == "free-pro-team@latest" %}
| *FUNDING.yml*                                                                                                                                                                                           | Eine FUNDING-Datei zeigt eine Sponsorenschaltfläche in Deinem Repository an, um die Sichtbarkeit von Finanzierungsoptionen für Dein Open-Source-Projekt zu erhöhen. Weitere Informationen findest Du unter „[Sponsorenschaltfläche in Deinem Repository anzeigen](/articles/displaying-a-sponsor-button-in-your-repository)“{% endif %}
| Issue and pull request templates{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} and *config.yml*{% endif %} | Mit den Vorlagen für Issues und Pull Requests kannst Du die Informationen anpassen und standardisieren, die Mitarbeiter beim Öffnen von Issues und Pull Requests in Deinem Repository berücksichtigen sollen. For more information, see "[About issue and pull request templates](/articles/about-issue-and-pull-request-templates/)."{% if currentVersion == "free-pro-team@latest" %}
| *SECURITY.md*                                                                                                                                                                                           | Eine SECURITY-Datei enthält Anweisungen zum verantwortungsvollen Melden einer Sicherheitslücke in Ihrem Projekt. Weitere Informationen findest Du unter „[Eine Sicherheitsrichtlinie zum Repository hinzufügen](/articles/adding-a-security-policy-to-your-repository)“.{% endif %}
| *SUPPORT.md*                                                                                                                                                                                            | Mit einer SUPPORT-Datei kannst Du anderen mitteilen, wie sie Unterstützung bei Deinem Projekt erhalten können. Weitere Informationen findest Du unter „[Support-Ressourcen zu Deinem Projekt hinzufügen](/articles/adding-support-resources-to-your-project/).“                                                                                                                         |

Du kannst keine Standard-Lizenzdatei erstellen. Lizenzdateien müssen zu individuellen Repositorys hinzugefügt werden, damit die Datei bei Klonen, Paketieren und Herunterladen des Projekts enthalten ist.

### Ein Repository für Standarddateien erstellen

{% data reusables.repositories.create_new %}
2. Use the **Owner** drop-down menu, and select the organization{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %} you want to create default files for. ![Dropdownmenü „Owner" (Inhaber)](/assets/images/help/repository/create-repository-owner.png)
3. Gib **.github** als Namen für Dein Repository sowie optional eine Beschreibung ein. ![Feld „Create repository" (Erstellen eines Repositorys)](/assets/images/help/repository/default-file-repository-name.png)
4. Make sure the repository status is set to **Public** (a repository for default files cannot be private). ![Optionsfelder zum Auswählen des privaten oder öffentlichen Status](/assets/images/help/repository/create-repository-public-private.png)
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}
7. Erstelle im Repository eine der möglichen Community-Unterstützungsdateien. Issue templates{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %} and their configuration file{% endif %} must be in a folder called `.github/ISSUE_TEMPLATE`. Alle anderen unterstützten Dateien müssen sich im Root des Repositorys befinden. Weitere Informationen findest Du unter „[Neue Dateien erstellen](/articles/creating-new-files/).“
