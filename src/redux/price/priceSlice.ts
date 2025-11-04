import { createSlice, current } from '@reduxjs/toolkit'
import type { PriceState } from './priceType'
import { handlePending, handleRejected } from '../../utils/reduxPriceHandlers'
import { fetchPricesThunk } from './priseThunk'

const initialState: PriceState = {
  priceList: {
    design_purposes_map: null,
    inventory: null,
    staking: null,
  },
  status: 'idle',
  error: null,
}

const priceSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPricesThunk.pending, handlePending)
      .addCase(fetchPricesThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const { type } = action.meta.arg
        if (type) {
          const filteredData = action.payload.data.filter(
            (item) => item.type === type,
          )
          state.priceList[type] = filteredData
        }
        console.log(current(state))
      })
      .addCase(fetchPricesThunk.rejected, handleRejected)
    //   .addCase(_.pending, handlePending)
    //   .addCase(_.fulfilled, (state, action) => {
    //     state.status = 'succeeded'
    //     state.priceList = action.payload
    //   })
    //   .addCase(_.rejected, handleRejected)

    //   .addCase(_.pending, handlePending)
    //   .addCase(_.fulfilled, (state, action) => {
    //     state.status = 'succeeded'
    //     state.priceList = action.payload
    //   })
    //   .addCase(_.rejected, handleRejected)
    //   .addCase(_.pending, handlePending)
    //   .addCase(_.fulfilled, (state, action) => {
    //     state.status = 'succeeded'
    //     state.priceList = action.payload
    //   })
    //   .addCase(_.rejected, handleRejected)
    //   .addCase(_.pending, handlePending)
    //   .addCase(_.fulfilled, (state, action) => {
    //     state.status = 'succeeded'
    //     state.priceList = action.payload
    //   })
    //   .addCase(_.rejected, handleRejected)
    //   .addCase(_.pending, handlePending)
    //   .addCase(_.fulfilled, (state, action) => {
    //     state.status = 'succeeded'
    //     state.priceList = action.payload
    //   })
    //   .addCase(_.rejected, handleRejected)
    //   .addCase(_.pending, handlePending)
    //   .addCase(_.fulfilled, (state, action) => {
    //     state.status = 'succeeded'
    //     state.priceList = action.payload
    //   })
    //   .addCase(_.rejected, handleRejected)
  },
})

export default priceSlice.reducer
