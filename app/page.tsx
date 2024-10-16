import TodoList from '@/components/todoList'
import { LoadTodoItems } from '@/usecases/types/LoadTodoItems'

export interface ITodoListProps {
  loadTodoItems: LoadTodoItems
}

export default async function Page({ loadTodoItems }: ITodoListProps) {
  const todoItems = await loadTodoItems()

  return (
    <main className="flex flex-col items-center justify-center md:h-screen space-y-8">
      <TodoList todoItems={todoItems} />
    </main>
  )
}
