import { Decorator } from '@storybook/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpLink } from '@trpc/react-query'
import { useState } from 'react'
import { trpc } from '../../src/trpc'
import superjson from 'superjson'

export const QueryDecorator: Decorator = (Story) => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpLink({
          url: 'http://localhost:3000',
          headers() {
            return {
              'content-type': 'application/json',
            }
          },
        }),
      ],
      transformer: superjson,
    }),
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    </trpc.Provider>
  )
}
