Para ativar a sincronização da equipe para a Okta, você ou seu administrador de IdP devem:

- Ativar SAML SSO e SCIM para sua organização usando o Okta. Para obter mais informações, consulte "[Configuring SAML single sign-on and SCIM using Okta](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta)" (Configurar SAML logon único e SCIM usando Okta)
- Forneça o URL do inquilino para sua instância Okta.
- Gere um token SSWS válido com permissões de administrador somente leitura para a sua instalação do Okta como usuário do serviço. Para obter mais informações, consulte [Criar o token](https://developer.okta.com/docs/guides/create-an-api-token/create-the-token/) e [Usuários de serviços](https://help.okta.com/en/prod/Content/Topics/Adv_Server_Access/docs/service-users.htm) na documentação de Okta.
