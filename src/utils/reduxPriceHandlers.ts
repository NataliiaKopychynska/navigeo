import type { PriceState } from 'redux/price/priceType'

export const handlePending = (state: PriceState) => {
  state.status = 'loading'
  state.error = null
}

export const handleRejected = (state: PriceState, action) => {
  state.status = 'failed'
  state.error = action.payload ?? 'Login failed'
}
