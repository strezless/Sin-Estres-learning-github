ユーザライセンス数に応じて、以下のインスタンスタイプをおすすめします。 |
{% if enterpriseServerVersions contains currentVersion %}
| ユーザライセンス               |      推奨タイプ |
|:---------------------- | ----------:|
| トライアル、デモ、あるいは10人の軽量ユーザ |   r4.large |
| 10 - 3000              |  r4.xlarge |
| 3000 - 5000            | r4.2xlarge |
| 5000 - 8000            | r4.4xlarge |
| 8000 - 10000+          | r4.8xlarge |
{% endif %}
