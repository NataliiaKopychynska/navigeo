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
    logout(state) {
      state.user = null
      state.status = 'idle'
      state.error = null
    },
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

export const { logout, setUser } = authSlice.actions
export default authSlice.reducer

// import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
// import type { AuthState, AuthUser } from './authTypes'
// import { loginThunk, meThunk } from './authThunk'

// const initialState: AuthState = {
//   user: null,
//   status: 'idle',
//   error: null,
// }

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     logout(state) {
//       state.user = null
//       state.status = 'idle'
//       state.error = null
//       // localStorage.removeItem('user')
//     },
//     setUser(state, action: PayloadAction<AuthUser | null>) {
//       state.user = action.payload
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginThunk.pending, (state) => {
//         state.status = 'loading'
//         state.error = null
//       })
//       .addCase(loginThunk.fulfilled, (state, action) => {
//         state.status = 'succeeded'
//         state.user = action.payload
//       })
//       .addCase(loginThunk.rejected, (state, action) => {
//         state.status = 'failed'
//         state.error = action.payload ?? 'Login failed'
//       })
//       .addCase(meThunk.pending, (state) => {
//         state.status = 'loading'
//         state.error = null
//       })
//       .addCase(meThunk.fulfilled, (state, action) => {
//         state.status = 'succeeded'
//         state.user = action.payload
//       })
//       .addCase(meThunk.rejected, (state, action) => {
//         state.status = 'failed'
//         state.error = action.payload ?? 'Login failed'
//         state.user = null
//       })
//   },
// })

// export const { logout, setUser } = authSlice.actions
// export default authSlice.reducer
