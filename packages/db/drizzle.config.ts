import type { Config } from 'drizzle-kit'

if (!process.env.POSTGRES_URL) {
  throw new Error('Missing POSTGRES_URL')
}

const connectionUrl = process.env.POSTGRES_URL

export default {
  schema: './src/schema.ts',
  dialect: 'postgresql',
  dbCredentials: { url: connectionUrl },
} satisfies Config
