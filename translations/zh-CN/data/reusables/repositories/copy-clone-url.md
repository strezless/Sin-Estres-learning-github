{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
1. 在仓库名称下，单击 **Clone or download（克隆或下载）**。 ![克隆或下载按钮](/assets/images/help/repository/clone-repo-clone-url-button.png)
2. 要使用 HTTPS 克隆仓库，请在“Clone with HTTPS（使用 HTTPS 克隆）”下单击
{% octicon "clippy" aria-label="The clipboard icon" %}.
要使用 SSH 密钥克隆仓库，包括您组织的 SSH 认证机构颁发的证书，请单击 **Use SSH（使用 SSH）**，然后单击
{% octicon "clippy" aria-label="The clipboard icon" %}.
![克隆 URL 按钮](/assets/images/help/repository/https-url-clone.png)
{% else %}
1. 在文件列表上方，单击 {% octicon "download" aria-label="The download icon" %} ****Code（代码）。 !["代码"按钮](/assets/images/help/repository/code-button.png)
1. 要使用 HTTPS 克隆仓库，请在“Clone with HTTPS（使用 HTTPS 克隆）”下单击
{% octicon "clippy" aria-label="The clipboard icon" %}. 要使用 SSH 密钥克隆仓库，包括由组织的 SSH 证书颁发机构颁发的证书，请单击 **Use SSH（使用 SSH）**，然后单击 {% octicon "clippy" aria-label="The clipboard icon" %}。{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %} 要使用 {% data variables.product.prodname_cli %} 克隆仓库，请单击**使用 {% data variables.product.prodname_cli %}**，然后单击 {% octicon "clippy" aria-label="The clipboard icon" %}。{% endif %}
  ![用于复制 URL 以克隆仓库的剪贴板图标](/assets/images/help/repository/https-url-clone.png)
  {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
  ![用于复制 URL 以使用 GitHub CLI 克隆仓库的剪贴板图标](/assets/images/help/repository/https-url-clone-cli.png){% endif %}
{% endif %}
