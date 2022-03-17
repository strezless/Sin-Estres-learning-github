组织包括：
{% if currentVersion == "free-pro-team@latest" %}- 免费选项，{% data variables.product.prodname_free_team %}，在具有完整功能的无限公共仓库和具有有限功能的无限私有仓库上支持无限协作者。
- 用于升级到 {% data variables.product.prodname_team %} 或 {% data variables.product.prodname_ghe_cloud %} 以获取额外功能的选项，包括复杂的用户身份验证和管理，以及升级的支持选项。 {% data reusables.gated-features.more-info %}{% endif %}
- 无限的成员资格，以各种不同的角色授予[对组织及其数据的不同访问权限](/articles/permission-levels-for-an-organization)
- 能够向成员授予[对组织仓库的一系列访问权限](/articles/repository-permission-levels-for-an-organization)
- [反映公司或组结构的嵌套团队](/articles/about-teams)，级联了访问权限和提及{% if currentVersion != "github-ae@latest" %}
- 组织所有者能够查看成员的[双重身份验证 (2FA) 状态](/articles/about-two-factor-authentication)
- 用于[要求所有组织成员使用双重身份验证](/articles/requiring-two-factor-authentication-in-your-organization)的选项{% endif %}
{% if currentVersion == "free-pro-team@latest" %}- The option to purchase a license for {% data variables.product.prodname_GH_advanced_security %} and use the features on private repositories. {% data reusables.advanced-security.more-info-ghas %}{% endif %}
