import {
  DatabaseConnection,
  DatabaseQueryFactory,
  DataMapper,
} from 'datamapper'

import { User } from '@/domain/User'
import db from '@/lib/db'

const createUsers = (connection: DatabaseConnection) => {
  const factory = new DatabaseQueryFactory<User>(
    connection,
    {
      tableName: 'users',
    },
    {}
  )
  return new DataMapper(factory)
}

const Users = createUsers(db)
export default Users
