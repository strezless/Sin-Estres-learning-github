---
title: 构建和测试 Python
intro: 您可以创建持续集成 (CI) 工作流程来构建和测试您的 Python 项目。
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-python-with-github-actions
  - /actions/language-and-framework-guides/using-python-with-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: tutorial
topics:
  - CI
  - Python
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 简介

本指南介绍如何构建、测试和发布 Python 包。

{% data variables.product.prodname_dotcom %} 托管的运行器有工具缓存预安装的软件，包括 Python 和 PyPy。 您无需安装任何项目！ 有关最新版软件以及 Python 和 PyPy 预安装版本的完整列表，请参阅 [{% data variables.product.prodname_dotcom %} 托管的运行器的规格](/actions/reference/specifications-for-github-hosted-runners/#supported-software)。

### 基本要求

您应该熟悉 YAML 和 {% data variables.product.prodname_actions %} 的语法。 更多信息请参阅“[Learn {% data variables.product.prodname_actions %}](/actions/learn-github-actions)”。

建议您对 Python、PyPy 和 pip 有个基本的了解。 更多信息请参阅：
- [开始使用 Python](https://www.python.org/about/gettingstarted/)
- [PyPy](https://pypy.org/)
- [Pip 包管理器](https://pypi.org/project/pip/)

{% data reusables.actions.enterprise-setup-prereq %}

### 从 Python 工作流程模板开始

{% data variables.product.prodname_dotcom %} 提供有 Python 工作流程模板，应该适用于大多数 Python 项目。 本指南包含可用于自定义模板的示例。 更多信息请参阅 [Python 工作流程模板](https://github.com/actions/starter-workflows/blob/main/ci/python-package.yml)。

要快速开始，请将模板添加到仓库的 `.github/workflows` 目录中。

{% raw %}
```yaml{:copy}
name: Python package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: [2.7, 3.5, 3.6, 3.7, 3.8]

    steps:
    - uses: actions/checkout@v2
    - name: Set up Python ${{ matrix.python-version }}
      uses: actions/setup-python@v2
      with:
        python-version: ${{ matrix.python-version }}
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install flake8 pytest
        if [ -f requirements.txt ]; then pip install -r requirements.txt; fi
    - name: Lint with flake8
      run: |
        # 如果有任何 Python 语法错误或未定义的名称，停止构建
        flake8 . --count --select=E9,F63,F7,F82 --show-source --statistics
        # exit-zero treats all errors as warnings. The GitHub editor is 127 chars wide
        flake8 . --count --exit-zero --max-complexity=10 --max-line-length=127 --statistics
    - name: Test with pytest
      run: |
        pytest
```
{% endraw %}

### 指定 Python 版本

要在 {% data variables.product.prodname_dotcom %} 托管的运行器上使用预安装的 Python 或 PyPy 版本，请使用 `setup-python` 操作。 此操作从每个运行器上的工具缓存中查找特定版本的 Python 或 PyPy，并将必要的二进制文件添加到 `PATH`，这可继续用于作业的其余部分。 如果工具缓存中未安装特定版本的 Python，`setup-python` 操作将从 [`python-versions`](https://github.com/actions/python-versions) 仓库下载并设置适当的版本。

使用 `setup-action` 是 Python 与 {% data variables.product.prodname_actions %} 结合使用时的推荐方式，因为它能确保不同运行器和不同版本的 Python 行为一致。 如果使用自托管运行器，则必须安装 Python 并将其添加到 `PATH`。 更多信息请参阅 [`setup-python` 操作](https://github.com/marketplace/actions/setup-python)。

下表描述了每个 {% data variables.product.prodname_dotcom %} 托管的运行器中工具缓存的位置。

|                 | Ubuntu                          | Mac                                      | Windows                                    |
| --------------- | ------------------------------- | ---------------------------------------- | ------------------------------------------ |
| **工具缓存目录**      | `/opt/hostedtoolcache/*`        | `/Users/runner/hostedtoolcache/*`        | `C:\hostedtoolcache\windows\*`         |
| **Python 工具缓存** | `/opt/hostedtoolcache/Python/*` | `/Users/runner/hostedtoolcache/Python/*` | `C:\hostedtoolcache\windows\Python\*` |
| **PyPy 工具缓存**   | `/opt/hostedtoolcache/PyPy/*`   | `/Users/runner/hostedtoolcache/PyPy/*`   | `C:\hostedtoolcache\windows\PyPy\*`   |

如果您正在使用自托管的运行器，则可以配置运行器使用 `setup-python` 操作来管理您的依赖项。 更多信息请参阅 `setup-python` 自述文件中的

将 setup-python 与自托管运行器一起使用</code>。</p> 

{% data variables.product.prodname_dotcom %} 支持语义版本控制语法。 更多信息请参阅“[使用语义版本控制](https://docs.npmjs.com/about-semantic-versioning#using-semantic-versioning-to-specify-update-types-your-package-can-accept)”和“[语义版本控制规范](https://semver.org/)”。



#### 使用多个 Python 版本

{% raw %}


```yaml{:copy}
name: Python package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      # You can use PyPy versions in python-version.
      # 例如，pypy2 和 pypy3
      matrix:
        python-version: [2.7, 3.5, 3.6, 3.7, 3.8]

    steps:
    - uses: actions/checkout@v2
    - name: Set up Python ${{ matrix.python-version }}
      uses: actions/setup-python@v2
      with:
        python-version: ${{ matrix.python-version }}
    # 您可以打印当前 Python 版本以测试矩阵
    - name: Display Python version
      run: python -c "import sys; print(sys.version)"
```


{% endraw %}



#### 使用特定的 Python 版本

您可以配置 python 的特定版本。 例如，3.8。 或者，您也可以使用语义版本语法来获得最新的次要版本。 此示例使用 Python 3 最新的次要版本。

{% raw %}


```yaml{:copy}
name: Python package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set up Python 3.x
      uses: actions/setup-python@v2
      with:
        # Semantic version range syntax or exact version of a Python version
        python-version: '3.x'
        # Optional - x64 or x86 architecture, defaults to x64
        architecture: 'x64'
    # You can test your matrix by printing the current Python version
    - name: Display Python version
      run: python -c "import sys; print(sys.version)"
```


{% endraw %}



#### 排除版本

如果指定不可用的 Python 版本，`setup-python` 将会失败，且显示如下错误：`##[error]Version 3.4 with arch x64 not found`。 错误消息包含可用的版本。

如果存在您不想运行的 Python 配置，您也可以在工作流程中使用 `exclude` 关键字。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstrategy)”。

{% raw %}


```yaml{:copy}
name: Python package

on: [push]

jobs:
  build:

    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, macos-latest, windows-latest]
        python-version: [2.7, 3.6, 3.7, 3.8, pypy2, pypy3]
        exclude:
          - os: macos-latest
            python-version: 3.6
          - os: windows-latest
            python-version: 3.6
```


{% endraw %}



#### 使用默认 Python 版本

建议使用 `setup-python` 配置工作流程中使用的 Python 版本，因为它有助于使您的依赖关系变得明朗。 如果不使用 `setup-python`，调用 `python` 时将在任何 shell 中使用 `PATH` 中设置的 Python 默认版本。 {% data variables.product.prodname_dotcom %} 托管的运行器之间有不同的 Python 默认版本，这可能导致非预期的更改或使用的版本比预期更旧。

| {% data variables.product.prodname_dotcom %} 托管的运行器 | 描述                                                                                                                                                                         |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ubuntu                                              | Ubuntu 运行器有多个版本的系统 Python 安装在 `/usr/bin/python` 和 `/usr/bin/python3` 下。 {% data variables.product.prodname_dotcom %} 除了安装在工具缓存中的版本，还有与 Ubuntu 一起打包的 Python 版本。             |
| Windows                                             | 不包括工具缓存中的 Python 版本，Windows 未随附同等版本的系统 Python。 为保持与其他运行器一致的行为，并允许 Python 在没有 `setup-python` 操作的情况下开箱即用，{% data variables.product.prodname_dotcom %} 将从工具缓存中添加几个版本到 `PATH`。 |
| macOS                                               | 除了作为工具缓存一部分的版本外，macOS 运行器还安装了多个版本的系统 Python。 系统 Python 版本位于 `/usr/local/Cellar/python/*` 目录中。                                                                              |




### 安装依赖项

{% data variables.product.prodname_dotcom %} 托管的运行器安装了 pip 软件包管理器。 在构建和测试代码之前，您可以使用 pip 从 PyPI 软件包注册表安装依赖项。 例如，下面的 YAML 安装或升级 `pip` 软件包安装程序以及 `setuptools` 和 `wheel` 软件包。

使用 {% data variables.product.prodname_dotcom %} 托管的运行器时，您还可以缓存依赖项以加速工作流程。 更多信息请参阅“<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">缓存依赖项以加快工作流程</a>”。

{% raw %}


```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Set up Python
  uses: actions/setup-python@v2
  with:
    python-version: '3.x'
- name: Install dependencies
  run: python -m pip install --upgrade pip setuptools wheel
```


{% endraw %}



#### 要求文件

在更新 `pip` 后，下一步通常是从 *requires.txt* 安装依赖项。

{% raw %}


```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Set up Python
  uses: actions/setup-python@v2
  with:
    python-version: '3.x'
- name: Install dependencies
  run: |
    python -m pip install --upgrade pip
    pip install -r requirements.txt
```


{% endraw %}



#### 缓存依赖项

使用 {% data variables.product.prodname_dotcom %} 托管的运行器时，您可以使用唯一密钥缓存 pip 依赖项， 并在使用[`缓存`](https://github.com/marketplace/actions/cache)操作运行未来的工作流程时恢复依赖项。 更多信息请参阅“<a href="/actions/guides/caching-dependencies-to-speed-up-workflows" class="dotcom-only">缓存依赖项以加快工作流程</a>”。

Pip 根据运行器的操作系统将依赖项缓存在不同的位置。 您需要缓存的路径可能不同于下面的 Ubuntu 示例，具体取决于您使用的操作系统。 更多信息请参阅 [Python 缓存示例](https://github.com/actions/cache/blob/main/examples.md#python---pip)。

{% raw %}


```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Setup Python
  uses: actions/setup-python@v2
  with:
    python-version: '3.x'
- name: Cache pip
  uses: actions/cache@v2
  with:
    # This path is specific to Ubuntu
    path: ~/.cache/pip
    # Look to see if there is a cache hit for the corresponding requirements file
    key: ${{ runner.os }}-pip-${{ hashFiles('requirements.txt') }}
    restore-keys: |
      ${{ runner.os }}-pip-
      ${{ runner.os }}-
- name: Install dependencies
  run: pip install -r requirements.txt
```


{% endraw %}

{% note %}

**注意：**取决于依赖项的数量，使用依赖项缓存可能会更快。 有很多大型依赖项的项目应该能看到性能明显提升，因为下载所需的时间会缩短。 依赖项较少的项目可能看不到明显的性提升，甚至可能由于pip 安装缓存依赖项的方式而看到性能略有下降。 性能因项目而异。

{% endnote %}



### 测试代码

您可以使用与本地相同的命令来构建和测试代码。



#### 使用 pytest 和 pytest-cov 测试

此示例安装或升级 `pytest` 和 `pest-cov`。 然后进行测试并以 JUnit 格式输出，而代码覆盖结果则以 Cobertura 输出。 更多信息请参阅 [JUnit](https://junit.org/junit5/) 和 [Cobertura](https://cobertura.github.io/cobertura/)。

{% raw %}


```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Set up Python
  uses: actions/setup-python@v2
  with:
    python-version: '3.x'
- name: Install dependencies
  run: |
    python -m pip install --upgrade pip
    pip install -r requirements.txt
- name: Test with pytest
  run: |
    pip install pytest
    pip install pytest-cov
    pytest tests.py --doctest-modules --junitxml=junit/test-results.xml --cov=com --cov-report=xml --cov-report=html
```


{% endraw %}



#### 使用 Flake8 嵌入代码

下面的示例安装或升级 `flake8` 并用它来嵌入所有文件。 更多信息请参阅 [Flake8](http://flake8.pycqa.org/en/latest/)。

{% raw %}


```yaml{:copy}
steps:
- uses: actions/checkout@v2
- name: Set up Python
  uses: actions/setup-python@v2
  with:
    python-version: '3.x'
- name: Install dependencies
  run: |
    python -m pip install --upgrade pip
    pip install -r requirements.txt
- name: Lint with flake8
  run: |
    pip install flake8
    flake8 .
```


{% endraw %}



#### 使用 tox 运行测试

通过 {% data variables.product.prodname_actions %}，您可以使用 tox 运行测试并将工作分散到多个作业。 您需要使用 `-e py` 选项调用 tox，以在 `PATH` 中选择 Python 版本，而不是指定特定版本。 更多信息请参阅 [tox](https://tox.readthedocs.io/en/latest/)。

{% raw %}


```yaml{:copy}
name: Python package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        python: [2.7, 3.7, 3.8]

    steps:
      - uses: actions/checkout@v2
      - name: Setup Python
        uses: actions/setup-python@v2
        with:
          python-version: ${{ matrix.python }}
      - name: Install Tox and any other packages
        run: pip install tox
      - name: Run Tox
        # 使用 `PATH` 中的 Python 版本运行 tox
        run: tox -e py
```


{% endraw %}



### 将工作流数据打包为构件

您可以在工作流程完成后上传构件以查看。 例如，您可能需要保存日志文件、核心转储、测试结果或屏幕截图。 更多信息请参阅“[使用构件持久化工作流程](/github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts)”。

下面的示例演示如何使用 `upload-artifact` 操作来存档运行 `pytest` 的测试结果。 更多信息请参阅 [`upload-artifact` 操作](https://github.com/actions/upload-artifact)。

{% raw %}


```yaml{:copy}
name: Python package

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest
    strategy:
      matrix:
        python-version: [2.7, 3.5, 3.6, 3.7, 3.8]

    steps:
    - uses: actions/checkout@v2
    - name: Setup Python # Set Python version
      uses: actions/setup-python@v2
      with:
        python-version: ${{ matrix.python-version }}
    # Install pip and pytest
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install pytest
    - name: Test with pytest
      run: pytest tests.py --doctest-modules --junitxml=junit/test-results-${{ matrix.python-version }}.xml
    - name: Upload pytest test results
      uses: actions/upload-artifact@v2
      with:
        name: pytest-results-${{ matrix.python-version }}
        path: junit/test-results-${{ matrix.python-version }}.xml
      # Use always() to always run this step to publish test results when there are test failures
      if: ${{ always() }}
```


{% endraw %}



### 发布到包注册表

您可以配置工作流程在 CI 测试通过时将 Python 包发布到您想要的任何包注册表。

您可以使用密码存储发布软件包所需的访问令牌或凭据。 下面的示例使用 `twine` 和 `dist` 创建包并发布到 PyPI。 更多信息请参阅“[创建和使用加密密码](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)”。

{% raw %}


```yaml{:copy}
name: Upload Python Package

on:
  release:
    types: [created]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: '3.x'
    - name: Install dependencies
      run: |
        python -m pip install --upgrade pip
        pip install setuptools wheel twine
    - name: Build and publish
      env:
        TWINE_USERNAME: ${{ secrets.PYPI_USERNAME }}
        TWINE_PASSWORD: ${{ secrets.PYPI_PASSWORD }}
      run: |
        python setup.py sdist bdist_wheel
        twine upload dist/*
```


{% endraw %}

有关模板工作流程的更多信息，请参阅 [`python-published`](https://github.com/actions/starter-workflows/blob/main/ci/python-publish.yml)。
