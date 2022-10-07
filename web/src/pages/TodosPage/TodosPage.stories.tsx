import type { ComponentMeta } from '@storybook/react'

import TodosPage from './TodosPage'

export const generated = () => {
  return <TodosPage />
}

export default {
  title: 'Pages/TodosPage',
  component: TodosPage,
} as ComponentMeta<typeof TodosPage>
