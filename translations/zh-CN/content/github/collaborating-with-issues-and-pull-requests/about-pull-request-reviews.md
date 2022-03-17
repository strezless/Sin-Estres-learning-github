---
title: 关于拉取请求审查
intro: '审查允许协作者评论拉取请求中提议的更改、审批更改或在拉取请求合并之前请求进一步更改。 仓库管理员可要求所有拉取请求在合并之前获得批准。'
redirect_from:
  - /articles/about-pull-request-reviews
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 拉取请求
---

### 关于拉取请求审查

打开拉取请求后，具有*读取*权限的任何人都可以查看该拉取请求提议的更改并进行评论。 您也可以建议对代码行的具体更改，作者可直接从拉取请求应用这些更改。 更多信息请参阅“[审查拉取请求中提议的更改](/articles/reviewing-proposed-changes-in-a-pull-request)”。

仓库所有者和协作者可向具体的个人申请拉取请求审查。 组织成员也可向具有仓库读取权限的团队申请拉取请求审查。 更多信息请参阅“[申请拉取请求审查](/articles/requesting-a-pull-request-review)”。 {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}您可以指定自动分配一部分团队成员，而不是分配整个团队。 更多信息请参阅“[管理团队的代码审查分配](/github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team)”。{% endif %}

审查允许讨论提议的更改，帮助确保更改符合仓库的参与指南及其他质量标准。 您可以在 CODEOWNERS 文件中定义哪些个人或团队拥有代码的特定类型或区域。 当拉取请求修改定义了所有者的代码时，该个人或团队将自动被申请为审查者。 更多信息请参阅“[关于代码所有者](/articles/about-code-owners/)”。

{% if currentVersion == "free-pro-team@latest" %}您可以对需要审查的拉取请求预定提醒。 更多信息请参阅“[管理拉取请求的预定提醒](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)”。{% endif %}

![包含行注释的拉取请求更改的标头](/assets/images/help/pull_requests/review-header-with-line-comment.png)

审查有三种可能的状态：
- **评论**：提交一般反馈，但不明确批准更改或申请其他更改。
- **批准**：提交反馈并批准合并拉取请求中提议的更改。
- **申请更改**：提交在拉取请求合并之前必须解决的反馈。

![审查状态图像](/assets/images/help/pull_requests/pull-request-review-statuses.png)

{% data reusables.repositories.request-changes-tips %}

您可以在“对话”时间表中查看拉取请求收到的所有审查，也可在拉取请求的合并框中按仓库所有者和协作者查看审查。

![合并框中的审查图像](/assets/images/help/pull_requests/merge_box/pr-reviews-in-merge-box.png)

{% data reusables.search.requested_reviews_search_tip %}

{% data reusables.pull_requests.resolving-conversations %}

### 重新请求审核

{% data reusables.pull_requests.re-request-review %}

### 必要的审查

{% data reusables.pull_requests.required-reviews-for-prs-summary %} 更多信息请参阅“[关于受保护分支](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)”。

{% tip %}

**提示**：如有必要，对仓库具有*管理员*或*写入*权限的人员可以忽略拉取请求审查。 更多信息请参阅“[忽略拉取请求审查](/articles/dismissing-a-pull-request-review)”。

{% endtip %}

### 延伸阅读

- "[审查拉取请求中提议的更改](/articles/reviewing-proposed-changes-in-a-pull-request)"
- "[查看拉取请求审查](/articles/viewing-a-pull-request-review)"
- "[设置仓库贡献者的指导方针](/articles/setting-guidelines-for-repository-contributors)"
