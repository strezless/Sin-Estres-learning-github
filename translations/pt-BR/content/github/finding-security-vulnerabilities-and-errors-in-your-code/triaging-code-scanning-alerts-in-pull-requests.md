---
title: Alertas de varredura de código de triagem em pull requests
shortTitle: Alertas de triagem em pull requests
intro: 'Quando {% data variables.product.prodname_code_scanning %} identifica um problema em um pull request, você poderá revisar o código destacado e resolver o alerta.'
product: '{% data reusables.gated-features.code-scanning %}'
permissions: 'Se você tiver permissão de leitura em um repositório, você poderá ver anotações em pull requests. Com permissão de gravação, você poderá ver informações detalhadas e resolver alertas de {% data variables.product.prodname_code_scanning %} para esse repositório.'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.code-scanning.beta %}

### Sobre os resultados de {% data variables.product.prodname_code_scanning %} em pull requests

Em repositórios onde {% data variables.product.prodname_code_scanning %} está configurado como uma verificação de pull request, {% data variables.product.prodname_code_scanning %} verifica o código no pull request. Por padrão, isso é limitado a pull requests que visam o branch-padrão ou branches protegidos, mas você pode alterar esta configuração em {% data variables.product.prodname_actions %} ou em um sistema de CI/CD de terceiros. Se o merge das alterações introduziria novos alertas de {% data variables.product.prodname_code_scanning %} no branch de destino, estes serão relatados como resultados de verificação no pull request. Os alertas também são exibidos como anotações na aba **Arquivos alterados** do pull request. Se você tiver permissão de gravação no repositório, você poderá ver qualquer alerta de {% data variables.product.prodname_code_scanning %} existente na aba **Segurança**. Para obter informações sobre os alertas do repositório, consulte "[Gerenciar alertas de {% data variables.product.prodname_code_scanning %} do repositório](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository)".

Se {% data variables.product.prodname_code_scanning %} tiver algum resultado com uma gravidade de `erro`, ocorre uma falha na verificação e o erro é relatado nos resultados de verificação. Se todos os resultados encontrados por {% data variables.product.prodname_code_scanning %} tiverem gravidades menores, os alertas são tratados como avisos ou notas e a verificação é considerada bem-sucedida. Se seu pull request tem como alvo um branch protegido que foi habilitado por {% data variables.product.prodname_code_scanning %}, e o proprietário do repositório configurou as verificações de status obrigatórias, você deverá corrigir ou {% if currentVersion == "enterprise-server@2. 2" %}fechar{% else %}dismiss{% endif %} todos os erros alertas antes que o pull request possa ser mesclado. Para obter mais informações, consulte "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)".

![Ocorreu uma falha na verificação de {% data variables.product.prodname_code_scanning %} em um pull request](/assets/images/help/repository/code-scanning-check-failure.png)

### Sobre {% data variables.product.prodname_code_scanning %} como uma verificação de pull request

Há muitas opções para configurar {% data variables.product.prodname_code_scanning %} como uma verificação de pull request. Portanto, a configuração exata de cada repositório irá variar e alguns terão mais de uma verificação. A verificação que contém os resultados de {% data variables.product.prodname_code_scanning %} é: **Resultados da varredura de código**.

