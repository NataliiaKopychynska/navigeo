import PriceHeader from '../../../../components/Admin/SettingPages/Prise/PricePage/PriceHeader'
import EditPriseTabModal from '../../../../components/Admin/SettingPages/Prise/EditPriseTabModal'
import DeletePriceModal from '../../../../components/Admin/SettingPages/Prise/DeletePriceModal'
import PriceTable from '../../../../components/Admin/SettingPages/Prise/PricePage/Table/PriceTable'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {
  deletePriceThunk,
  getPriceListByIdThunk,
  replaceTabPriceById,
} from '../../../../redux/price/priseThunk'
import type { AppDispatch, RootState } from '../../../../redux/store'
import type { DataEdit, PriceType } from '../../../../redux/price/priceType'

function PricePage() {
  const navigate = useNavigate()
  const { priceID } = useParams<{ priceID: string }>()
  const { selectedPriceList, priceList } = useSelector(
    (s: RootState) => s.prices,
  )
  const dispatch = useDispatch<AppDispatch>()
  const { register, watch, reset, handleSubmit } = useForm<{
    name: string
    basePrice: number
    additionalPrice: number
  }>()

  const [isOpenEditPrise, setIsOpenEditPrise] = useState(false)
  const [isOpenDeletePrise, setIsOpenDeletePrise] = useState(false)

  const [hoverData, setHoverData] = useState<DataEdit | null>({
    name: '',
    basePrice: 0,
    additionalPrice: 0,
    type: 'design_purposes_map',
  })

  const routeMap: Record<string, PriceType> = {
    mapForDesignPurposes: 'design_purposes_map',
    inventoryStaking: 'inventory',
    staking: 'staking',
  }

  const pathParts = window.location.pathname.split('/')
  const pathSegment = pathParts[pathParts.indexOf('prices') + 1]
  const currentType: PriceType = routeMap[pathSegment] ?? 'design_purposes_map'

  const currentTab = priceList[currentType]?.find((tab) => tab.id === priceID)

  useEffect(() => {
    if (priceID) dispatch(getPriceListByIdThunk(priceID))
  }, [dispatch, priceID])

  const handleEditPrice = handleSubmit(async (body) => {
    if (!priceID) return
    await dispatch(
      replaceTabPriceById({
        id: priceID,
        body: {
          name: body.name,
          basePrice: Number(body.basePrice) * 100,
          additionalPrice: Number(body.additionalPrice) * 100,
        },
      }),
    ).unwrap()
    dispatch(getPriceListByIdThunk(priceID)).unwrap()
    navigate(`/layout/admin/setting/prices/${pathSegment}/${priceID}`)
    setIsOpenEditPrise(false)
  })

  const handleDeleteTab = async () => {
    if (!priceID) return
    await dispatch(deletePriceThunk({ id: priceID, type: currentType }))
    setIsOpenDeletePrise(false)
  }

  if (!currentTab) return <p>Ładowanie danych...</p>

  // console.log(hoverData)

  return (
    <div>
      <PriceHeader
        currentTab={currentTab}
        onEdit={() => {
          setHoverData({
            name: currentTab.name,
            basePrice: +currentTab.basePrice.grossPrice.amount / 100,
            additionalPrice:
              +currentTab.additionalPrice.grossPrice.amount / 100,
            type: currentTab.type,
          })
          setIsOpenEditPrise(true)
        }}
        onDelete={() => {
          setIsOpenDeletePrise(true)
        }}
      />
      <PriceTable selectedPriceList={selectedPriceList ?? []} />
      {/* <PriceList items={selectedPriceList ?? []} type={currentType} /> */}
      {isOpenDeletePrise && (
        <DeletePriceModal
          CancelBTN={() => setIsOpenDeletePrise(false)}
          AcceptBTN={handleDeleteTab}
        />
      )}
      {isOpenEditPrise && (
        <EditPriseTabModal
          watch={watch}
          hoverData={hoverData}
          setHoverData={setHoverData}
          register={register}
          handleEdit={handleEditPrice}
          setIsOpenEdit={setIsOpenEditPrise}
          reset={reset}
        />
      )}
    </div>
  )
}

export default PricePage
