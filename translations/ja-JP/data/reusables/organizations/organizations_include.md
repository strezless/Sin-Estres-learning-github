Organizationには以下が含まれます。
{% if currentVersion == "free-pro-team@latest" %} - フル機能を持つ無制限のパブリックリポジトリ上の無制限のコラボレータと、機能限定された無制限のプライベートリポジトリを持つ無料オプション、{% data variables.product.prodname_free_team %}。
- 洗練されたユーザ認証と管理、拡張されたサポートオプションを含む{% data variables.product.prodname_team %}もしくは{% data variables.product.prodname_ghe_cloud %}へのアップグレードオプション。 {% data reusables.gated-features.more-info %}{% endif %}
- [Organizationとそのデータへの様々なレベルでのアクセス](/articles/permission-levels-for-an-organization)を許可する様々なロールを持つ無制限のメンバーシップ。
- [Organizationのリポジトリに対する様々なアクセス権限](/articles/repository-permission-levels-for-an-organization)をユーザに与える機能。
- カスケードになったアクセス権限やメンションを持つ[会社やグループの構造を反映した入れ子のTeam](/articles/about-teams)。{% if currentVersion != "github-ae@latest" %}
- Organizationのオーナーがメンバーの[２要素認証（2FA）のステータス](/articles/about-two-factor-authentication)を見る機能。
- [Organizationの全メンバーが２要素認証を使うことを要求する](/articles/requiring-two-factor-authentication-in-your-organization)オプション。{% endif %}
{% if currentVersion == "free-pro-team@latest" %}- {% data variables.product.prodname_GH_advanced_security %}のライセンスを購入し、その機能をプライベートリポジトリで使うオプション。 {% data reusables.advanced-security.more-info-ghas %}{% endif %}
