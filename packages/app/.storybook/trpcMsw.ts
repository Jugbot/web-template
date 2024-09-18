import type { AppRouter } from '@acme/api'
import { createTRPCMsw } from 'msw-trpc'
import superjson from 'superjson'

export const trpcMsw = createTRPCMsw<AppRouter>({
  baseUrl: 'http://localhost:3000',
  transformer: {
    input: superjson,
    output: superjson,
  },
})
