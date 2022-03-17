---
title: About alerts for vulnerable dependencies
intro: '{% data variables.product.product_name %} sends {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %} when we detect vulnerabilities affecting your repository.'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
 
### About vulnerable dependencies

{% data reusables.repositories.a-vulnerability-is %}

When your code depends on a package that has a security vulnerability, this vulnerable dependency can cause a range of problems for your project or the people who use it.

### Detection of vulnerable dependencies

 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %} detects vulnerable dependencies and sends {% data variables.product.prodname_dependabot_short %} alerts{% else %}{% data variables.product.product_name %} detects vulnerable dependencies and sends security alerts{% endif %} when:

{% if currentVersion == "free-pro-team@latest" %}
- A new vulnerability is added to the {% data variables.product.prodname_advisory_database %}. For more information, see "[Browsing security vulnerabilities in the {% data variables.product.prodname_advisory_database %}](/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database)."
- New vulnerability data from [WhiteSource](https://www.whitesourcesoftware.com/vulnerability-database) is processed.{% else %}
- New advisory data is synchronized to {% data variables.product.prodname_ghe_server %} each hour from {% data variables.product.prodname_dotcom_the_website %}. For more information about advisory data, see "<a href="/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database" class="dotcom-only">Browsing security vulnerabilities in the {% data variables.product.prodname_advisory_database %}</a>."{% endif %}
- The dependency graph for a repository changes. For example, when a contributor pushes a commit to change the packages or versions it depends on{% if currentVersion == "free-pro-team@latest" %}, or when the code of one of the dependencies changes{% endif %}. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."

For a list of the ecosystems that {% data variables.product.product_name %} can detect vulnerabilities and dependencies for, see "[Supported package ecosystems](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)."

{% note %}

**Note:** It is important to keep your manifest and lock files up to date. If the dependency graph doesn't accurately reflect your current dependencies and versions, then you could miss alerts for vulnerable dependencies that you use. You may also get alerts for dependencies that you no longer use.

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" % %}
### {% data variables.product.prodname_dependabot %} alerts for vulnerable dependencies
{% else %}
### Security alerts for vulnerable dependencies
{% endif %}

{% data reusables.repositories.enable-security-alerts %}

{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dotcom %} detects and alerts users to vulnerable dependencies in _public_ repositories by default. Owners of private repositories, or people with admin access, can enable {% data variables.product.prodname_dependabot_alerts %} by enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} for their repositories.

You can also enable or disable {% data variables.product.prodname_dependabot %} alerts for all repositories owned by your user account or organization. For more information, see "[Managing security and analysis settings for your user account](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)" or "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)."

{% data variables.product.product_name %} starts generating the dependency graph immediately and sends alerts for any vulnerable dependencies as soon as they are identified. The graph is usually populated within minutes but this may take longer for repositories with many dependencies. For more information, see "[Managing data use settings for your private repository](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)."
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
When {% data variables.product.product_name %} identifies a vulnerable dependency, we send a {% data variables.product.prodname_dependabot_short %} alert to the maintainers of affected repositories with details of the vulnerability, a link to the affected file in the project, and information about a fixed version. {% if currentVersion == "free-pro-team@latest" %}For repositories that have enabled {% data variables.product.prodname_dependabot_security_updates %}, the alert also contains a link to a pull request to update the manifest or lock file to the minimum version that resolves the vulnerability. For more information, see "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates)."{% endif %}
{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
When {% data variables.product.product_name %} identifies a vulnerable dependency, we send a security alert to the maintainers of affected repositories with details of the vulnerability, a link to the affected file in the project, and information about a fixed version. 
{% endif %}

{% warning %}

**Note**: {% data variables.product.product_name %}'s security features do not claim to catch all vulnerabilities. Though we are always trying to update our vulnerability database and alert you with our most up-to-date information, we will not be able to catch everything or alert you to known vulnerabilities within a guaranteed time frame. These features are not substitutes for human review of each dependency for potential vulnerabilities or any other issues, and we recommend consulting with a security service or conducting a thorough vulnerability review when necessary.

{% endwarning %}

### Access to {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}security{% endif %} alerts

You can see all of the alerts that affect a particular project{% if currentVersion == "free-pro-team@latest" %} on the repository's Security tab or{% endif %} in the repository's dependency graph.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Viewing and updating vulnerable dependencies in your repository](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)."{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
We send {% data variables.product.prodname_dependabot_short %} alerts to people with admin permissions in the affected repositories by default. {% data variables.product.product_name %} never publicly discloses identified vulnerabilities for any repository.{% if currentVersion == "free-pro-team@latest" %} You can also enable {% data variables.product.prodname_dependabot_short %} alerts for additional people or teams working repositories that you own or have admin permissions for. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-github-dependabot-alerts)."{% endif %}
{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
We send security alerts to people with admin permissions in the affected repositories by default. {% data variables.product.product_name %} never publicly discloses identified vulnerabilities for any repository.
{% endif %}

### Configuring notifications for {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}security alerts{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
By default, you will receive {% data variables.product.prodname_dependabot_alerts %} by email, grouped by the specific vulnerability. You can also choose to receive {% data variables.product.prodname_dependabot_alerts %} in a weekly email summarizing alerts for up to 10 of your repositories, in your web notifications, or in the {% data variables.product.product_name %} user interface. For more information, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-dependabot-alerts-notification-options)."
{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21" %}
By default, if your site administrator has configured email for notifications on your instance, you will receive {% data variables.product.prodname_dependabot_alerts %} by email. You can also choose to receive {% data variables.product.prodname_dependabot_alerts %} in a weekly email summarizing alerts for up to 10 of your repositories, in your web notifications, or in the {% data variables.product.product_name %} user interface. For more information, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-dependabot-alerts-notification-options)."
{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion == "enterprise-server@2.21" %}
By default, if your site administrator has configured email for notifications on your instance, you will receive security alerts by email. You can also choose to receive security alerts in a weekly email summarizing alerts for up to 10 of your repositories, in your web notifications, or in the {% data variables.product.product_name %} user interface. For more information, see "[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#security-alert-notification-options)."
{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.21" %}
By default, if your site administrator has configured email for notifications on your instance, you will receive security alerts by email. You can also choose to receive security alerts in a weekly email summarizing alerts for up to 10 of your repositories, in your web notifications, or in the {% data variables.product.product_name %} user interface. For more information, see "[Choosing the delivery method for your notifications
](/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications)."
{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.20" % %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}Site administrators can also enable {% data variables.product.prodname_dependabot_alerts %} without notifications. For more information, see "[Enabling {% data variables.product.prodname_dependabot_short %} alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.22" %}Site administrators can also enable security alerts without notifications. For more information, see "[Enabling security alerts for vulnerable dependencies on {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."{% endif %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" % %}{% data reusables.repositories.security-alerts-x-github-severity %} For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications){% else %}"[About email notifications](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}."{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Further reading

- "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates)"
- "[Viewing and updating vulnerable dependencies in your repository](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Understanding how {% data variables.product.product_name %} uses and protects your data](/categories/understanding-how-github-uses-and-protects-your-data)"{% endif %}
