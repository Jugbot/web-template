import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'

import * as schema from './schema'
import path from 'path'
import { config } from 'dotenv'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

config({
  path: path.resolve(__dirname, '../.env.development'),
})

if (!process.env.POSTGRES_URL) {
  throw new Error('Missing POSTGRES_URL')
}

const connectionUrl = process.env.POSTGRES_URL

const pg = postgres(connectionUrl, {})

export const db = drizzle(pg, { schema })
