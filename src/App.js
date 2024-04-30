import React from 'react'
import GlobalStyle from './styles/global'
import RoutesApp from './routes'
import { AuthProvider } from './contexts/auth'

const app = () => {
  return (
    <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
    </AuthProvider>

  )
}

export default app