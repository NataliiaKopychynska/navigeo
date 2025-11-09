import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchPricesThunk,
  getPriceListByIdThunk,
} from '../../../../../redux/price/priseThunk'
import type { AppDispatch, RootState } from '../../../../../redux/store'
import { useParams } from 'react-router-dom'
import ButtonMedium from '../../../../../components/atoms/ButtonMedium'

function PricePage() {
  const { priceID } = useParams<{ priceID: string }>()
  const state = useSelector(
    (state: RootState) => state.prices.selectedPriceList,
  )
  console.log(state)

  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(50)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (priceID) {
      dispatch(getPriceListByIdThunk(priceID))
    }
  }, [dispatch, priceID])
  console.log(state)

  const EditHandleEdit = () => {}

  // useEffect(() => {
  //   dispatch(fetchPricesThunk({ page, per_page: perPage }))
  // }, [dispatch, page, perPage])
  return (
    <div>
      <div className="flex align-baseline justify-between">
        <div className="flex gap-[48px]">
          <div>
            <h3 className="text-[12px] font-normal text-gray-600">
              Cena standardowa:{' '}
            </h3>
            <p className="text-[12px] font-medium text-gray-800">
              300 (za 100 m przyłącza)
            </p>
          </div>
          <div>
            <h3 className="text-[12px] font-normal text-gray-600">
              Cena standardowa:{' '}
            </h3>
            <p className="text-[12px] font-medium text-gray-800">
              300 (za kolejne 100 m przyłącza)
            </p>
          </div>
        </div>
        <ButtonMedium tittle="Edytuj" onClick={EditHandleEdit} />
      </div>
    </div>
  )
}

export default PricePage
