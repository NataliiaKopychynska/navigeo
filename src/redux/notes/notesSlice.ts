import { createSlice } from '@reduxjs/toolkit'
import type { InitialsState } from './notesTypes'

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
    // builder.addCase()
  },
})

export default notesSlice.reducer
