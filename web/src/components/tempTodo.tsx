import { useQuery } from '@redwoodjs/web'
import { useEffect, useState } from 'react'

export const QUERY = gql`
  query TodosQuery {
    todos {
      id
      name
    }
  }
`

const TempTodo = () => {
  const { data, loading } = useQuery(QUERY)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    if(data) {
        const arr = data.todos
        const newArr = arr.map(todo => todo.name)
        setTodos(newArr)
    }
  }, [data])

  if (loading) return <h1>loading....</h1>
  return (
    <>
    {console.log('data needed', data.todos)}
    {console.log('data object', data)}
    {todos}
    </>
  )
}

export default TempTodo
