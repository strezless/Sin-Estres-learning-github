---
title: GitHub Pages について
intro: '{% data variables.product.prodname_pages %} を使って、あなたやあなたの Organization、またはあなたのプロジェクトについてのウェブサイトを、{% data variables.product.product_name %} リポジトリから直接ホストできます。'
redirect_from:
  - /articles/what-are-github-pages/
  - /articles/what-is-github-pages/
  - /articles/user-organization-and-project-pages/
  - /articles/using-a-static-site-generator-other-than-jekyll/
  - /articles/mime-types-on-github-pages/
  - /articles/should-i-rename-usernamegithubcom-repositories-to-usernamegithubio/
  - /articles/about-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pages
---

### {% data variables.product.prodname_pages %} について

{% data variables.product.prodname_pages %} は、{% data variables.product.product_name %} のリポジトリから HTML、CSS、および JavaScript ファイル を直接取得し、任意でビルドプロセスを通じてファイルを実行し、ウェブサイトを公開できる静的なサイトホスティングサービスです。 {% data variables.product.prodname_pages %} サイトの例については、[{% data variables.product.prodname_pages %} サンプル集](https://github.com/collections/github-pages-examples)で見ることができます。

{% if currentVersion == "free-pro-team@latest" %}
You can host your site on
{% data variables.product.prodname_dotcom %}'s `github.io` domain or your own custom domain. 詳細は「[{% data variables.product.prodname_pages %} でカスタムドメインを使用する](/articles/using-a-custom-domain-with-github-pages)」を参照してください。
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.pages.about-private-publishing %} For more information, see "[Changing the visibility of your {% data variables.product.prodname_pages %} site](/github/working-with-github-pages/changing-the-visibility-of-your-github-pages-site)."
{% endif %}

作成方法については、「[{% data variables.product.prodname_pages %} サイトを作成する](/articles/creating-a-github-pages-site)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
Organization owners can disable the publication of
{% data variables.product.prodname_pages %} sites from the organization's repositories. For more information, see "[Managing the publication of {% data variables.product.prodname_pages %} sites for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization)."
{% endif %}

### {% data variables.product.prodname_pages %} サイトの種類

{% data variables.product.prodname_pages %} サイトには、3 つの種類があります。プロジェクト、ユーザ、そして Organization です。 プロジェクトサイトは、JavaScript ライブラリやレシピ集など、{% data variables.product.product_name %} の特定のプロジェクトに関するものです。 ユーザおよび Organization サイトは、特定の {% data variables.product.product_name %} に関するものです。

To publish a user site, you must create a repository owned by your user account that's named {% if currentVersion == "free-pro-team@latest" %}`<username>.github.io`{% else %}`<username>.<hostname>`{% endif %}. To publish an organization site, you must create a repository owned by an organization that's named {% if currentVersion == "free-pro-team@latest" %}`<organization>.github.io`{% else %}`<organization>.<hostname>`{% endif %}. {% if currentVersion == "free-pro-team@latest" %}Unless you're using a custom domain, user and organization sites are available at `http(s)://<username>.github.io` or `http(s)://<organization>.github.io`.{% elsif currentVersion == "github-ae@latest" %}User and organization sites are available at `http(s)://pages.<hostname>/<username>` or `http(s)://pages.<hostname>/<organization>`.{% endif %}

プロジェクトサイトのソースファイルは、プロジェクトと同じリポジトリに保存されます。 {% if currentVersion == "free-pro-team@latest" %}Unless you're using a custom domain, project sites are available at `http(s)://<username>.github.io/<repository>` or `http(s)://<organization>.github.io/<repository>`.{% elsif currentVersion == "github-ae@latest" %}Project sites are available at `http(s)://pages.<hostname>/<username>/<repository>/` or `http(s)://pages.<hostname>/<organization>/<repository>/`.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
If you publish your site privately, the URL for your site will be different. For more information, see "[Changing the visibility of your {% data variables.product.prodname_pages %} site](/github/working-with-github-pages/changing-the-visibility-of-your-github-pages-site)."
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
カスタムドメインがサイトの URL に与える影響に関する詳しい情報については、「[カスタムドメインと {% data variables.product.prodname_pages %} について](/articles/about-custom-domains-and-github-pages)」を参照してください。
{% endif %}

You can only create one user or organization site for each account on {% data variables.product.product_name %}. プロジェクトサイトの数については、Organization アカウントでもユーザアカウントでも、無制限です。

{% if enterpriseServerVersions contains currentVersion %}
The URL where your site is available depends on whether subdomain isolation is enabled for
{% data variables.product.product_location %}.

