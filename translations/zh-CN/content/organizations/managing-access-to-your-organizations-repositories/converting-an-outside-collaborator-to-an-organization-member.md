---
title: 将外部协作者转换为组织成员
intro: '如果您希望为组织仓库的外部协作者提供更广泛的组织内权限，您可以{% if currentVersion == "free-pro-team@latest" %}邀请他们成为组织的成员{% else %}让他们成为组织的成员{% endif %}。'
redirect_from:
  - /articles/converting-an-outside-collaborator-to-an-organization-member
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-outside-collaborator-to-an-organization-member
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
permissions: '组织所有者可以{% if currentVersion == "free-pro-team@latest" %}邀请用户加入{% else %}将用户添加到{% endif %}组织。'
topics:
  - 组织
  - 团队
---

{% if currentVersion == "free-pro-team@latest" %}
如果您的组织采用付费的每用户订阅，则必须有未使用的许可才可邀请新成员加入组织或恢复前组织成员。 更多信息请参阅“[关于每用户定价](/articles/about-per-user-pricing)”。 {% data reusables.organizations.org-invite-expiration %}{% endif %}

{% if currentVersion != "github-ae@latest" %}
If your organization [requires members to use two-factor authentication](/articles/requiring-two-factor-authentication-in-your-organization), users {% if currentVersion == "free-pro-team@latest" %}you invite must [enable two-factor authentication](/articles/securing-your-account-with-two-factor-authentication-2fa) before they can accept the invitation.{% else %}must [enable two-factor authentication](/articles/securing-your-account-with-two-factor-authentication-2fa) before you can add them to the organization.{% endif %}
{% endif %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.people_tab_outside_collaborators %}
{% if currentVersion == "free-pro-team@latest" %}
5. To the right of the name of the outside collaborator you want to become a member, use the {% octicon "gear" aria-label="The gear icon" %} drop-down menu and click **Invite to organization**.![邀请外部协作者加入组织](/assets/images/help/organizations/invite_outside_collaborator_to_organization.png)
{% else %}
5. 在您希望其成为成员的外部协作者姓名右侧，单击 **Invite to organization（邀请加入组织）**。![邀请外部协作者加入组织](/assets/images/enterprise/orgs-and-teams/invite_outside_collabs_to_org.png)
{% endif %}
{% data reusables.organizations.choose-to-restore-privileges %}
{% data reusables.organizations.choose-user-role-send-invitation %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.organizations.user_must_accept_invite_email %} {% data reusables.organizations.cancel_org_invite %}
{% endif %}

### 延伸阅读

- "[将组织成员转换为外部协作者](/articles/converting-an-organization-member-to-an-outside-collaborator)"
