import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { AuthUser, LoginUser } from './authTypes'

const http = axios.create({
  baseURL: 'http://localhost:8888/api',
  withCredentials: true,
})

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

// export const meThunk = createAsyncThunk()
