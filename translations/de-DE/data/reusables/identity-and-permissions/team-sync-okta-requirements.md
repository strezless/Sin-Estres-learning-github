Um die Teamsynchronisierung für Okta zu aktivieren, müssen Du oder Dein IdP-Administrator folgendes machen:

- SAML SSO und SCIM für Deine Organisation mit Okta aktivieren. Weitere Informationen findest Du unter „[SAML Single Sign-On und SCIM mit Okta konfigurieren](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta)."
- Die Mandanten-URL für Deine Okta-Instanz angeben.
- Einen gültigen SSWS-Token generieren, der über schreibgeschützte Administratorberechtigungen für Deine Okta-Installation als ein Dienstbenutzer verfügt. Weitere Informationen findest Du unter [Token erstellen](https://developer.okta.com/docs/guides/create-an-api-token/create-the-token/) und [Dienstbenutzer](https://help.okta.com/en/prod/Content/Topics/Adv_Server_Access/docs/service-users.htm) in der Okta-Dokumentation.
