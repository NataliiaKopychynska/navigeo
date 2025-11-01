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
    return rejectWithValue('fetch failed')
  }
})

export const postNotesThunk = createAsyncThunk<
  Note,
  Note,
  { rejectValue: string }
>('notes/post', async (params, { rejectWithValue }) => {
  try {
    const { data } = await http.post<Note>('/notes', params)
    // console.log(data)

    return data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string } | undefined)?.message ||
        error.message ||
        'Login failed'
      return rejectWithValue(message)
    }
    return rejectWithValue('Post failed')
  }
})

export const getByIdNoteThunk = createAsyncThunk<
  Note,
  { id: string },
  { rejectValue: string }
>('notes/getById', async ({ id }, { rejectWithValue }) => {
  try {
    const { data } = await http.get(`notes/${id}`)
    return data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string } | undefined)?.message ||
        error.message ||
        'Login failed'
      return rejectWithValue(message)
    }
    return rejectWithValue('Get by id failed')
  }
})

export const replaceNoteThunk = createAsyncThunk<
  Note,
  { id: string; text: string },
  { rejectValue: string }
>('notes/put', async ({ id, text }, { rejectWithValue }) => {
  try {
    const { data } = await http.put<Note>(`notes/${id}`, { text })
    return data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string } | undefined)?.message ||
        error.message ||
        'Login failed'
      return rejectWithValue(message)
    }
    return rejectWithValue('Replace failed')
  }
})

export const deleteNoteThunk = createAsyncThunk<
  void,
  { id: string },
  { rejectValue: string }
>('notes/delete', async ({ id }, { rejectWithValue }) => {
  try {
    const { data } = await http.delete(`notes/${id}`)
    return data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string } | undefined)?.message ||
        error.message ||
        'Login failed'
      return rejectWithValue(message)
    }
    return rejectWithValue('Delete failed')
  }
})
