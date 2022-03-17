---
title: Using GitHub Packages with GitHub Actions
intro: 'You can configure a workflow in {% data variables.product.prodname_actions %} to automatically publish or install a package from {% data variables.product.prodname_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/using-github-packages-with-github-actions
  - /packages/using-github-packages-with-your-projects-ecosystem/using-github-packages-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### About {% data variables.product.prodname_registry %} with {% data variables.product.prodname_actions %}

{% data reusables.repositories.about-github-actions %} {% data reusables.repositories.actions-ci-cd %} For more information, see "[About {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/about-github-actions)."

You can extend the CI and CD capabilities of your repository by publishing or installing packages as part of your workflow.

{% if currentVersion == "free-pro-team@latest" %}
#### Authenticating to {% data variables.product.prodname_github_container_registry %}

{% data reusables.package_registry.container-registry-beta %}

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

For an authentication example, see "[Authenticating with the {% data variables.product.prodname_container_registry %}](/packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images#authenticating-with-the-container-registry)."

{% endif %}

#### Authenticating to package registries on {% data variables.product.prodname_dotcom %}

{% if currentVersion == "free-pro-team@latest" %}If you want your workflow to authenticate to {% data variables.product.prodname_registry %} to access a package registry other than the {% data variables.product.prodname_container_registry %} on {% data variables.product.product_name %}, then{% else %}To authenticate to package registries on {% data variables.product.product_name %},{% endif %} we recommend using the `GITHUB_TOKEN` that {% data variables.product.product_name %} automatically creates for your repository when you enable {% data variables.product.prodname_actions %} instead of a personal access token for authentication. The `GITHUB_TOKEN` has `read:packages` and `write:packages` scopes to the current repository. For forks, the token also has the `read:packages` scope for the parent repository.

You can reference the `GITHUB_TOKEN` in your workflow file using the {% raw %}`{{secrets.GITHUB_TOKEN}}`{% endraw %} context. For more information, see "[Authenticating with the GITHUB_TOKEN](/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token)."

### About permissions and package access for repository-owned packages

{% note %}

**Note:** Repository-owned packages include RubyGems, npm, Apache Maven, NuGet, Gradle, and Docker packages that use the package namespace `docker.pkg.github.com`.

{% endnote %}

When you enable GitHub Actions, GitHub installs a GitHub App on your repository. The `GITHUB_TOKEN` secret is a GitHub App installation access token. You can use the installation access token to authenticate on behalf of the GitHub App installed on your repository. The token's permissions are limited to the repository that contains your workflow. For more information, see "[Permissions for the GITHUB_TOKEN](/actions/reference/authentication-in-a-workflow#about-the-github_token-secret)."

{% data variables.product.prodname_registry %} allows you to push and pull packages through the `GITHUB_TOKEN` available to a {% data variables.product.prodname_actions %} workflow.

{% if currentVersion == "free-pro-team@latest" %}
### About permissions and package access for {% data variables.product.prodname_container_registry %}

The {% data variables.product.prodname_container_registry %} (`ghcr.io`) allows users to create and administer containers as free-standing resources at the organization level. Containers can be owned by an organization or personal user account and you can customize access to each of your containers separately from repository permissions.

All workflows accessing the {% data variables.product.prodname_container_registry %} should use the `GITHUB_TOKEN` instead of a personal access token. For more information about security best practices, see "[Security hardening for GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)."

### Default permissions and access settings for containers modified through workflows

When you create, install, modify, or delete a container through a workflow, there are some default permission and access settings used to ensure admins have access to the workflow. You can adjust these access settings as well.

For example, by default if a workflow creates a container using the `GITHUB_TOKEN`, then:
- The container inherits the visibility and permissions model of the repository where the workflow is run.
- Repository admins where the workflow is run become the admins of the container once the container is created.

These are more examples of how default permissions work for workflows that manage packages.

| {% data variables.product.prodname_actions %} workflow task | Default permissions and access |
|----|----|
| Download an existing container | - If the container is public, any workflow running in any repository can download the container. <br> - If the container is internal, then all workflows running in any repository owned by the Enterprise account can download the container. For enterprise-owned organizations, you can read any repository in the enterprise <br> - If the container is private, only workflows running in repositories that are given read permission on that container can download the container. <br>
| Upload a new version to an existing container | - If the container is private, internal, or public, only workflows running in repositories that are given write permission on that container can upload new versions to the container.
| Delete a container or versions of a container | - If the container is private, internal, or public, only workflows running in repositories that are given delete permission can delete existing versions of the container.

You can also adjust access to containers in a more granular way or adjust some of the default permissions behavior. For more information, see "[Configuring access control and visibility for container images](/packages/guides/configuring-access-control-and-visibility-for-container-images)."

{% endif %}

### Publishing a package using an action

You can use {% data variables.product.prodname_actions %} to automatically publish packages as part of your continuous integration (CI) flow. This approach to continuous deployment (CD) allows you to automate the creation of new package versions, if the code meets your quality standards. For example, you could create a workflow that runs CI tests every time a developer pushes code to a particular branch. If the tests pass, the workflow can publish a new package version to {% data variables.product.prodname_registry %}.

