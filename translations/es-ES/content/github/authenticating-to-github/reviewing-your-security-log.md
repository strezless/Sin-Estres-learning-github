---
title: Revisar tu registro de seguridad
intro: Puedes revisar el registro de seguridad de tu cuenta de usuario para entender mejor las acciones que has realizado y las que otros han realizado, las cuales te involucran.
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/reviewing-your-security-log
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Acceder a tu registro de seguridad

La bitácora de seguridad lista todas las acciones realizadas dentro de los últimos 90 días{% if currentVersion ver_lt "enterprise-server@2.20" %}, hasta 50 de ellas{% endif %}.

{% data reusables.user_settings.access_settings %}
{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
2. En la barra lateral de la configuración de usuario, da clic en **Registro de Seguridad**. ![Pestaña de registro de seguridad](/assets/images/help/settings/audit-log-tab.png)
{% else %}
{% data reusables.user_settings.security %}
3. En "Security history" (Historial de seguridad) se muestra tu registro. ![Registro de seguridad](/assets/images/help/settings/user_security_log.png)
4. Haz clic en la entrada para ver más información acerca del evento. ![Registro de seguridad](/assets/images/help/settings/user_security_history_action.png)
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### Buscar tu registro de seguridad

{% data reusables.audit_log.audit-log-search %}

#### Búsqueda basada en la acción realizada
{% else %}
### Entender los eventos en tu registro de seguridad
{% endif %}

Tus acciones activan los eventos que se listan en tu bitácora de seguridad. Las acciones se agrupan en las siguientes categorías:

| Nombre de la categoría                                                                 | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" %}
| [`account_recovery_token`](#account_recovery_token-category-actions)                   | Contiene todas las actividades relacionadas con [agregar un token de recuperación](/articles/configuring-two-factor-authentication-recovery-methods).                                                                                                                                                                                                                                                                                                                   |
| [`billing`](#billing-category-actions)                                                 | Contiene todas las actividades relacionadas con tu información de facturación.                                                                                                                                                                                                                                                                                                                                                                                          |
| [`codespaces`](#codespaces-category-actions)                                           | Contains all activities related to {% data variables.product.prodname_codespaces %}. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces)".                                                                                                                                                                                                      |
| [`marketplace_agreement_signature`](#marketplace_agreement_signature-category-actions) | Contiene todas las actividades relacionadas con la firma del Acuerdo del programador de {% data variables.product.prodname_marketplace %}.                                                                                                                                                                                                                                                                                                                              |
| [`marketplace_listing`](#marketplace_listing-category-actions)                         | Contiene todas las actividades relacionadas con el listado de aplicaciones en {% data variables.product.prodname_marketplace %}.{% endif %}
| [`oauth_access`](#oauth_access-category-actions)                                       | Contiene todas las actividades relacionadas con las [{% data variables.product.prodname_oauth_app %}s](/articles/authorizing-oauth-apps) que hayas conectado con.{% if currentVersion == "free-pro-team@latest" %}
| [`payment_method`](#payment_method-category-actions)                                   | Contiene todas las actividades relacionadas con el pago de tu suscripción de {% data variables.product.prodname_dotcom %}.{% endif %}
| [`profile_picture`](#profile_picture-category-actions)                                 | Contiene todas las actividades relacionadas con tu foto de perfil.                                                                                                                                                                                                                                                                                                                                                                                                      |
| [`project`](#project-category-actions)                                                 | Contiene todas las actividades relacionadas con los tableros de proyecto.                                                                                                                                                                                                                                                                                                                                                                                               |
| [`public_key`](#public_key-category-actions)                                           | Contiene todas las actividades relacionadas con [tus claves SSH públicas](/articles/adding-a-new-ssh-key-to-your-github-account).                                                                                                                                                                                                                                                                                                                                       |
| [`repo`](#repo-category-actions)                                                       | Contiene todas las actividades relacionadas con los repositorios que te pertenecen.{% if currentVersion == "free-pro-team@latest" %}
| [`sponsors`](#sponsors-category-actions)                                               | Contiene todos los eventos relacionados con {% data variables.product.prodname_sponsors %} y los botones de patrocinio (consulta la sección "[Acerca de {% data variables.product.prodname_sponsors %}](/articles/about-github-sponsors)" y "[Mostrar el botón de patrocinio en tu repositorio](/articles/displaying-a-sponsor-button-in-your-repository)"){% endif %}{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
| [`team`](#team-category-actions)                                                       | Contiene todas las actividades relacionadas con los equipos de los cuales formas parte.{% endif %}{% if currentVersion != "github-ae@latest" %}
| [`two_factor_authentication`](#two_factor_authentication-category-actions)             | Contiene todas las actividades relacionadas con la [autenticación bifactorial](/articles/securing-your-account-with-two-factor-authentication-2fa).{% endif %}
| [`user`](#user-category-actions)                                                       | Contiene todas las actividades relacionadas con tu cuenta.                                                                                                                                                                                                                                                                                                                                                                                                              |

{% if currentVersion == "free-pro-team@latest" %}

### Exportar tu registro de seguridad

{% data reusables.audit_log.export-log %}
{% data reusables.audit_log.exported-log-keys-and-values %}

{% endif %}

### Acciones de la bitácora de seguridad

Un resumen de algunas de las acciones más frecuentes que se registran como eventos en la bitácora de seguridad.

{% if currentVersion == "free-pro-team@latest" %}

#### acciones de la categoría `account_recovery_token`

| Acción                                  | Descripción                                                                                                                                               |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `confirm (confirmar)`                   | Se activa cuando almacenas [con éxito un nuevo token con un proveedor de recuperación](/articles/configuring-two-factor-authentication-recovery-methods). |
| `recover (recuperar)`                   | Se activa cuando canjeas [con éxito un token de recuperación de cuenta](/articles/recovering-your-account-if-you-lose-your-2fa-credentials).              |
| `recover_error (error de recuperación)` | Se activa cuando se utiliza un token, pero {% data variables.product.prodname_dotcom %} no está disponible para validarlo.                                |

#### acciones de la categoría `billing`

| Acción                                              | Descripción                                                                                                                                    |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `change_billing_type (cambiar tipo de facturación)` | Se activa cuando [cambias la manera de pagar](/articles/adding-or-editing-a-payment-method) para {% data variables.product.prodname_dotcom %}. |
| `change_email (cambiar correo electrónico)`         | Se activa cuando [cambias tu dirección de correo electrónico](/articles/changing-your-primary-email-address).                                  |

#### `codespaces` category actions

| Acción                               | Descripción                                                                                                                                                                                                              |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `trusted_repositories_access_update` | Triggered when you change your user account's [access and security setting for {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces). |

#### acciones de la categoría `marketplace_agreement_signature`

| Acción           | Descripción                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| `create (crear)` | Se activa cuando firmas el {% data variables.product.prodname_marketplace %} Acuerdo del programador. |

#### acciones de la categoría `marketplace_listing`

| Acción                        | Descripción                                                                                                  |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `approve`                     | Se activa cuando se aprueba tu lista para ser incluida en {% data variables.product.prodname_marketplace %}. |
| `create (crear)`              | Se activa cuando creas una lista para tu app en {% data variables.product.prodname_marketplace %}.           |
| `delist (quitar de la lista)` | Se activa cuando se elimina tu lista de {% data variables.product.prodname_marketplace %}.                   |
| `redraft`                     | Se activa cuando tu lista se vuelve a colocar en estado de borrador.                                         |
| `reject (rechazar)`           | Se activa cuando no se acepta la inclusión de tu lista en {% data variables.product.prodname_marketplace %}. |

{% endif %}

#### acciones de la categoría `oauth_access`

| Acción               | Descripción                                                                                                                                                  |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `create (crear)`     | Se activa cuando [otorgas acceso a una {% data variables.product.prodname_oauth_app %}](/articles/authorizing-oauth-apps).                                 |
| `destroy (destruir)` | Se activa cuando [revocas el acceso de una {% data variables.product.prodname_oauth_app %} a tu cuenta](/articles/reviewing-your-authorized-integrations). |

{% if currentVersion == "free-pro-team@latest" %}

#### acciones de la categoría `payment_method`

| Acción             | Descripción                                                                                                   |
| ------------------ | ------------------------------------------------------------------------------------------------------------- |
| `clear (eliminar)` | Se activa cuando se elimina [un método de pago](/articles/removing-a-payment-method) archivado.               |
| `create (crear)`   | Se activa cuando se agrega un método de pago nuevo, como una tarjeta de crédito nueva o una cuenta de PayPal. |
| `update`           | Se activa cuando se actualiza un método de pago existente.                                                    |

{% endif %}

#### acciones de la categoría `profile_picture`

| Acción   | Descripción                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------------ |
| `update` | Se activa cuando [estableces o actualizas tu foto de perfil](/articles/setting-your-profile-picture/). |

#### acciones de la categoría `project`

| Acción                   | Descripción                                                                                                                  |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `access (acceder)`       | Se activa cuando se modifica la visibilidad de un tablero de proyecto.                                                       |
| `create (crear)`         | Se activa cuando se crear un tablero de proyecto.                                                                            |
| `rename (renombrar)`     | Se activa cuando se renombra un tablero de proyecto.                                                                         |
| `update`                 | Se activa cuando se actualiza un tablero de proyecto.                                                                        |
| `eliminar`               | Se activa cuando se elimina un tablero de proyecto.                                                                          |
| `enlace`                 | Se activa cuando un repositorio se vincula a un tablero de proyecto.                                                         |
| `unlink (desvincular)`   | Se activa cuando se anula el enlace a un repositorio desde un tablero de proyecto.                                           |
| `update_user_permission` | Se activa cuando se agrega o elimina un colaborador externo a un tablero de proyecto o cuando se cambia su nivel de permiso. |

#### acciones de la categoría `public_key`

| Acción           | Descripción                                                                                                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `create (crear)` | Se activa cuando [agregas una clave SSH pública a tu {% data variables.product.product_name %} cuenta](/articles/adding-a-new-ssh-key-to-your-github-account). |
| `eliminar`       | Se activa cuando [eliminas una clave SSH pública para tu {% data variables.product.product_name %} cuenta](/articles/reviewing-your-ssh-keys).                 |

#### acciones de la categoría `repo`

| Acción                                                                                  | Descripción                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `access (acceder)`                                                                      | Se activa cuando un repositorio que te pertenece se [cambia de "privado" a "público"](/articles/making-a-private-repository-public) (o viceversa).                                                                                                                                                                                    |
| `add_member (agregar miembro)`                                                          | Se activa cuando un usuario de {% data variables.product.product_name %} recibe [una invitación para tener acceso de colaboración](/articles/inviting-collaborators-to-a-personal-repository){% else %}[un permiso de acceso para colaborar](/articles/inviting-collaborators-to-a-personal-repository){% endif %} en un repositorio. |
| `add_topic (agregar tema)`                                                              | Se activa cuando un propietario del repositorio [agrega un tema](/articles/classifying-your-repository-with-topics) a un repositorio.                                                                                                                                                                                                 |
| `archived (archivado)`                                                                  | Se activa cuando un propietario del repositorio [archiva un repositorio](/articles/about-archiving-repositories).{% if enterpriseServerVersions contains currentVersion %}
| `config.disable_anonymous_git_access (configurar inhabilitar el acceso de git anónimo)` | Se activa cuando [se inhabilita el acceso de lectura de Git anónimo](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository) en un repositorio público.                                                                                                                                   |
| `config.enable_anonymous_git_access (configurar habilitar acceso de git anónimo)`       | Se activa cuando [se habilita el acceso de lectura de Git anónimo](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository) en un repositorio público.                                                                                                                                     |
| `config.lock_anonymous_git_access (configurar bloquear acceso de git anónimo)`          | Se activa cuando se bloquea el parámetro de acceso de lectura de Git anónimo [de un repositorio](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).                                                                                                             |
| `config.unlock_anonymous_git_access (configurar desbloquear acceso de git anónimo)`     | Se activa cuando se desbloquea el parámetro de acceso de lectura de Git anónimo [de un repositorio](/enterprise/{{ currentVersion }}/admin/guides/user-management/preventing-users-from-changing-anonymous-git-read-access).{% endif %}
| `create (crear)`                                                                        | Se activa cuando [se crea un repositorio nuevo](/articles/creating-a-new-repository).                                                                                                                                                                                                                                                 |
| `destroy (destruir)`                                                                    | Se activa cuando [se borra un repositorio](/articles/deleting-a-repository).{% if currentVersion == "free-pro-team@latest" %}
| `disable`                                                                               | Se activa cuando un repositorio se inhabilita (por ejemplo, por [fondos insuficientes](/articles/unlocking-a-locked-account)).{% endif %}{% if currentVersion == "free-pro-team@latest" %}
| `enable`                                                                                | Se activa cuando se vuelve a habilitar un repositorio.{% endif %}
| `remove_member (eliminar miembro)`                                                      | Se activa cuando se elimina {% data variables.product.product_name %} un usuario [de un repositorio como colaborador](/articles/removing-a-collaborator-from-a-personal-repository).                                                                                                                                                  |
| `remove_topic (eliminar tema)`                                                          | Se activa cuando un propietario del repositorio elimina un tema de un repositorio.                                                                                                                                                                                                                                                    |
| `rename (renombrar)`                                                                    | Se activa cuando [se renombra un repositorio](/articles/renaming-a-repository).                                                                                                                                                                                                                                                       |
| `transfer`                                                                              | Se activa cuando [se transfiere un repositorio](/articles/how-to-transfer-a-repository).                                                                                                                                                                                                                                              |
| `transfer_start (comienzo de transferencia)`                                            | Se activa cuando está por ocurrir una transferencia de repositorio.                                                                                                                                                                                                                                                                   |
| `unarchived (desarchivado)`                                                             | Se activa cuando un administrador del repositorio desarchiva un repositorio.                                                                                                                                                                                                                                                          |

{% if currentVersion == "free-pro-team@latest" %}
#### acciones de la categoría `sponsors`

| Acción                                                                                                            | Descripción                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repo_funding_link_button_toggle (alternar botón de enlace al financiamiento del repositorio)`                    | Se activa cuando habilitas o inhabilitas un botón de patrocinador en tu repositorio (consulta "[Mostrar un botón de patrocinador en tu repositorio](/articles/displaying-a-sponsor-button-in-your-repository)")                                                                                                                                   |
| `repo_funding_links_file_action (acción de archivo de enlaces de financiamiento del repositorio)`                 | Se activa cuando cambias el archivo FUNDING de tu repositorio (consulta "[Mostrar un botón de patrocinador en tu repositorio](/articles/displaying-a-sponsor-button-in-your-repository)")                                                                                                                                                         |
| `sponsor_sponsorship_cancel (cancelación del patrocinio del patrocinador)`                                        | Se activa cuando cancelas un patrocinio (consulta "[Bajar de categoría un patrocinio](/articles/downgrading-a-sponsorship)")                                                                                                                                                                                                                      |
| `sponsor_sponsorship_create (creación de un patrocinio de patrocinador)`                                          | Se activa cuando patrocinas una cuenta (consulta "[Patrocinar a un contribuyente de código abierto](/github/supporting-the-open-source-community-with-github-sponsors/sponsoring-an-open-source-contributor)")                                                                                                                                    |
| `sponsor_sponsorship_preference_change (cambio de preferencia de patrocinio de patrocinador)`                     | Se activa cuando cambias si deseas recibir actualizaciones por correo electrónico de un programador patrocinado (consulta "[Administrar tu patrocinio](/articles/managing-your-sponsorship)")                                                                                                                                                     |
| `sponsor_sponsorship_tier_change (cambiar nivel de patrocinio de patrocinador)`                                   | Se activa cuando subes o bajas de categoría tu patrocinio (consulta "[Subir de categoría un patrocinio](/articles/upgrading-a-sponsorship)" y "[Bajar de categoría un patrocinio](/articles/downgrading-a-sponsorship)")                                                                                                                          |
| `sponsored_developer_approve (aprobación de programador patrocinado)`                                             | Desencadenado cuando se aprueba tu cuenta de {% data variables.product.prodname_sponsors %} (consulta "[Configuración {% data variables.product.prodname_sponsors %} para tu cuenta de usuario](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)")                             |
| `sponsored_developer_create (creación de programador patrocinado)`                                                | Desencadenado cuando se crea tu cuenta de {% data variables.product.prodname_sponsors %} (consulta "[Configuración de {% data variables.product.prodname_sponsors %} para tu cuenta de usuario](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)")                             |
| `sponsored_developer_profile_update (actualización del perfil de programador patrocinado)`                        | Desencadenado cuando editas el perfil de tu desarrollador patrocinado (consulta "[Editar tus detalles de perfil para {% data variables.product.prodname_sponsors %}](/github/supporting-the-open-source-community-with-github-sponsors/editing-your-profile-details-for-github-sponsors)")                                                        |
| `sponsored_developer_request_approval (aprobación de solicitud de programador patrocinado)`                       | Desencadenado cuando emites tu aplicación para {% data variables.product.prodname_sponsors %} para su aprobación (consulta "[Configuración {% data variables.product.prodname_sponsors %} pára tu cuenta de usuario](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)")        |
| `sponsored_developer_tier_description_update (actualización de descripción del nivel de programador patrocinado)` | Se activa cuando cambias la descripción de un nivel de patrocinio (consulta "[Cambiar tus niveles de patrocinio](/articles/changing-your-sponsorship-tiers)")                                                                                                                                                                                     |
| `sponsored_developer_update_newsletter_send (envío de boletín de actualización del programador patrocinado)`      | Se activa cuando envías una actualización de correo electrónico a tus patrocinadores (consulta "[Contactar a tus patrocinadores](/articles/contacting-your-sponsors)")                                                                                                                                                                            |
| `waitlist_invite_sponsored_developer (invitación a la lista de espera de programadores patrocinados)`             | Desencadenado cuando se te invita a unirte a {% data variables.product.prodname_sponsors %} desde la lista de espera (consulta "[Configuración de {% data variables.product.prodname_sponsors %} para tu cuenta de usuario](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)") |
| `waitlist_join (incorporación a la lista de espera)`                                                              | Desencadenado cuando te unes a la lista de espera para convertirte en un desarrollador patrocinado (consulta "[Configuración de {% data variables.product.prodname_sponsors %} para tu cuenta de usuario](/github/supporting-the-open-source-community-with-github-sponsors/setting-up-github-sponsors-for-your-user-account)")                   |
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### acciones de la categoría `successor_invitation`

| Acción           | Descripción                                                                                                                                                                                                                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accept`         | Se activa cuando aceptas una invitación de sucesión (consulta la secicón "[Mantener continuidad en la titularidad de los repositorios de tu cuenta de usuario](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")  |
| `cancel`         | Se activa cuando cancelas una invitación de sucesión (consulta la secicón "[Mantener continuidad en la titularidad de los repositorios de tu cuenta de usuario](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)") |
| `create (crear)` | Se activa cuando creas una invitación de sucesión (consulta la secicón "[Mantener continuidad en la titularidad de los repositorios de tu cuenta de usuario](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")    |
| `decline`        | Se activa cuando rechazas una invitación de sucesión (consulta la secicón "[Mantener continuidad en la titularidad de los repositorios de tu cuenta de usuario](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)") |
| `revoke`         | Se activa cuando retiras una invitación de sucesión (consulta la secicón "[Mantener continuidad en la titularidad de los repositorios de tu cuenta de usuario](/github/setting-up-and-managing-your-github-user-account/maintaining-ownership-continuity-of-your-user-accounts-repositories)")  |
{% endif %}

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

#### acciones de la categoría `team`

| Acción                                     | Descripción                                                                                                                                          |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `add_member (agregar miembro)`             | Se activa cuando un miembro de una organización a la que perteneces te [agrega a un equipo](/articles/adding-organization-members-to-a-team).        |
| `add_repository (agregar repositorio)`     | Se activa cuando se le otorga el control de un repositorio a un equipo del que eres miembro.                                                         |
| `create (crear)`                           | Se activa cuando se crea un equipo nuevo en una organización a la que perteneces.                                                                    |
| `destroy (destruir)`                       | Se activa cuando un equipo del que eres miembro se elimina de la organización.                                                                       |
| `remove_member (eliminar miembro)`         | Se activa cuando un miembro de una organización se [elimina de un equipo](/articles/removing-organization-members-from-a-team) del que eres miembro. |
| `remove_repository (eliminar repositorio)` | Se activa cuando un repositorio deja de estar bajo el control de un equipo.                                                                          |

{% endif %}

{% if currentVersion != "github-ae@latest" %}
#### acciones de la categoría `two_factor_authentication`

| Acción                    | Descripción                                                                                                                          |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `enabled (habilitado)`    | Se activa cuando se habilita la [autenticación de dos factores](/articles/securing-your-account-with-two-factor-authentication-2fa). |
| `disabled (inhabilitado)` | Se activa cuando se inhabilita la autenticación de dos factores.                                                                     |
{% endif %}

#### acciones de la categoría `user`

| Acción                                                                                                                                                                                                              | Descripción                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `add_email (agregar correo electrónico)`                                                                                                                                                                            | Triggered when you                                                                                                                                                                                                        |
| {% if currentVersion != "github-ae@latest" %}[add a new email address](/articles/changing-your-primary-email-address){% else %}add a new email address{% endif %}.{% if currentVersion == "free-pro-team@latest" %} |                                                                                                                                                                                                                           |
| `codespaces_trusted_repo_access_granted`                                                                                                                                                                            | Triggered when you \[allow the codespaces you create for a repository to access other repositories owned by your user account\](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces.    |
| `codespaces_trusted_repo_access_revoked`                                                                                                                                                                            | Triggered when you \[disallow the codespaces you create for a repository to access other repositories owned by your user account\](/github/developing-online-with-codespaces/managing-access-and-security-for-codespaces. |{% endif %}
| `create (crear)`                                                                                                                                                                                                    | Se activa cuando creas una cuenta de usuario nueva.{% if currentVersion != "github-ae@latest" %}
| `change_password (cambiar contraseña)`                                                                                                                                                                              | Se activa cuando cambias tu contraseña.                                                                                                                                                                                   |
| `forgot_password (olvidé la contraseña)`                                                                                                                                                                            | Se activa cuando pides [un restablecimiento de contraseña](/articles/how-can-i-reset-my-password).{% endif %}
| `hide_private_contributions_count (ocultar conteo de contribuciones privadas)`                                                                                                                                      | Se activa cuando [ocultas contribuciones privadas en tu perfil](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).                                                                              |
| `login`                                                                                                                                                                                                             | Triggered when you log in to {% data variables.product.product_location %}.{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}


`mandatory_message_viewed`   | Triggered when you view a mandatory message (see "[Customizing user messages](/admin/user-management/customizing-user-messages-for-your-enterprise)" for details) | |{% endif %}| | `failed_login` | Triggered when you failed to log in successfully. | `remove_email` | Triggered when you remove an email address. | `rename` | Triggered when you rename your account.{% if currentVersion == "free-pro-team@latest" %} | `report_content` | Triggered when you [report an issue or pull request, or a comment on an issue, pull request, or commit](/articles/reporting-abuse-or-spam).{% endif %} | `show_private_contributions_count` | Triggered when you [publicize private contributions on your profile](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile).{% if currentVersion != "github-ae@latest" %} | `two_factor_requested` | Triggered when {% data variables.product.product_name %} asks you for [your two-factor authentication code](/articles/accessing-github-using-two-factor-authentication).{% endif %}

#### acciones de la categoría `user_status`

| Acción               | Descripción                                                                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `update`             | Se activa cuando estableces o cambias el estado en tu perfil. Para obtener más información, consulta "[Configurar un estado](/articles/personalizing-your-profile/#setting-a-status)". |
| `destroy (destruir)` | Se activa cuando eliminas el estado de tu perfil.                                                                                                                                      |

