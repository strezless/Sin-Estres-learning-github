---
title: 关于匿名化图像 URL
intro: '如果将图像上传到 {% data variables.product.product_name %}，图像 URL 将会修改，这样便无法跟踪您的信息。'
redirect_from:
  - /articles/why-do-my-images-have-strange-urls/
  - /articles/about-anonymized-image-urls
versions:
  free-pro-team: '*'
---

为托管您的图像，{% data variables.product.product_name %} 使用 [开源项目 Camo](https://github.com/atmos/camo)。 Camo 为每个映像生成匿名 URL 代理，以隐藏您的浏览器详细信息和来自其他用户的相关信息。 URL 以 `https:///<subdomain>.githubusercontent.com/` 开头，并且根据您如何上传映像而有不同的子域。

直接或间接收到您的匿名化图像 URL 的任何人都可查看您的图像。 为对敏感图像保密，将它们限于私人网络或需要身份验证的服务器，而不使用 Camo。

### Camo 问题故障排除

在偶尔的情况下，通过 Camo 处理的图像可能不会出现在 {% data variables.product.prodname_dotcom %} 上。 下面是可用于确定问题位置的一些步骤。

{% windows %}

{% tip %}

Windows 用户需要使用 Git Powershell（随 [{% data variables.product.prodname_desktop %}](https://desktop.github.com/) 一起安装）或下载 [curl for Windows](http://curl.haxx.se/download.html)。

{% endtip %}

{% endwindows %}

#### 图像不显示

如果图像显示于浏览器中，但未显示在 {% data variables.product.prodname_dotcom %} 上，您可以尝试本地请求该图像。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 使用 `curl` 请求图像标头。
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/1.1 200 OK
  > Date: Fri, 06 Jun 2014 07:27:43 GMT
  > Expires: Sun, 06 Jul 2014 07:27:43 GMT
  > Content-Type: image/x-png
  > Server: Google Frontend
  > Content-Length: 6507
  ```
3. 检查 `Content-Type` 的值。 本例中为 `image/x-png`。
4. 根据 [Camo 支持的类型列表](https://github.com/atmos/camo/blob/master/mime-types.json)检查内容类型。

如果您的内容类型不受 Camo 支持，可尝试以下几项操作：
  * 如果您拥有托管该图像的服务器，请修改它以让其返回正确内容类型的图像。
  * 如果使用外部服务托管图像，请联系该服务的支持。
  * 建立对 Camo 的拉取请求以将内容类型添加到列表。

#### 最近更改的图像不更新

如果最近更改了图像并且它显示在浏览器中，但未显示在 {% data variables.product.prodname_dotcom %} 上，可尝试重置图像缓存。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 使用 `curl` 请求图像标头。
  ```shell
  $ curl -I https://www.my-server.com/images/some-image.png
  > HTTP/1.1 200 OK
  > Expires: Fri, 01 Jan 1984 00:00:00 GMT
  > Content-Type: image/png
  > Content-Length: 2339
  > Server: Jetty(8.y.z-SNAPSHOT)
  ```

检查 `Cache-Control` 的值。 本例中没有 `Cache-Control`。 在这种情况下：
  * 如果您拥有托管该图像的服务器，请修改它以让其返回图像的 `no-cache` 的 `Cache-Control`。
  * 如果使用外部服务托管图像，请联系该服务的支持。

 如果 `Cache-Control` *设置*为 `no-cache`，请联系 {% data variables.contact.contact_support %} 或搜索 {% data variables.contact.community_support_forum %}。

#### 从 Camo 的缓存中删除图像

清除缓存会强制每个 {% data variables.product.prodname_dotcom %} 用户重新请求图像，因此应非常谨慎地使用此操作，仅在上述步骤无效时才使用。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 使用 `curl -X PURGE` 在 Camo URL 上清除图像。
  ```shell
  $ curl -X PURGE https://camo.githubusercontent.com/4d04abe0044d94fefcf9af2133223....
  > {"status": "ok", "id": "216-8675309-1008701"}
  ```

#### 在私人网络上查看图像

如果图像从私人网络或需要身份验证的服务器提供，则无法通过 {% data variables.product.prodname_dotcom %} 查看。 事实上，未登录服务器的任何用户都无法查看。

要解决此问题，请将图像移至公共的服务。

### 延伸阅读

- {% data variables.product.prodname_blog %} 上的"[代理用户图像](https://github.com/blog/1766-proxying-user-images)"
