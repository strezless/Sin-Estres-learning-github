---
title: Managing the default branch name for repositories in your organization
intro: 'You can set the default branch name for repositories that members create in your organization.'
permissions: Managing the default branch name for your repositories
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.23'
  github-ae: '*'
---

### About the default branch name

When a member of your organization creates a new repository, {% data variables.product.prodname_dotcom %} will create a single branch and set it as the repository's default branch. You can change the name that {% data variables.product.product_name %} uses for the default branch in new repositories that members of your organization create. For more information about the default branch, see "[About branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)."

{% data reusables.branches.set-default-branch %}

If an enterprise owner has enforced a policy for the default branch name for your enterprise, you cannot set a default branch name for your organization. Instead, you can change the default branch for individual repositories. For more information, see {% if currentVersion == "free-pro-team@latest" %}"[Enforcing repository management policies in your enterprise](/github/setting-up-and-managing-your-enterprise/enforcing-repository-management-policies-in-your-enterprise-account#enforcing-a-policy-on-the-default-branch-name)"{% else %}"[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-on-the-default-branch-name)"{% endif %} and "[Changing the default branch](/github/administering-a-repository/changing-the-default-branch)."

### Setting the default branch name

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.repository-defaults %}
3. Under "Repository default branch", click **Change default branch name now**. ![Override button](/assets/images/help/organizations/repo-default-name-button.png)
4. Type the default name that you would like to use for new branches. ![Text box for entering default name](/assets/images/help/organizations/repo-default-name-text.png)
5. Klicke auf **Update** (Aktualisieren). ![Update button](/assets/images/help/organizations/repo-default-name-update.png)

### Weiterführende Informationen

- /github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories
