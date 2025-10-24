import { createAsyncThunk } from '@reduxjs/toolkit'
import type { NotesQueryParams, NotesResponse } from './notesTypes'
import axios from 'axios'

export const fetchNotesThunk = createAsyncThunk<
  NotesResponse,
  NotesQueryParams,
  { rejectValue: string }
>('notes/fetchAll', async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<NotesResponse>('/api/notes', { params })
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.message)
    }
    return rejectWithValue('Unknown error')
  }
})
