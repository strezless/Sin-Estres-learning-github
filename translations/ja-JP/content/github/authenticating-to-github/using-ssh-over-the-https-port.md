---
title: HTTPS ポートを介して SSH を使用する
intro: '時々、ファイアウォールは SSH 接続を完全に許可することを拒否します。  If using [HTTPS cloning with credential caching](/github/getting-started-with-github/caching-your-github-credentials-in-git) is not an option, you can attempt to clone using an SSH connection made over the HTTPS port.  ほとんどのファイアウォールルールでこれを許可する必要がありますが、プロキシサーバーが干渉する可能性があります。'
redirect_from:
  - /articles/using-ssh-over-the-https-port
versions:
  free-pro-team: '*'
topics:
  - ssh
---

{% tip %}

**GitHub Enterprise ユーザ**: HTTPS ポート上で SSH 経由で GitHub Enterprise にアクセスすることは現在サポートされていません。

{% endtip %}

HTTPS ポート経由の SSH が可能かどうかをテストするには、次の SSH コマンドを実行します:

```shell
$ ssh -T -p 443 git@ssh.github.com
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

うまく機能すれば、素晴らしいことです。 そうでない場合は、[トラブルシューティングガイドに従ってください](/articles/error-permission-denied-publickey)。

### HTTPS を介した SSH 接続を有効化する

ポート 443 経由で SSH を `git@ssh.{% data variables.command_line.backticks %}` に実行できる場合、SSH 設定をオーバーライドして、{% data variables.product.product_location %} への接続をそのサーバーとポート経由で実行するように強制できます。

ssh 設定でこれを設定するには、`~/.ssh/config` のファイルを編集して、このセクションを追加してください:

```
Host {% data variables.command_line.codeblock %}
  Hostname ssh.{% data variables.command_line.codeblock %}
  Port 443
  User git
```

もう一度 {% data variables.product.product_location %} に接続することでこれが機能するかテストできます:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```
