import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'

import * as schema from './schema'

if (!process.env.POSTGRES_URL) {
  throw new Error('Missing POSTGRES_URL')
}

const connectionUrl = process.env.POSTGRES_URL

const pg = postgres(connectionUrl, {})

export const db = drizzle(pg, { schema })
