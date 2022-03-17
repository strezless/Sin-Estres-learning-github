---
title: Utilizar la API de GraphQL para los debates
intro: 'Aprende cómo utilizar la API de GraphQL para los debates de GitHub.'
versions:
  free-pro-team: '*'
---

La API de GraphQL de {% data variables.product.prodname_discussions %} te permite obtener, crear, editar y borrar las publicaciones de debate. Para obtener más información sobre los {% data variables.product.prodname_discussions %}, consulta la sección "[Acerca de los debates](/discussions/collaborating-with-your-community-using-discussions/about-discussions)".

Esta API se encuentra disponible para los usuarios autenticados, Apps de OAuth y GitHub Apps. Los tokens de acceso requieren el alcance de `repo` para los repositorios privados y el de `public_repo` para los repositorios públicos. Para obtener más información, consulta la sección "[Alcances para las Apps de OAuth](/developers/apps/scopes-for-oauth-apps)".

Para utilizar esta API debes incluir `GraphQL-Features: discussions_api` en el encabezado de `HTTP`.

## Campos

### Repository.discussions

Lista los debates dentro de un repositorio. Si se especifica la `categoryId`, solo se devolverán los resultados dentro de esta.

_Firma:_

```graphql
discussions(
  after: String,
  before: String,
  first: Int,
  last: Int,
  categoryId: ID = null,
  orderBy: DiscussionOrder = {field: UPDATED_AT, direction: DESC}
) : Discussion
```

#### DiscussionOrder

```graphql
"""
Ways in which discussions can be ordered.
"""
input DiscussionOrder {
  """
  The field by which to order discussions.
  """
  field: DiscussionOrderField!

  """
  The direction in which to order discussions by the specified field.
  """
  direction: OrderDirection!
}
```

```graphql
"""
Properties by which discussion connections can be ordered.
"""
enum DiscussionOrderField {
  """
  Order discussions by creation time.
  """
  CREATED_AT

  """
  Order discussions by most recent modification time.
  """
  UPDATED_AT
}
```

### Repository.discussionCategories

Devuelve las categorías de debate disponibles que se definen dentro de este repositorio. Cada repositorio puede tener hasta 10 categorías. Para obtener más información acerca de las categorías de debate, consulta la sección [Acerca de los debates](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-categories-and-formats-for-discussions)".

_Firma:_

```graphql
discussionCategories(
  after: String,
  before: String,
  first: Int,
  last: Int,
) : DiscussionCategoryConnection!
```

### Repository.discussion

Obtener un debate. Devuelve `null` si el debate con la ID especificada no existe.

_Firma:_

```graphql
discussion(number: Int!) : Discussion
```

### Repository.pinnedDiscussions

Devuelve los debates que se fijaron en este repositorio, ordenados por la posición en la que se fijaron.

_Firma:_

```graphql
pinnedDiscussions(
  after: String,
  before: String,
  first: Int,
  last: Int,
) : PinnedDiscussionConnection!
```

## Objetos

**Nota:** Para efectos de brevedad, los tipos de conexión no se expanden en el ejemplo. Cada tipo de conexión que se menciona en el modelo sigue el mismo patrón que otras conexiones en la API de GraphQL. Para obtener más información, consulta la sección "[Introducción a GraphQL](/graphql/guides/introduction-to-graphql#connection)".

```graphql
query {
  repository(owner: "github", name: "some-repo") {
    discussions(first: 10) {
      # type: DiscussionConnection
      totalCount # Int!

      pageInfo {
        # type: PageInfo (from the public schema)
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }

      edges {
        # type: DiscussionEdge
        cursor
        node {
          # type: Discussion
          id
        }
      }

      nodes {
        # type: Discussion
        id
      }
    }
  }
}
```

### Discusión

<details>
<summary>Campos:</summary>

