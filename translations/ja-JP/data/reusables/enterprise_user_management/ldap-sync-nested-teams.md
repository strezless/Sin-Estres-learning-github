{% if enterpriseServerVersions contains currentVersion %}
LDAP同期は、最適化設定の一部として、入れ子チームの構造を転送しません。 親子Teamの関係を作りたい場合は、入れ子チームの構造を手動で再作成し、対応するLDAPグループに同期させなければなりません。 詳しい情報については「[Teamの作成](/enterprise/{{ currentVersion }}/admin/guides/user-management/creating-teams/#creating-teams-with-ldap-sync-enabled)」を参照してください。
{% endif %}