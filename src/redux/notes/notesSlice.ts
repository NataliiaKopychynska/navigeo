import { createSlice } from '@reduxjs/toolkit'
import type { InitialsState } from './notesTypes'
import { fetchNotesThunk, postNotesThunk } from './notesThunk'
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
        state.notes = action.payload.items
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
  },
})

export default notesSlice.reducer
