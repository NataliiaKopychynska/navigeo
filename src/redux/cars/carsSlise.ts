import type { CarsState } from './carsType'
import { handlePending, handleRejected } from '../../utils/reduxCarsHandlers'
import { createSlice } from '@reduxjs/toolkit'
import {
  fetchCarsThunk,
  postCarsThunk,
  replaceCarThunk,
  deleteCarThunk,
} from './carsThunk'

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
      .addCase(postCarsThunk.pending, handlePending)
      .addCase(postCarsThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        if (state.cars && Array.isArray(state.cars.items)) {
          state.cars.items = [...state.cars.items, action.payload]
        } else {
          state.cars = { items: [action.payload] }
        }
      })
      .addCase(postCarsThunk.rejected, handleRejected)
      .addCase(replaceCarThunk.pending, handlePending)
      .addCase(replaceCarThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        if (state.cars && Array.isArray(state.cars.items)) {
          const index = state.cars.items.findIndex(
            (car) => car.id === action.payload.id,
          )
          if (index !== -1) {
            state.cars.items[index] = action.payload
            return
          }
        }
      })
      .addCase(replaceCarThunk.rejected, handleRejected)
      .addCase(deleteCarThunk.pending, handlePending)
      .addCase(deleteCarThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        if (state.cars && Array.isArray(state.cars.items)) {
          state.cars.items = state.cars.items.filter(
            (car) => car.id !== action.meta.arg,
          )
        }
      })
      .addCase(deleteCarThunk.rejected, handleRejected)
  },
})

export default carsSlice.reducer
