import { createSlice } from '@reduxjs/toolkit'
import type { InitialsState } from './notesTypes'
import {
  fetchNotesThunk,
  postNotesThunk,
  deleteNoteThunk,
  replaceNoteThunk,
  getByIdNoteThunk,
} from './notesThunk'
import { handlePending, handleRejected } from '../../utils/reduxNotesHandlers'

const initialState: InitialsState = {
  notes: null,
  status: 'idle',
  error: null,
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotesThunk.pending, handlePending)
      .addCase(fetchNotesThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.notes = action.payload
      })
      .addCase(fetchNotesThunk.rejected, handleRejected)
      .addCase(postNotesThunk.pending, handlePending)
      .addCase(postNotesThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        if (state.notes && Array.isArray(state.notes)) {
          state.notes = [...state.notes, action.payload]
        } else {
          state.notes = [action.payload]
        }
      })
      .addCase(postNotesThunk.rejected, handleRejected)
      .addCase(getByIdNoteThunk.pending, handlePending)
      .addCase(getByIdNoteThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // console.log('continue in slice writing')
        if (state.notes && Array.isArray(state.notes)) {
          const index = state.notes.findIndex((n) => n.id === action.payload.id)
          if (index !== -1) {
            state.notes[index] = action.payload
          } else {
            state.notes.push(action.payload)
          }
        } else {
          state.notes = [action.payload]
        }
      })
      .addCase(getByIdNoteThunk.rejected, handleRejected)
      .addCase(replaceNoteThunk.pending, handlePending)
      .addCase(replaceNoteThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        if (state.notes && Array.isArray(state.notes)) {
          state.notes = state.notes.map((note) =>
            note.id === action.payload.id ? action.payload : note,
          )
        } else {
          state.notes = [action.payload]
        }
      })
      .addCase(replaceNoteThunk.rejected, handleRejected)
      .addCase(deleteNoteThunk.pending, handlePending)
      .addCase(deleteNoteThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        if (state.notes) {
          state.notes = state.notes.filter(
            (note) => note.id !== action.meta.arg.id,
          )
        }
      })
      .addCase(deleteNoteThunk.rejected, handleRejected)
  },
})

export default notesSlice.reducer
