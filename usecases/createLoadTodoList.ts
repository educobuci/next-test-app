import { ITodoListRepository } from '@/domain/repositories/ITodoListRepository'
import { LoadTodoList as LoadTodoList } from '@/usecases/types/LoadTodoList'

export function createLoadTodoList(
  repository: ITodoListRepository
): LoadTodoList {
  return async function (id: number) {
    return repository.getTodoList(id)
  }
}
