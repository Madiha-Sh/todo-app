export const schema = gql`
  type Todo {
    id: Int!
    name: String!
  }

  type Query {
    todos: [Todo!]! @requireAuth
    todo(id: Int!): Todo @requireAuth
  }

  input CreateTodoInput {
    name: String!
  }

  input UpdateTodoInput {
    name: String
  }

  type Mutation {
    createTodo(input: CreateTodoInput!): Todo! @requireAuth
    updateTodo(id: Int!, input: UpdateTodoInput!): Todo! @requireAuth
    deleteTodo(id: Int!): Todo! @requireAuth(roles: "admin")
  }
`
