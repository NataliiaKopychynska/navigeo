import { createAsyncThunk } from '@reduxjs/toolkit'
import { PostCar, type Car, type Cars, type FetchCars } from './carsType'
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

export const postCarsThunk = createAsyncThunk<
  Car,
  PostCar,
  { rejectValue: string }
>('cars/post', async (params, { rejectWithValue }) => {
  try {
    const { data } = await http.post<PostCar>('/cars', params)
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