```graphql
"""
A discussion in a repository.
"""
type Discussion implements Comment & Deletable & Lockable & Node & Reactable & RepositoryNode & Subscribable & Updatable {
  """
  Reason that the conversation was locked.
  """
  activeLockReason: LockReason

  """
  The comment chosen as this discussion's answer, if any.
  """
  answer: DiscussionComment

  """
  The time when a user chose this discussion's answer, if answered.
  """
  answerChosenAt: DateTime

  """
  The user who chose this discussion's answer, if answered.
  """
  answerChosenBy: Actor

  """
  The actor who authored the comment.
  """
  author: Actor

  """
  Author's association with the subject of the comment.
  """
  authorAssociation: CommentAuthorAssociation!

  """
  The main text of the discussion post.
  """
  body: String!

  """
  The body rendered to HTML.
  """
  bodyHTML: HTML!

  """
  The body rendered to text.
  """
  bodyText: String!

  """
  The category for this discussion.
  """
  category: DiscussionCategory!

  """
  The replies to the discussion.
  """
  comments(
    """
    Returns the elements in the list that come after the specified cursor.
    """
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """
    Returns the first _n_ elements from the list.
    """
    first: Int

    """
    Returns the last _n_ elements from the list.
    """
    last: Int
  ): DiscussionCommentConnection!

  """
  Identifies the date and time when the object was created.
  """
  createdAt: DateTime!

  """
  Check if this comment was created via an email reply.
  """
  createdViaEmail: Boolean!

  """
  Identifies the primary key from the database.
  """
  databaseId: Int

  """
  The actor who edited the comment.
  """
  editor: Actor
  id: ID!

  """
  Check if this comment was edited and includes an edit with the creation data
  """
  includesCreatedEdit: Boolean!

  """
  The moment the editor made the last edit
  """
  lastEditedAt: DateTime

  """
  `true` if the object is locked
  """
  locked: Boolean!

  """
  The number identifying this discussion within the repository.
  """
  number: Int!

  """
  Identifies when the comment was published at.
  """
  publishedAt: DateTime

  """
  A list of reactions grouped by content left on the subject.
  """
  reactionGroups: [ReactionGroup!]

  """
  A list of Reactions left on the Issue.
  """
  reactions(
    """
    Returns the elements in the list that come after the specified cursor.
    """
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """
    Allows filtering Reactions by emoji.
    """
    content: ReactionContent

    """
    Returns the first _n_ elements from the list.
    """
    first: Int

    """
    Returns the last _n_ elements from the list.
    """
    last: Int

    """
    Allows specifying the order in which reactions are returned.
    """
    orderBy: ReactionOrder
  ): ReactionConnection!

  """
  The repository associated with this node.
  """
  repository: Repository!

  """
  The path for this discussion.
  """
  resourcePath: URI!

  """
  The title of this discussion.
  """
  title: String!

  """
  Identifies the date and time when the object was last updated.
  """
  updatedAt: DateTime!

  """
  The URL for this discussion.
  """
  url: URI!

  """
  A list of edits to this content.
  """
  userContentEdits(
    """
    Returns the elements in the list that come after the specified cursor.
    """
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """
    Returns the first _n_ elements from the list.
    """
    first: Int

    """
    Returns the last _n_ elements from the list.
    """
    last: Int
  ): UserContentEditConnection

  """
  Check if the current viewer can delete this object.
  """
  viewerCanDelete: Boolean!

  """
  Can user react to this subject
  """
  viewerCanReact: Boolean!

  """
  Check if the viewer is able to change their subscription status for the repository.
  """
  viewerCanSubscribe: Boolean!

  """
  Check if the current viewer can update this object.
  """
  viewerCanUpdate: Boolean!

  """
  Did the viewer author this comment.
  """
  viewerDidAuthor: Boolean!

  """
  Identifies if the viewer is watching, not watching, or ignoring the subscribable entity.
  """
  viewerSubscription: SubscriptionState
}
```

</details>

### DiscussionComment

<details>
<summary>Campos</summary>

