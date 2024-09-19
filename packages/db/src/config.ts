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

export const connectionUrl = process.env.POSTGRES_URL
