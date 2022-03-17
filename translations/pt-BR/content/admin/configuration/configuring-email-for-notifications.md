---
title: Configurar notificações de e-mail
redirect_from:
  - /enterprise/admin/guides/installation/email-configuration/
  - /enterprise/admin/articles/configuring-email/
  - /enterprise/admin/articles/troubleshooting-email/
  - /enterprise/admin/articles/email-configuration-and-troubleshooting/
  - /enterprise/admin/user-management/configuring-email-for-notifications
intro: 'Para facilitar a resposta rápida dos usuários à atividade em {% data variables.product.product_name %}, você pode configurar sua empresa para enviar notificações por e-mail sobre problemas, pull request e comentários de commit{% if enterpriseServerVersions contains currentVersion %}, bem como configurações adicionais para permitir respostas de e-mail de envio{% endif %}.'
versions:
  enterprise-server: '*'
  github-ae: '*'
---

Os e-mails de notificação serão enviados se houver atividades no repositório em que o usuário estiver participando, se houver atividades em pull requests ou problemas em que ele esteja envolvido, ou se houver @menções ao usuário ou à equipe da qual ele é integrante.

{% if currentVersion == "github-ae@latest" %}
O seu gerente de contas técnico dedicado em
{% data variables.contact.github_support %} pode configurar o e-mail para notificações serem enviadas através de seu servidor SMTP. Certifique-se de incluir os detalhes a seguir na sua solicitação de suporte.

- O endereço do seu servidor SMTP
- Informações de login para efetuar a autenticação no servidor: nome de usuário e senha
- A porta que o seu servidor SMTP usa para enviar e-mail
- O nome de domínio que o seu servidor SMTP enviará com uma resposta HELO, se houver
- O tipo de criptografia usado pelo seu servidor SMTP
- O endereço de e-mail "no-reply" a ser usado nos campos `De` e `Para` para todas as notificações

Para obter mais informações sobre como entrar em contato com o suporte, consulte "[Sobre {% data variables.contact.enterprise_support %}](/enterprise/admin/guides/enterprise-support/about-github-enterprise-support)".
{% else %}
### Configurar SMTP

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. Na parte superior da página, clique em **Settings** (Configurações). ![Guia Settings (Configurações)](/assets/images/enterprise/management-console/settings-tab.png)
3. Na barra lateral esquerda, clique em **Email**. ![Guia E-mail](/assets/images/enterprise/management-console/email-sidebar.png)
4. Selecione **Enable email** (Habilitar e-mail). Fazer isso vai habilitar os e-mails enviados (saída) e recebidos (entrada). No entanto, para que o recebimento de e-mails funcione, você terá que definir suas configurações de DNS conforme descrito em "[Configurar o DNS e o firewall para o recebimento de e-mails](#configuring-dns-and-firewall-settings-to-allow-incoming-emails)". ![Habilitar e-mail de saída](/assets/images/enterprise/management-console/enable-outbound-email.png)
5. Defina as configurações do seu servidor de e-mail:
    - No campo **Server address** (Endereço do servidor), digite o endereço do seu servidor SMTP.
    - No campo **Port** (Porta), digite a porta que o servidor SMTP usa para enviar e-mails.
    - No campo **Domain** (Domínio), digite o nome do domínio que o servidor SMTP enviará com resposta HELO, se houver.
    - No menu suspenso **Authentication** (Autenticação), escolha o tipo de criptografia usado pelo servidor SMTP.
    - No campo **No-reply email address** (Endereço de e-mail no-reply), digite o endereço de e-mail para usar nos campos De e Para em todos os e-mails de notificação.

    {% note %}

    **Observação:** se você marcar a caixa de seleção **Send from author** (Enviar do autor) no webhook de e-mail de um repositório **Services** (Serviços), os e-mails de saída do repositório em questão serão enviados pelo autor, e não pelo endereço de e-mail no-reply. Para obter mais informações, consulte "[Sobre notificações de email para push no seu repositório](/github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository)".

    {% endnote %}

6. Se você quiser descartar todos os e-mails recebidos destinados ao endereço no-reply, selecione **Discard email addressed to the no-reply email address** (Descartar e-mails recebidos no endereço no-reply). ![Caixa de seleção para descartar e-mails destinados ao endereço no-reply](/assets/images/enterprise/management-console/discard-noreply-emails.png)
7. Em **Support** (Suporte), escolha um tipo de link para dar suporte adicional aos usuários:
    - **Email:** endereço de e-mail interno.
    - **URL:** link para um site interno de suporte. Você deve incluir `http://` ou `https://`. ![E-mail ou URL de suporte](/assets/images/enterprise/management-console/support-email-url.png)
