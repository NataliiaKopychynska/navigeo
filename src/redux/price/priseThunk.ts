import { createAsyncThunk } from '@reduxjs/toolkit'
import type {
  PriceGroup,
  FetchData,
  PriceType,
  EditRequestPriceTab,
  RequestNewCountyPrice,
  PriceListItem,
} from './priceType'
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

export const postPriceThunk = createAsyncThunk<
  PriceGroup,
  EditRequestPriceTab,
  { rejectValue: string }
>('prices/get', async (params, { rejectWithValue }) => {
  try {
    const { data } = await http.post<PriceGroup>('/price-lists', params)
    return data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string } | undefined)?.message ||
        error.message ||
        'add price tab failed'
      return rejectWithValue(message)
    }
    return rejectWithValue('Post failed')
  }
})

export const deletePriceThunk = createAsyncThunk<
  string,
  { id: string; type: 'design_purposes_map' | 'inventory' | 'staking' },
  { rejectValue: string }
>('prices/deleteTab', async ({ id, type }, { rejectWithValue }) => {
  try {
    await http.delete(`/price-lists/${id}`)
    return id
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string } | undefined)?.message ||
        error.message ||
        'delete price tab failed'
      return rejectWithValue(message)
    }
    return rejectWithValue('Post failed')
  }
})

export const replaceTabPriceById = createAsyncThunk<
  PriceGroup,
  { id: string; body: EditRequestPriceTab },
  { rejectValue: string }
>('prices/putTab', async ({ id, body }, { rejectWithValue }) => {
  try {
    const { data } = await http.put<PriceGroup>(`/price-lists/${id}`, body)
    console.log(body)
    return data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string } | undefined)?.message ||
        error.message ||
        'put price tab failed'
      return rejectWithValue(message)
    }
    return rejectWithValue('Post failed')
  }
})

export const getPriceListByIdThunk = createAsyncThunk<
  PriceListItem[],
  string,
  { rejectValue: string }
>('prices/getId', async (id, { rejectWithValue }) => {
  try {
    const { data } = await http.get<PriceListItem[]>(`/price-lists/${id}/items`)
    return data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string } | undefined)?.message ||
        error.message ||
        'get failed'
      return rejectWithValue(message)
    }
    return rejectWithValue('Post failed')
  }
})

export const postPriceListByIdThunk = createAsyncThunk<
  PriceListItem,
  { priceListId: string; body: RequestNewCountyPrice },
  { rejectValue: string }
>('prices/postCountyPrice', async (params, { rejectWithValue }) => {
  try {
    const { priceListId, body } = params

    const { data } = await http.post<PriceListItem>(
      `/price-lists/${priceListId}/items`,
      body,
    )

    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message || error.message || 'post failed'
      return rejectWithValue(message)
    }
    return rejectWithValue('post failed')
  }
})

export const updatePriceListByIdThunk = createAsyncThunk<
  PriceListItem,
  { priceListId: string; priceListItemId: string; body: RequestNewCountyPrice },
  { rejectValue: string }
>(
  'prices/updatePriceListItem',
  async ({ priceListId, priceListItemId, body }, { rejectWithValue }) => {
    try {
      const response = await http.put<PriceListItem>(
        `/price-lists/${priceListId}/items/${priceListItemId}`,
        body,
      )
      return response.data
    } catch (err: any) {
      console.error(err)
      return rejectWithValue(err.response?.data || 'Błąd podczas aktualizacji')
    }
  },
)

export const deletePriceListByIdThunk = createAsyncThunk<
  string,
  { priceListId: string; priceListItemId: string },
  { rejectValue: string }
>(
  'prices/deletePriceListItem',
  async ({ priceListId, priceListItemId }, { rejectWithValue }) => {
    try {
      await http.delete(`/price-lists/${priceListId}/items/${priceListItemId}`)
      // return response.data
      return priceListItemId
    } catch (err: any) {
      console.error(err)
      return rejectWithValue(err.response?.data || 'Błąd podczas aktualizacji')
    }
  },
)

// export const fetchPriceListItem

// export const getPriceByIdThunk = createAsyncThunk<
//   PriseListId,
//   string,
//   { rejectValue: string }
// >('prices/getId', async (id, { rejectWithValue }) => {
//   try {
//     const { data } = await http.get<PriseListId>(`/price-lists/${id}`)
//     return data
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       const message =
//         (error.response?.data as { message?: string } | undefined)?.message ||
//         error.message ||
//         'Login failed'
//       return rejectWithValue(message)
//     }
//     return rejectWithValue('Post failed')
//   }
// })
