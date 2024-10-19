import {
  DatabaseConnection,
  DatabaseQueryFactory,
  DataMapper,
} from 'datamapper'
import db from '@/lib/db'
import { TodoList } from '@/domain/entities/TodoList'

const createTodoLists = (connection: DatabaseConnection) => {
  const factory = new DatabaseQueryFactory<TodoList>(
    connection,
    {
      tableName: 'todos',
    },
    {}
  )
  return new DataMapper(factory)
}

const TodoLists = createTodoLists(db)
export default TodoLists
