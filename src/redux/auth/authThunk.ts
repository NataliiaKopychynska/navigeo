import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { AuthUser, LoginUser } from './authTypes'
import { http } from '../../lib/http'

export const loginThunk = createAsyncThunk<
  AuthUser,
  LoginUser,
  { rejectValue: string }
>('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await http.post<AuthUser>('/login', credentials)
    return data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string } | undefined)?.message ||
        error.message ||
        'Login failed'
      return rejectWithValue(message)
    }
    return rejectWithValue('Login failed')
  }
})

export const logoutThunk = createAsyncThunk<
  { message: string },
  void,
  { rejectValue: string }
>('auth/logout', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await http.post('/logout', credentials)
    return data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string } | undefined)?.message ||
        error.message ||
        'Logout failed'
      return rejectWithValue(message)
    }
    return rejectWithValue('Logout failed')
  }
})

export const meThunk = createAsyncThunk<
  AuthUser,
  void,
  { rejectValue: string }
>('auth/me', async (_, { rejectWithValue }) => {
  try {
    const { data } = await http.get<AuthUser>('/me', { withCredentials: true })
    return data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string } | undefined)?.message ||
        error.message ||
        'fetch user failed'

      return rejectWithValue(message)
    }
    return rejectWithValue('fetch user failed')
  }
})
