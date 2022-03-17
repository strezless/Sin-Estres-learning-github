{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_code_scanning_capc %} 适用于所有公共仓库以及启用了 {% data variables.product.prodname_GH_advanced_security %} 的组织拥有的私有仓库。
{%- elsif currentVersion ver_gt "enterprise-server@3.0" %}{% data variables.product.prodname_code_scanning_capc %} 在对仓库启用了 {% data variables.product.prodname_GH_advanced_security %} 时可用。
{%- elsif currentVersion == "github-ae@latest" %}
{% data variables.product.prodname_code_scanning_capc %} 可用作 {% data variables.product.prodname_GH_advanced_security %} 的一部分，在测试期间免费使用。
{%- else %}
{% data variables.product.prodname_code_scanning_capc %} 在您拥有 {% data variables.product.prodname_GH_advanced_security %} 的许可证时可用。{% endif %} {% data reusables.advanced-security.more-info-ghas %}
