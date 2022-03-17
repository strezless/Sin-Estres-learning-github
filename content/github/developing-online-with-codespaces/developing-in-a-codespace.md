---
title: Developing in a codespace
intro: 'You can open a codespace on {% data variables.product.product_name %}, then develop using {% data variables.product.prodname_vscode %}''s features.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: Anyone can develop in a codespace owned by their user account.
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
versions:
  free-pro-team: '*'
---

{% data reusables.codespaces.release-stage %}

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.use-chrome %} For more information, see "[Troubleshooting your codespace](/github/developing-online-with-codespaces/troubleshooting-your-codespace)."

### Connecting to a codespace from {% data variables.product.prodname_vscode %}
{% data reusables.codespaces.connect-to-codespace-from-vscode %}

### Navigating to your codespace
{% data reusables.codespaces.navigate-to-codespaces %}
2. Click the name of the codespace you want to develop in.
  ![Name of codespace](/assets/images/help/codespaces/click-name-codespace.png)

### Forwarding ports

Port forwarding gives you access to TCP ports running within your codespace. For example, if you're running a web application on port 3000, you can access the application from your browser to test and debug it.

When an application running inside a codespace outputs a port to the console, {% data variables.product.prodname_codespaces %} detects the localhost URL pattern and automatically forwards those ports. You can click on the URL in the terminal to open it in a browser. For example, if an application outputs `http://127.0.0.1:3000` or `http://localhost:3000` to the console, the log would automatically convert the output to a clickable URL for port 3000.

![Automatic Port Forwarding](/assets/images/help/codespaces/automatic-port-forwarding.png)

Alternatively, you can also use any of the following ways to forward a port.

* You can forward a port on demand by triggering the command palette (`shift command P` / `shift control P`) and typing "Codespaces: Forward Port". You can then enter the number of the port you want to forward.

    ![Command Palette Port Forwarding](/assets/images/help/codespaces/command-palette-port-forwarding.png)

* You can automatically configure forwarded ports in a `.devcontainer.json` file using the `forwardPorts` property.

* You can add or remove forwarded ports within the Remote Explorer extension. From the Remote Explorer you can copy and paste the URLs for forwarded ports, allowing you to access them through your browser.

    ![Remote Explorer Port Forwarding](/assets/images/help/codespaces/remote-explorer-port-forwarding.png)
