import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit'
import type { PostCar, Car, Cars, FetchCars } from './carsType'
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
    const { data } = await http.post<Car>('/cars', params)
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

export const replaceCarThunk = createAsyncThunk<
  Car,
  { id: string; updatedCar: PostCar },
  { rejectValue: string }
>('cars/put', async ({ id, updatedCar }, { rejectWithValue }) => {
  try {
    const { data } = await http.put<Car>(`cars/${id}`, updatedCar)
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

export const deleteCarThunk = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>('cars/delete', async (id, { rejectWithValue }) => {
  try {
    const { data } = await http.delete(`cars/${id}`)
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
