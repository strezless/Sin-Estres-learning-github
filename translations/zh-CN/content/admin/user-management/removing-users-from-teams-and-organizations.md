---
title: 从团队和组织中移除用户
intro: '如果组织的成员不再需要某些仓库的访问权限，您可以从允许权限的团队中移除他们。 如果组织的成员不再需要组织拥有的任何仓库的访问权限 ，则可以从组织中移除他们。'
redirect_from:
  - /enterprise/admin/user-management/removing-users-from-teams-and-organizations
versions:
  enterprise-server: '*'
topics:
  - 企业
---

只有所有者或团队管理员可以移除组织成员。 从团队或组织中移除用户时，他们在组织仓库中的问题、拉取请求和评论都会保持原样且仍归属于用户。

{% warning %}

**警告**：在您从组织中移除用户后，他们将无法访问在您组织的**私有仓库**中的任何私有分叉。 他们可能还有这些分叉的本地副本。 不过，他们无法将这些本地副本与组织的仓库同步。 您负责确保无法访问仓库的人员删除任何机密信息或知识产权。 如果从组织中移除的用户是组织成员，在将用户从组织中移除后的三个月内可以将其[恢复为组织成员](/articles/reinstating-a-former-member-of-your-organization)，这样就可以恢复他们对组织仓库的私有分叉的访问权限。

{% endwarning %}

### 移除团队成员

{% warning %}

**注**：{% data reusables.enterprise_management_console.badge_indicator %}

要移除已同步到 LDAP 组的某个团队的现有成员，请联系您的 LDAP 管理员。

{% endwarning %}

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
4. 选择您想要删除的一个或多个人员。 ![组织成员旁的复选框](/assets/images/help/teams/team-member-check-box.png)
5. 在团队成员列表上方，使用下拉菜单，然后单击 **Remove from team（从团队中删除）**。 ![包含更改角色选项的下拉菜单](/assets/images/help/teams/bulk-edit-drop-down.png)

### 从组织中移除用户

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. 在您想要从组织中移除的用户的名称旁，单击复选框。![Remove user 复选框](/assets/images/help/organizations/Organization-remove-user.png)
5. 在页面顶部的组织名称下，单击 **Remove from organization**。 ![从组织删除按钮](/assets/images/help/organizations/Organization-remove-from-organization-button.png)

{% data reusables.organizations.data_saved_for_reinstating_a_former_org_member %}
