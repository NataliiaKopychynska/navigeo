import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPricesThunk } from '../../../../../redux/price/priseThunk'
import type { AppDispatch } from '../../../../../redux/store'

function PricePage() {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(50)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchPricesThunk({ page, per_page: perPage }))
  }, [dispatch, page, perPage])
  return <div>PricePage</div>
}

export default PricePage
