import { Router as SolidRouter } from '@solidjs/router'
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'
import type { Component } from 'solid-js'

import { AuthProvider } from './contexts/auth'
import Router from './router'

const App: Component = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <SolidRouter>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </SolidRouter>
    </QueryClientProvider>
  )
}

export default App
