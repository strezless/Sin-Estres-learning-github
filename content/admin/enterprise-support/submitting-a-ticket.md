---
title: Submitting a ticket
intro: 'You can submit a support ticket using the {% if enterpriseServerVersions contains currentVersion %}{% data variables.product.prodname_ghe_server %} {% data variables.enterprise.management_console %} or{% endif %} the support portal.'
redirect_from:
  - /enterprise/admin/enterprise-support/submitting-a-ticket
versions:
  enterprise-server: '*'
  github-ae: '*'
---

### About submitting a ticket

Before submitting a ticket, you should gather helpful information for {% data variables.contact.github_support %} and choose a contact person. For more information, see "[Preparing to submit a ticket](/enterprise/admin/guides/enterprise-support/preparing-to-submit-a-ticket)."

{% if enterpriseServerVersions contains currentVersion %}
After submitting your support request and optional diagnostic information, {% data variables.contact.github_support %} may ask you to download and share a support bundle with us. For more information, see "[Providing data to {% data variables.contact.github_support %}](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support)."

### Submitting a ticket using the {% data variables.contact.enterprise_portal %}

1. Navigate to the {% data variables.contact.contact_enterprise_portal %}.
5. Click **Submit a Ticket**
  ![Submit a ticket to Enterprise Support team](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}

### Submitting a ticket using your enterprise account

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %}
{% data reusables.enterprise-accounts.settings-tab %}
3. In the left sidebar, click **Enterprise licensing**.
  !["Enterprise licensing" tab in the enterprise account settings sidebar](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. Under "{% data variables.product.prodname_enterprise %} Help", click **{% data variables.contact.enterprise_support %} Portal**.
  ![Link to navigate to Enterprise support site](/assets/images/enterprise/support/enterprise-support-link.png)
5. Click **Submit a Ticket**
  ![Submit a ticket to Enterprise Support team](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}

### Submitting a ticket using the {% data variables.product.product_name %} {% data variables.enterprise.management_console %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.type-management-console-password %}
{% data reusables.enterprise_management_console.support-link %}
5. If you'd like to include diagnostics with your support ticket, Under "Diagnostics", click **Download diagnostic info** and save the file locally. You'll attach this file to your support ticket later.
  ![Button to download diagnostics info](/assets/images/enterprise/support/download-diagnostics-info-button.png)
6. Under "Open Support Request", click **New support request**.
  ![Button to open a support request](/assets/images/enterprise/management-console/open-support-request.png)
5. Click **Submit a Ticket**
  ![Submit a ticket to Enterprise Support team](/assets/images/enterprise/support/submit-ticket-button.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-first-section %}
14. To include diagnostics with your support ticket, click **Add file**, then attach the diagnostics file you downloaded.
  ![Add file button](/assets/images/enterprise/support/support-ticket-add-file.png)
{% data reusables.enterprise_enterprise_support.submit-support-ticket-second-section %}
7. Click **Submit**.

{% endif %}
{% if currentVersion == "github-ae@latest" %}
### Submitting a ticket using the {% data variables.contact.ae_azure_portal %}

Commercial customers can submit a support request in the {% data variables.contact.contact_ae_portal %}. Government customers should use the [Azure portal for government customers](https://portal.azure.us/#blade/Microsoft_Azure_Support/HelpAndSupportBlade). For more information, see [Create an Azure support request](https://docs.microsoft.com/azure/azure-portal/supportability/how-to-create-azure-support-request) in the Microsoft documentation.

For urgent issues, to ensure a quick response, after you submit a ticket, please call the support hotline immediately. Your Technical Support Account Manager (TSAM) will provide you with the number to use in your onboarding session.

{% endif %}

### Further reading

- "[About {% data variables.contact.enterprise_support %}](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)"{% if enterpriseServerVersions contains currentVersion %}
- "[About {% data variables.contact.premium_support %} for {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/enterprise-support/about-github-premium-support-for-github-enterprise-server)."{% endif %}
