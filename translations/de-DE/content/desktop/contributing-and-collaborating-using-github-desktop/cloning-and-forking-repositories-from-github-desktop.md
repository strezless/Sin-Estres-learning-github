---
title: Repositories von GitHub Desktop klonen und per „Fork“ kopieren
intro: 'Du kannst {% data variables.product.prodname_desktop %} verwenden, um Repositorys von {% data variables.product.prodname_dotcom %} zu klonen und per Fork zu kopieren.'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-desktop
  - /desktop/contributing-to-projects/cloning-and-forking-repositories-from-github-desktop
versions:
  free-pro-team: '*'
---

### About local repositories
Repositories on {% data variables.product.prodname_dotcom %} are remote repositories. You can clone or fork a repository with {% data variables.product.prodname_desktop %} to create a local repository on your computer.

You can create a local copy of any repository on {% data variables.product.product_name %} that you have access to by cloning the repository. If you own a repository or have write permissions, you can sync between the local and remote locations. For more information, see "[Syncing your branch](/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch)."

When you clone a repository, any changes you push to {% data variables.product.product_name %} will affect the original repository. To make changes without affecting the original project, you can create a separate copy by forking the repository. You can create a pull request to propose that maintainers incorporate the changes in your fork into the original upstream repository. Weitere Informationen findest Du unter „[Informationen zu Forks](/github/collaborating-with-issues-and-pull-requests/about-forks)“.

When you try to use {% data variables.product.prodname_desktop %} to clone a repository that you do not have write access to, {% data variables.product.prodname_desktop %} will prompt you to create a fork automatically. You can choose to use your fork to contribute to the original upstream repository or to work independently on your own project. Any existing forks default to contributing changes to their upstream repositories. You can modify this choice at any time. For more information, see "[Managing fork behavior](#managing-fork-behavior)".

Darüber hinaus kannst Du ein Repository direkt über {% data variables.product.prodname_dotcom %} oder {% data variables.product.prodname_enterprise %} klonen. Weitere Informationen findest Du unter „[Ein Repository von {% data variables.product.prodname_dotcom %} in {% data variables.product.prodname_desktop %} klonen](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)“.

### Ein Repository klonen

{% data reusables.desktop.choose-clone-repository %}
{% data reusables.desktop.cloning-location-tab %}
{% data reusables.desktop.cloning-repository-list %}
{% data reusables.desktop.choose-local-path %}
{% data reusables.desktop.click-clone %}

### Repository forken
If you clone a repository that you do not have write access to, {% data variables.product.prodname_desktop %} will create a fork. After creating or cloning a fork, {% data variables.product.prodname_desktop %} will ask how you are planning to use the fork.

{% data reusables.desktop.choose-clone-repository %}
{% data reusables.desktop.cloning-location-tab %}
{% data reusables.desktop.cloning-repository-list %}
{% data reusables.desktop.choose-local-path %}
{% data reusables.desktop.click-clone %}
{% data reusables.desktop.fork-type-prompt %}

### Managing fork behavior
You can change how a fork behaves with the upstream repository in {% data variables.product.prodname_desktop %}.

{% data reusables.desktop.open-repository-settings %}
{% data reusables.desktop.select-fork-behavior %}

### Weiterführende Informationen
- [Informationen zu Remote-Repositorys](/github/getting-started-with-github/about-remote-repositories)
