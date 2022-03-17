---
title: 查看上架产品的交易
intro: '{% data variables.product.prodname_marketplace %} 交易页面允许您下载和查看 {% data variables.product.prodname_marketplace %} 上架产品的所有交易。 You can view transactions for the past day (24 hours), week, month, or for the entire duration of time that your {% data variables.product.prodname_github_app %} has been listed.'
redirect_from:
  - /marketplace/github-marketplace-transactions
versions:
  free-pro-team: '*'
---



{% note %}

**注：**由于聚合数据需要时间，因此您会注意到显示的日期略有延迟。 选择时间段时，可以在页面顶部看到指标的确切日期。

{% endnote %}


您可以查看或下载交易数据来跟踪订阅活动。 单击 **Export CSV（导出 CSV）**按钮以下载 `.csv` 文件。 您还可以选择一个时间段在交易页面中查看和搜索。

### 交易数据字段

* **date（日期）：**交易的日期，格式为 `yyyy-mm-dd`。
* **app_name：**应用程序的名称。
* **user_login：**订阅用户的登录名。
* **user_id：**订阅用户的 ID。
* **user_type：**GitHub 帐户的类型，即 `User` 或 `Organization`。
* **country（国家/地区）：**三个字母的国家代码。
* **amount_in_cents：**交易金额，以美分为单位。 如果该值小于计划金额，则表示用户已升级并按比例分配给新计划。 值为零表示用户已取消其计划。
* **renewal_frequency：**续订频率，即 `Monthly` 或 `Yearly`。
* **marketplace_listing_plan_id：**订阅计划的 `id`。

![Marketplace insights](/assets/images/marketplace/marketplace_transactions.png)

### 访问 {% data variables.product.prodname_marketplace %} 交易

要访问 {% data variables.product.prodname_marketplace %} 交易：

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.marketplace_apps %}
4. 选择
您要查看其交易的 {% data variables.product.prodname_github_app %}。
{% data reusables.user-settings.edit_marketplace_listing %}
6. 单击 **Transactions（交易）**选项卡。
7. （可选）通过单击 Transactions（交易）页面右上角的 Period（时段）下拉列表选择不同的时间段。 ![Marketplace 时段](/assets/images/marketplace/marketplace_insights_time_period.png)
