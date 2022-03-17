1. Navigate to where your self-hosted runner is registered:
   * **In an organization or repository**: navigate to the main page and click {% octicon "gear" aria-label="The Settings gear" %} **Settings**.
   * {% if currentVersion == "free-pro-team@latest" %}**If using an enterprise account**: navigate to your enterprise account by visiting `https://github.com/enterprises/ENTERPRISE-NAME`, replacing `ENTERPRISE-NAME` with your enterprise account's name.{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}**If using an enterprise-level runner**:

     1. In the upper-right corner of any page, click {% octicon "rocket" aria-label="The rocket ship" %}.
     1. In the left sidebar, click **Enterprise overview**.
     1. {% endif %} In the enterprise sidebar, {% octicon "law" aria-label="The law icon" %} **Policies**.
1. Navigate to the {% data variables.product.prodname_actions %} settings:
   * **In an organization or repository**: click **Actions** in the left sidebar.

     ![Actions setting](/assets/images/help/settings/settings-sidebar-actions.png)
   * {% if currentVersion == "free-pro-team@latest" %}**If using an enterprise account**{% elsif enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}**If using an enterprise-level runner**{% endif %}: click **Actions** under "{% octicon "law" aria-label="The law icon" %} Policies".
