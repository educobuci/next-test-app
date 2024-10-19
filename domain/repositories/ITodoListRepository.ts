import { TodoList } from '@/domain/entities/TodoList'

export interface ITodoListRepository {
  getTodoList(id: number): Promise<TodoList | null>
}
