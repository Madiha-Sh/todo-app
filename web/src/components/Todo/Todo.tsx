import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'
import { useState } from 'react'
import { QUERY as refetchTodosQuery } from 'src/components/TodosCell'
import { TodoForm } from '../TodoForm/TodoForm'

const DELETE_TODO = gql` 
  mutation DeleteTodoMutation($id: Int!) {
    deleteTodo(id: $id) {
      id
    }
  }
`

const Todo = ({ todo, setTodoState, setIsEdit }) => {  
  const { hasRole } = useAuth();
  const [deleteTodo] = useMutation(DELETE_TODO, {
    refetchQueries: [
      {
        query: refetchTodosQuery,
        variables: { id: todo.id },
      },
    ],
    onCompleted: () => {
      toast.success('deleted todo successfully')
    }
  })

  const onClick = () => {
    console.log('id', todo.id);
    console.log('wantedddd', todo);
    deleteTodo({ variables: { id: todo.id }})
  }

  const editOnClick = () => {
    setIsEdit(true)
    console.log('roleeee', hasRole("user"));
    
    setTodoState(todo)
  }

  return (
    <div className="mx-40 flex justify-between">
      <h3 className="mr-10">{todo.name}</h3>
      <div className="flex">
        <button onClick={editOnClick} className="mr-4 font-bold text-green-600">edit</button>
        {hasRole('admin') && <button onClick={onClick} className="font-bold text-red-600">delete</button>}
      </div>
    </div>
  )
}

export default Todo