---
title: コミットメールアドレスを設定する
intro: 'You can set the email address that is used to author commits on {% data variables.product.product_name %} and on your computer.'
redirect_from:
  - /articles/keeping-your-email-address-private/
  - /articles/setting-your-commit-email-address-on-github/
  - /article/about-commit-email-addresses/
  - /articles/git-email-settings/
  - /articles/setting-your-email-in-git/
  - /articles/set-your-user-name-email-and-github-token/
  - /articles/setting-your-commit-email-address-in-git/
  - /articles/setting-your-commit-email-address
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### コミットメールアドレスについて

{% data variables.product.product_name %}は、コミットメールアドレスを使ってコミットを{% data variables.product.product_name %}アカウントに関連づけます。 コマンドラインからプッシュするコミットや、WebベースのGit操作に関連づけられるメールアドレスは選択できます。

Web ベースの Git 操作については、{% data variables.product.product_name %} でのコミットメールアドレスを設定できます。 コマンドラインからプッシュするコミットについては、Git のコミットメールアドレスを設定できます。

{% if currentVersion == "free-pro-team@latest" %}Any commits you made prior to changing your commit email address are still associated with your previous email address.{% else %}After changing your commit email address on {% data variables.product.product_name %}, the new email address will be visible in all of your future web-based Git operations by default. コミットメールアドレスを変更する前のコミットは、変更前のメールアドレスに関連付けられたままとなります。{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**参考**:{% data reusables.user_settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}If you'd like to keep your personal email address private, you can use a {% data variables.product.product_name %}-provided `no-reply` email address as your commit email address. コマンドラインからプッシュするコミットに対して`noreply`メールアドレスを使いたい場合には、そのメールアドレスを Git のコミットメールアドレスの設定で使用してください。 Web ベースの Git 操作に `noreply` アドレスを使いたい場合には、GitHub でコミットメールアドレスの設定を行い、[**Keep my email address private**] を選択してください。

また、個人のメールアドレスを公開するコマンドラインからプッシュされたコミットをブロックするよう選択することもできます。 詳細は「[個人のメールを公開するコマンドラインプッシュのブロック](/articles/blocking-command-line-pushes-that-expose-your-personal-email-address)」を参照してください。{% endif %}

To ensure that commits are attributed to you and appear in your contributions graph, use an email address that is connected to your {% data variables.product.product_name %} account{% if currentVersion == "free-pro-team@latest" %}, or the `noreply` email address provided to you in your email settings{% endif %}. {% if currentVersion != "github-ae@latest" %}For more information, see "[Adding an email address to your {% data variables.product.prodname_dotcom %} account](/github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account)."{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**注釈:** {% data variables.product.product_name %}アカウントを2017年7月18日_以降_に作成した場合、{% data variables.product.product_name %}が提供する`no-reply`メールアドレスは7桁のID番号とユーザ名を<code><em>ID+username</em>@users.noreply.github.com</code>という形式にしたものになります。 {% data variables.product.product_name %}アカウントを2017年7月18日_以前_に作成した場合、{% data variables.product.product_name %}が提供する`no-reply`メールアドレスは、ユーザ名を<code><em>username</em>@users.noreply.github.com</code>という形式にしたものになります。 IDベースの{% data variables.product.product_name %}が提供する`no-reply`を取得するには、メール設定で**Keep my email address private（メールアドレスをプライベートにする）**を選択（あるいは選択解除してから選択しなおし）してください。

{% endnote %}

{% data variables.product.product_name %}が提供する`noreply`メールアドレスをコミットの際に使い、その後に[ユーザ名を変更](/articles/changing-your-github-username)すると、それらのコミットは{% data variables.product.product_name %}のアカウントに関連づけられなくなります。 これは、IDベースの{% data variables.product.product_name %}が提供する`noreply`アドレスの場合には当てはまりません。 詳細は「[{% data variables.product.prodname_dotcom %} ユーザ名を変更する](/articles/changing-your-github-username)」を参照してください。{% endif %}

### {% data variables.product.prodname_dotcom %} のコミットメールアドレスを設定する

{% data reusables.files.commit-author-email-options %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.user_settings.add_and_verify_email %}
{% data reusables.user_settings.select_primary_email %}{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.user_settings.keeping_your_email_address_private %}{% endif %}

### Git のコミットメールアドレスを設定する

`git config`コマンドを使用して、Git コミットに関連付けられているメールアドレスを変更できます。 設定した新しいメールアドレスは、コマンドラインから {% data variables.product.product_name %} にプッシュするこれからのコミットに表示されます。 コミットメールアドレスを変更する前のコミットは、まだ過去のメールアドレスに関連付けられます。

#### コンピュータにあるすべてのリポジトリ用にメールアドレスを設定する

{% data reusables.command_line.open_the_multi_os_terminal %}
2. {% data reusables.user_settings.set_your_email_address_in_git %}
   ```shell
   $ git config --global user.email "<em>email@example.com</em>"
   ```
3. {% data reusables.user_settings.confirm_git_email_address_correct %}
   ```shell
   $ git config --global user.email
   <span class="output">email@example.com</span>
   ```
4. {% data reusables.user_settings.link_email_with_your_account %}

#### 単一リポジトリ用にメールアドレスを設定する

{% data variables.product.product_name %} は、{% data variables.product.product_name %} アカウントでコマンドラインからプッシュされたコミットと関連付けるために、ローカルの Git 設定のメールアドレスを使用します。

単一のリポジトリで作成するコミットに関連するメールアドレスを変更できます。 この 1 つのリポジトリの Git コンフィグ設定を上書きしますが、他のリポジトリには影響しません。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 現在のワーキングディレクトリを Git コミットと関連付けたメールアドレスを設定したいローカルリポジトリに変更します。
3. {% data reusables.user_settings.set_your_email_address_in_git %}
   ```shell
   $ git config user.email "<em>email@example.com</em>"
   ```
4. {% data reusables.user_settings.confirm_git_email_address_correct %}
   ```shell
   $ git config user.email
   <span class="output">email@example.com</span>
   ```
5. {% data reusables.user_settings.link_email_with_your_account %}
