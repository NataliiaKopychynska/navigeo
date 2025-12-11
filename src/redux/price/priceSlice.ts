import { createSlice } from '@reduxjs/toolkit'
import type { PriceState, PriceType } from './priceType'
import { handlePending, handleRejected } from '../../utils/reduxPriceHandlers'
import {
  fetchPricesThunk,
  postPriceThunk,
  getPriceListByIdThunk,
  replaceTabPriceById,
  deletePriceThunk,
  postPriceListByIdThunk,
  updatePriceListByIdThunk,
  deletePriceListByIdThunk,
} from './priseThunk'

const initialState: PriceState = {
  priceList: {
    design_purposes_map: null,
    inventory: null,
    staking: null,
  },
  selectedPriceList: [],
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
        const type = action.meta.arg.type as PriceType | undefined
        if (type) {
          const filteredData = action.payload.data.filter(
            (item) => item.type === type,
          )
          state.priceList[type] = filteredData
        }
      })
      .addCase(fetchPricesThunk.rejected, handleRejected)
      .addCase(postPriceThunk.pending, handlePending)
      .addCase(postPriceThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const newItem = action.payload
        const type = newItem.type as PriceType | undefined

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

        const updated = action.payload
        const type = updated.type as PriceType

        const list = state.priceList[type]
        if (!list) return

        const index = list.findIndex((tab) => tab.id === updated.id)
        if (index !== -1) {
          list[index] = updated
        }
      })
      .addCase(replaceTabPriceById.rejected, handleRejected)
      .addCase(deletePriceThunk.pending, handlePending)
      .addCase(deletePriceThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const type = action.meta.arg.type as PriceType

        const targetList = state.priceList[type]
        if (!targetList) return
        state.priceList[type] = targetList.filter(
          (tab) => tab.id !== action.payload,
        )
      })
      .addCase(deletePriceThunk.rejected, handleRejected)
      .addCase(postPriceListByIdThunk.pending, handlePending)
      .addCase(postPriceListByIdThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        if (!state.selectedPriceList) {
          state.selectedPriceList = []
        }
        state.selectedPriceList.push(action.payload)
      })
      .addCase(postPriceListByIdThunk.rejected, handleRejected)
      .addCase(updatePriceListByIdThunk.pending, handlePending)
      .addCase(updatePriceListByIdThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'

        const updatedItem = action.payload
        if (state.selectedPriceList) {
          const index = state.selectedPriceList.findIndex(
            (item) => item.id === updatedItem.id,
          )

          if (index !== -1) {
            state.selectedPriceList[index] = updatedItem
          }
        }
      })
      .addCase(updatePriceListByIdThunk.rejected, handleRejected)
      .addCase(deletePriceListByIdThunk.pending, handlePending)
      .addCase(deletePriceListByIdThunk.fulfilled, (state, action) => {
        state.status = 'succeeded'
        if (state.selectedPriceList) {
          state.selectedPriceList = state.selectedPriceList.filter(
            (item) => item.id !== action.payload,
          )
        }
      })
      .addCase(deletePriceListByIdThunk.rejected, handleRejected)
    //   .addCase(_.pending, handlePending)
    //   .addCase(_.fulfilled, (state, action) => {
    //     state.status = 'succeeded'
    //     state.priceList = action.payload
    //   })
    //   .addCase(_.rejected, handleRejected)
  },
})

export default priceSlice.reducer
