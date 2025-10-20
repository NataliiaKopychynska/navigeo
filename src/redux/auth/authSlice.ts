import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { AuthState, AuthUser } from './authTypes'
import { loginThunk, meThunk } from './authThunk'
import {
  handlePending,
  handleRejected,
  handleRejectedLogin,
} from '../../utils/reduxAuthHandlers'
import { changeMainDataThunk, repeatNewPassword } from './meThunk'

const initialState: AuthState = {
  user: null,
  status: 'idle',
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // logout(state) {
    //   state.user = null
    //   state.status = 'idle'
    //   state.error = null
    //   localStorage.clear()
    // },
    setUser(state, action: PayloadAction<AuthUser | null>) {
      state.user = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, handlePending)
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
      })
      .addCase(loginThunk.rejected, handleRejectedLogin)
      .addCase(meThunk.pending, handlePending)
      .addCase(meThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
      })
      .addCase(meThunk.rejected, handleRejectedLogin)
      .addCase(changeMainDataThunk.pending, handlePending)
      .addCase(changeMainDataThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
      })
      .addCase(changeMainDataThunk.rejected, handleRejected)
      .addCase(repeatNewPassword.pending, handlePending)
      .addCase(repeatNewPassword.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
      })
      .addCase(repeatNewPassword.rejected, handleRejected)
  },
})

// export const { logout, setUser } = authSlice.actions
export const { setUser } = authSlice.actions
export default authSlice.reducer