8. [Teste a entrega de e-mails](#testing-email-delivery).

### Configurar DNS e firewall para o recebimento de e-mails

Se quiser permitir o recebimento de respostas para os e-mails de notificação, você deverá definir suas configurações DNS.

1. A porta 25 da instância deve estar acessível para o seu servidor SMTP.
2. Crie um registro A que aponte para `reply.[hostname]`. Dependendo do provedor DNS e da configuração do host da instância, você poderá criar um único registro A que aponte para `*.[hostname]`.
3. Crie um registro MX que aponte para `reply.[hostname]`, de forma que os e-mails desse domínio sejam roteados para a instância.
4. Crie um registro MX que aponte `noreply.[hostname]` para `[hostname]`, de forma que as respostas ao endereço `cc` nos e-mails de notificação sejam roteadas para a instância. Para obter mais informações, consulte {% if currentVersion ver_gt "enterprise-server@2.20" %}"[Configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications){% else %}"[Sobre notificações de e-mail](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}".

Com essas definições de DNS, agora você pode testar se a configuração funciona.

### Testar a entrega de e-mails

1. Na parte superior da seção **Email**, clique em **Test email settings** (Testar configurações de e-mail). ![Configurações de e-mail de teste](/assets/images/enterprise/management-console/test-email.png)
2. No campo **Send test email to** (Enviar e-mail de teste para), digite um endereço que receberá o e-mail de teste. ![Endereço de e-mail de teste](/assets/images/enterprise/management-console/test-email-address.png)
3. Clique em **Send test email** (Enviar e-mail de teste). ![Enviar e-mail de teste](/assets/images/enterprise/management-console/test-email-address-send.png)

  {% tip %}

  **Dica:** se ocorrerem erros de SMTP durante o envio de um e-mail de teste, como falhas de entrega imediatas ou erros de configuração de e-mail de saída, você os verá na caixa de diálogo Configurações de e-mail de teste.

  {% endtip %}

4. Se houver falha no teste, consulte a [solução de problemas das suas configurações de e-mail](#troubleshooting-email-delivery).
5. Quando o teste for concluído com êxito, clique em **Save settings** (Salvar configurações) na parte inferior da página. ![Botão Save settings (Salvar configurações)](/assets/images/enterprise/management-console/save-settings.png)
6. Aguarde a conclusão da execução de suas configurações. ![Configurar a instância](/assets/images/enterprise/management-console/configuration-run.png)

### Resolver problemas na entrega de e-mails

#### Criar um pacote de suporte

Se não conseguir determinar o que houve de errado na mensagem de erro exibida, você pode baixar um [pacote de suporte](/enterprise/{{ currentVersion }}/admin/guides/enterprise-support/providing-data-to-github-support) com toda a conversa SMTP entre o seu servidor de e-mail e o {% data variables.product.prodname_ghe_server %}. Depois de fazer o download e extrair o pacote, verifique as entradas em *enterprise-manage-logs/unicorn.log* e veja o log completo de conversas SMTP com os erros relacionados.

O log unicorn mostrará uma transação semelhante a esta:

```shell
Este é um e-mail de teste gerado em https://10.0.0.68/setup/settings
Conexão aberta: smtp.yourdomain.com:587
-> "220 smtp.yourdomain.com ESMTP nt3sm2942435pbc.14\r\n"
<- "EHLO yourdomain.com\r\n"
-> "250-smtp.yourdomain.com at your service, [1.2.3.4]\r\n"
-> "250-SIZE 35882577\r\n"
-> "250-8BITMIME\r\n"
-> "250-STARTTLS\r\n"
-> "250-ENHANCEDSTATUSCODES\r\n"
-> "250 PIPELINING\r\n"
<- "STARTTLS\r\n"
-> "220 2.0.0 Pronto para começar TLS\r\n"
Conexão TLS iniciada
<- "EHLO yourdomain.com\r\n"
-> "250-smtp.yourdomain.com at your service, [1.2.3.4]\r\n"
-> "250-SIZE 35882577\r\n"
-> "250-8BITMIME\r\n"
-> "250-AUTH LOGIN PLAIN XOAUTH\r\n"
-> "250-ENHANCEDSTATUSCODES\r\n"
-> "250 PIPELINING\r\n"
<- "AUTH LOGIN\r\n"
-> "334 VXNlcm5hbWU6\r\n"
<- "dGhpc2lzbXlAYWRkcmVzcy5jb20=\r\n"
-> "334 UGFzc3dvcmQ6\r\n"
<- "aXRyZWFsbHl3YXM=\r\n"
-> "535-5.7.1 Nome de usuário e senha não aceitos. Saiba mais em\r\n"
-> "535 5.7.1 http://support.yourdomain.com/smtp/auth-not-accepted nt3sm2942435pbc.14\r\n"
```

Esse log mostra que o appliance:

* Abriu uma conexão com o servidor SMTP (`Conexão aberta: smtp.yourdomain.com:587`);
* Fez a conexão com êxito e decidiu usar TLS (`Conexão TLS iniciada`);
* A autenticação de `login` foi feita (`<- "AUTH LOGIN\r\n"`);
* O servidor SMTP rejeitou a autenticação como inválida (`-> "535-5.7.1 Nome de usuário e senha não aceitos.`).

#### Consultar logs da {% data variables.product.product_location %}

Se você tiver que verificar o funcionamento do recebimento de e-mails, examine dois arquivos de log na sua instância: */var/log/mail.log* e */var/log/mail-replies/metroplex.log*.

*/var/log/mail.log* verifica se as mensagens estão chegando ao seu servidor. Veja um exemplo de resposta de e-mail com êxito:

```
Oct 30 00:47:18 54-171-144-1 postfix/smtpd[13210]: conectado de st11p06mm-asmtp002.mac.com[17.172.124.250]
Oct 30 00:47:19 54-171-144-1 postfix/smtpd[13210]: 51DC9163323: client=st11p06mm-asmtp002.mac.com[17.172.124.250]
Oct 30 00:47:19 54-171-144-1 postfix/cleanup[13216]: 51DC9163323: message-id=<b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
Oct 30 00:47:19 54-171-144-1 postfix/qmgr[17250]: 51DC9163323: from=<tcook@icloud.com>, size=5048, nrcpt=1 (fila ativa)
Oct 30 00:47:19 54-171-144-1 postfix/virtual[13217]: 51DC9163323: to=<reply+i-1-1801beb4df676a79250d1e61e54ab763822c207d-5@reply.ghe.tjl2.co.ie>, relay=virtual, delay=0.12, delays=0.11/0/0/0, dsn=2.0.0, status=sent (entregue a maildir)
Oct 30 00:47:19 54-171-144-1 postfix/qmgr[17250]: 51DC9163323: removido
Oct 30 00:47:19 54-171-144-1 postfix/smtpd[13210]: desconectado de st11p06mm-asmtp002.mac.com[17.172.124.250]
```

Observe que o cliente se conecta e depois a fila fica ativa. Em seguida, a mensagem é entregue, o cliente é removido da fila e a sessão é desconectada.

*/var/log/mail-replies/metroplex.log* mostra se os e-mails de entrada estão sendo processados para adicionar problemas e pull requests como respostas. Veja um exemplo de mensagem com êxito:

```
[2014-10-30T00:47:23.306 INFO (5284) #] metroplex: processing <b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
[2014-10-30T00:47:23.333 DEBUG (5284) #] Matched /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie
[2014-10-30T00:47:23.334 DEBUG (5284) #] Moving /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie => /data/user/incoming-mail/success
```

Você verá que `metroplex` capta a mensagem de entrada, processa a mensagem e depois move o arquivo para `/data/user/incoming-mail/success`.

#### Verificar as configurações DNS

Para processar corretamente os e-mails de entrada, você deve configurar um registro A válido (ou CNAME) e um registro MX. Para obter mais informações, consulte "[Configurar DNS e firewall para o recebimento de e-mails](#configuring-dns-and-firewall-settings-to-allow-incoming-emails)".

#### Verificar as configurações de firewall ou grupo de segurança do AWS

Se a {% data variables.product.product_location %} estiver atrás de um firewall ou estiver funcionando com um grupo de segurança do AWS, verifique se a porta 25 está aberta para todos os servidores de e-mail que enviam mensagens para `reply@reply.[hostname]`.

#### Entrar em contato com o suporte
Se ainda não conseguir resolver o problema, entre em contato

{% data variables.contact.contact_ent_support %}. Para nos ajudar a resolver a questão, anexe o arquivo de saída de `http(s)://[hostname]/setup/diagnostics` ao seu e-mail.
{% endif %}
