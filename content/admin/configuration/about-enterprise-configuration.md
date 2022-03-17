---
title: About enterprise configuration
intro: 'You can use the site admin dashboard{% if enterpriseServerVersions contains currentVersion %}, {% data variables.enterprise.management_console %}, and administrative shell (SSH) {% elsif currentVersion == "github-ae@latest" %} and enterprise settings or contact support{% endif %} to manage your enterprise.'
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - enterprise
---

{% if enterpriseServerVersions contains currentVersion %}
{% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %} For more information, see "[Site admin dashboard](/admin/configuration/site-admin-dashboard)."

{% data reusables.enterprise_site_admin_settings.about-the-management-console %} For more information, see "[Accessing the management console](/admin/configuration/accessing-the-management-console)."

{% data reusables.enterprise_site_admin_settings.about-ssh-access %} For more information, see "[Accessing the administrative shell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)."
{% endif %}

{% if currentVersion == "github-ae@latest" %}
The first time you access your enterprise, you will complete an initial configuration to get {% data variables.product.product_name %} ready to use. The initial configuration includes connecting your enterprise with an idP, authenticating with SAML SSO, and configuring policies for repositories and organizations in your enterprise. For more information, see "[Initializing {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae)."

For users to receive any emails from {% data variables.product.product_name %} after the initial configuration, you must ask {% data variables.contact.github_support %} to configure outbound email support with your SMTP server. For more information, see "[Configuring email for notifications](/admin/configuration/configuring-email-for-notifications)."

Later, you can use the site admin dashboard and enterprise settings to further configure your enterprise, manage users, organizations and repositories, and set policies that reduce risk and increase quality. 

All enterprises are configured with subdomain isolation and support for TLS 1.2 and higher for encrypted traffic only.
{% endif %}

### Further reading

- "[Managing users, organizations, and repositories](/admin/user-management)"
- "[Setting policies for your enterprise](/admin/policies)"
