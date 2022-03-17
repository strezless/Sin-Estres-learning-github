---
title: Einen Pull Request kommentieren
redirect_from:
  - /articles/adding-commit-comments/
  - /articles/commenting-on-the-diff-of-a-pull-request/
  - /articles/commenting-on-differences-between-files/
  - /articles/commenting-on-a-pull-request
intro: 'Wenn Du einen Pull Request in einem Repository geöffnet hast, können Mitarbeiter und Teammitglieder den Vergleich der Dateien zwischen den zwei festgelegten Branches kommentieren oder allgemeine Kommentare zum Gesamtprojekt abgeben.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Informationen zu Pull Requests

Du kannst auf der Registerkarte **Conversation** (Unterhaltung) eines Pull Requests Kommentare hinterlassen, um allgemeine Anmerkungen, Fragen oder Vorschläge anzubringen. Du kannst auch Änderungen vorschlagen, die der Autor des Pull Requests direkt aus Deinem Kommentar übernehmen kann.

![Pull-Request-Unterhaltung](/assets/images/help/pull_requests/conversation.png)

Du kannst auch auf der Registerkarte **Files changed** (Dateien geändert) bestimmte Teile einer Datei kommentieren, entweder in Form von einzelnen Zeilenkommentaren oder als Teil eines [Pull-Request-Reviews](/articles/about-pull-request-reviews). Zeilenkommentare sind eine großartige Möglichkeit, Fragen zur Implementierung zu besprechen oder dem Autor Feedback zu geben.

Weitere Informationen zum Hinzufügen von Zeilenkommentaren zu einem Pull-Request-Review findest Du unter „[Vorgeschlagene Änderungen in einem Pull Request prüfen.](/articles/reviewing-proposed-changes-in-a-pull-request)“

{% note %}

**Hinweis:** Wenn Du per E-Mail auf einen Pull Request antwortest, wird Dein Kommentar auf der Registerkarte **Conversation** (Unterhaltung) hinzugefügt und ist nicht Bestandteil eines Pull-Request-Reviews dar.

{% endnote %}

Um auf einen vorhandenen Zeilenkommentar zu antworten, navigiere auf der Registerkarte **Conversation** (Unterhaltung) oder **Files changed** (Dateien geändert) zu dem Kommentar und füge dann darunter einen zusätzlichen Zeilenkommentar ein.

{% tip %}

**Tipps:**
- Pull-Request-Kommentare unterstützen dieselbe [Formatierung](/categories/writing-on-github) wie reguläre Kommentare auf {% data variables.product.product_name %}, z. B. @Erwähnungen, Emojis und Verweise.
- Du kannst auf der Registerkarte **Files changed** (Dateien geändert) [Reaktionen](/articles/about-conversations-on-github#reacting-to-ideas-in-comments) zu Kommentaren in Pull Requests hinzufügen.

{% endtip %}

### Zeilenkommentare zu einem Pull Request hinzufügen

{% data reusables.repositories.sidebar-pr %}
2. Klicke in der Liste der Pull Requests auf den Pull Request, bei dem Du Zeilenkommentare einfügen möchtest.
{% data reusables.repositories.changed-files %}
{% data reusables.repositories.start-line-comment %}
{% data reusables.repositories.type-line-comment %}
{% data reusables.repositories.suggest-changes %}
5. Wenn Du fertig bist, klicke auf **Add single comment** (Einzelnen Kommentar hinzufügen). ![Inline-Kommentarfenster](/assets/images/help/commits/inline-comment.png)

Alle, die den Pull Request oder das Repository beobachten, erhalten eine Benachrichtigung über Deinen Kommentar.

{% data reusables.pull_requests.resolving-conversations %}

### Weiterführende Informationen

- „[Einen Permalink zu einem Code-Ausschnitt erstellen](/articles/creating-a-permanent-link-to-a-code-snippet/)“
{% if currentVersion == "free-pro-team@latest" %}- "[Reporting abuse or spam](/articles/reporting-abuse-or-spam)"
{% endif %}
