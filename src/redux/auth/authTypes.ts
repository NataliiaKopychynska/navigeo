export type LoginUser = {
  email: string
  password: string
}

export type AuthUser = {
  systemId: string | number | null
  id: string
  email: string
  fullName: string
  type: string
  isBlocked: boolean
  emailUpdateRequested: boolean
  createdAt: string
  lastLoginAt: string | null
}

export type AuthState = {
  user: AuthUser | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null | { message: string }
}
