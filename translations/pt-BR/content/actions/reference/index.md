---
title: Referência
intro: 'Documentação de referência para criar fluxos de trabalho, usando executores hospedados no GitHub e autenticação.'
redirect_from:
  - /actions/configuring-and-managing-workflows/using-variables-and-secrets-in-a-workflow
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### Sintaxe de fluxo de trabalho

O arquivo do fluxo de trabalho foi escrito em YAML. No arquivo de fluxo de trabalho de YAML, é possível usar a sintaxe de expressão para avaliar informações contextuais, literais, operadores e funções. As informações contextuais incluem fluxo de trabalho, variáveis de ambiente, segredos e eventos que acionaram o fluxo de trabalho. Ao usar [`executar`](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idstepsrun) em um fluxo de trabalho para executar comandos de shell, você pode usar uma sintaxe específica de comando de fluxo de trabalho para definir variáveis de ambiente, definir parâmetros de saída para etapas subsequentes e definir erros ou mensagens de depuração.

{% link_in_list /workflow-syntax-for-github-actions %}
{% link_in_list /context-and-expression-syntax-for-github-actions %}
{% link_in_list /workflow-commands-for-github-actions %}

### Eventos

Você pode configurar fluxos de trabalho para serem executados quando eventos específicos do GitHub ocorrerem, em um horário agendado, manualmente ou quando eventos estiverem fora do GitHub.

{% link_in_list /events-that-trigger-workflows %}

### Autenticação e segredos

{% data variables.product.prodname_dotcom %} fornece um token que você pode usar para autenticar em nome de {% data variables.product.prodname_actions %}. Você também pode armazenar informações confidenciais como um segredo na sua organização{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}, repositório ou ambientes{% else %} ou repositório{% endif %}. {% data variables.product.prodname_dotcom %} criptografa todos os segredos.

{% link_in_list /authentication-in-a-workflow %}
{% link_in_list /encrypted-secrets %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == "github-ae@latest" %}
### Ambientes

Os trabalhos do fluxo de trabalho podem fazer referência a ambientes que possuem regras de proteção ou segredos específicos do ambiente.

{% link_in_list /environments %}
{% endif %}

### Variáveis de ambiente

{% data variables.product.prodname_dotcom %} define as variáveis do ambiente para cada execução do fluxo de trabalho {% data variables.product.prodname_actions %}. Você também pode definir variáveis de ambiente personalizadas no seu arquivo do fluxo de trabalho.

{% link_in_list /environment-variables %}

{% if currentVersion == "free-pro-team@latest" %}
### Administração

Ao executar fluxos de trabalho em executores hospedados em {% data variables.product.prodname_dotcom %}, existem limites de uso e taxas de uso em potencial. Você também pode desabilitar ou restringir o uso de {% data variables.product.prodname_actions %} em um repositório e organização.

{% link_in_list /usage-limits-billing-and-administration %}

{% endif %}
