import { createAsyncThunk } from '@reduxjs/toolkit'
import type { PriceGroup, FetchData, PriceType } from './priceType'
import axios from 'axios'
import { http } from '../../lib/http'

export const fetchPricesThunk = createAsyncThunk<
  { type: PriceType; data: PriceGroup[] },
  FetchData,
  { rejectValue: string }
>('prices/fetch', async (params, { rejectWithValue }) => {
  try {
    const { data } = await http.get<PriceGroup[]>('/price-lists', { params })
    return { type: (params.type || 'design_purposes_map') as PriceType, data }
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string } | undefined)?.message ||
        error.message ||
        'Login failed'
      return rejectWithValue(message)
    }
    return rejectWithValue('Get failed')
  }
})

// export const
