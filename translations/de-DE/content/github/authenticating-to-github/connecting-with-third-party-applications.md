---
title: Mit Anwendungen von Drittanbietern verbinden
intro: 'Sie können Ihre {% data variables.product.product_name %}-Identität über OAuth mit Drittanbieter-Anwendungen verbinden. Wenn Du eine dieser Anwendungen autorisierst, solltest Du sicherstellen, dass es sich um eine vertrauenswürdige Anwendung handelt, und prüfen, von wem sie entwickelt wurde und auf welche Informationen sie zugreifen will.'
redirect_from:
  - /articles/connecting-with-third-party-applications
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - identity
  - access management
---

Wenn Sie eine Drittanbieter-Anwendung mit Ihrer {% data variables.product.product_name %}-Anmeldung identifizieren möchte, wird eine Seite mit den Kontaktdaten des Entwicklers und einer Liste der angeforderten Daten angezeigt.

### Den Anwendungsentwickler kontaktieren

Wenn eine Anwendung nicht von {% data variables.product.product_name %}, sondern von einem Drittanbieter entwickelt wurde, wissen wir nicht genau, wie diese Anwendung die Daten nutzt, auf die sie zugreifen möchte. Wende Dich via die Angaben zum Entwickler, die Du oben auf der Seite findest, an den Anwendungsadministrator, falls Du Fragen oder Bedenken zu seiner Anwendung hast.

![{% data variables.product.prodname_oauth_app %}-Inhaberinformationen](/assets/images/help/platform/oauth_owner_bar.png)

Auf der rechten Seite findest Du eine detaillierte Beschreibung der Anwendung und die zugehörige Website, sofern der Entwickler diese Informationen bereitgestellt hat.

![OAuth-Anwendungsinformationen und -Website](/assets/images/help/platform/oauth_app_info.png)

### Typen an Anwendungszugriff und Daten

Anwendungen können *Lese*- oder *Schreib*zugriff auf Deine {% data variables.product.product_name %}-Daten haben.

- Der **Lesezugriff** erlaubt es einer Anwendung nur, Deine Daten *anzuzeigen*.
- Mit **Schreibzugriff** kann eine Anwendung Deine Daten auch *ändern*.

#### Informationen zu OAuth-Scopes

*Scopes* sind benannte Gruppen von Berechtigungen, die eine Anwendung anfordern kann, um auf öffentliche und nicht öffentliche Daten zuzugreifen.

Wenn Sie eine Drittanbieter-Anwendung verwenden möchten, die in {% data variables.product.product_name %} integriert ist, teilt diese Anwendung Ihnen mit, welche Art von Zugriff auf Ihre Daten benötigt wird. Wenn Du der App Zugriff erteilst, kann sie Aktionen in Deinem Namen durchführen, beispielsweise das Lesen oder Ändern von Daten. Wenn Du beispielsweise eine App verwenden möchtest, die den Scope `user:email` fordert, hat die App Lesezugriff auf Deine privaten E-Mail-Adressen. For more information, see "[About scopes for {% data variables.product.prodname_oauth_app %}s](/apps/building-integrations/setting-up-and-registering-oauth-apps/about-scopes-for-oauth-apps)."

{% tip %}

**Hinweis:** Derzeit kannst Du Quellcode-Zugriff nicht in einen Lesezugriff ändern.

{% endtip %}

#### Arten der angeforderten Daten

Es gibt mehrere Typen von Daten, die Anwendungen anfordern können.

![OAuth-Zugriffsdetails](/assets/images/help/platform/oauth_access_types.png)

{% tip %}

**Tipp:**{% data reusables.user_settings.review_oauth_tokens_tip %}

{% endtip %}

| Arten von Daten           | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Commit-Status             | Du kannst einer Drittanbieter-Anwendung Zugriff gewähren, um Deinen Commit-Status zu melden. Der Zugriff auf den Commit-Status ermöglicht es Anwendungen, zu ermitteln, ob ein Build erfolgreich für einen bestimmten Commit ist. Anwendungen erhalten keinen Zugriff auf Deinen Code, aber sie <em>können</em> Statusinformationen für einen bestimmten Commit lesen und schreiben. |
| Bereitstellungen          | Deployment status access allows applications to determine if a deployment is successful against a specific commit for a repository. Applications won't have access to your code.                                                                                                                                                                                                             |
| Gists                     | [Gist](https://gist.github.com) access allows applications to read or write to {% if currentVersion != "github-ae@latest" %}both your public and{% else %}both your internal and{% endif %} secret Gists.                                                                                                                                                                                    |
| Hooks                     | Der [Webhooks](/webhooks)-Zugriff ermöglicht es Anwendungen, Hook-Konfigurationen auf von Dir verwalteten Repositorys zu lesen oder zu schreiben.                                                                                                                                                                                                                                            |
| Benachrichtigungen        | Notification access allows applications to read your {% data variables.product.product_name %} notifications, such as comments on issues and pull requests. Die Anwendungen können jedoch auf keine Inhalte Deiner Repositorys zugreifen.                                                                                                                                                    |
| Organisationen und Teams  | Mit dem Organisations- und Teamzugriff können Apps auf Organisations- und Teammitglieder zugreifen und sie verwalten.                                                                                                                                                                                                                                                                        |
| Persönliche Benutzerdaten | Zu Benutzerdaten gehören die Angaben in Deinem Benutzerprofil, beispielsweise Dein Name, Deine E-Mail-Adresse und Dein Standort.                                                                                                                                                                                                                                                             |
| Repositorys               | Repository-Informationen umfassen die Namen der Mitarbeiter, die von Dir erstellten Branches und die effektiven Dateien in Deinem Repository. Applications can request access for either {% if currentVersion != "github-ae@latest" %}public{% else %}internal{% endif %} or private repositories on a user-wide level.                                                                      |
| Repository-Löschung       | Anwendungen können die Löschung von Repositorys anfordern, die Du verwaltest, aber sie erhalten keinen Zugriff auf Deinen Code.                                                                                                                                                                                                                                                              |

### Aktualisierte Berechtigungen anfordern

Anwendungen können neue Zugriffsberechtigungen anfordern. Wenn eine Applikation aktualisierte Berechtigungen anfordert, wird sie Dich über die Unterschiede informieren.

![Zugriff von Drittanbieter-Anwendungen ändern](/assets/images/help/platform/oauth_existing_access_pane.png)
