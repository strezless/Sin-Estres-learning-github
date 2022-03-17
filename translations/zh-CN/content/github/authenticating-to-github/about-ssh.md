---
title: 关于 SSH
intro: '使用 SSH 协议可以连接远程服务器和服务并向它们验证。 利用 SSH 密钥可以连接 {% data variables.product.product_name %}，而无需在每次访问时都提供用户名和个人访问令牌。'
redirect_from:
  - /articles/about-ssh
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

在设置 SSH 时，将会[生成 SSH 密钥并将其添加到 ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)，然后[将该密钥添加到您的 {% data variables.product.product_name %} 帐户](/articles/adding-a-new-ssh-key-to-your-github-account)。 将 SSH 密钥添加到 ssh-agent，通过使用密码确保 SSH 密钥增加一层保护。 更多信息请参阅“[使用 SSH 密钥密码](/articles/working-with-ssh-key-passphrases)”。

{% if currentVersion == "free-pro-team@latest" %}要对使用 SAML 单点登录的组织所拥有的仓库使用 SSH 密钥，您需要先授权。 更多信息请参阅“[授权 SSH 密钥用于 SAML 单点登录](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)”。{% endif %}

建议定期[查阅 SSH 密钥列表](/articles/reviewing-your-ssh-keys)，撤销任何无效或安全受到威胁的密钥。

{% if currentVersion == "free-pro-team@latest" %}
如果 SSH 密钥一年未使用，则作为安全预防措施，
{% data variables.product.prodname_dotcom %} 会自动删除非活动的 SSH 密钥。 更多信息请参阅“[删除或缺失的 SSH 密钥](/articles/deleted-or-missing-ssh-keys)”。
{% endif %}

如果您是提供 SSH 证书的组织成员，可以使用证书来访问组织的仓库，而无需添加证书到您的 {% data variables.product.product_name %} 帐户。 更多信息请参阅“[关于 SSH 认证中心](/articles/about-ssh-certificate-authorities)”。

### 延伸阅读

- "[检查现有 SSH 密钥](/articles/checking-for-existing-ssh-keys)"
- "[测试 SSH 连接](/articles/testing-your-ssh-connection)"
- "[使用 SSH 密钥密码](/articles/working-with-ssh-key-passphrases)"
- "[SSH 故障排除](/articles/troubleshooting-ssh)"
{%- if currentVersion == "free-pro-team@latest" %}
- "[授权 SSH 密钥用于 SAML 单点登录](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{%- endif %}
