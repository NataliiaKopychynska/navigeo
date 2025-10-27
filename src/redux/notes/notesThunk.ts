import { createAsyncThunk } from '@reduxjs/toolkit'
import type { Note, NotesQueryParams, NotesResponse } from './notesTypes'
import axios from 'axios'
import { http } from '../../lib/http'

export const fetchNotesThunk = createAsyncThunk<
  NotesResponse,
  NotesQueryParams,
  { rejectValue: string }
>('notes/fetchAll', async (params, { rejectWithValue }) => {
  try {
    const { data } = await http.get<NotesResponse>('/notes', { params })
    // console.log(data, 'data')

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

export const postNotesThunk = createAsyncThunk<
  Note,
  Note,
  { rejectValue: string }
>('notes/post', async (params, { rejectWithValue }) => {
  try {
    const { data } = await http.post<Note>('/notes', { params })
    console.log(data)

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
