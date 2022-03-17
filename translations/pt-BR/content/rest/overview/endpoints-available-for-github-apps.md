---
title: Pontos de extremidade disponíveis para aplicativos GitHub
intro: O seu aplicativo pode fazer pedidos para os seguintes pontos de extremidade de REST.
redirect_from:
  - /v3/apps/available-endpoints
  - /rest/reference/endpoints-available-for-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

Você deve usar um token de acesso da instalação para acessar os pontos de extremidade usando seu {% data variables.product.prodname_github_app %}. Para obter mais informações, consulte "[Efetuando a autenticação com o {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)".

{% for thing in rest.operationsEnabledForGitHubApps[currentVersion] %}
{% assign category = thing[0] %}
{% assign operations = thing[1] %}
{% if operations.size > 0 %}
  <h3 id="{{category}}">
    <a href="#{{category}}">{{ category }}</a>
  </h3>  
  <ul>
  {% for operation in operations %}
  <li><a href="/{{currentLanguage}}/rest/reference/{{operation.category}}#{{operation.slug}}"><code><span style="text-transform: uppercase">{{operation.verb}}</span> {{operation.requestPath}}</code></a></li>
  {% endfor %}
  </ul>
{% endif %}
{% endfor %}
