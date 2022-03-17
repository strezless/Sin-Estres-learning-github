---
title: Configurar armazenamento de terceiros para pacotes
intro: 'Você pode configurar o serviço de terceiros que {% data variables.product.prodname_registry %} usa para armazenar os pacotes da sua empresa.'
redirect_from:
  - /enterprise/admin/packages/configuring-third-party-storage-for-packages
versions:
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### Sobre armazenamento de terceiros para {% data variables.product.prodname_registry %}

{% data variables.product.prodname_registry %} em {% data variables.product.prodname_ghe_server %} usa armazenamento externo de blob para armazenar seus pacotes. A quantidade de armazenamento necessária depende do seu uso de {% data variables.product.prodname_registry %}.

No momento, {% data variables.product.prodname_registry %} é compatível com o armazenamento do blob com Amazon Web Services (AWS) S3. MinIO também é compatível, mas a configuração não está atualmente implementada na interface de {% data variables.product.product_name %}. Você pode usar MinIO para armazenamento, seguindo as instruções para AWS S3, inserindo as informações análogas para a configuração do seu MinIO. Antes de configurar o armazenamento de terceiros para {% data variables.product.prodname_registry %} em {% data variables.product.prodname_dotcom %}, você deve configurar um bucket com seu provedor de armazenamento de terceiros. Para mais informações sobre como instalar e executar um bucket de minIO para usar com {% data variables.product.prodname_registry %}, consulte o "[Início rápido para configurar o armazenamento de MinIO](/admin/packages/quickstart-for-configuring-minio-storage)".

Para a melhor experiência, recomendamos o uso de um bucket dedicado para {% data variables.product.prodname_registry %}, separado do bucket usado para armazenamento para {% data variables.product.prodname_actions %}.

### Configurar o AWS S3 como armazenamento para {% data variables.product.prodname_registry %}

{% warning %}

**Avisos:**
- É fundamental que você defina as políticas de acesso restritivas que você deseja para o seu bucket de armazenamento porque {% data variables.product.company_short %} não aplica permissões específicas de objeto ou listas de controle de acesso adicionais (ACLs) à configuração do seu bucket de armazenamento. Por exemplo, se você tornar o seu bucket público, os dados no bucket poderão ser acessados através da Internet pública. Para obter mais informações, consulte [Configurar as permissões de acesso de objetos](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/set-permissions.html) na documentação do AWS.
- Recomendamos usar um bucket dedicado para {% data variables.product.prodname_registry %}, separar do bucket que você usa para o armazenamento de {% data variables.product.prodname_actions %}.
- Certifique-se de configurar o bucket que você vai querer usar no futuro. Não recomendamos alterar seu armazenamento depois de começar a usar {% data variables.product.prodname_registry %}.

{% endwarning %}

Antes de configurar o AWS como armazenamento para {% data variables.product.prodname_registry %}, certifique-se de que o seu ID da chave de acesso do AWS e seu segredo têm as permissões a seguir:
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_site_admin_settings.packages-tab %}
1. Em "URL de serviço do AWS", digite a URL do ponto de extremidade S3 para a região do seu bucket. ![Campo da URL do Serviço do AWS](/assets/images/enterprise/site-admin-settings/storage-service-url.png)
1. Em "Bucket do AWS S3", digite o nome do bucket S3 que você deseja usar para armazenar artefatos do pacote. ![Campo de Bucket para AWS S3](/assets/images/enterprise/site-admin-settings/aws-s3-bucket.png)
1. Em "Chave de acesso do AWS S3", digite sua chave de acesso para o S3. ![Campo Chave de acesso do AWS S3](/assets/images/enterprise/site-admin-settings/aws-s3-access-key.png)
1. Em "Chave secreta do AWS S3", digite sua chave secreta para S3. ![Campo Chave Secreta do AWS S3](/assets/images/enterprise/site-admin-settings/aws-s3-secret-key.png)
1. Em "Região do AWS S3", digite sua região para o S3. ![Campo Região do AWS S3](/assets/images/enterprise/site-admin-settings/aws-s3-region.png)
{% data reusables.enterprise_management_console.save-settings %}
