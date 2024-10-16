import { LoadTodoItems as LoadTodoItems } from "@/usecases/types/LoadTodoItems"

export function createLoadTodoItems(): LoadTodoItems {
  return async function () {
    return Promise.resolve([])
  }
} 