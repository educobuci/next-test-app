import TodoList from '@/components/todoList'
import { ITodoListUseCase } from '@/domain/ITodoListUseCase'

export interface ITodoListProps {
  todoListUseCase: ITodoListUseCase
}

export default async function Page({ todoListUseCase }: ITodoListProps) {
  const todoItems = await todoListUseCase.getTodoItems()

  return (
    <main className="flex flex-col items-center justify-center md:h-screen space-y-8">
      <TodoList todoItems={todoItems} />
    </main>
  )
}
