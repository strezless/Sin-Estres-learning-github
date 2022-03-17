---
title: Enabling branch restrictions
intro: 'You can enforce branch restrictions so that only certain users, teams, or apps can push to a protected branch in repositories owned by your organization.'
product: '{% data reusables.gated-features.branch-restrictions %}'
redirect_from:
  - /articles/enabling-branch-restrictions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Anyone with admin permissions to an organization-owned repository can enable branch restrictions.

{% data reusables.repositories.protected-branches-options %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
{% data reusables.repositories.include-administrators %}
6. Under "Protect matching branches", select **Restrict who can push to matching branches**. ![Branch restriction checkbox](/assets/images/help/repository/restrict-branch.png)
8. Search for and select the people, teams, or apps who will have permission to push to the protected branch. ![Branch restriction search](/assets/images/help/repository/restrict-branch-search.png)
9. Click **Create**.

### 더 읽을거리

- "[About protected branches](/github/administering-a-repository/about-protected-branches)"
- "[Configuring protected branches](/github/administering-a-repository/configuring-protected-branches)"
- "[About required status checks](/github/administering-a-repository/about-required-status-checks)"
- "[Enabling required status checks](/github/administering-a-repository/enabling-required-status-checks)"
