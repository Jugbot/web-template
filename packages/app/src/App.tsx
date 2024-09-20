import { Theme } from '@radix-ui/themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/react-query'
import { useState } from 'react'
import { Main } from './pages/Main'
import { trpc } from './trpc'
import superjson from 'superjson'

export function App() {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: import.meta.env.VITE_API_BASE_URL,
        }),
      ],
      transformer: superjson,
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
