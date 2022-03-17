---
title: 取消发布 GitHub Pages 站点
intro: '您可以取消发布 {% data variables.product.prodname_pages %} 站点，使该站点不再对{% if currentVersion == "free-pro-team@latest" %}公众{% else %}所有 {% data variables.product.product_location %} 用户{% endif %}开放。'
redirect_from:
  - /articles/how-do-i-unpublish-a-project-page/
  - /articles/unpublishing-a-project-page/
  - /articles/unpublishing-a-project-pages-site/
  - /articles/unpublishing-a-user-pages-site/
  - /articles/unpublishing-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
permissions: '拥有仓库管理员或维护员权限的人可取消发布 {% data variables.product.prodname_pages %} 站点。'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### 取消发布项目站点

{% data reusables.repositories.navigate-to-repo %}
2. 如果仓库中存在 `gh-pages` 分支，请删除 `gh-pages` 分支。 更多信息请参阅“[创建和删除仓库中的分支](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)”。
3. 如果 `gh-pages` 分支是您的发布源，
{% if currentVersion == "free-pro-team@latest" %}跳到步骤 6{% else %}您的站点现已取消发布，您可以跳过其余步骤{% endif %}。
{% data reusables.repositories.sidebar-settings %}
5. 在“
{% data variables.product.prodname_pages %}”下，使用 **Source（源）**下拉菜单并选择 **None（无）**。
  ![用于选择发布源的下拉菜单](/assets/images/help/pages/publishing-source-drop-down.png)
{% data reusables.pages.update_your_dns_settings %}

### 取消发布用户或组织站点

{% data reusables.repositories.navigate-to-repo %}
2. 删除用作发布源的分支，或删除整个仓库。 更多信息请参阅“[在仓库中创建和删除分支](/articles/creating-and-deleting-branches-within-your-repository#deleting-a-branch)”和“[删除仓库](/articles/deleting-a-repository)”。
{% data reusables.pages.update_your_dns_settings %}
