---
title: Subir y extraer imágenes de Docker
intro: 'Puedes almacenar y administrar imágenes de Docker en {% data variables.product.prodname_github_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/managing-container-images-with-github-container-registry/pushing-and-pulling-docker-images
versions:
  free-pro-team: '*'
---

{% data reusables.package_registry.container-registry-beta %}

Para cargar y extraer imágenes de contenedor que pertenezcan a una organización, un administrador de dicha organización debe habilitar el {% data variables.product.prodname_github_container_registry %} para la misma. Para obtener más información, consulta la sección "[Habilitar el soporte mejorado para los contenedores](/packages/getting-started-with-github-container-registry/enabling-improved-container-support)".

### Autenticarte en {% data variables.product.prodname_github_container_registry %}

{% data reusables.package_registry.authenticate_with_pat_for_container_registry %}

{% data reusables.package_registry.authenticate-to-container-registry-steps %}

### Subir imágenes de contenedor

Este ejemplo sube la última versión de `IMAGE-NAME`.
  ```shell
  $ docker push ghcr.io/OWNER/IMAGE_NAME:latest
  ```

Este ejemplo sube la versión `2.5` de la imagen.
  ```shell
  $ docker push ghcr.io/OWNER/IMAGE-NAME:2.5
  ```

Cuando publicas un paquete por primera vez, la visibilidad predeterminada es privada. Para cambiar la visibilidad o para configurar los permisos de acceso, consulta la sección "[Configurar el control de accesos y la visibilidad para las imágenes de contenedor](/packages/managing-container-images-with-github-container-registry/configuring-access-control-and-visibility-for-container-images)".

### Extraer imágenes de contenedor

#### Extraer por resúmen

Para garantizar que siempre utilices la misma imagen, puedes especificar la versión exacta de la imagen de contenedor que quieres extraer de acuerdo con su valor de SHA de `digest`.

1. Para encontrar el valor de SHA de resúmen, utiliza `docker inspect` o `docker pull` y copia el valor de SHA después de `Digest:`
  ```shell
  $ docker inspect ghcr.io/OWNER/IMAGE_NAME
  ```
2. Elimina la imagen localmente de acuerdo a tus necesidades.
  ```shell
  $ docker rmi  ghcr.io/OWNER/IMAGE_NAME:latest
  ```

3. Extrae la imagen de contenedor con `@YOUR_SHA_VALUE` después del nombre de dicha imagen.
  ```shell
  $ docker pull ghcr.io/OWNER/IMAGE_NAME@sha256:82jf9a84u29hiasldj289498uhois8498hjs29hkuhs
  ```

#### Extraer por nombre

  ```shell
  $ docker pull ghcr.io/OWNER/IMAGE_NAME
  ```

#### Extraer por nombre y versión

Ejemplo de CLI de Docker que muestra una imagen que se extrae por su nombre y por la etiqueta de la versión `1.14.1`:
  ```shell
  $ docker pull ghcr.io/OWNER/IMAGE_NAME:1.14.1
  > 5e35bd43cf78: Pull complete
  > 0c48c2209aab: Pull complete
  > fd45dd1aad5a: Pull complete
  > db6eb50c2d36: Pull complete
  > Digest: sha256:ae3b135f133155b3824d8b1f62959ff8a72e9cf9e884d88db7895d8544010d8e
  > Status: Downloaded newer image for ghcr.io/orgname/image-name/release:1.14.1
  > ghcr.io/orgname/image-name/release:1.14.1
  ```

#### Extraer por nombre y última versión

  ```shell
  $ docker pull ghcr.io/OWNER/IMAGE_NAME:latest
  > latest: Pulling from user/image-name
  > Digest: sha256:b3d3e366b55f9a54599220198b3db5da8f53592acbbb7dc7e4e9878762fc5344
  > Status: Downloaded newer image for ghcr.io/user/image-name:latest
  > ghcr.io/user/image-name:latest
  ```

### Crear imagenes de contenedor

Este ejemplo crea la imagen `hello_docker`:
  ```shell
  $ docker build -t hello_docker .
  ```

### Etiquetar las imágenes de contenedor

1. Encuentra la ID para la imagen de Docker que quieres etiquetar.
  ```shell
  $ docker images
  > REPOSITORY                                            TAG                 IMAGE ID            CREATED             SIZE
  > ghcr.io/my-org/hello_docker         latest              38f737a91f39        47 hours ago        91.7MB
  > ghcr.io/my-username/hello_docker    latest              38f737a91f39        47 hours ago        91.7MB
  > hello-world                                           latest              fce289e99eb9        16 months ago       1.84kB
  ```

2. Etiqueta tu imagen de Docker utilizando la ID ed imagen y el nombre que quieras poner a la misma, así como el destino en donde se hospedará ésta.
  ```shell
  $ docker tag 38f737a91f39 ghcr.io/OWNER/NEW_IMAGE_NAME:latest
  ```
