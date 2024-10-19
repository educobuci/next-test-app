import TodoList from '@/components/todoList'
import { LoadTodoList } from '@/usecases/types/LoadTodoList'

export interface ITodoListProps {
  loadTodoList: LoadTodoList
}

export default async function Page({ loadTodoList }: ITodoListProps) {
  const todoList = await loadTodoList(1)

  return (
    <main className="flex flex-col items-center justify-center md:h-screen space-y-8">
      <TodoList todoList={todoList} />
    </main>
  )
}
