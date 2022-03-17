---
title: Moving assigned issues on project boards
intro: 'You can use {% data variables.product.prodname_actions %} to automatically move an issue to a specific column on a project board when the issue is assigned.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
type: tutorial
topics:
  - ワークフロー
  - Project management
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### はじめに

This tutorial demonstrates how to use the [`alex-page/github-project-automation-plus` action](https://github.com/marketplace/actions/github-project-automation) to automatically move an issue to a specific column on a project board when the issue is assigned. For example, when an issue is assigned, you can move it into the `In Progress` column your project board.

In the tutorial, you will first make a workflow file that uses the [`alex-page/github-project-automation-plus` action](https://github.com/marketplace/actions/github-project-automation). Then, you will customize the workflow to suit your needs.

### ワークフローの作成

1. {% data reusables.actions.choose-repo %}
2. In your repository, choose a project board. You can use an existing project, or you can create a new project. For more information about creating a project, see "[Creating a project board](/github/managing-your-work-on-github/creating-a-project-board)."
3. {% data reusables.actions.make-workflow-file %}
4. Copy the following YAML contents into your workflow file.

    {% raw %}
    ```yaml{:copy}
    name: Move assigned card
    on:
      issues:
        types:
          - assigned
    jobs:
      move-assigned-card:
        runs-on: ubuntu-latest
        steps:
          - uses: alex-page/github-project-automation-plus@v0.3.0
            with:
              project: Docs Work
              column: In Progress
              repo-token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
    ```
    {% endraw %}
5. Customize the parameters in your workflow file:
   - Change the value for `project` to the name of your project board. If you have multiple project boards with the same name, the `alex-page/github-project-automation-plus` action will act on all projects with the specified name.
   - Change the value for `column` to the name of the column where you want issues to move when they are assigned.
   - Change the value for `repo-token`:
     1. Create a personal access token with the `repo` scope. 詳しい情報については、「[個人アクセストークンを作成する](/github/authenticating-to-github/creating-a-personal-access-token)」を参照してください。
     1. Store this personal access token as a secret in your repository. For more information about storing secrets, see "[Encrypted secrets](/actions/reference/encrypted-secrets)."
     1. In your workflow file, replace `PERSONAL_ACCESS_TOKEN` with the name of your secret.
6. {% data reusables.actions.commit-workflow %}

### Testing the workflow

Whenever an issue in your repository is assigned, the issue will be moved to the specified project board column. If the issue is not already on the project board, it will be added to the project board.

If your repository is user-owned, the `alex-page/github-project-automation-plus` action will act on all projects in your repository or user account that have the specified project name and column. Likewise, if your repository is organization-owned, the action will act on all projects in your repository or organization that have the specified project name and column.

Test your workflow by assigning an issue in your repository.

1. Open an issue in your repository. For more information, see "[Creating an issue](/github/managing-your-work-on-github/creating-an-issue)."
2. Assign the issue. For more information, see "[Assigning issues and pull requests to other GitHub users](/github/managing-your-work-on-github/assigning-issues-and-pull-requests-to-other-github-users)."
3. To see the workflow run that assigning the issue triggered, view the history of your workflow runs. 詳しい情報については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。
4. When the workflow completes, the issue that you assigned should be added to the specified project board column.

### 次のステップ

- To learn more about additional things you can do with the `alex-page/github-project-automation-plus` action, like deleting or archiving project cards, visit the [`alex-page/github-project-automation-plus` action documentation](https://github.com/marketplace/actions/github-project-automation).
