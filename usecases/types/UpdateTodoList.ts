import { TodoList } from '@/domain/entities/TodoList'

export type UpdateTodoList = (todoList: Partial<TodoList>) => Promise<TodoList>
