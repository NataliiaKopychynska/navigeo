import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  fetchPricesThunk,
  postPriceThunk,
} from '../../../../redux/price/priseThunk'
import type { AppDispatch } from '../../../../redux/store'
import AddPriseTabModal from '../../../../components/Admin/SettingPages/Prise/AddPriseTabModal'
import type { PriceTab, PriceType } from '../../../../redux/price/priceType'
import { useForm } from 'react-hook-form'

export default function AdminPrices() {
  const dispatch = useDispatch<AppDispatch>()
  const { register, handleSubmit } = useForm<PriceTab>()

  const [page] = useState(1)
  const [perPage] = useState(50)
  const [orderType, setOrderType] = useState<
    'design_purposes_map' | 'inventory' | 'staking'
  >('design_purposes_map')
  const [isOpenAddTab, setIsOpenAddTab] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    navigate('mapForDesignPurposes')
  }, [navigate])

  useEffect(() => {
    dispatch(fetchPricesThunk({ page, per_page: perPage, type: orderType }))
  }, [dispatch, page, perPage, orderType])

  const handleOrderType = (
    type: 'design_purposes_map' | 'inventory' | 'staking',
  ) => {
    setOrderType(type)
  }

  // const handlePage = (page: number) => {
  //   setPage(page)
  // }

  // const handlePerPage = (perPage: number) => {
  //   setPerPage(perPage)
  // }

  const addNewPriseMFDP = async (data: PriceTab) => {
    const newPrice: PriceTab = {
      ...data,
      basePrice: data.basePrice * 100,
      additionalPrice: data.additionalPrice * 100,
      type: 'design_purposes_map' as PriceType,
    }
    await dispatch(postPriceThunk(newPrice))
    setIsOpenAddTab(false)
    // console.log(newPrice)
  }

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between mt-[20px] mb-[16px]">
        <h1 className="text-2xl font-medium text-gray-900">Grupy cennikowe</h1>
      </div>
      <div className="w-full pb-[8px] border-b border-b-gray-300 ">
        <NavLink
          // to="/layout/admin/setting/prices/mapForDesignPurposes/basic"
          to={`/layout/admin/setting/prices/mapForDesignPurposes`}
          onClick={() => handleOrderType('design_purposes_map')}
          className={({ isActive }) =>
            isActive
              ? 'text-gray-700 pb-[9px] mr-[24px] border-b-[5px] border-amber-600'
              : 'text-gray-700 pb-[9px] mr-[24px] border-b-[5px] border-transparent hover:text-gray-900'
          }
        >
          Mapa do celów projektowych
        </NavLink>
        <NavLink
          to="/layout/admin/setting/prices/inventoryStaking"
          onClick={() => handleOrderType('inventory')}
          className={({ isActive }) =>
            isActive
              ? 'text-gray-700 pb-[9px] border-b-[5px] border-amber-600'
              : 'text-gray-700 '
          }
        >
          Inwentaryzacja, tyczenie
        </NavLink>
      </div>
      <Outlet context={{ handleAddTab: () => setIsOpenAddTab(true) }} />

      {isOpenAddTab && (
        <AddPriseTabModal
          CancelBTN={() => setIsOpenAddTab(false)}
          AcceptBTN={handleSubmit(addNewPriseMFDP)}
          register={register}
        />
      )}
    </div>
  )
}
