import TodoList from '@/components/todoList'
import { LoadTodoList } from '@/usecases/types/LoadTodoList'

export interface ITodoListProps {
  loadTodoItems: LoadTodoList
}

export default async function Page({
  loadTodoItems: loadTodoList,
}: ITodoListProps) {
  const todoList = await loadTodoList()

  return (
    <main className="flex flex-col items-center justify-center md:h-screen space-y-8">
      <TodoList todoList={todoList} />
    </main>
  )
}
