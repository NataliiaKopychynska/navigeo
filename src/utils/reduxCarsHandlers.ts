import type { CarsState } from 'redux/cars/carsType'

export const handlePending = (state: CarsState) => {
  state.status = 'loading'
  state.error = null
}

export const handleRejected = (state: CarsState, action) => {
  state.status = 'failed'
  state.error = action.payload ?? 'Login failed'
}
