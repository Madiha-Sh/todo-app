import type { Prisma, Todo } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TodoCreateArgs>({
  todo: {
    one: { data: { name: 'String' } },
    two: { data: { name: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Todo, 'todo'>
