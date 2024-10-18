import { LoadTodoList as LoadTodoList } from '@/usecases/types/LoadTodoList'

export function createLoadTodoItems(): LoadTodoList {
  return async function () {
    return Promise.resolve([{}])
  }
}
