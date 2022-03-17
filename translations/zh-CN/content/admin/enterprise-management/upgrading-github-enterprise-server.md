---
title: 升级 GitHub Enterprise Server
intro: '升级 {% data variables.product.prodname_ghe_server %}，以获取最新功能和安全更新。'
redirect_from:
  - /enterprise/admin/installation/upgrading-github-enterprise-server
  - /enterprise/admin/articles/upgrading-to-the-latest-release/
  - /enterprise/admin/articles/migrations-and-upgrades/
  - /enterprise/admin/guides/installation/upgrading-the-github-enterprise-virtual-machine/
  - /enterprise/admin/guides/installation/upgrade-packages-for-older-releases/
  - /enterprise/admin/articles/upgrading-older-installations/
  - /enterprise/admin/hidden/upgrading-older-installations/
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch-early-access-program/
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch/
  - /enterprise/admin/guides/installation/upgrading-github-enterprise/
  - /enterprise/admin/enterprise-management/upgrading-github-enterprise-server
versions:
  enterprise-server: '*'
topics:
  - 企业
---

### 准备升级

1. 确定升级策略并选择要升级到的版本。 更多信息请参阅“[升级要求](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrade-requirements/)”。
3. 使用 {% data variables.product.prodname_enterprise_backup_utilities %} 创建全新的主实例备份。 更多信息请参阅 [{% data variables.product.prodname_enterprise_backup_utilities %} README.md 文件](https://github.com/github/backup-utils#readme)。
4. 如果您要使用升级包进行升级，请为 {% data variables.product.prodname_ghe_server %} 最终用户排定维护窗口。 如果您要使用热补丁，则不需要使用维护模式。

  {% note %}

  **注**：维护窗口取决于所执行升级的类型。 使用热补丁进行升级通常不需要维护窗口。 有时需要重启，不过您可以在之后的某个时间重启。 按照 MAJOR.FEATURE.PATCH 的版本控制方案，使用升级包的补丁版本通常需要不到 5 分钟的停机时间。 包含数据迁移的功能版本需要的时间更长，具体视存储性能以及迁移的数据量而定。 更多信息请参阅“[启用和排定维护模式](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)”。

  {% endnote %}

{% if currentVersion ver_gt "enterprise-server@2.20" and currentVersion ver_lt "enterprise-server@3.2" %}

### 关于 {% data variables.product.prodname_ghe_server %} 3.0 及更高版本的最低要求

升级到 {% data variables.product.prodname_ghe_server %} 3.0 或更高版本之前，请检查您为实例预配的硬件资源。 {% data variables.product.prodname_ghe_server %} 3.0 引入了 {% data variables.product.prodname_actions %} 和 {% data variables.product.prodname_registry %} 等新功能，比 2.22 和更早版本需要更多的资源。 更多信息请参阅 [{% data variables.product.prodname_ghe_server %} 3.0 发行说明](/enterprise-server@3.0/admin/release-notes)。

{% data variables.product.prodname_ghe_server %} 3.0 及更高版本的增加要求在下表中以**粗体**表示。

| 用户许可              |                            vCPU |                                      内存 |                                 附加的存储容量 |  根存储容量 |
|:----------------- | -------------------------------:| ---------------------------------------:| ---------------------------------------:| ------:|
| 试用版、演示版或 10 个轻度用户 |   **4**<br/>_Up from 2_ |   **32 GB**<br/>_Up from 16 GB_ | **150 GB**<br/>_Up from 100 GB_ | 200 GB |
| 10-3000           |   **8**<br/>_Up from 4_ |   **48 GB**<br/>_Up from 32 GB_ | **300 GB**<br/>_Up from 250 GB_ | 200 GB |
| 3000-5000         |  **12**<br/>_Up from 8_ |                                   64 GB |                                  500 GB | 200 GB |
| 5000-8000         | **16**<br/>_Up from 12_ |                                   96 GB |                                  750 GB | 200 GB |
| 8000-10000+       | **20**<br/>_Up from 16_ | **160 GB**<br/>_Up from 128 GB_ |                                 1000 GB | 200 GB |

{% if currentVersion ver_gt "enterprise-server@2.21" %}

有关 {% data variables.product.prodname_actions %} 硬件要求的详细信息，请参阅“[{% data variables.product.prodname_ghe_server %} 的 {% data variables.product.prodname_actions %} 使用入门](/admin/github-actions/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-considerations)”。

{% endif %}

{% data reusables.enterprise_installation.about-adjusting-resources %}

{% endif %}

### 生成快照

快照是虚拟机 (VM) 在某一时间点的检查点。 强烈建议在升级虚拟机之前生成快照，这样一来，如果升级失败，您可以将 VM 还原到快照状态。 如果您要升级到新的功能版本，则必须生成 VM 快照。 如果您要升级到补丁版本，可以连接现有数据磁盘。

有两种类型的快照：

- **VM 快照**会保存整个 VM 状态，包括用户数据和配置数据。 此快照方法需要占用大量磁盘空间，且比较耗时。
- **数据磁盘快照**仅会保存您的用户数据。

  {% note %}

  **注意：**
  - 某些平台不允许您只生成数据磁盘的快照。 对于此类平台，您需要生成整个 VM 的快照。
  - 如果您的虚拟机监控程序不支持完整的 VM 快照，您应连续、快速地生成根磁盘和数据磁盘的快照。

  {% endnote %}

| 平台                    | 快照方法 | 快照文档 URL                                                                                                                                                                                               |
| --------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Amazon AWS            | 磁盘   | <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html>                                                                                                                       |
| Azure                 | VM   | <https://docs.microsoft.com/azure/backup/backup-azure-vms-first-look-arm>                                                                                                                              |
| Hyper-V               | VM   | <https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/enable-or-disable-checkpoints-in-hyper-v>                                                                                     |
| Google Compute Engine | 磁盘   | <https://cloud.google.com/compute/docs/disks/create-snapshots>                                                                                                                                         |
| VMware                | VM   | [https://pubs.vmware.com/vsphere-50/topic/com.vmware.wssdk.pg.doc_50/PG_Ch11_VM_Manage.13.3.html](https://pubs.vmware.com/vsphere-50/topic/com.vmware.wssdk.pg.doc_50/PG_Ch11_VM_Manage.13.3.html) |
| XenServer             | VM   | <https://support.citrix.com/article/CTX122978>                                                                                                                                                         |

### 使用热补丁升级

{% data reusables.enterprise_installation.hotpatching-explanation %} 利用 {% data variables.enterprise.management_console %}，您可以立即安装热补丁，也可以排定稍后安装热补丁。 您可以使用管理 shell 的 `ghe-upgrade` 实用程序安装热补丁。 更多信息请参阅“[升级要求](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrade-requirements/)”。

{% note %}

**注**：无法在集群环境中使用 {% data variables.enterprise.management_console %} 安装热补丁。 要在集群环境中安装热补丁，请参阅“[升级集群](/enterprise/{{ currentVersion }}/admin/clustering/upgrading-a-cluster#upgrading-with-a-hotpatch)”。

{% endnote %}

#### 使用热补丁升级单个设备

##### 使用 {% data variables.enterprise.management_console %} 安装热补丁

1. 启用自动更新。 更多信息请参阅“[启用自动更新](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-automatic-update-checks/)”。
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.updates-tab %}
4. 在新的热补丁下载完毕后，请使用 Install package 下拉菜单：
    - 要立即安装，请选择 **Now**：
    - 要稍后安装，请选择以后的日期。 ![热补丁安装日期下拉菜单](/assets/images/enterprise/management-console/hotpatch-installation-date-dropdown.png)
5. 单击 **Install（安装）**。 ![热补丁安装按钮](/assets/images/enterprise/management-console/hotpatch-installation-install-button.png)

##### 使用管理 shell 安装热补丁

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} 复制升级热补丁包（*.hpkg* 文件）的 URL。
{% data reusables.enterprise_installation.download-package %}
4. 使用包文件名运行 `ghe-upgrade` 命令：
  ```shell
  admin@<em>HOSTNAME</em>:~$ ghe-upgrade <em>GITHUB-UPGRADE.hpkg</em>
  *** verifying upgrade package signature...
  ```
5. 如果更新内核、MySQL、Elasticsearch 或其他程序时需要重启，热补丁升级脚本会通知您。

#### 使用热补丁升级包含副本实例的设备

{% note %}

**注**：如果要安装热补丁，则无需进入维护模式或停止复制。

{% endnote %}

配置为高可用性和 Geo-replication 的设备除了会使用主实例之外，还会使用副本实例。 要升级此类设备，您需要逐个升级主实例和所有副本实例。

##### 升级主实例

1. 请按照“[使用管理 shell 安装热补丁](#installing-a-hotpatch-using-the-administrative-shell)”中的说明升级主实例。

##### 升级副本实例

{% note %}

**注**：如果您要将多个副本实例作为 Geo-replication 的一部分运行，请逐一为每个副本实例重复此步骤。

{% endnote %}

1. 按照“[使用管理 shell 安装热补丁](#installing-a-hotpatch-using-the-administrative-shell)”中的说明升级副本实例。 如果使用多个副本进行异地复制，则必须重复此过程，每次升级一个副本。
{% data reusables.enterprise_installation.replica-ssh %}
{% data reusables.enterprise_installation.replica-verify %}

### 使用升级包升级

虽然您可以使用热补丁升级到功能系列中的最新补丁版本，但必须使用升级包升级到更新的功能版本。 例如，要从 `2.11.10` 升级到 `2.12.4`，您必须使用升级包，因为两者在不同的功能系列中。 更多信息请参阅“[升级要求](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrade-requirements/)”。

#### 使用升级包升级单个设备

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} 选择适当的平台并复制升级包（*.pkg* 文件）的 URL。
{% data reusables.enterprise_installation.download-package %}
4. 启用维护模式并等待 {% data variables.product.prodname_ghe_server %} 实例上的所有活动进程完成。 更多信息请参阅“[启用和排定维护模式](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode)”。

  {% note %}

  **注**：升级采用高可用性配置的主设备时，如果您按照“[升级主实例](#upgrading-the-primary-instance)”中的说明操作，设备应当已处于维护模式。

  {% endnote %}

5. 使用包文件名运行 `ghe-upgrade` 命令：
  ```shell
  admin@<em>HOSTNAME</em>:~$ ghe-upgrade <em>GITHUB-UPGRADE.pkg</em>
  *** verifying upgrade package signature...
  ```
6. 确认您要继续升级，并在包签名得到验证后重新启动。 新的根文件系统会写入辅助分区，实例会在维护模式下自动重启：
  ```shell
  *** 正在应用更新...
  This package will upgrade your installation to version <em>version-number</em>
  Current root partition: /dev/xvda1 [<em>version-number</em>]
  Target root partition:  /dev/xvda2
  Proceed with installation? [y/N]
  ```
7. 对于单个设备升级，请禁用维护模式，以便用户能够使用 {% data variables.product.product_location %}。

  {% note %}

  **注**：升级采用高可用性配置的主设备时，您应当一直处于维护模式，直至已升级所有副本，复制是最新版本。 更多信息请参阅“[升级副本实例](#upgrading-a-replica-instance)”。

  {% endnote %}

#### 使用升级包升级包含副本实例的设备

配置为高可用性和 Geo-replication 的设备除了会使用主实例之外，还会使用副本实例。 要升级此类设备，您需要逐个升级主实例和所有副本实例。

##### 升级主实例

{% warning %}

**警告**：复制停止时，如果主实例发生故障，副本升级和复制再次开始之前执行的任何操作都将丢失。

{% endwarning %}

1. 在主实例上，启用维护模式并等待所有活动进程完成。 更多信息请参阅“[启用维护模式](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)”。
{% data reusables.enterprise_installation.replica-ssh %}
3. 在副本实例或者所有副本实例（如果您将多个副本实例作为 Geo-replication 的一部分运行）上，运行 `ghe-repl-stop` 以停止复制。
4. 按照“[使用升级包升级单个设备](#upgrading-a-single-appliance-with-an-upgrade-package)”中的说明升级主实例。

##### 升级副本实例

{% note %}

**注**：如果您要将多个副本实例作为 Geo-replication 的一部分运行，请逐一为每个副本实例重复此步骤。

{% endnote %}

1. 按照“[使用升级包升级单个设备](#upgrading-a-single-appliance-with-an-upgrade-package)”中的说明升级副本实例。 如果使用多个副本进行异地复制，则必须重复此过程，每次升级一个副本。
{% data reusables.enterprise_installation.replica-ssh %}
{% data reusables.enterprise_installation.replica-verify %}

{% data reusables.enterprise_installation.start-replication %}

{% data reusables.enterprise_installation.replication-status %} 如果命令返回 `Replication is not running`，说明复制可能仍在启动。 等待 1 分钟左右，然后再次运行 `ghe-repl-status`。

   {% note %}

    **注**：在重新同步过程中，`ghe-repl-status` 可能返回预期消息，提示复制落后。
    例如：`CRITICAL: git replication is behind the primary by more than 1007 repositories and/or gists`

   {% endnote %}

   如果 `ghe-repl-status` 未返回 `OK`，请执行以下步骤手动启动复制。

   1. 在副本实例上，再次运行 `ghe-repl-setup <primary-instance-ip>`。
   {% data reusables.enterprise_installation.start-replication %}
   {% data reusables.enterprise_installation.replication-status %}
6. 最后一个副本升级完毕且重新同步完成后，请禁用维护模式，以便用户能够使用 {% data variables.product.product_location %}。

### 从失败的升级中恢复

如果升级失败或中断，您应将实例还原为其之前的状态。 完成此操作的过程取决于升级类型。

#### 回滚补丁版本

要回滚补丁版本，请使用带 `--allow-patch-rollback` 开关的 `ghe-upgrade` 命令。 {% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

更多信息请参阅“[命令行实用程序](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities/#ghe-upgrade)”。

#### 回滚功能版本

要从功能版本回滚，请从 VM 快照恢复，以确保根分区和数据分区处于一致的状态。 更多信息请参阅“[生成快照](#taking-a-snapshot)”。

{% if currentVersion ver_gt "enterprise-server@2.22" %}
### 延伸阅读

- "[关于升级到新版本](/admin/overview/about-upgrades-to-new-releases)"
{% endif %}
