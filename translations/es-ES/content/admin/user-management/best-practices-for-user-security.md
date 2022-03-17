---
title: Las mejores prácticas para la seguridad del usuario
intro: '{% if enterpriseServerVersions contains currentVersion %}Fuera de las medidas de seguridad a nivel de la instancia (SSL, aislamiento de subdominios, configurar un cortafuegos) que puede implementar un administrador de sitio, hay {% else %}Hay {% endif %}pasos que tus usuarios pueden llevar a cabo para ayudarte a proteger tu empresa.'
redirect_from:
  - /enterprise/admin/user-management/best-practices-for-user-security
versions:
  enterprise-server: '*'
  github-ae: '*'
topics:
  - empresa
---

{% if enterpriseServerVersions contains currentVersion %}
### Activar autenticación de dos factores

La autenticación de dos factores (2FA) es una manera de iniciar sesión en sitios web y servicios que requieren de un segundo factor además de una contraseña para la autenticación. En el caso de {% data variables.product.prodname_ghe_server %}, este segundo factor es un código de autenticación de un solo uso generado por una aplicación en el smartphone de un usuario. Te recomendamos que le solicites a tus usuarios activar la autenticación de dos factores en sus cuentas. Con la autenticación de dos factores, tanto la contraseña del usuario como su smartphone deben verse comprometidos para permitir que la propia cuenta se vea comprometida.

Para obtener más información sobre cómo configurar la autenticación de dos factores, consulta "[Acerca de la autenticación de dos factores](/enterprise/{{ currentVersion }}/user/articles/about-two-factor-authentication)".
{% endif %}

### Solicitar un administrador de contraseñas

Te recomendamos ampliamente que solicites que tus usuarios instalen y utilicen un administrador de contraseñas; tal como [LastPass](https://lastpass.com/), [1Password](https://1password.com/), o [Keeper](https://keepersecurity.com/); en cualquier computadora que utilicen para conectarse a tu empresa. Esto garantiza que las contraseñas sean más seguras y que sea menos probable que se vean comprometidas o sean robadas.

### Restringir el acceso a equipos y repositorios

Para limitar la posible superficie expuesta a ataques en el caso de una vulneración de la seguridad, te recomendamos que se le de a los usuarios acceso solo a los equipos y los repositorios que realmente necesiten para realizar su trabajo. Ya que los miembros con rol de propietario pueden acceder a todos los equipos y los repositorios en la organización, te recomendamos que este equipo sea lo más pequeño posible.

Para obtener más información sobre la configuración de los equipos y de los permisos del equipo, consulta "[Niveles de permisos para el repositorio de una organizazión](/enterprise/{{ currentVersion }}/user/articles/repository-permission-levels-for-an-organization/)".
