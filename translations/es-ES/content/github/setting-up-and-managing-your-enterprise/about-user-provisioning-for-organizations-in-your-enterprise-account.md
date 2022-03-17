---
title: About user provisioning for organizations in your enterprise account
intro: You can manage organization membership in an enterprise account directly from an identity provider (IdP).
product: '{% data reusables.gated-features.enterprise-accounts %}'
versions:
  free-pro-team: '*'
---

{% data reusables.enterprise-accounts.user-provisioning-release-stage %}

{% data reusables.saml.about-user-provisioning-enterprise-account %}

{% data reusables.scim.enterprise-account-scim %} Opcionalmente, puedes habilitar el aprovisionamiento de SAML y, por separado, el desaprovisionamiento.

If you configure SCIM for the {% data variables.product.product_name %} application in your IdP, each time you make changes to group membership in your IdP, your IdP will make a SCIM call to {% data variables.product.prodname_dotcom %} to update the corresponding organization's membership. Si habilitas el aprovisionamiento de SAML, cada que un miembro de la empresa acceda a un recurso que protege tu configuración de SAML en la cuenta de la empresa, esa aserción de SAML activará el aprovisionamiento.

Para cada llamada de SCIM o aserción de SAML, {% data variables.product.product_name %} verificará los grupos de IdP a los cuales pertenece el usuario y realizará las siguientes operaciones:

- Si el usuario es un miembro de un grupo de IdP que corresponda a una organización que pertenezca a tu cuenta empresarial, y el usuario no es actualmente miembro de dicha organización, agrégalo a la organización (aserción de SAML) o envía una invitación por correo electrónico al usuario para que se una a una organización (llamado de SCIM).
- Cancela cualquier invitación que exista para que el usuario se una a la organización que pertenece a tu cuenta empresarial.

Para cada llamada de SCIM y, en caso de que habilites el desaprovisionamiento de SAML, en cada aserción de SAML, {% data variables.product.product_name %} también realizará la siguiente operación:

- Si el usuario no es un miembro de un grupo de IdP que corresponde a una organización que pertenezca a tu cuenta empresarial y éste es un miembro actual de dicha organización, elimina al usuario de la organización.

Si el desaprovisionamiento eleimina al último propietario que queda en una organización, ésta quedará sin propietario. Los propietarios de las empresas pueden asumir la propiedad de las organizaciones sin propietario. Para obtener más información, consulta la sección "[Administrar las organizaciones sin dueño en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/managing-unowned-organizations-in-your-enterprise-account)".

Para habilitar el aprovisionamiento de usuarios en tu cuenta empresarial utilizandoOkta, consulta la sección "[Configurar el inicio de sesión único de SAML y SCIM para tu cuenta empresarial utilizando Okta](/github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-and-scim-for-your-enterprise-account-using-okta)".
