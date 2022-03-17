---
title: Usar ejecutores autoalojados en un flujo de trabajo
intro: 'Para usar los ejecutores autoalojados en un flujo de trabajo, puedes usar etiquetas para especificar el tipo de ejecutores para un trabajo.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
  - /actions/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Para obtener más información sobre cómo crear etiquetas personalizadas y predeterminadas, consulta la sección "[Utilizar etiquetas con ejecutores auto-hospedados](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)".

### Usar ejecutores autoalojados en un flujo de trabajo

Las etiquetas te permiten enviar jobs de flujo de trabajo a tipos específicos de ejecutores auto-hospedados, de acuerdo con sus características compartidas. Por ejemplo, si tu job requiere una componente de hardware o paquete de software específico, puedes asignar una etiqueta personalizada a un ejecutor y después configurar tu job para que solo se ejecute en los ejecutores con esta etiqueta.

{% data reusables.github-actions.self-hosted-runner-labels-runs-on %}

Para obtener más información, consulta la sección "[Sintaxis de flujo de trabajo para {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)".

### Utilizar etiquetas predeterminadas para enrutar jobs

Un ejecutor auto-hospedado recibe ciertas etiquetas automáticamente cuando se agrega a {% data variables.product.prodname_actions %}. Estas se utilizan para indicar su sistema operativo y plataforma de hardware:

* `autoalojado`: Etiqueta por defecto aplicada a todos los ejecutores autoalojados.
* `linux`, `windows`, o `macOS`: Se aplican dependiendo del sistema operativo.
* `x86`, `x64`, `ARM`, o `ARM64`: Se aplican dependiendo de la arquitectura del hardware.

Puedes utilizar el YAML de tu flujo de trabajo para mandar jobs a las diferentes combinaciones de estas etiquetas. En este ejemplo, un ejecutor auto-hospedado que empate con las tres etiquetas será elegible para ejecutar el job:

```yaml
runs-on: [self-hosted, linux, ARM64]
```

- `self-hosted` - Ejecuta este job en un ejecutor auto-hospedado.
- `linux` - Utiliza únicamente un ejecutor basado en Linux.
- `ARM64` - Utiliza únicamente un ejecutor basado en hardware ARM64.

Las etiquetas predeterminadas son fijas y no se pueden cambiar ni eliminar. Considera utilizar etiquetas personalizadas si necesitas más control sobre el enrutamiento de los jobs.

### Utilizar etiquetas personalizadas para enrutar jobs

Puedes crear etiquetas personalizadas y asignarlas a tus ejecutores auto-hospedados en cualquier momento. Las etiquetas personalizadas te permiten enviar jobs a tipos particulares de ejecutores auto-hospedados, basándose en cómo se etiquetan.

Por ejemplo, si tienes un job que requiere un tipo específico de hardware de gráficos, puedes crear una etiqueta personalizada llamada `gpu` y asignarla a los ejecutores que tengan instalado este hardware. Un ejecutor auto-hospedado que empate con las etiquetas asignadas será entonces elegible para ejecutar el job.

Este ejemplo muestra un job que combina etiquetas predeterminadas y personalizadas:

```yaml
runs-on: [self-hosted, linux, x64, gpu]
```

- `self-hosted` - Ejecuta este job en un ejecutor auto-hospedado.
- `linux` - Utiliza únicamente un ejecutor basado en Linux.
- `x64` - Utiliza únicamente un ejecutor basado en hardware x64.
- `gpu` - Esta etiqueta personalizada se asignó manualmente a los ejecutores auto-hospedados con hardware de GPU instalado.

Estas etiquetas operan acumulativamente, así que las etiquetas de un ejecutor auto-hospedado deberán empatar con los cuatro criterios para poder ser elegibles para procesar el job.

### Precedencia de enrutamiento para los ejecutores auto-hospedados

Si utilizas ejecutores tanto a nivel de repositorio como a nivel de organización, {% data variables.product.prodname_dotcom %} sigue un orden de precedencia cuando enruta los jobs hacia los ejecutores auto-hospedados:

1. Se procesan las etiquetas de `runs-on` del job. Entonces, {% data variables.product.prodname_dotcom %} intenta ubicar un ejecutor que coincida con los requisitos de la etiqueta:
2. El job se envía a un ejecutor a nivel de repositorio que coincida con las etiquetas del mismo. Si no hay un ejecutor a nivel de repositorio disponible (ya sea que esté ocupado, sin conexión, o no tenga etiquetas que coincidan):
3. El job se envía a un ejecutor de nivel organizacional que coincida con las etiquetas del mismo. Si hay un ejecutor de nivel organizacional disponible, el la solicitud del job falla con un error.
