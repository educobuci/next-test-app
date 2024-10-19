import { TodoList } from '@/domain/entities/TodoList'
import { UpdateTodoList } from '@/usecases/types/UpdateTodoList'

export function createUpdateTodoList(): UpdateTodoList {
  return (todoList: Partial<TodoList>) => {
    return Promise.resolve({ id: 1, title: '', items: [], ...todoList })
  }
}
