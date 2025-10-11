import { RepeatNewPassword } from './../../lib/pageType'
import { http } from '../../lib/http'
import type { ChangeMainData, UserData } from 'lib/pageType'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const changeMainDataThunk = createAsyncThunk<
  UserData,
  ChangeMainData,
  { rejectValue: string }
>('auth/changeMainData', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await http.put<UserData>('/me/main-data', userData, {})
    return data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string } | undefined)?.message ||
        error.message ||
        'update user failed'
      return rejectWithValue(message)
    }
    return rejectWithValue('update user failed')
  }
})

export const repeatNewPassword = createAsyncThunk<
  UserData,
  RepeatNewPassword,
  { rejectValue: string }
>('auth/repeatNewPassword', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await http.put<UserData>('me/password', userData, {})
    return data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string } | undefined)?.message ||
        error.message ||
        'update user failed'
      return rejectWithValue(message)
    }
    return rejectWithValue('update user failed')
  }
})
