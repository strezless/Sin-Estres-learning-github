---
title: Instalar el servidor de GitHub Enterprise en Google Cloud Platform
intro: 'Para instalar {% data variables.product.prodname_ghe_server %} en Google Cloud Platform, debes implementar un tipo de máquina soportado y utilizar un disco estándar persistente o un SSD persistente.'
redirect_from:
  - /enterprise/admin/guides/installation/installing-github-enterprise-on-google-cloud-platform/
  - /enterprise/admin/installation/installing-github-enterprise-server-on-google-cloud-platform
versions:
  enterprise-server: '*'
---

### Prerrequisitos

- {% data reusables.enterprise_installation.software-license %}
- Debes tener una cuenta de Google Cloud Platform capaz de iniciar instancias de la máquina virtual (VM) de Google Compute Engine (GCE). Para obtener más información, consulta el [Sitio web de Google Cloud Platform](https://cloud.google.com/) y la [Documentación de Google Cloud Platform](https://cloud.google.com/docs/).
- La mayoría de las acciones necesarias para iniciar tu instancia pueden también realizarse utilizando la [Consola de Google Cloud Platform](https://cloud.google.com/compute/docs/console). Sin embargo, recomendamos instalar la herramienta de línea de comando de gcloud compute para la configuración inicial. Se incluyen abajo ejemplos que utilizan la herramienta de línea de comando de gcloud compute. Para obtener más información, consulta la guía de instalación y configuración en la documentación de Google de "[gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/)".

### Consideraciones relativas al hardware

{% data reusables.enterprise_installation.hardware-considerations-all-platforms %}

### Determinar el tipo de máquina

Antes de iniciar {% data variables.product.product_location %} en Google Cloud Platform, deberás determinar el tipo de máquina que mejor se adapte a las necesidades de tu organización.

#### Tipos de máquinas admitidas

{% data variables.product.prodname_ghe_server %} es compatible en los siguientes tipo de máquinas de Google Compute Engine (GCE). Para obtener más información, consulta el [artículo sobre tipos de máquinas de Google Cloud Platform](https://cloud.google.com/compute/docs/machine-types).

| Memoria alta  |
| ------------- |
| n1-highmem-4  |
| n1-highmem-8  |
| n1-highmem-16 |
| n1-highmem-32 |
| n1-highmem-64 |
| n1-highmem-96 |

#### Tipos recomendados de máquina

Recomendamos estos tipos de máquina con base en la cantidad de licencias que tengas.

|                 Asientos                 | Tipo recomendado |
|:----------------------------------------:|:----------------:|
| Prueba, Demo o 10 usuarios no frecuentes |  n1-standard-4   |
|                10 - 3000                 |  n1-standard-8   |
|               3000 - 5000                |   n1-highmem-8   |
|               5000 - 8000                |  n1-highmem-16   |
|              8000 - 10000+               |  n1-highmem-32   |

{% data reusables.enterprise_installation.warning-on-scaling %}

### Seleccionar la imagen {% data variables.product.prodname_ghe_server %}

1. Utilizando la herramienta de línea de comando de [gcloud compute](https://cloud.google.com/compute/docs/gcloud-compute/), enumera las imágenes públicas{% data variables.product.prodname_ghe_server %}:
   ```shell
   $ gcloud compute images list --project github-enterprise-public --no-standard-images
   ```

2. Toma nota del nombre de la imagen para la última imagen de GCE de {% data variables.product.prodname_ghe_server %}.

### Configurar el firewall

Las máquinas virtuales de GCE se crean como un miembro de la red, que tiene un firewall. Para la red asociada con la VM {% data variables.product.prodname_ghe_server %}, deberás configurar el firewall para permitir los puertos requeridos en la tabla de abajo. Para obtener más información sobre las reglas de firewall en Google Cloud Platform, consulta la guía de Google "[Descripción de las reglas de firewall](https://cloud.google.com/vpc/docs/firewalls)."

1. Crea la red utilizando la herramienta de línea de comando de gcloud compute. Para obtener más información, consulta "[crea redes de gcloud compute](https://cloud.google.com/sdk/gcloud/reference/compute/networks/create)" en la documentación de Google.
   ```shell
   $ gcloud compute networks create <em>NETWORK-NAME</em> --subnet-mode auto
   ```
2. Crea una regla de firewall para cada uno de los puertos en la tabla de abajo. Para obtener más información, consulta las "[reglas de firewall de gcloud compute](https://cloud.google.com/sdk/gcloud/reference/compute/firewall-rules/)" en la documentación de Google.
   ```shell
   $ gcloud compute firewall-rules create <em>RULE-NAME</em> \
   --network <em>NETWORK-NAME</em> \
   --allow tcp:22,tcp:25,tcp:80,tcp:122,udp:161,tcp:443,udp:1194,tcp:8080,tcp:8443,tcp:9418,icmp
   ```
   Esta tabla identifica los puertos requeridos y para qué se usa cada puerto.

   {% data reusables.enterprise_installation.necessary_ports %}

### Asignar una IP estática y atribuirla a una VM

Si es un aparato de producción, recomendamos firmemente reservar una dirección de IP estática externa y asignarla a la VM {% data variables.product.prodname_ghe_server %}. En caso contrario, la dirección de IP pública de la VM no se mantendrá después de que se reinicie. Para obtener más información, consulta la guía de Google "[Reservar una dirección estática de IP externa](https://cloud.google.com/compute/docs/configure-instance-ip-addresses)."

En las configuraciones de alta disponibilidad de producción, tantos en el aparato principal como en la réplica deberían asignarse direcciones estáticas de IP separadas.

### Crear la instancia {% data variables.product.prodname_ghe_server %}

Para crear la instancia {% data variables.product.prodname_ghe_server %}, deberás crear una instancia de GCE con tu imagen {% data variables.product.prodname_ghe_server %} y adjuntarle volumen de almacenamiento adicional para los datos de tu instancia. Para obtener más información, consulta "[Consideraciones relativas al hardware](#hardware-considerations)."

1. Crea un disco de datos para utilizar como un volumen de almacenamiento adjunto para tu instancia de datos utilizando la herramienta de línea de comandos para cálculo gcloud y configura el tamaño con base en la cantidad de licencias que tengas. Para obtener más información, consulta "[crea discos de gcloud compute](https://cloud.google.com/sdk/gcloud/reference/compute/disks/create)" en la documentación de Google.
   ```shell
   $ gcloud compute disks create <em>DATA-DISK-NAME</em> --size <em>DATA-DISK-SIZE</em> --type <em>DATA-DISK-TYPE</em> --zone <em>ZONE</em>
   ```

2. Después crea una instancia utilizando el nombre de la imagen {% data variables.product.prodname_ghe_server %} que seleccionaste, y adjunta el disco de datos. Para obtener más información, consulta "[crea instancias de gcloud compute](https://cloud.google.com/sdk/gcloud/reference/compute/instances/create)" en la documentación de Google.
   ```shell
   $ gcloud compute instances create <em>INSTANCE-NAME</em> \
   --machine-type n1-standard-8 \
   --image <em>GITHUB-ENTERPRISE-IMAGE-NAME</em> \
   --disk name=<em>DATA-DISK-NAME</em> \
   --metadata serial-port-enable=1 \
   --zone <em>ZONE</em> \
   --network <em>NETWORK-NAME</em> \
   --image-project github-enterprise-public
   ```

### Configurar la instancia

{% data reusables.enterprise_installation.copy-the-vm-public-dns-name %}
{% data reusables.enterprise_installation.upload-a-license-file %}
{% data reusables.enterprise_installation.save-settings-in-web-based-mgmt-console %} Para obtener más información, consulta "[Configurar el aparato de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/configuring-the-github-enterprise-server-appliance)."
{% data reusables.enterprise_installation.instance-will-restart-automatically %}
{% data reusables.enterprise_installation.visit-your-instance %}

### Further reading

- "[Resumen del sistema](/enterprise/admin/guides/installation/system-overview)"{% if currentVersion ver_gt "enterprise-server@2.22" %}
- "[Acerca de las mejoras a los lanzamientos nuevos](/admin/overview/about-upgrades-to-new-releases)"{% endif %}
