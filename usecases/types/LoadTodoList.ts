import { TodoList } from '@/domain/TodoList'

export type LoadTodoList = () => Promise<TodoList>
