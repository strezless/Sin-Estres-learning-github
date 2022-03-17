---
title: Associar editores de texto ao Git
intro: Use um editor de texto para abrir e editar seus arquivos com o Git.
redirect_from:
  - /textmate/
  - /articles/using-textmate-as-your-default-editor/
  - /articles/using-sublime-text-2-as-your-default-editor/
  - /articles/associating-text-editors-with-git
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% mac %}

### Usar o Atom como seu editor

1. Instale o [Atom](https://atom.io/). Para obter mais informações, consulte "[Instalar o Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)" na documentação do Atom.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Digite este comando:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

### Usando o Visual Studio Code como seu editor

1. Instale o [Visual Studio Code](https://code.visualstudio.com/) (VS Code). Para obter mais informações, consulte "[Configurar o Visual Studio Code](https://code.visualstudio.com/Docs/setup/setup-overview)" na documentação do VS Code.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Digite este comando:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

### Usar o Sublime Text como seu editor

1. Instale o [Sublime Text](https://www.sublimetext.com/). Para obter mais informações, consulte "[Instalação](https://docs.sublimetext.io/guide/getting-started/installation.html)" na documentação do Sublime Text.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Digite este comando:
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

### Usar o TextMate como seu editor

1. Instale o [TextMate](https://macromates.com/).
2. Instale o utilitário do shell `mate`. Para obter mais informações, consulte "[mate e rmate](https://macromates.com/blog/2011/mate-and-rmate/)" na documentação do TextMate.
{% data reusables.command_line.open_the_multi_os_terminal %}
4. Digite este comando:
  ```shell
  $ git config --global core.editor "mate -w"
  ```
{% endmac %}

{% windows %}

### Usar o Atom como seu editor

1. Instale o [Atom](https://atom.io/). Para obter mais informações, consulte "[Instalar o Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)" na documentação do Atom.
3. Digite este comando:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

### Usando o Visual Studio Code como seu editor

1. Instale o [Visual Studio Code](https://code.visualstudio.com/) (VS Code). Para obter mais informações, consulte "[Configurar o Visual Studio Code](https://code.visualstudio.com/Docs/setup/setup-overview)" na documentação do VS Code.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Digite este comando:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

### Usar o Sublime Text como seu editor

1. Instale o [Sublime Text](https://www.sublimetext.com/). Para obter mais informações, consulte "[Instalação](https://docs.sublimetext.io/guide/getting-started/installation.html)" na documentação do Sublime Text.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Digite este comando:
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/sublime text 3/subl.exe' -w"
  ```

### Usar o Notepad++ como seu editor

1. Instale o Notepad++ em https://notepad-plus-plus.org/. Para obter mais informações, consulte "[Primeiros passos](https://npp-user-manual.org/docs/getting-started/)" na documentação do Notepad++.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Digite este comando:
  ```shell
  $ git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
  ```
{% endwindows %}

{% linux %}

### Usar o Atom como seu editor

1. Instale o [Atom](https://atom.io/). Para obter mais informações, consulte "[Instalar o Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)" na documentação do Atom.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Digite este comando:
  ```shell
  $ git config --global core.editor "atom --wait"
  ```

### Usando o Visual Studio Code como seu editor

1. Instale o [Visual Studio Code](https://code.visualstudio.com/) (VS Code). Para obter mais informações, consulte "[Configurar o Visual Studio Code](https://code.visualstudio.com/Docs/setup/setup-overview)" na documentação do VS Code.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Digite este comando:
  ```shell
  $ git config --global core.editor "code --wait"
 ```

### Usar o Sublime Text como seu editor

1. Instale o [Sublime Text](https://www.sublimetext.com/). Para obter mais informações, consulte "[Instalação](https://docs.sublimetext.io/guide/getting-started/installation.html)" na documentação do Sublime Text.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Digite este comando:
  ```shell
  $ git config --global core.editor "subl -n -w"
  ```

{% endlinux %}
