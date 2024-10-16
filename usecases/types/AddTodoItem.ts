import { TodoItem } from '@/domain/TodoItem'

export type AddTodoItem = (title: string) => Promise<TodoItem>
