{% tip %}

**Tip:** If you receive both web and email notifications, you can automatically sync the read or unread status of the notification so that web notifications are automatically marked as read once you've read the corresponding email notification. To enable this sync, your email client must be able to view images from {% if currentVersion == "free-pro-team@latest" %}`notifications@github.com`{% else %}the `no-reply` email address {% if currentVersion == "github-ae@latest" %}for your {% data variables.product.product_name %} hostname{% elsif enterpriseServerVersions contains currentVersion %}for {% data variables.product.product_location %}, which your site administrator configures{% endif %}{% endif %}.

{% endtip %}