```graphql
"""
A comment on a discussion.
"""
type DiscussionComment implements Comment & Deletable & Minimizable & Node & Reactable & Updatable & UpdatableComment {
  """
  The actor who authored the comment.
  """
  author: Actor

  """
  Author's association with the subject of the comment.
  """
  authorAssociation: CommentAuthorAssociation!

  """
  The body as Markdown.
  """
  body: String!

  """
  The body rendered to HTML.
  """
  bodyHTML: HTML!

  """
  The body rendered to text.
  """
  bodyText: String!

  """
  Identifies the date and time when the object was created.
  """
  createdAt: DateTime!

  """
  Check if this comment was created via an email reply.
  """
  createdViaEmail: Boolean!

  """
  Identifies the primary key from the database.
  """
  databaseId: Int

  """
  The time when this replied-to comment was deleted
  """
  deletedAt: DateTime

  """
  The discussion this comment was created in
  """
  discussion: Discussion

  """
  The actor who edited the comment.
  """
  editor: Actor
  id: ID!

  """
  Check if this comment was edited and includes an edit with the creation data
  """
  includesCreatedEdit: Boolean!

  """
  Has this comment been chosen as the answer of its discussion?
  """
  isAnswer: Boolean!

  """
  Returns whether or not a comment has been minimized.
  """
  isMinimized: Boolean!

  """
  The moment the editor made the last edit
  """
  lastEditedAt: DateTime

  """
  Returns why the comment was minimized.
  """
  minimizedReason: String

  """
  Identifies when the comment was published at.
  """
  publishedAt: DateTime

  """
  A list of reactions grouped by content left on the subject.
  """
  reactionGroups: [ReactionGroup!]

  """
  A list of Reactions left on the Issue.
  """
  reactions(
    """
    Returns the elements in the list that come after the specified cursor.
    """
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """
    Allows filtering Reactions by emoji.
    """
    content: ReactionContent

    """
    Returns the first _n_ elements from the list.
    """
    first: Int

    """
    Returns the last _n_ elements from the list.
    """
    last: Int

    """
    Allows specifying the order in which reactions are returned.
    """
    orderBy: ReactionOrder
  ): ReactionConnection!

  """
  The threaded replies to this comment.
  """
  replies(
    """
    Returns the elements in the list that come after the specified cursor.
    """
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """
    Returns the first _n_ elements from the list.
    """
    first: Int

    """
    Returns the last _n_ elements from the list.
    """
    last: Int
  ): DiscussionCommentConnection!

  """
  The discussion comment this comment is a reply to
  """
  replyTo: DiscussionComment

  """
  The path for this discussion comment.
  """
  resourcePath: URI!

  """
  Identifies the date and time when the object was last updated.
  """
  updatedAt: DateTime!

  """
  The URL for this discussion comment.
  """
  url: URI!

  """
  A list of edits to this content.
  """
  userContentEdits(
    """
    Returns the elements in the list that come after the specified cursor.
    """
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """
    Returns the first _n_ elements from the list.
    """
    first: Int

    """
    Returns the last _n_ elements from the list.
    """
    last: Int
  ): UserContentEditConnection

  """
  Check if the current viewer can delete this object.
  """
  viewerCanDelete: Boolean!

  """
  Can the current user mark this comment as an answer?
  """
  viewerCanMarkAsAnswer: Boolean!

  """
  Check if the current viewer can minimize this object.
  """
  viewerCanMinimize: Boolean!

  """
  Can user react to this subject
  """
  viewerCanReact: Boolean!

  """
  Can the current user unmark this comment as an answer?
  """
  viewerCanUnmarkAsAnswer: Boolean!

  """
  Check if the current viewer can update this object.
  """
  viewerCanUpdate: Boolean!

  """
  Reasons why the current viewer can not update this comment.
  """
  viewerCannotUpdateReasons: [CommentCannotUpdateReason!]!

  """
  Did the viewer author this comment.
  """
  viewerDidAuthor: Boolean!
}
```

</details>

### DiscussionCategory

<details>
<summary>Campos</summary>

```graphql
"""
A category for discussions in a repository.
"""
type DiscussionCategory implements Node & RepositoryNode {
  """
  Identifies the date and time when the object was created.
  """
  createdAt: DateTime!

  """
  A description of this category.
  """
  description: String

  """
  An emoji representing this category.
  """
  emoji: String!

  """
  This category's emoji rendered as HTML.
  """
  emojiHTML: HTML!
  id: ID!

  """
  Whether or not discussions in this category support choosing an answer with the markDiscussionCommentAsAnswer mutation.
  """
  isAnswerable: Boolean!

  """
  The name of this category.
  """
  name: String!

  """
  The repository associated with this node.
  """
  repository: Repository!

  """
  Identifies the date and time when the object was last updated.
  """
  updatedAt: DateTime!
}
```

</details>

### PinnedDiscussion

<details>
<summary>Campos:</summary>