| サイトの種類 | Subdomain Isolation が有効 | Subdomain isolation が無効 |
| ------ | ----------------------- | ----------------------- |
|        |                         |                         |
 User | 

`http(s)://pages.<hostname>/<username>` | `http(s)://<hostname>/pages/<username>` | Organization | `http(s)://pages.<hostname>/<organization>` | `http(s)://<hostname>/pages/<organization>` | Project site owned by user account | `http(s)://pages.<hostname>/<username>/<repository>/` | `http(s)://<hostname>/pages/<username>/<repository>/` Project site owned by organization account | `http(s)://pages.<hostname>/<orgname>/<repository>/` | `http(s)://<hostname>/pages/<orgname>/<repository>/`

For more information, see "[Enabling subdomain isolation](/enterprise/{{ currentVersion }}/admin/installation/enabling-subdomain-isolation)" or contact your site administrator.
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Note:** Repositories using the legacy `<username>.github.com` naming scheme will still be published, but visitors will be redirected from `http(s)://<username>.github.com` to `http(s)://<username>.github.io`. If both a `<username>.github.com` and `<username>.github.io` repository exist, only the `<username>.github.io` repository will be published.

{% endnote %}
{% endif %}

### {% data variables.product.prodname_pages %} サイトの公開元

The publishing source for your {% data variables.product.prodname_pages %} site is the branch and folder where the source files for your site are stored.

