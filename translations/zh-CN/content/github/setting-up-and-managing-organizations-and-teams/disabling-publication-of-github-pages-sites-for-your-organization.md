---
title: 为组织禁止发布 GitHub Pages 站点
intro: '您可以禁止组织成员从组织的仓库中发布 {% data variables.product.prodname_pages %} 站点。'
permissions: '组织所有者可禁止从组织中的仓库发布 {% data variables.product.prodname_pages %} 站点。'
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>2.22'
  github-ae: '*'
---

### 关于限制发布 {% data variables.product.prodname_pages %} 站点

您可以控制组织成员是否可以使用 {% data variables.product.prodname_pages %} 从组织中的仓库发布网站。 有关 {% data variables.product.prodname_pages %} 的更多信息，请参阅“[关于 {% data variables.product.prodname_pages %}](/github/working-with-github-pages/about-github-pages)”。

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}如果您的站点管理员启用了公共页面，{% endif %}{% data variables.product.prodname_pages %} 站点将在互联网上公开，即使其仓库是私有的{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}或内部的{% endif %}。 更多信息请参阅{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}“[为企业配置 {% data variables.product.prodname_pages %}](/admin/configuration/configuring-github-pages-for-your-enterprise#enabling-public-sites-for-github-pages)”和{% endif %}“[关于仓库可见性](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)”。

### 禁止发布 {% data variables.product.prodname_pages %} 站点

禁止发布 {% data variables.product.prodname_pages %} 站点后，任何已发布的站点仍将保持已发布状态。 您可以手动取消发布站点。 更多信息请参阅“[取消发布 {% data variables.product.prodname_pages %} 站点](/github/working-with-github-pages/unpublishing-a-github-pages-site)”。

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.member-privileges %}
1. 在“Pages creation（页面创建）”下，取消选中 **Allow members to publish sites（允许成员发布站点）**。 ![取消选中的"允许成员发布站点"选项复选框](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png)
1. 单击 **Save（保存）**。 !["允许成员发布站点"选项的"保存"按钮](/assets/images/help/organizations/org-settings-pages-disable-publication-save-button.png)
