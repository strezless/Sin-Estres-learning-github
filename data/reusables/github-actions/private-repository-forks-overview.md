If you rely on using forks of your private repositories, you can configure policies that control how users can run workflows on `pull_request` events. Available to private repositories only, you can configure these policy settings for enterprises, organizations, or repositories. For enterprises, the policies are applied to all repositories in all organizations.

- **Run workflows from fork pull requests** - Allows users to run workflows from fork pull requests, using a `GITHUB_TOKEN` with read-only permission, and with no access to secrets.
- **Send write tokens to workflows from pull requests** - Allows pull requests from forks to use a `GITHUB_TOKEN` with write permission.
- **Send secrets to workflows from pull requests** - Makes all secrets available to the pull request.
