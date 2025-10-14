import { createAsyncThunk } from '@reduxjs/toolkit'
import type { Cars, FetchCars } from './carsType'
import axios from 'axios'
import { http } from '../../lib/http'

export const fetchCarsThunk = createAsyncThunk<
  Cars,
  FetchCars,
  { rejectValue: string }
>('cars/fetch', async (params, { rejectWithValue }) => {
  try {
    const { data } = await http.get<Cars>('/cars', { params })
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
