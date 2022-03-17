---
title: Acerca de tu tablero personal
redirect_from:
  - /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github/
  - /articles/opting-into-the-public-beta-for-a-new-dashboard/
  - /articles/about-your-personal-dashboard
intro: 'Puedes visitar tu tablero personal para hacer un seguimiento de las propuestas y las solicitudes de extracción que estás siguiendo o en las que estás trabajando, navegar hacia las páginas de equipo y tus repositorios principales, estar actualizado sobres las actividadess recientes en las organizaciones y los repositorios en los que estás suscripto y explorar los repositorios recomendados.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - cuentas
---

### Acceder a tu tablero personal

Tu tablero personal es la primera página que verás cuando inicias sesión en {% data variables.product.product_name %}.

Para acceder a tu tablero personal una vez que has iniciado sesión, haz clic en el {% octicon "mark-github" aria-label="The github octocat logo" %} en la esquina superior izquierda de cualquier página en {% data variables.product.product_name %}.

### Encontrar tu actividad reciente

En la sección "Recent activity" (Actividad reciente) de tus noticias, rápidamente puedes encontrar las propuestas y solicitudes de extracción recién actualizadas en las que estás trabajando y hacerles el seguimiento. En "Recent activity" (Actividad reciente), puedes previsualizar hasta 12 actualizaciones recientes, realizadas durante las últimas dos semanas.

{% data reusables.dashboard.recent-activity-qualifying-events %}

### Encontrar tus equipos y repositorios principales

En la barra lateral izquierda de tu tablero, puedes acceder a los equipos y los repositorios principales que usas.

![listado de repositorios y equipos de diferentes organizaciones](/assets/images/help/dashboard/repositories-and-teams-from-personal-dashboard.png)

La lista de repositorios principales se genera automáticamente y puede incluir cualquier repositorio con el que hayas interactuado, ya sea que pertenezca directamente a tu cuenta o no. Las interacciones incluyen el realizar confirmaciones y abrir o comentar en propuestas y solicitudes de cambios. La lista de repositorios principales no puede editarse, pero los repositorios saldrán de la lista en 4 meses después de la última interacción que hayas tenido con ellos.

También puedes encontrar un listado de los repositorios, los equipos y los tableros de proyecto recientemente visitados al hacer clic en la barra de búsqueda en la parte principal de cualquier página en {% data variables.product.product_name %}.

### Estar actualizado con la actividad desde tu organización

En la sección "All activity" (Todas las actividades) de tus noticias, puedes ver las actualizaciones de los repositorios a los que estás suscrito y de las personas que sigues. La sección "All activity" (Todas las actividades) muestra las actualizaciones de los repositorios que observas o has marcado con una estrella, y de los usuarios a quienes sigues.

Verás actualizaciones en tus noticias cuando un usuario que sigues:
- Destaca un repositorio.
- Siga a otro usuario.{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- Crea un repositorio público.{% endif %}
- Abre una propuesta o una solicitud de extracción con la etiqueta "se busca ayuda" o "primera buena propuesta" en un repositorio que estás mirando.
- Suba confirmaciones a un repositorio que estés observando.{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- Bifurque un repositorio público.{% endif %}

Para obtener más información acerca de cómo destacar repositorios y seguir personas, consulta "[Guardar repositorios con estrellas](/articles/saving-repositories-with-stars/)" y "[Seguir a personas](/articles/following-people)".

### Explorar los repositorios recomendados

Puedes explorar los repositorios recomendados en tus comunidades en la sección "Explorar repositorios" en el costado derecho de tu tablero. Las recomendaciones se basan en los repositorios que hayas visitado o marcado como favoritos, las personas que sigues, y la actividad dentro de los repositorios a los que tienes acceso.{% if currentVersion == "free-pro-team@latest" %} Para obtener más información, consulta la sección "[Encontrar formas para contribuir con los proyectos de código abierto en {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)".{% endif %}

### Leer más

- "[Acerca del tablero de tu organización](/articles/about-your-organization-dashboard)"
