import { createSlice } from '@reduxjs/toolkit'
import type { PriceState } from './priceType'
import { handlePending, handleRejected } from '../../utils/reduxPriceHandlers'
import {
  fetchPricesThunk,
  postPriceThunk,
  getPriceListByIdThunk,
  replaceTabPriceById,
  deletePriceThunk,
} from './priseThunk'

const initialState: PriceState = {
  priceList: {
    design_purposes_map: null,
    inventory: null,
    staking: null,
  },
  selectedPriceList: null,
  status: 'idle',
  error: null,
}

const priceSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {
    // selectedPrise:
  },
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
        // console.log(current(state))
      })
      .addCase(fetchPricesThunk.rejected, handleRejected)
      .addCase(postPriceThunk.pending, handlePending)
      .addCase(postPriceThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const newItem = action.payload
        const type = newItem.type

        if (type) {
          if (state.priceList[type]) {
            state.priceList[type].push(newItem)
          } else {
            state.priceList[type] = [newItem]
          }
        }
      })
      .addCase(postPriceThunk.rejected, handleRejected)

      .addCase(getPriceListByIdThunk.pending, handlePending)
      .addCase(getPriceListByIdThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.selectedPriceList = action.payload
      })
      .addCase(getPriceListByIdThunk.rejected, handleRejected)
      .addCase(replaceTabPriceById.pending, handlePending)
      .addCase(replaceTabPriceById.fulfilled, (state, action) => {
        state.status = 'succeeded'

        const index = state.priceList.design_purposes_map?.findIndex(
          (tab) => tab.id === action.payload.id,
        )

        if (index !== undefined && index !== -1) {
          state.priceList.design_purposes_map![index] = action.payload
        }
      })
      .addCase(replaceTabPriceById.rejected, handleRejected)
      .addCase(deletePriceThunk.pending, handlePending)
      .addCase(deletePriceThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const { type } = action.meta.arg

        const targetList = state.priceList[type]
        if (!targetList) return
        state.priceList[type] = targetList.filter(
          (tab) => tab.id !== action.payload,
        )
      })
      .addCase(deletePriceThunk.rejected, handleRejected)
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