{% data reusables.package_registry.actions-configuration %}

The following example demonstrates how you can use {% data variables.product.prodname_actions %} to build and test your app, and then automatically create a Docker image and publish it to {% data variables.product.prodname_registry %}:

- Create a new workflow file in your repository (such as `.github/workflows/deploy-image.yml`), and add the following YAML:
  {% raw %}
  ```yaml{:copy}
  name: Create and publish a package
  on:
    push:
      branches: ['release']
  jobs:
    run-npm-build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v2
        - name: npm install and build webpack
          run: |
            npm install
            npm run build
        - uses: actions/upload-artifact@main
          with:
            name: webpack artifacts
            path: public/

    run-npm-test:
      runs-on: ubuntu-latest
      needs: run-npm-build
      strategy:
        matrix:
          os: [ubuntu-latest]
          node-version: [12.x, 14.x]
      steps:
        - uses: actions/checkout@v2
        - name: Use Node.js ${{ matrix.node-version }}
          uses: actions/setup-node@v1
          with:
            node-version: ${{ matrix.node-version }}
        - uses: actions/download-artifact@main
          with:
            name: webpack artifacts
            path: public
        - name: npm install, and test
          run: |
            npm install
            npm test
          env:
            CI: true

    build-and-push-image:
      runs-on: ubuntu-latest
      needs: run-npm-test
      steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: Build container image
        uses: docker/build-push-action@v1
        with:
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
          registry: {% endraw %}{% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}{% raw %}
          repository: ${{ github.repository }}/octo-image
          tag_with_sha: true
          tag_with_ref: true
  ```
  {% endraw %}

  The relevant settings are explained in the following table:

  <table>
  <tr>
  <td>

{% raw %}
```yaml
on:
  push:
    branches: ['release']
```
{% endraw %}
  </td>
  <td>
    Configures the <code>Create and publish a package</code> workflow to run every time a change is pushed to the branch called <code>release</code>.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
  run-npm-build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: npm install and build webpack
        run: |
          npm install
          npm run build
      - uses: actions/upload-artifact@main
        with:
          name: webpack artifacts
          path: public/
  ```
  {% endraw %}
  </td>
  <td>
    This job installs NPM and uses it to build the app.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
  run-npm-test:
    runs-on: ubuntu-latest
    needs: run-npm-build
    strategy:
      matrix:
        os: [ubuntu-latest]
        node-version: [14.x]
    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - uses: actions/download-artifact@main
        with:
          name: webpack artifacts
          path: public
      - name: npm install, and test
        run: |
          npm install
          npm test
        env:
          CI: true
  ```
{% endraw %}
  </td>
  <td>
    This job uses <code>npm test</code> to test the code. The <code>needs: run-npm-build</code> command makes this job dependent on the <code>run-npm-build</code> job.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
  - name: Build container image
  ```
{% endraw %}
  </td>
  <td>
    Creates a new step called <code>Build container image</code>. This step runs as part of the <code>build-and-push-image</code> job. The <code>needs: run-npm-test</code> command makes this job dependent on the <code>run-npm-test</code> job.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
uses: docker/build-push-action@v1
  ```
{% endraw %}
  </td>
  <td>
    Uses the Docker <code>build-push-action</code> action to build the image, based on your repository's <code>Dockerfile</code>. If the build succeeds, it pushes the image to {% data variables.product.prodname_registry %}.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
with:
  ```
{% endraw %}
  </td>
  <td>
    Sends the required parameters to the <code>build-push-action</code> action. This are defined in the subsequent lines.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
username: ${{ github.actor }}
  ```
{% endraw %}
  </td>
  <td>
    Defines the user account that will publish the packages. Once published, the packages are owned by the account defined here.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
password: ${{ secrets.GITHUB_TOKEN }}
  ```
{% endraw %}
  </td>
  <td>
    Defines the password that is used to access {% data variables.product.prodname_registry %}.
  </td>
  </tr>
  <tr>
  <td>

  ```yaml
registry: {% if currentVersion == "github-ae@latest" %}docker.YOUR-HOSTNAME.com{% else %}docker.pkg.github.com{% endif %}
  ```
  </td>
  <td>
    Defines the registry that will host the resulting packages. This example uses {% data variables.product.prodname_registry %}.{% if currentVersion == "github-ae@latest" %} Replace <code>YOUR-HOSTNAME</code> with the name of your enterprise.{% endif %} {% if currentVersion == "free-pro-team@latest" %} If you're using the {% data variables.product.prodname_container_registry %}, then use <code>ghcr.io</code> as the hostname.{% endif %}
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
repository: ${{ github.repository }}/octo-image
  ```
{% endraw %}
  </td>
  <td>
    Defines which repository will host the resulting package, and sets the name of the published package. Replace <code>octo-image</code> with the name you want for your package.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
