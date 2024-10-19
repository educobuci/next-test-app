import { TodoList } from '@/domain/entities/TodoList'

export type LoadTodoList = (id: number) => Promise<TodoList>
