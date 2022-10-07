// import type { FindTodoQuery2, FindTodoQuery2Variables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindTodoQuery2($id: Int!) {
    todo: todo(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  todo,
}) => {
  return <div>{JSON.stringify(todo)}</div>
}

// export const Failure = ({
//   error,
// }: CellFailureProps<FindTodoQuery2Variables>) => (
//   <div style={{ color: 'red' }}>Error: {error?.message}</div>
// )

// export const Success = ({
//   todo,
// }: CellSuccessProps<FindTodoQuery2, FindTodoQuery2Variables>) => {
//   return <div>{JSON.stringify(todo)}</div>
// }
