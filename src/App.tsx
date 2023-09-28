import { Router as SolidRouter } from '@solidjs/router'
import type { Component } from 'solid-js'

import Router from './router'
import { AuthProvider } from './contexts/auth'

const App: Component = () => {
  return (
    <SolidRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </SolidRouter>
  )
}

export default App
