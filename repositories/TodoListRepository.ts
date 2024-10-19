import { ITodoListRepository } from '@/domain/repositories/ITodoListRepository'
import TodoLists from '@/models/TodoLists'

export class TodoListRepository implements ITodoListRepository {
  getTodoList(id: number) {
    return TodoLists.find(id)
  }
}
