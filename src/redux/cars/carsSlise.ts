import type { CarsState } from './carsType'
import { handlePending, handleRejected } from '../../utils/reduxCarsHandlers'
import { createSlice } from '@reduxjs/toolkit'
import { fetchCarsThunk } from './carsThunk'
import type { Cars } from './carsType'

const initialState: CarsState = {
  cars: null,
  status: 'idle',
  error: null,
}

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarsThunk.pending, handlePending)
      .addCase(fetchCarsThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.cars = action.payload
      })
      .addCase(fetchCarsThunk.rejected, handleRejected)
  },
})

export default carsSlice.reducer
