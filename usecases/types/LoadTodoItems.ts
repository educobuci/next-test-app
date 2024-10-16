import { TodoItem } from '@/domain/TodoItem'

export type LoadTodoItems = () => Promise<TodoItem[]>