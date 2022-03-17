{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
1. Branchメニューの右の**New pull request（新規プルリクエスト）**をクリックしてください。 !["Pull request" link above list of files](/assets/images/help/pull_requests/pull-request-start-review-button.png)
{% else %}
1. Above the list of files, click
{% octicon "git-pull-request" aria-label="The pull request icon" %} **Pull request**.
  !["Pull request" link above list of files](/assets/images/help/pull_requests/pull-request-start-review-button.png)
{% endif %}
