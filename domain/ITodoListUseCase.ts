import { TodoItem } from '@/domain/TodoItem'

export interface ITodoListUseCase {
  getTodoItems: () => Promise<TodoItem[]>
}
