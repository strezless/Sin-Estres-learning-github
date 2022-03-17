1. Under **Self-hosted runners**, locate the runner in the list. If your runner is in a group, click {% octicon "chevron-down" aria-label="The downwards chevron" %} to expand the list.
1. Click {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} next to the runner you want to remove, then click **Remove**.

    ![セルフホストランナーの設定の削除](/assets/images/help/settings/actions-runner-remove.png)
1. セルフホストランナーの削除手順が表示されます。 ランナーがアクセスできる状態にあるかによって、ランナーを削除するための以下のステップのいずれかを実行してください。

    * **ランナーマシンにアクセスできる場合：** マシンのオペレーティングシステムの画面上の指示に従って、削除コマンドを実行してください。 この指示には、必須のURLと自動的に生成された期間限定のトークンが含まれます。

        この削除コマンドは、以下のタスクを実行します。

        * {% data variables.product.product_name %}からのランナーの削除。
        * マシン上のセルフホストランナーアプリケーションの設定ファイルの削除。
        * インタラクティブモードで動作していないのであれば設定されているサービスの削除。

    * **マシンにアクセスできない場合：** **Yes, force remove this runner（はい、強制的にこのランナーを削除します）**をクリックして、強制的に{% data variables.product.product_name %}にランナーを削除させます。
