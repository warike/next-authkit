'use client'

import { type NoUserInfo, type UserInfo } from '@workos-inc/authkit-nextjs/dist/esm/interfaces'
import { createContext, useContext } from 'react'

export type AuthContextType = {
  session: UserInfo | NoUserInfo
  signOut: () => Promise<void>
  signInUrl: string
  signUpUrl: string
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

type AuthProvider = {
  children: React.ReactNode
  variables:  AuthContextType
}

export function AuthProvider({ children, variables }: AuthProvider) {
  return (
    <AuthContext.Provider value={variables}>
      {children}
    </AuthContext.Provider>
  )
}