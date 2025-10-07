import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { AuthState, AuthUser } from './authTypes'
import { loginThunk, meThunk } from './authThunk'

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null
      state.status = 'idle'
      state.error = null
      // localStorage.removeItem('user')
    },
    setUser(state, action: PayloadAction<AuthUser | null>) {
      state.user = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
        // localStorage.setItem('user', JSON.stringify(action.payload))
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload ?? 'Login failed'
      })
      .addCase(meThunk.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(meThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
      })
      .addCase(meThunk.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload ?? 'Login failed'
        state.user = null
      })
  },
})

export const { logout, setUser } = authSlice.actions
export default authSlice.reducer
