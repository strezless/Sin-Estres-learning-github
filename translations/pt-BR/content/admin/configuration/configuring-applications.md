---
title: Configurar aplicativos
intro: 'É possível configurar aplicativos internos para a {% data variables.product.product_location %}.'
redirect_from:
  - /enterprise/admin/installation/configuring-applications
  - /enterprise/admin/configuration/configuring-applications
versions:
  enterprise-server: '*'
---

### Ajustar cache de imagem

Você pode escolher por quanto tempo a {% data variables.product.product_location %} armazena avatares em cache. Ao aumentar o tempo do cache, você aumenta o tempo que o avatar do usuário levará para carregar. Configurar o tempo de cache com um valor muito baixo pode sobrecarregar os processos de trabalho da {% data variables.product.product_location %}.

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
3. Na barra lateral esquerda, clique em **Applications** (Aplicativos). ![Guia Applications (Aplicativos) na barra lateral Settings (Configurações)](/assets/images/enterprise/management-console/sidebar-applications.png)
4. Em "Avatar de Cache de Imagem (segundos)", digite o número de segundos que você gostaria
{% data variables.product.product_location %} para armazenar em cache imagens de avatar.
![Campo de formulário imagem de avatar em cache](/assets/images/enterprise/management-console/add-image-caching-value-field.png)
{% data reusables.enterprise_management_console.save-settings %}