{% data reusables.pages.private_pages_are_public_warning %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

If the default publishing source exists in your repository, {% data variables.product.prodname_pages %} will automatically publish a site from that source. The default publishing source for user and organization sites is the root of the default branch for the repository. The default publishing source for project sites is the root of the `gh-pages` branch.

If you want to keep the source files for your site in a different location, you can change the publishing source for your site. You can publish your site from any branch in the repository, either from the root of the repository on that branch, `/`, or from the `/docs` folder on that branch. 詳しい情報については「[{% data variables.product.prodname_pages %} サイトの公開元を設定する](/articles/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)」を参照してください。

If you choose the `/docs` folder of any branch as your publishing source, {% data variables.product.prodname_pages %} will read everything to publish your site{% if currentVersion == "free-pro-team@latest" %}, including the _CNAME_ file,{% endif %} from the `/docs` folder.{% if currentVersion == "free-pro-team@latest" %} For example, when you edit your custom domain through the {% data variables.product.prodname_pages %} settings, the custom domain will write to `/docs/CNAME`. _CNAME_ ファイルに関する詳しい情報については、「[{% data variables.product.prodname_pages %} サイト用のカスタムドメインを管理する](/articles/managing-a-custom-domain-for-your-github-pages-site)」を参照してください。{% endif %}

{% else %}

ユーザおよび Organization サイトの、デフォルトの公開元は `master` ブランチです。 ユーザまたは Organization サイトのリポジトリに `master` ブランチがある場合、サイトはそのブランチから自動的に公開されます。 ユーザや Organization サイトで、別の公開元を選ぶことはできません。

プロジェクトサイトの、デフォルトの公開元は `gh-pages` ブランチです。 プロジェクトサイトのリポジトリに `gh-pages` ブランチがある場合、サイトはそのブランチから自動的に公開されます。

プロジェクトサイトは、`master` ブランチまたは `master` ブランチ場の `/docs` フォルダから公開することもできます。 これらの公開元からサイトを公開するには、別の公開元を設定する必要があります。 詳しい情報については「[{% data variables.product.prodname_pages %} サイトの公開元を設定する](/articles/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)」を参照してください。

If you choose the `/docs` folder of the `master` branch as your publishing source, {% data variables.product.prodname_pages %} will read everything to publish your site{% if currentVersion == "free-pro-team@latest" %}, including the _CNAME_ file,{% endif %} from the `/docs` folder.{% if currentVersion == "free-pro-team@latest" %} For example, when you edit your custom domain through the {% data variables.product.prodname_pages %} settings, the custom domain will write to `/docs/CNAME`. _CNAME_ ファイルに関する詳しい情報については、「[{% data variables.product.prodname_pages %} サイト用のカスタムドメインを管理する](/articles/managing-a-custom-domain-for-your-github-pages-site)」を参照してください。{% endif %}

デフォルトブランチが`master`または`gh-pages`ではない場合でも、他のブランチからはプロジェクトサイトを公開することはできません。

{% endif %}

### 静的サイトジェネレータ

{% data variables.product.prodname_pages %} は、リポジトリにプッシュされたあらゆる静的ファイルを公開します。 静的ファイルを自分で作成することも、静的サイトジェネレータでサイトをビルドすることも可能です。 ローカルまたは別のサーバー上で独自のビルドプロセスをカスタマイズすることもできます。 {% data variables.product.prodname_pages %} に組み込まれている静的サイトジェネレータで、ビルドプロセスを容易化できる Jekyll のご利用をおすすめします。 詳しい情報については、「[{% data variables.product.prodname_pages %} と Jekyll](/articles/about-github-pages-and-jekyll)」を参照してください。

{% data variables.product.prodname_pages %} は、デフォルトでは Jekyll を使ってサイトを構築します。 Jekyll 以外の静的サイトジェネレータを使いたい場合、公開元のルートに `.nojekyll` という空のファイルを作成し、お使いの静的サイトジェネレータの指示に従ってローカルでサイトをビルドします。

{% data variables.product.prodname_pages %} は、PHP、Ruby、Python などのサーバーサイド言語はサポートしていません。

### {% data variables.product.prodname_pages %} を使用するためのガイドライン

{% if currentVersion == "free-pro-team@latest" %}
- 2016 年 6 月 15 日以降に作成され、`github.io` ドメインを使用して作成された {% data variables.product.prodname_pages %} サイトは、HTTPS 経由で配信されます。 2016 年 6 月 15 日までにサイトを作成した場合は、サイトへのトラフィックに対して、HTTPS サポートを有効にすることができます。 詳しい情報については「[HTTPS で{% data variables.product.prodname_pages %}サイトをセキュアにする](/articles/securing-your-github-pages-site-with-https)」を参照してください。
- {% data reusables.pages.no_sensitive_data_pages %}
- {% data variables.product.prodname_pages %} の使用には、転売禁止を含めて、[GitHub 利用規約](/articles/github-terms-of-service/)が適用されます。

#### 使用制限
{% endif %}
{% data variables.product.prodname_pages %} サイトには、次の使用制限があります:

  - {% data variables.product.prodname_pages %} source repositories have a recommended limit of 1GB.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[What is my disk quota?"](/articles/what-is-my-disk-quota/#file-and-repository-size-limitations){% endif %}
  - 公開された{% data variables.product.prodname_pages %}のサイトは1GB以上であってはなりません。
{% if currentVersion == "free-pro-team@latest" %}
  - {% data variables.product.prodname_pages %} サイトには、月当たり 100GB の*ソフトな*帯域幅制限があります。
  - {% data variables.product.prodname_pages %} サイトには、時間当たり 10 ビルドの*ソフトな*制限があります。

あなたのサイトがこれらの使用割当量を超えている場合、あなたのサイトにサービスを提供できないか、{% data variables.contact.contact_support %} から、あなたのサイトが当社のサーバーに与える影響を減らす方法を示唆するメールが届くことがあります。そうした方法の例としては、サードパーティのコンテンツ配信ネットワーク (CDN) をサイトの前に配置したり、リリースなどの他の {% data variables.product.prodname_dotcom %} 機能を利用したり、ニーズに合った別のホスティングサービスに移行したりすることなどが挙げられます。

#### 禁止される用途

{% data variables.product.prodname_pages %} は、オンラインビジネス、eコマースサイト、主に商取引の円滑化またはサービスとしての商用ソフトウェアの提供 (SaaS) のどちらかを目的とする、その他のウェブサイトを運営するための無料のウェブホスティングサービスとしての使用を意図したものではなく、またそのような使用を許可するものでもありません。
In addition,

{% data variables.product.prodname_dotcom %} does not allow {% data variables.product.prodname_pages %} to be used for certain purposes or activities. For a list of prohibited uses, see "[{% data variables.product.prodname_dotcom %}'s Additional Product Terms for {% data variables.product.prodname_pages %}](/github/site-policy/github-additional-product-terms#4-pages)."
{% endif %}

### {% data variables.product.prodname_pages %} での MIME タイプ

MIME タイプとは、ブラウザがリクエストするファイルの性質やフォーマットに関する情報を提供するため、サーバーがブラウザに送信するヘッダのことです。 {% data variables.product.prodname_pages %} は、数千のファイル拡張子にわたり、750 を超える MIME タイプをサポートしています。 サポートする MIME タイプのリストは、[mime-db project](https://github.com/jshttp/mime-db) から生成されます。

ファイルごと、リポジトリごとにカスタム MIME タイプを指定することはできませんが、{% data variables.product.prodname_pages %} で使う MIME タイプを追加や変更することは可能です。 詳しい情報については、「[mime-db コントリビューションガイドライン](https://github.com/jshttp/mime-db#adding-custom-media-types)」を参照してください。

### 参考リンク

- {% data variables.product.prodname_learning %} の [{% data variables.product.prodname_pages %}](https://lab.github.com/githubtraining/github-pages)
- "[{% data variables.product.prodname_pages %}](/rest/reference/repos#pages)"
