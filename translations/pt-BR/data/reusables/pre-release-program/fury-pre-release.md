{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}
{% note %}

**Observação:** Os manifestos de {% data variables.product.prodname_github_app %} estão atualmente disponíveis para pré-visualização dos desenvolvedores. Para acessar essa API durante o período de pré-visualização, você deve fornecer um [tipo de mídia](/rest/overview/media-types) personalizado no cabeçalho `Aceitar`:

```
application/vnd.github.fury-preview+json
```

{% endnote %}
{% endif %}