Se o repositório usar a {% data variables.product.prodname_codeql_workflow %} uma **{% data variables.product.prodname_codeql %} / Analyze (LANGUAGE)**, executa-se a verificação para cada linguagem antes que a verificação de resultados seja executada. A verificação de análise pode falhar se houver problemas de configuração ou se o pull request altera a criação para uma linguagem que a análise precisa para compilar (por exemplo, C/C++, C#, ou Java). Assim como com outras verificações de pull request, você poderá ver informações completas da falha de verificação na aba de **Verificações**. Para obter mais informações sobre configuração e solução de problemas, consulte "[Configurar {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/configuring-code-scanning)" ou "[Solução de problemas de {% data variables.product.prodname_code_scanning %}](/github/finding-security-vulnerabilities-and-errors-in-your-code/troubleshooting-code-scanning)".

### Triar de um alerta no seu pull request

Quando você olha para a aba **Arquivos alterados** para um pull request, você vê anotações para todas as linhas de código que acionaram o alerta.

![Alerta de anotação em um diff de pull request](/assets/images/help/repository/code-scanning-pr-annotation.png)

Se você tiver permissão de gravação para o repositório, algumas anotações conterão links com contexto adicional para o alerta. No exemplo acima, da análise de {% data variables.product.prodname_codeql %}, você pode clicar em **valor fornecido pelo usuário** para ver onde os dados não confiáveis entram no fluxo de dados (isso é referido como a fonte). Neste caso, você também pode ver o caminho completo desde a fonte até o código que usa os dados (o sumidouro), clicando em **Mostrar caminhos**. Isto faz com que seja fácil verificar se os dados não são confiáveis ou se a análise não reconheceu uma etapa de sanitização de dados entre a fonte e o destino. Para obter informações sobre a análise do fluxo de dados usando {% data variables.product.prodname_codeql %}, consulte "[Sobre a análise do fluxo de dados](https://help.semmle.com/QL/learn-ql/intro-to-data-flow.html)".

Para ver mais informações sobre um alerta, os usuários com permissão de gravação podem clicar no link **Mostrar mais detalhes**, exibido na anotação. Isso permite que você veja todos os contextos e metadados fornecidos pela ferramenta em uma exibição de alerta. No exemplo abaixo, você pode ver tags que mostram a gravidade, o tipo e as enumerações de fraquezas comuns relevantes (CWEs) para o problema. A vista mostra também quais commits introduziram o problema.

Na visualização detalhada de um alerta, algumas ferramentas de {% data variables.product.prodname_code_scanning %}, como a análise de {% data variables.product.prodname_codeql %} também incluem uma descrição do problema e um link **Mostrar mais** para obter orientações sobre como corrigir seu código.

![Descrição do alerta e link para mostrar mais informações](/assets/images/help/repository/code-scanning-pr-alert.png)

### {% if currentVersion == "enterprise-server@2.22" %}Resolvendo{% else %}Corrigindo{% endif %} um alerta no seu pull request

Qualquer pessoa com acesso push a um pull request pode corrigir um alerta de {% data variables.product.prodname_code_scanning %} que seja identificado nesse pull request. Se você fizer commit de alterações na solicitação do pull request, isto acionará uma nova execução das verificações do pull request. Se suas alterações corrigirem o problema, o alerta será fechado e a anotação removida.

{% if currentVersion == "enterprise-server@2.22" %}

Se você não considera que um alerta deve ser corrigido, os usuários com permissão de gravação podem fechar o alerta manualmente. {% data reusables.code-scanning.close-alert-examples %} O botão **Fechar** está disponível nas anotações e no modo de exibição de alertas se você tiver permissão de gravação no repositório.

{% data reusables.code-scanning.false-positive-fix-codeql %}

{% else %}

### Ignorar um alerta no seu pull request

Uma forma alternativa de fechar um alerta é ignorá-lo. Você pode descartar um alerta se não acha que ele precisa ser corrigido. {% data reusables.code-scanning.close-alert-examples %} Se você tem permissão de gravação no repositório, o botão **Ignorar** estará disponível nas anotações de código e no resumo de alertas. Ao clicar em **Ignorar** será solicitado que você escolha um motivo para fechar o alerta.

![Escolher um motivo para ignorar um alerta](/assets/images/help/repository/code-scanning-alert-close-drop-down.png)

{% data reusables.code-scanning.choose-alert-dismissal-reason %}

{% data reusables.code-scanning.false-positive-fix-codeql %}

Para obter mais informações sobre alertas ignorados, consulte "[Gerenciar alertas de {% data variables.product.prodname_code_scanning %} para o seu repositório](/github/finding-security-vulnerabilities-and-errors-in-your-code/managing-code-scanning-alerts-for-your-repository#dismissing-or-deleting-alerts)".

{% endif %}
