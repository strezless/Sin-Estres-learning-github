---
title: Restricting email notifications for your enterprise account to approved domains
intro: "You can prevent your enterprise's information from leaking into personal accounts by restricting email notifications about activity in organizations owned by your enterprise account to verified domains."
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
permissions: Enterprise owners can restrict email notifications for an enterprise account.
---

{% data reusables.enterprise-accounts.verifying-domains-release-phase %}

### About email restrictions for your enterprise account

When you restrict email notifications to verified domains, enterprise members can only use an email address associated with a verified domain to receive email notifications about activity in organizations owned by your enterprise account. The domains can be inherited from the enterprise account or configured for the specific organization. For more information about email restrictions for organizations, see "[Restricting email notifications to an approved domain](/github/setting-up-and-managing-organizations-and-teams/restricting-email-notifications-to-an-approved-domain)."

If email restrictions are enabled for an enterprise account, organization owners cannot disable email restrictions for any organization owned by the enterprise account. If changes occur that result in an organization having no verified domains, either inherited from an enterprise account that owns the organization or for the specific organization, email restrictions will be disabled for the organization.

### Restricting email notifications for your enterprise account

Before you can restrict email notifications for your enterprise account, you must verify at least one domain for the enterprise account. For more information, see "[Verifying your enterprise account's domain](/github/setting-up-and-managing-your-enterprise/verifying-your-enterprise-accounts-domain)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.verified-domains-tab %}
{% data reusables.organizations.restrict-email-notifications %}
1. 单击 **Save（保存）**。
