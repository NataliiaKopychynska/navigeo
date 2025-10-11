import type { AuthState } from '../redux/auth/authTypes'

export const handlePending = (state: AuthState) => {
  state.status = 'loading'
  state.error = null
}

export const handleRejected = (state: AuthState, action) => {
  state.status = 'failed'
  state.error = action.payload ?? 'Login failed'
}
export const handleRejectedLogin = (state: AuthState, action) => {
  state.status = 'failed'
  state.error = action.payload ?? 'Login failed'
  state.user = null
}
