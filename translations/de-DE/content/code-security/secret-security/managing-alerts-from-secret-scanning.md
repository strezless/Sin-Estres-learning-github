---
title: Warnungen von „secret scanning" (Durchsuchen nach Geheimnissen) verwalten
intro: Du kannst Warnungen für Geheimnisse, welche in Deinem Repository geprüft wurden, anschauen und schließen.
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/managing-alerts-from-secret-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - repositorys
---

{% data reusables.secret-scanning.beta %}

### Warnungen verwalten

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
3. In the left sidebar, click **Secret scanning alerts**.
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
   !["Secret scanning alerts" tab](/assets/images/help/repository/sidebar-secrets.png)
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
   !["Secret scanning alerts" tab](/assets/images/enterprise/github-ae/repository/sidebar-secrets-ghae.png)
   {% endif %}
4. Klicke unter „Secret scanning" (nach Geheimnissen durchsuchen) auf die Warnung, die Du ansehen willst.
   {% if currentVersion == "free-pro-team@latest" %}
   ![Liste der Warnungen aus „secret scanning" (Durchsuchen nach Geheimnissen)](/assets/images/help/repository/secret-scanning-click-alert.png)
   {% endif %}
   {% if currentVersion ver_gt "enterprise-server@2.22" %}
   ![Liste der Warnungen aus „secret scanning" (Durchsuchen nach Geheimnissen)](/assets/images/help/repository/secret-scanning-click-alert-ghe.png)
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
   ![Liste der Warnungen aus „secret scanning" (Durchsuchen nach Geheimnissen)](/assets/images/enterprise/github-ae/repository/secret-scanning-click-alert-ghae.png)
   {% endif %}
5. Optionally, use the "Mark as" drop-down menu and click a reason for resolving an alert.
   {% if currentVersion == "free-pro-team@latest" %}
   ![Dropdownmenü für das Auflösen von Warnungen aus „secret scanning" (Durchsuchen nach Geheimnissen)](/assets/images/help/repository/secret-scanning-resolve-alert.png)
   {% endif %}
   {% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
   ![Dropdownmenü für das Auflösen von Warnungen aus „secret scanning" (Durchsuchen nach Geheimnissen)](/assets/images/help/repository/secret-scanning-resolve-alert-ghe.png)
   {% endif %}

### Kompromittierte Geheimnisse sichern

Sobald ein Geheimnis an ein Repository übergeben wurde, solltest Du das Geheimnis als kompromittiert betrachten. {% data variables.product.prodname_dotcom %} empfiehlt die folgenden Aktionen für kompromittierte Geheimnisse:

- Bei einem kompromittierten, persönlichen {% data variables.product.prodname_dotcom %}-Zugriffstoken, lösche das kompromittierte Token, erstelle ein neues Token und aktualisiere alle Dienste, die das alte Token verwenden. Weitere Informationen findest Du unter „[Ein persönliches Zugriffstoken für die Befehlszeile erstellen](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line).“
- Für alle anderen Geheimnisse überprüfe zuerst, dass das zu {% data variables.product.product_name %} übergebene Geheimnis gültig ist. Falls ja, erstelle ein neues Geheimnis, aktualisiere alle Dienste, die das alte Geheimnis nutzen und lösche dann das alte Geheimnis.
