{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
1. Klicke bei Bedarf auf die Zeilennummer des Schritts, um einen Link zu einer bestimmten Zeile in den Logs zu erhalten. You can then copy the link from the address bar of your web browser.
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
  ![Schaltfläche zum Kopieren des Links](/assets/images/help/repository/copy-link-button-updated-2.png)
  {% else %}
  ![Schaltfläche zum Kopieren des Links](/assets/images/help/repository/copy-link-button-updated.png)
  {% endif %}
{% else %}
1. Klicke bei Bedarf auf die Zeilennummer des Schritts, um einen Link zu einer bestimmten Zeile in den Logs zu erhalten. You can then copy the link from the address bar of your web browser. ![Schaltfläche zum Kopieren des Links](/assets/images/help/repository/copy-link-button.png)
{% endif %}