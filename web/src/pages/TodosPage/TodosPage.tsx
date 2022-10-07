import { useForm } from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import TodosCell from 'src/components/TodosCell'
import { QUERY as refetchTodosQuery } from 'src/components/TodosCell'
import { Toaster } from '@redwoodjs/web/toast'
import { toast } from '@redwoodjs/web/toast'
import { useState } from 'react'
import { TodoForm } from 'src/components/TodoForm/TodoForm'

export const CREATE_TODO = gql`
  mutation CreateTodoMutation($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
    }
  }
`

const UPDATE_TODO = gql`
  mutation UpdateTodoMutation($id: Int!, $input: UpdateTodoInput!) {
    updateTodo(id: $id, input: $input) {
      id
      name
    }
  }
`

const TodosPage = () => {
  const formMethods = useForm()
  const [todoState, setTodoState] = useState({id:'', name:''});
  const [isEdit, setIsEdit] = useState(false);
  const [create, { loading: AddLoading } ] = useMutation(CREATE_TODO, {refetchQueries: [{ query: refetchTodosQuery}], onCompleted: () => {
    console.log('done');
    toast.success('a todo is added')
    formMethods.reset()
  }} )
  
  const [updateTodo, { loading: EditLoading }] = useMutation(UPDATE_TODO, {
    onCompleted: () => {
      toast.success('updated todo successfully')
      formMethods.reset()
    }
  })
  
  const onSubmit = (data) => {
    console.log('dats is:', data)
    create({ variables: { input: data }})
    setTodoState({id:'',name:''})
  }

  const onClick = (input) => {
    console.log('to be updated', todoState.id, todoState, input);
    updateTodo({ variables: { id: todoState.id, input }})
    setIsEdit(false)
    setTodoState({id:'',name:''})
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Toaster/>
      <div className="rw-form-wrapper mx-40 my-4">
        <TodoForm onSubmit={!isEdit ? onSubmit : onClick} defaultState={todoState.name} isEdit={isEdit} formMethods={formMethods} AddLoading={AddLoading} EditLoading={EditLoading}/>
      </div>
      <TodosCell setTodoState={setTodoState} setIsEdit={setIsEdit}/>
    </>
  )
}

export default TodosPage