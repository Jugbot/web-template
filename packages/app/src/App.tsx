import { useState } from 'react'
import { Theme } from '@radix-ui/themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { trpc } from './trpc'
import { httpBatchLink } from '@trpc/react-query'
import { Main } from './pages/Main'

export function App() {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000',
        }),
      ],
    }),
  )
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Theme>
          <Main />
        </Theme>
      </QueryClientProvider>
    </trpc.Provider>
  )
}
