---
title: Using environment variables
intro: '{% data variables.product.prodname_dotcom %} sets default environment variables for each {% data variables.product.prodname_actions %} workflow run. You can also set custom environment variables in your workflow file.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### About environment variables

{% data variables.product.prodname_dotcom %} sets default environment variables that are available to every step in a workflow run. Environment variables are case-sensitive. Commands run in actions or steps can create, read, and modify environment variables.

To set custom environment variables, you need to specify the variables in the workflow file. You can define environment variables for a step, job, or entire workflow using the [`jobs.<job_id>.steps.env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv), [`jobs.<job_id>.env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idenv), and [`env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env) keywords. For more information, see "[Workflow syntax for {% data variables.product.prodname_dotcom %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)."

```yaml
steps:
  - name: Hello world
    run: echo Hello world $FIRST_NAME $middle_name $Last_Name!
    env:
      FIRST_NAME: Mona
      middle_name: The
      Last_Name: Octocat
```

You can also use the `set-env` workflow command to set an environment variable that the following steps in a workflow can use. The `set-env` command can be used directly by an action or as a shell command in a workflow file using the `run` keyword. For more information, see "[Workflow commands for {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable)."

### Default environment variables

We strongly recommend that actions use environment variables to access the filesystem rather than using hardcoded file paths. {% data variables.product.prodname_dotcom %} sets environment variables for actions to use in all runner environments.

| Environment variable | Description                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CI`                 | Always set to `true`.                                                                                                                                                                                                                                                                                                                                                                             |
| `HOME`               | The path to the {% data variables.product.prodname_dotcom %} home directory used to store user data. For example, `/github/home`.                                                                                                                                                                                                                                                            |
| `GITHUB_WORKFLOW`    | The name of the workflow.                                                                                                                                                                                                                                                                                                                                                                         |
| `GITHUB_RUN_ID`      | {% data reusables.github-actions.run_id_description %}                                                                                                                                                                                                                                                                                                                                     |
| `GITHUB_RUN_NUMBER`  | {% data reusables.github-actions.run_number_description %}                                                                                                                                                                                                                                                                                                                                 |
| `GITHUB_ACTION`      | The unique identifier (`id`) of the action.                                                                                                                                                                                                                                                                                                                                                       |
| `GITHUB_ACTIONS`     | Always set to `true` when {% data variables.product.prodname_actions %} is running the workflow. You can use this variable to differentiate when tests are being run locally or by {% data variables.product.prodname_actions %}.                                                                                                                                                     |
| `GITHUB_ACTOR`       | The name of the person or app that initiated the workflow. For example, `octocat`.                                                                                                                                                                                                                                                                                                                |
| `GITHUB_REPOSITORY`  | The owner and repository name. For example, `octocat/Hello-World`.                                                                                                                                                                                                                                                                                                                                |
| `GITHUB_EVENT_NAME`  | The name of the webhook event that triggered the workflow.                                                                                                                                                                                                                                                                                                                                        |
| `GITHUB_EVENT_PATH`  | The path of the file with the complete webhook event payload. For example, `/github/workflow/event.json`.                                                                                                                                                                                                                                                                                         |
| `GITHUB_WORKSPACE`   | The {% data variables.product.prodname_dotcom %} workspace directory path. The workspace directory contains a subdirectory with a copy of your repository if your workflow uses the [actions/checkout](https://github.com/actions/checkout) action. If you don't use the `actions/checkout` action, the directory will be empty. For example, `/home/runner/work/my-repo-name/my-repo-name`. |
| `GITHUB_SHA`         | The commit SHA that triggered the workflow. For example, `ffac537e6cbbf934b08745a378932722df287a53`.                                                                                                                                                                                                                                                                                              |
| `GITHUB_REF`         | The branch or tag ref that triggered the workflow. For example, `refs/heads/feature-branch-1`. If neither a branch or tag is available for the event type, the variable will not exist.                                                                                                                                                                                                           |
| `GITHUB_HEAD_REF`    | Only set for forked repositories. The branch of the head repository.                                                                                                                                                                                                                                                                                                                              |
| `GITHUB_BASE_REF`    | Only set for forked repositories. The branch of the base repository.                                                                                                                                                                                                                                                                                                                              |
| `GITHUB_SERVER_URL`  | Returns the URL of the {% data variables.product.product_name %} server. For example: `https://{% data variables.product.product_url %}`.                                                                                                                                                                                                                                               |
| `GITHUB_API_URL`     | Returns the API URL. For example: `{% data variables.product.api_url_code %}`.                                                                                                                                                                                                                                                                                                                |
| `GITHUB_GRAPHQL_URL` | Returns the GraphQL API URL. For example: `{% data variables.product.graphql_url_code %}`.                                                                                                                                                                                                                                                                                                   |

### Naming conventions for environment variables

{% note %}

**Note:** {% data variables.product.prodname_dotcom %} reserves the `GITHUB_` environment variable prefix for internal use by {% data variables.product.prodname_dotcom %}. Setting an environment variable or secret with the `GITHUB_` prefix will result in an error.

{% endnote %}

Any new environment variables you set that point to a location on the filesystem should have a `_PATH` suffix. The `HOME` and `GITHUB_WORKSPACE` default variables are exceptions to this convention because the words "home" and "workspace" already imply a location.
