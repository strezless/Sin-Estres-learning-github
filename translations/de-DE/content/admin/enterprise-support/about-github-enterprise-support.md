---
title: Informationen zum Github Enterprise-Support
intro: '{% data variables.contact.github_support %} can help you troubleshoot issues that arise on {% data variables.product.product_name %}.'
redirect_from:
  - /enterprise/admin/enterprise-support/about-github-enterprise-support
versions:
  enterprise-server: '*'
  github-ae: '*'
---

{% note %}

**Hinweis**: {% data reusables.support.data-protection-and-privacy %}

{% endnote %}

### Informationen zum {% data variables.contact.enterprise_support %}

{% data variables.product.product_name %} includes {% data variables.contact.enterprise_support %} in English{% if enterpriseServerVersions contains currentVersion %}and Japanese{% endif %}.

{% if enterpriseServerVersions contains currentVersion %}
You can contact
{% data variables.contact.enterprise_support %} through {% data variables.contact.contact_enterprise_portal %} for help with:
 - Installation und Verwendung von {% data variables.product.product_name %}
 - Identifizierung und Überprüfung der Ursachen von vermuteten Fehlern
{% endif %}

In addition to all of the benefits of {% data variables.contact.enterprise_support %}, {% if enterpriseServerVersions contains currentVersion %}{% data variables.contact.premium_support %}{% else %}support for {% data variables.product.product_name %}{% endif %} offers:
  - Schriftlicher Support rund um die Uhr über unser Supportportal
  - Telefonischer Support rund um die Uhr
  - A{% if currentVersion == "github-ae@latest" %}n enhanced{% endif %} Service Level Agreement (SLA) {% if enterpriseServerVersions contains currentVersion %}with guaranteed initial response times{% endif %}
{% if currentVersion == "github-ae@latest" %}
  - An assigned Technical Service Account Manager
  - Quarterly support reviews
  - Managed Admin services
{% else if enterpriseServerVersions contains currentVersion %}
  - Technical account managers
  - Zugriff auf Premium-Inhalte
  - Geplante Zustandsprüfungen
  - Managed Admin hours
{% endif %}

{% data reusables.support.government-response-times-may-vary %}

{% if enterpriseServerVersions contains currentVersion %}
Weitere Informationen finden Sie unter „[Informationen zum {{ site.data.variables.contact.premium_support }} für {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)“.
{% endif %}

{% data reusables.support.scope-of-support %}

### {% data variables.contact.enterprise_support %} kontaktieren

You can contact {% data variables.contact.enterprise_support %} through {% if enterpriseServerVersions contains currentVersion %}{% data variables.contact.contact_enterprise_portal %}{% elsif currentVersion == "github-ae@latest" %} the {% data variables.contact.ae_azure_portal %}{% endif %} to report issues in writing. For more information, see "[Receiving help from {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)."

### Geschäftszeiten

{% if enterpriseServerVersions contains currentVersion %}
#### Support auf Englisch
{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
Bei nicht dringenden herkömmlichen Probleme bieten wir 24 Stunden am Tag, 5 Tage die Woche, außer an Wochenenden und nationalen Feiertagen in den USA, Support in englischer Sprache. holidays. Die Antwortdauer beträgt in der Regel 24 Stunden.

For urgent issues, we {% else %}We{% endif %} are available 24 hours per day, 7 days per week, even during national U.S. holidays.

{% data reusables.support.government-response-times-may-vary %}

{% if enterpriseServerVersions contains currentVersion  %}
#### Support auf Japanisch

Bei nicht dringenden Problemen ist der Support auf Japanisch von Montag bis Freitag von 9:00 bis 17:00 Uhr JST verfügbar, außer an nationalen Feiertagen in Japan. For urgent issues, we offer support in English 24 hours per day, 7 days per week, even during national U.S. holidays.

For a complete list of U.S. and Japanese national holidays observed by {% data variables.contact.enterprise_support %}, see "[Holiday schedules](#holiday-schedules)."{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
### Feiertagsübersicht

For urgent issues, we can help you in English 24 hours per day, 7 days per week, including on U.S. {% if enterpriseServerVersions contains currentVersion  %}and Japanese{% endif %} holidays.

#### Feiertage in den USA

{% data variables.contact.enterprise_support %} beobachtet diese Feiertage in den USA. holidays{% if enterpriseServerVersions contains currentVersion  %}, although our global support team is available to answer urgent tickets{% endif %}.

| U.S. Weihnachtsfeiertag | Date observed                  |
| ----------------------- | ------------------------------ |
| Neujahr                 | 1. Januar                      |
| Martin Luther King Day  | Dritter Montag im Januar       |
| Presidents' Day         | Dritter Montag im Februar      |
| Memorial Day            | Letzter Montag im Mai          |
| Independence Day        | 4. Juli                        |
| Labor Day               | Erster Montag im September     |
| Veterans Day            | 12. November                   |
| Thanksgiving            | Vierter Donnerstag im November |
| Tag nach Thanksgiving   | Vierter Freitag im November    |
| Heiligabend             | 24. Dezember                   |
| 1. Weihnachtsfeiertag   | 25. Dezember                   |
| 2. Weihnachtsfeiertag   | 28. Dezember                   |
| Silvester               | 31. Dezember                   |

#### Feiertage in Japan

{% data variables.contact.enterprise_support %} bietet keine japanischsprachige Unterstützung vom 28. Dezember bis 3. Januar sowie an den in [国民の祝日について - 内閣府](https://www8.cao.go.jp/chosei/shukujitsu/gaiyou.html) aufgelisteten Feiertagen.

{% data reusables.enterprise_enterprise_support.installing-releases %}
{% endif %}

### Einem Support-Ticket eine Priorität zuweisen

Wenn Du den {% data variables.contact.enterprise_support %} kontaktierst, kannst Du eine von vier Prioritäten für das Ticket auswählen: „{% data variables.product.support_ticket_priority_urgent %}“ (dringend), „{% data variables.product.support_ticket_priority_high %}“ (hoch), „{% data variables.product.support_ticket_priority_normal %}“ (normal) oder „{% data variables.product.support_ticket_priority_low %}“ (niedrig).

{% data reusables.support.github-can-modify-ticket-priority %}

{% if enterpriseServerVersions contains currentVersion  %}
{% data reusables.support.ghes-priorities %}
{% elsif currentVersion == "github-ae@latest" %}
{% data reusables.support.ghae-priorities %}
{% endif %}

### Support-Tickets lösen und schließen

{% data reusables.support.enterprise-resolving-and-closing-tickets %}

### Weiterführende Informationen

{% if enterpriseServerVersions contains currentVersion %}
- [Häufig gestellte Fragen zu {% data variables.product.prodname_ghe_server %}](https://enterprise.github.com/faq)
- Section 10 on Support in the "[{% data variables.product.prodname_ghe_server %} License Agreement](https://enterprise.github.com/license)"{% endif %}
- "[Receiving help from {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)"{% if enterpriseServerVersions contains currentVersion %}
- "[Preparing to submit a ticket](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)"{% endif %}
- „[Ticket absenden](/enterprise/admin/guides/enterprise-support/submitting-a-ticket)“
