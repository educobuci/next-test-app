import { DatabaseConnection, DatabaseQueryFactory, DataMapper } from "datamapper"

import { User } from "@/domain/User"
import connection from "@/lib/connection"

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

const Users = createUsers(connection)
export default Users