```graphql
"""
A Pinned discussion is a discussion pinned to a repository's index page.
"""
type PinnedDiscussion implements Node & RepositoryNode {
  """
  Identifies the date and time when the object was created.
  """
  createdAt: DateTime!

  """
  Identifies the primary key from the database.
  """
  databaseId: Int

  """
  The discussion that was pinned.
  """
  discussion: Discussion!

  """
  Color stops of the chosen gradient
  """
  gradientStopColors: [String!]!
  id: ID!

  """
  Background texture pattern
  """
  pattern: PinnedDiscussionPattern!

  """
  The actor that pinned this discussion.
  """
  pinnedBy: Actor!

  """
  Preconfigured background gradient option
  """
  preconfiguredGradient: PinnedDiscussionGradient

  """
  The repository associated with this node.
  """
  repository: Repository!

  """
  Identifies the date and time when the object was last updated.
  """
  updatedAt: DateTime!
}
```

</details>

#### PinnedDiscussionPattern

<details>
<summary>Valores</summary>

```graphql
"""
Preconfigured background patterns that may be used to style discussions pinned within a repository.
"""
enum PinnedDiscussionPattern {
  """
  An upward-facing chevron pattern
  """
  CHEVRON_UP

  """
  A hollow dot pattern
  """
  DOT

  """
  A solid dot pattern
  """
  DOT_FILL

  """
  A heart pattern
  """
  HEART_FILL

  """
  A friendly octocat face pattern
  """
  OCTOFACE

  """
  A plus sign pattern
  """
  PLUS
}
```

</details>

#### PinnedDiscussionGradient

<details>
<summary>Valores</summary>

```graphql
"""
Preconfigured gradients that may be used to style discussions pinned within a repository.
"""
enum PinnedDiscussionGradient {
  """
  A gradient of blue to mint
  """
  BLUE_MINT

  """
  A gradient of blue to purple
  """
  BLUE_PURPLE

  """
  A gradient of pink to blue
  """
  PINK_BLUE

  """
  A gradient of purple to coral
  """
  PURPLE_CORAL

  """
  A gradient of red to orange
  """
  RED_ORANGE
}
```

</details>

## Interfaces

### RepositoryDiscussionAuthor

Se implementan según los tipos de `User` y `Organization`. **Nota:** Una `Organization` solo tendrá debates que se asocien con ella si se convirtió desde un `User`.

<details>
<summary>Campos</summary>

```graphql
"""
Represents an author of discussions in repositories.
"""
interface RepositoryDiscussionAuthor {
  """
  Discussions this user has started.
  """
  repositoryDiscussions(
    """
    Returns the elements in the list that come after the specified cursor.
    """
    after: String

    """
    Filter discussions to only those that have been answered or not. Defaults to
    including both answered and unanswered discussions.
    """
    answered: Boolean = null

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """
    Returns the first _n_ elements from the list.
    """
    first: Int

    """
    Returns the last _n_ elements from the list.
    """
    last: Int

    """
    Ordering options for discussions returned from the connection.
    """
    orderBy: DiscussionOrder = {field: CREATED_AT, direction: DESC}

    """
    Filter discussions to only those in a specific repository.
    """
    repositoryId: ID
  ): DiscussionConnection!
}
```

</details>

### RepositoryDiscussionCommentAuthor

También se implementa de acuerdo a los tipos de `User` y `Organization`.

<details>
<summary>Campos</summary>

```graphql
"""
Represents an author of discussion comments in repositories.
"""
interface RepositoryDiscussionCommentAuthor {
  """
  Discussion comments this user has authored.
  """
  repositoryDiscussionComments(
    """
    Returns the elements in the list that come after the specified cursor.
    """
    after: String

    """
    Returns the elements in the list that come before the specified cursor.
    """
    before: String

    """
    Returns the first _n_ elements from the list.
    """
    first: Int

    """
    Returns the last _n_ elements from the list.
    """
    last: Int

    """
    Filter discussion comments to only those that were marked as the answer
    """
    onlyAnswers: Boolean = false

    """
    Filter discussion comments to only those in a specific repository.
    """
    repositoryId: ID
  ): DiscussionCommentConnection!
}
```

</details>

## Mutaciones

Estas mutaciones siguen el mismo patrón de implementación que otras en la API de GraphQL. Cada mutación acepta un argumento simple de un tipo de `Input`, el cual adquiere su nombre de acuerdo con una mutación y devuelve un tipo de `Payload` que contiene los campos especificados.

Por ejemplo, esta es una mutación básica de `createDiscussion` que creará un debate nuevo:

```graphql
mutation {
  # input type: CreateDiscussionInput
  createDiscussion(input: {repositoryId: "1234", categoryId: "5678", body: "The body", title: "The title"}) {

    # response type: CreateDiscussionPayload
    discussion {
      id
    }
  }
}
```

### createDiscussion

Campos de entrada:

* `body: String!` El cuerpo del debate nuevo.
* `title: String!` El título del debate nuevo.
* `repositoryId: ID!` La ID de un repositorio en donde se creará el debate.
* `categoryId: ID!` La ID de una `DiscussionCategory` dentro de este repositorio.
* `clientMutationId: String` Un identificador único para el cliente que realiza la mutación.

Campos de tipo de retorno:

* `clientMutationId: String` El identificador único que se proporcionó como entrada.
* `discussion: Discussion` El debate que se creó.

### updateDiscussion

Campos de entrada:

* `discussionId: ID!` La ID de nodo del debate a actualizar.
* `body: String` El contenido nuevo del cuerpo del debate.
* `body: String` El título nuevo del debate.
* `categoryId: ID` La ID de nodo de una `DiscussionCategory` dentro del mismo repositorio a la cual se cambiará este debate.
* `clientMutationId: String` Un identificador único para el cliente que realiza la mutación.

Campos de tipo de retorno:

* `clientMutationId: String` El identificador único que se proporcionó como entrada.
* `discussion: Discussion` El debate que se modificó.

### deleteDiscussion
Campos de entrada:

* `id: ID!` La ID de nodo del debate a borrar.
* `clientMutationId: String` Un identificador único para el cliente que realiza la mutación.

Campos de tipo de retorno:

* `clientMutationId: String` El identificador único que se proporcionó como entrada.
* `discussion: Discussion` El debate que se borró.

### addDiscussionComment

Campos de entrada:

* `body: String!` El contenido del comentario.
* `discussionId: ID!` La ID de nodo del debate en el cual se comentará.
* `replyToId: ID` La ID de nodo del comentario del debate al cual se responderá. Si se encuentra ausente, el comentario que se crea será un comentario de nivel superior.
* `clientMutationId: String` Un identificador único para el cliente que realiza la mutación.

Campos de tipo de retorno:

* `clientMutationId: String` El identificador único que se proporcionó como entrada.
* `comment: DiscussionComment` El comentario que se creó en el debate.

### updateDiscussionComment

Campos de entrada:

* `body: String!` El contenido nuevo del cuerpo del comentario.
* `commentId: ID!` La ID de nodo del comentario a actualizar en el debate.
* `clientMutationId: String` Un identificador único para el cliente que realiza la mutación.

Campos de tipo de retorno:

* `clientMutationId: String` El identificador único que se proporcionó como entrada.
* `comment: DiscussionComment` El comentario del debate que se actualizó.

### deleteDiscussionComment

Campos de entrada:

* `id: ID!` La ID de nodo del comentario a borrar en el debate.
* `clientMutationId: String` Un identificador único para el cliente que realiza la mutación.

Campos de tipo de retorno:

* `clientMutationId: String` El identificador único que se proporcionó como entrada.
* `comment: DiscussionComment` El comentario que se borró en el debate.

### markDiscussionCommentAsAnswer

Campos de entrada:

* `id: ID!` La ID de nodo del comentario que se marcará como respuesta en el debate.
* `clientMutationId: String` Un identificador único para el cliente que realiza la mutación.

Campos de tipo de retorno:

* `clientMutationId: String` El identificador único que se proporcionó como entrada.
* `discussion: Discussion` El debate que incluye el comentario elegido.

### unmarkDiscussionCommentAsAnswer

Campos de entrada:

* `id: ID!` La ID de nodo del comentario que se dejará de marcar como respuesta en el debate.
* `clientMutationId: String` Un identificador único para el cliente que realiza la mutación.

Campos de tipo de retorno:

* `clientMutationId: String` El identificador único que se proporcionó como entrada.
* `discussion: Discussion` El debate que incluye el comentario que se dejó de marcar.

## Buscar

El debate puede devolverse desde el campo `search` de nivel superio. Para buscar un debate, especifica el `type` como `DISCUSSION`. El tipo `SearchResultItemConnection` tiene un campo de `discussionCount` para reportar la cantidad de debates devueltos y el tipo `Discussion` se agrega a la unión `SearchResultItem`. Para obtener más información, consulta la sección ["Consultas](/graphql/reference/queries#searchresultitemconnection)".
