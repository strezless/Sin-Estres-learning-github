---
title: Guía de inciio rápido para GitHub Packages
intro: 'Publica en el {% data variables.product.prodname_registry %} con {% data variables.product.prodname_actions %}.'
allowTitleToDifferFromFilename: true
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}
{% data reusables.actions.ae-self-hosted-runners-notice %}

### Introducción

En esta guía, crearás un flujo de trabajo de {% data variables.product.prodname_actions %} para probar tu código y luego lo publicarás en el {% data variables.product.prodname_registry %}.

### Publicar tu paquete

1. Crea un repositorio nuevo en {% data variables.product.prodname_dotcom %}, agregando el `.gitignore` para Node. {% if currentVersion ver_lt "enterprise-server@3.1" %} Crea un repositorio privado si te gustaría borrar este paquete más adelante, los paquetes públicos no pueden borrarse.{% endif %} Para obtener más información, consulta la sección "[Crear un repositorio nuevo ](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)".
2. Clona el repositorio en tu máquina local.
    ```shell
    $ git clone https://{% if currentVersion == "github-ae@latest" %}<em>YOUR-HOSTNAME</em>{% else %}github.com{% endif %}/<em>YOUR-USERNAME</em>/<em>YOUR-REPOSITORY</em>.git
    $ cd <em>YOUR-REPOSITORY</em>
    ```
3. Crea un archivo `index.js` y agrega una alerta básica que diga "Hello world!"
    {% raw %}
    ```javascript{:copy}
    alert("Hello, World!");
    ```
    {% endraw %}
4. Inicializa un paquete de npm con `npm init`. En el asistente de inicialización de paquetes, ingresa tu paquete con el nombre: _`@YOUR-USERNAME/YOUR-REPOSITORY`_, y configura el script de pruebas en `exit 0`. Esto generará un archivo `package.json` con información sobre tu paquete.
    {% raw %}
    ```shell
    $ npm init
      ...
      package name: <em>@YOUR-USERNAME/YOUR-REPOSITORY</em>
      ...
      test command: <em>exit 0</em>
      ...    
    ```
    {% endraw %}

5. Ejecuta `npm install` para generar el archivo `package-lock.json` y luego confirma y sube tus cambios a {% data variables.product.prodname_dotcom %}.
    ```shell
    $ npm install
    $ git add index.js package.json package-lock.json
    $ git commit -m "initialize npm package"
    $ git push
    ```
6. Crea un directorio de `.github/workflows`. En este directorio, crea un archivo que se llame `release-package.yml`.
7. Copia el siguiente contenido de YAML en el archivo `release-package.yml`{% if currentVersion == "github-ae@latest" %}, reemplazando a `YOUR-HOSTNAME` con el nombre de tu empresa{% endif %}.
    ```yaml{:copy}
    name: Node.js Package

    on:
      release:
        types: [created]

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
            with:
              node-version: 12
          - run: npm ci
          - run: npm test

      publish-gpr:
        needs: build
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v2
          - uses: actions/setup-node@v1
            with:
              node-version: 12
              registry-url: {% if currentVersion == "github-ae@latest" %}https://npm.YOUR-HOSTNAME.com/{% else %}https://npm.pkg.github.com/{% endif %}
          - run: npm ci
          - run: npm publish
            env:
              NODE_AUTH_TOKEN: ${% raw %}{{secrets.GITHUB_TOKEN}}{% endraw %}
    ```
8. Confirma y sube tus cambios a {% data variables.product.prodname_dotcom %}.
    ```shell
    $ git add .github/workflows/release-package.yml
    $ git commit -m "workflow to publish package"
    $ git push
    ```
9.  El flujo de trabajo que creaste se ejecutará cuando sea que se cree un lanzamiento nuevo en tu repositorio. Si las pruebas pasan, entonces el paquete se publicará en {% data variables.product.prodname_registry %}.

    Para probar esto, navega a la pestaña de **Código** en tu repositorio y crea un lanzamiento nuevo. Para obtener más información, consulta la sección "[Gestionar los lanzamientos en un repositorio](/github/administering-a-repository/managing-releases-in-a-repository#creating-a-release)".

### Visualizar tu paquete publicado

Los paquetes se publican a nivel del repositorio. Puedes ver todos los paquetes en un repositorio y buscar un paquete específico.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.package_registry.packages-from-code-tab %}
{% data reusables.package_registry.navigate-to-packages %}


### Instalar un paquete publicado

Ahora que publicaste el paquete, querrás utilizarlo como una dependencia en tus proyectos. Para obtener más información, consulta la sección "[Configurar npm para utilizarlo con el {% data variables.product.prodname_registry %}](/packages/guides/configuring-npm-for-use-with-github-packages#installing-a-package)".

### Pasos siguientes

El flujo básico que acabas de agregar se ejecuta en cualquier momento que se cree un lanzamiento nuevo en tu repositorio. Pero, este es solo el principio de lo que puedes hacer con {% data variables.product.prodname_registry %}. Puedes publicar tu paquete en varios registros con un solo flujo de trabajo, activar el flujo de trabajo para que se ejecute en eventos diferentes tales como una solicitud de cambios fusionada, administrar contenedores, y más.

El combinar el {% data variables.product.prodname_registry %} y las {% data variables.product.prodname_actions %} puede ayudarte a automatizar casi cualquier aspecto de tu proceso de desarrollo de aplicaciones. ¿Listo para comenzar? Aquí hay algunos recursos útiles para llevar a cabo los siguientes pasos con el {% data variables.product.prodname_registry %} y las {% data variables.product.prodname_actions %}:

- "[Aprende sobre el {% data variables.product.prodname_registry %}](/packages/learn-github-packages)" para un tutorial más a fondo de GitHub Packages
- "[Aprende sobre las {% data variables.product.prodname_actions %}](/actions/learn-github-actions)" para un tutorial más a fondo de GitHub Actions
- "[Guías](/packages/guides)" para los casos de uso y ejemplos específicos
