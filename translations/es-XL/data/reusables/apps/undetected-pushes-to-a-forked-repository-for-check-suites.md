{% note %}

**Nota:** la API de Verificaciones únicamente busca las cargas en el repositorio donde se creó el conjunto o ejecución de verificaciones. No se detectan aquellas cargas en ramas de repositorios bifurcados y estas devuelven un arreglo vacío de `pull_requests` y un valor `null` para la `head_branch`.

{% endnote %}
