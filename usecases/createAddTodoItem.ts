import { AddTodoItem } from '@/usecases/types/AddTodoItem'

export function createAddTodoItem(): AddTodoItem {
  return async function (title: string) {
    return Promise.resolve({
      title,
      id: Math.random() * 100000,
      isCompleted: false,
    })
  }
}
