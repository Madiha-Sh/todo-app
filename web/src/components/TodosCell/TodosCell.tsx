// import type { FindTodoQuery, FindTodoQueryVariables } from 'types/graphql'
// import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Todo from '../Todo/Todo'
import { LoaderIcon } from '@redwoodjs/web/dist/toast'

export const QUERY = gql`
  query TodosQuery {
    todos {
      id
      name
    }
  }
`

export const Loading = () => (
  <div className='h-20 flex justify-center'>
    <LoaderIcon className='h-6 w-6'/>
  </div>
)

export const Empty = () => <div className='h-20 flex justify-center items-center'>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ todos, setTodoState, setIsEdit }) => {
  return (
    <>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          setTodoState={setTodoState}
          setIsEdit={setIsEdit}
        />
      ))}
    </>
  )
}

// export const Failure = ({
//   error,
// }: CellFailureProps<FindTodoQueryVariables>) => (
//   <div style={{ color: 'red' }}>Error: {error?.message}</div>
// )

// export const Success = ({
//   todo,
// }: CellSuccessProps<FindTodoQuery, FindTodoQueryVariables>) => {
//   return <div>{JSON.stringify(todo)}</div>
// }
