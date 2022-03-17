You need an access token to publish, install, and delete packages. Du kannst ein persönliches Zugriffstoken verwenden, um Dich mit Deinem Benutzernamen direkt bei {% data variables.product.prodname_registry %} oder beim {% data variables.product.prodname_dotcom %}-API zu authentifizieren. When you create a personal access token, you can assign the token different scopes depending on your needs.

{% if currentVersion == "free-pro-team@latest" %}
To authenticate using a
{% data variables.product.prodname_actions %}-workflow:
- For package registries (`PACKAGE-REGISTRY.pkg.github.com`), you can use a `GITHUB_TOKEN`.
- For the container registry (`ghcr.io/OWNER/IMAGE-NAME`), you must use a personal access token.
{% else %}
To authenticate to
{% data variables.product.prodname_registry %} using a {% data variables.product.prodname_actions %} workflow, you must use `GITHUB_TOKEN`.
{% endif %}
