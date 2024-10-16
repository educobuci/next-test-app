import { PostgresConnection } from 'datamapper'
import { Pool } from 'pg'

const pool = new Pool({
  allowExitOnIdle: true,
  password: process.env.PG_PASSWORD,
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
})
const db = new PostgresConnection(pool)

export default db
