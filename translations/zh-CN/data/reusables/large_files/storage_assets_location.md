{% if enterpriseServerVersions contains currentVersion %}
默认情况下，
{% data variables.large_files.product_name_long %} 客户端在托管 Git 仓库的同一服务器上存储大型资产。 当 {% data variables.large_files.product_name_short %} 在 {% data variables.product.product_location %} 设备上启用时，大型资产将存储在 `/data/user/storage` 中的数据分区中。
{% endif %}