import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'

interface Props {
  children: React.ReactNode
}

export const InstallProviders: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
