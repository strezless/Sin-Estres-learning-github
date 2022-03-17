---
title: GitHub Importerについて
intro: 'ソースコードがSubversion、Mercurial、Team Foundation Server、あるいは他のGitリポジトリにあるなら、GitHub Importerを使ってそれをGitHubに移せます。'
redirect_from:
  - /articles/about-github-importer
versions:
  free-pro-team: '*'
---

GitHub Importerは、コミットやリビジョン履歴を含めてソースコードリポジトリを素早くインポートしてくれます。

![リポジトリのインポートのgif](/assets/images/help/importer/github-importer.gif)

インポートの間、インポート元のバージョン管理システムによって、リモートリポジトリでの認証、コミット作者の属性の更新、大きなファイルを持つリポジトリのインポート（あるいはGit Large File Storageを使いたくない場合は大きなファイルの削除）が行えます。

| インポートのアクション                                                                       | Subversion | Mercurial | Team Foundation Server |  Git  |
|:--------------------------------------------------------------------------------- |:----------:|:---------:|:----------------------:|:-----:|
| リモートリポジトリでの認証                                                                     |   **X**    |   **X**   |         **X**          | **X** |
| [コミット作者の属性の更新](/articles/updating-commit-author-attribution-with-github-importer) |   **X**    |   **X**   |         **X**          |       |
| 大きなファイルの[Git Large File Storage](/articles/about-git-large-file-storage)への移動      |   **X**    |   **X**   |         **X**          |       |
| リポジトリからの大きなファイルの削除                                                                |   **X**    |   **X**   |         **X**          |       |

### 参考リンク

- [GitHub Importerでのリポジトリのインポート](/articles/importing-a-repository-with-github-importer)
- [GitHub Importerでのコミット作者の属性の更新](/articles/updating-commit-author-attribution-with-github-importer)
- [コマンドラインを使ったGitリポジトリのインポート](/articles/importing-a-git-repository-using-the-command-line)
- [ソースコードの移行ツール](/articles/source-code-migration-tools)
