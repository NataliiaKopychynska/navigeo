import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchPricesThunk,
  getPriceListByIdThunk,
} from '../../../../../redux/price/priseThunk'
import type { AppDispatch, RootState } from '../../../../../redux/store'
import { useParams } from 'react-router-dom'
import ButtonMedium from '../../../../../components/atoms/ButtonMedium'
import EditPriseTabModal from '../../../../../components/Admin/SettingPages/Prise/EditPriseTabModal'

function PricePage() {
  const { priceID } = useParams<{ priceID: string }>()

  const { selectedPriceList, priceList } = useSelector(
    (state: RootState) => state.prices,
  )

  const currentTab = priceList.design_purposes_map?.find(
    (tab) => tab.id === priceID,
  )

  // console.log(state)

  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(50)
  const dispatch = useDispatch<AppDispatch>()
  const [isOpenEditCena, setIsOpenEditCena] = useState(false)

  useEffect(() => {
    if (priceID) {
      dispatch(getPriceListByIdThunk(priceID))
    }
  }, [dispatch, priceID])
  console.log(selectedPriceList)

  const HandleEditPrice = () => {}

  // useEffect(() => {
  //   dispatch(fetchPricesThunk({ page, per_page: perPage }))
  // }, [dispatch, page, perPage])
  if (!currentTab) return <p>Ładowanie danych...</p>

  return (
    <div>
      <div>
        <div className="flex align-baseline justify-between">
          <div className="flex gap-[48px]">
            <div>
              <h3 className="text-[12px] font-normal text-gray-600">
                Cena standardowa:
              </h3>
              <p className="text-[12px] font-medium text-gray-800">
                {currentTab.basePrice?.grossPrice?.amount / 100 ?? '—'} (za 100
                m przyłącza)
              </p>
            </div>
            <div>
              <h3 className="text-[12px] font-normal text-gray-600">
                Cena standardowa:
              </h3>
              <p className="text-[12px] font-medium text-gray-800">
                {currentTab.additionalPrice?.grossPrice?.amount / 100 ?? '—'}(za
                kolejne 100 m przyłącza)
              </p>
            </div>
          </div>
          <ButtonMedium
            tittle="Edytuj"
            onClick={() => setIsOpenEditCena(true)}
          />
        </div>
        {selectedPriceList?.length ? (
          <ul className="list-disc ml-5">
            {selectedPriceList.map((item) => (
              <li key={item.id}>
                {item.name} — {item.basePrice?.grossPrice?.amount ?? 0} PLN
              </li>
            ))}
          </ul>
        ) : (
          <p>Brak pozycji w tym cenniku.</p>
        )}
      </div>
      {isOpenEditCena && <EditPriseTabModal />}
    </div>
  )
}

export default PricePage
