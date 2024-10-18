import { TodoList } from '@/domain/TodoList'

export type UpdateTodoList = (todoList: Partial<TodoList>) => Promise<TodoList>