tag_with_sha: true
  ```
{% endraw %}
  </td>
  <td>
    Tags the published package with the first seven characters of the commit's SHA. For example, <code>sha-2f2d842</code>.
  </td>
  </tr>
  <tr>
  <td>

{% raw %}
  ```yaml
tag_with_ref: true
  ```
{% endraw %}
  </td>
  <td>
    Tags the published package with the git ref. This can be the name of the branch used to create the package.
  </td>
  </tr>
  </table>

- This new workflow will run automatically every time you push a change to a branch named `release` in the repository. You can view the progress in the **Actions** tab.
- A few minutes after the workflow has completed, the new package will visible in your repository. To find your available packages, see "[Viewing a repository's packages](/packages/publishing-and-managing-packages/viewing-packages#viewing-a-repositorys-packages)."


### Installing a package using an action

You can install packages as part of your CI flow using {% data variables.product.prodname_actions %}. For example, you could configure a workflow so that anytime a developer pushes code to a pull request, the workflow resolves dependencies by downloading and installing packages hosted by {% data variables.product.prodname_registry %}. Then, the workflow can run CI tests that require the dependencies.

Installing packages hosted by the {% data variables.product.prodname_registry %} through {% data variables.product.prodname_actions %} requires minimal configuration or additional authentication when you use the `GITHUB_TOKEN`.{% if currentVersion == "free-pro-team@latest" %} Data transfer is also free when an action installs a package. For more information, see "[About billing for {% data variables.product.prodname_registry %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-packages)."{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
{% endif %}

{% data reusables.package_registry.actions-configuration %}

{% if currentVersion == "free-pro-team@latest" %}
### Upgrading a workflow that accesses `ghcr.io`

{% data reusables.package_registry.github-token-security-over-pat %}

Using the `GITHUB_TOKEN` instead of a PAT, which includes the `repo` scope, increases the security of your repository as you don't need to use a long-lived PAT that offers unnecessary access to the repository where your workflow is run. For more information about security best practices, see "[Security hardening for GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#using-secrets)."

1. Navigate to your package landing page.
1. In the left sidebar, click **Actions access**.
  !["Actions access" option in left menu](/assets/images/help/package-registry/organization-repo-access-for-a-package.png)
2. To ensure your container package has access to your workflow, you must add the repository where the workflow is stored to your container. Click **Add repository** and search for the repository you want to add.
   !["Add repository" button](/assets/images/help/package-registry/add-repository-button.png)
  {% note %}

  **Note:** Adding a repository to your container through the **Actions access** menu option is different than connecting your container to a repository. For more information, see "[Ensuring workflow access to your package](/packages/guides/configuring-access-control-and-visibility-for-container-images#ensuring-workflow-access-to-your-package)" and "[Connecting a repository to a container image](/packages/guides/connecting-a-repository-to-a-container-image)."

  {% endnote %}
3. Optionally, using the "role" drop-down menu, select the default access level that you'd like the repository to have to your container image.
  ![Permission access levels to give to repositories](/assets/images/help/package-registry/repository-permission-options-for-package-access-through-actions.png)
5. Open your workflow file. On the line where you login to `ghcr.io`, replace your PAT with {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}.

For example, this workflow publishes a Docker container using {% raw %}`${{ secrets.GITHUB_TOKEN }}`{% endraw %} to authenticate.

{% raw %}
```yaml{:copy}
name: Demo Push

on:   
  push:
    # Publish `master` as Docker `latest` image.
    branches:
      - master
      - seed

    # Publish `v1.2.3` tags as releases.
    tags:
      - v*

  # Run tests for any PRs.
  pull_request:

env:
  IMAGE_NAME: ghtoken_product_demo

jobs:
  # Push image to GitHub Packages.
  # See also https://docs.docker.com/docker-hub/builds/
  push:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Build image
        run: docker build . --file Dockerfile --tag $IMAGE_NAME --label "runnumber=${GITHUB_RUN_ID}"

      - name: Log into registry
        # This is where you will update the PAT to GITHUB_TOKEN
        run: echo "${{ secrets.GITHUB_TOKEN }}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin

      - name: Push image
        run: |
          IMAGE_ID=ghcr.io/${{ github.repository_owner }}/$IMAGE_NAME

          # Change all uppercase to lowercase
          IMAGE_ID=$(echo $IMAGE_ID | tr '[A-Z]' '[a-z]')
          # Strip git ref prefix from version
          VERSION=$(echo "${{ github.ref }}" | sed -e 's,.*/\(.*\),\1,')
          # Strip "v" prefix from tag name
          [[ "${{ github.ref }}" == "refs/tags/"* ]] && VERSION=$(echo $VERSION | sed -e 's/^v//')
          # Use Docker `latest` tag convention
          [ "$VERSION" == "master" ] && VERSION=latest
          echo IMAGE_ID=$IMAGE_ID
          echo VERSION=$VERSION
          docker tag $IMAGE_NAME $IMAGE_ID:$VERSION
          docker push $IMAGE_ID:$VERSION
```
{% endraw %}

{% endif %}
