---
title: E-Mail-Adresse für die Abrechnung festlegen
intro: 'Die E-Mail-Adresse Ihres Kontos für die Abrechnung ist diejenige Adresse, an die {% data variables.product.product_name %} Quittungen und andere Benachrichtigungen zu Ihrer Abrechnung sendet.'
redirect_from:
  - /articles/setting-your-personal-account-s-billing-email/
  - /articles/can-i-change-what-email-address-received-my-github-receipt/
  - '/articles/how-do-i-change-the-billing-email,setting-your-billing-email/'
  - /articles/setting-your-organization-s-billing-email/
  - /articles/setting-your-billing-email
versions:
  free-pro-team: '*'
---

### E-Mail-Adresse für die Abrechnung für Dein persönliches Konto festlegen

{% data variables.product.product_name %} sendet Quittungen und andere Benachrichtigungen zu Ihrer Abrechnung an die primäre E-Mail-Adresse Ihres persönlichen Kontos.

Deine primäre E-Mail-Adresse ist die erste E-Mail-Adresse, die in den E-Mail-Einstellungen Deines Kontos aufgeführt ist. Die primäre E-Mail-Adresse Deines Kontos wird auch als E-Mail-Adresse für die Abrechnung verwendet.

Informationen zur Änderung Deiner E-Mail-Adresse für die Abrechnung findest Du unter „[Primäre E-Mail-Adresse ändern](/articles/changing-your-primary-email-address).“

### E-Mail-Adresse für die Abrechnung für Deiner Organisation festlegen

{% data variables.product.product_name %} sendet Quittungen und andere Benachrichtigungen zu Ihrer Abrechnung an die für Ihre Organisation festgelegte E-Mail-Adresse für die Abrechnung.

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. Gib unter **Billing email** (E-Mail-Adresse für die Abrechnung) eine gültige E-Mail-Adresse ein. Diese Adresse kann innerhalb Deiner Organisation auch für weitere Zwecke eingesetzt werden. ![Textfeld für E-Mail-Adresse für die Abrechnung](/assets/images/help/settings/org-billing-email.png)
5. Klicke zur Bestätigung Deiner Änderungen auf **Update profile** (Profil aktualisieren). ![Schaltfläche „Update profile" (Aktualisieren des Profils)](/assets/images/help/settings/update-profile-button.png)

### Managing additional recipients for your organization's billing email

If you have users that want to receive billing reports, you can add their email addresses as billing email recipients. This feature is only available to organizations that are not managed by an enterprise.

#### Adding a recipient for billing notifications

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
1. Under "Billing management", to the right of "Email recipients", click **Add**. ![Add recipient](/assets/images/help/billing/billing-add-email-recipient.png)
1. Type the email address of the recipient, then click **Add**. ![Add recipient modal](/assets/images/help/billing/billing-add-email-recipient-modal.png)

#### Changing the primary recipient for billing notifications

One address must always be designated as the primary recipient. The address with this designation can't be removed until a new primary recipient is selected.

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
1. Under "Billing management", find the email address you want to set as the primary recipient.
1. To the right of the email address, use the "Edit" drop-down menu, and click **Mark as primary**. ![Mark primary recipient](/assets/images/help/billing/billing-change-primary-email-recipient.png)

#### Removing a recipient from billing notifications

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
1. Under "Email recipients", find the email address you want to remove.
1. For the user's entry in the list, click **Edit**. ![Edit recipient](/assets/images/help/billing/billing-edit-email-recipient.png)
1. To the right of the email address, use the "Edit" drop-down menu, and click *Remove**. ![Remove recipient](/assets/images/help/billing/billing-remove-email-recipient.png)
1. Review the confirmation prompt, then click **Remove**.
