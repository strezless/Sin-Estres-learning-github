---
title: 查看推送日志
intro: 站点管理员可以查看企业上任何仓库的 Git 推送操作列表。
redirect_from:
  - /enterprise/admin/articles/viewing-push-logs/
  - /enterprise/admin/installation/viewing-push-logs
  - /enterprise/admin/user-management/viewing-push-logs
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 企业
---

推送日志条目会显示：

- 推送发起人
- 是否为强制推送
- 某人推送到的分支
- 推送所使用的协议
- 发起的 IP 地址
- 推送所使用的 Git 客户端
- 操作前后的 SHA 哈希

### 查看仓库的推送日志

1. 以站点管理员的身份登录 {% data variables.product.prodname_ghe_server %} 。
1. 导航到仓库。
1. 在仓库页面的右上角，单击
{% octicon "rocket" aria-label="The rocket ship" %}。
    ![用于访问站点管理员设置的火箭图标](/assets/images/enterprise/site-admin-settings/access-new-settings.png)
{% data reusables.enterprise_site_admin_settings.security-tab %}
4. 在左侧边栏中，单击 **Push Log**。 ![Push Log 选项卡](/assets/images/enterprise/site-admin-settings/push-log-tab.png)

{% if enterpriseServerVersions contains currentVersion %}
### 在命令行上查看仓库的推送日志

{% data reusables.enterprise_installation.ssh-into-instance %}
1. 在相应的 Git 仓库中，打开审核日志文件：
  ```shell
  ghe-repo <em>owner</em>/<em>repository</em> -c "less audit_log"
  ```
{% endif %}
