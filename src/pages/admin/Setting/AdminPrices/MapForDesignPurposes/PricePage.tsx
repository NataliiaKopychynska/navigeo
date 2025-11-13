import PriceHeader from '../../../../../components/Admin/SettingPages/Prise/PricePage/PriceHeader'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getPriceListByIdThunk,
  replaceTabPriceById,
} from '../../../../../redux/price/priseThunk'
import type { AppDispatch, RootState } from '../../../../../redux/store'
import { useParams } from 'react-router-dom'
import EditPriseTabModal from '../../../../../components/Admin/SettingPages/Prise/EditPriseTabModal'
import { useForm } from 'react-hook-form'
import type {
  DataEdit,
  EditRequest,
} from '../../../../../redux/price/priceType'
import { PriceList } from '../../../../../components/Admin/SettingPages/Prise/PricePage/PriceList'

function PricePage() {
  const { priceID } = useParams<{ priceID: string }>()
  const { selectedPriceList, priceList } = useSelector(
    (s: RootState) => s.prices,
  )
  const dispatch = useDispatch<AppDispatch>()
  const { register, watch, reset, setValue, handleSubmit } =
    useForm<EditRequest>()

  const [isOpenEditPrise, setIsOpenEditPrise] = useState(false)
  const [hoverData, setHoverData] = useState<DataEdit>({
    name: '',
    basePrice: 0,
    additionalPrice: 0,
    type: 'design_purposes_map',
  })

  const currentTab = priceList.design_purposes_map?.find(
    (tab) => tab.id === priceID,
  )

  useEffect(() => {
    if (priceID) dispatch(getPriceListByIdThunk(priceID))
  }, [dispatch, priceID])

  const handleEditPrice = handleSubmit((body) => {
    dispatch(
      replaceTabPriceById({
        id: priceID,
        body: {
          name: body.name,
          basePrice: body.basePrice * 100,
          additionalPrice: body.additionalPrice * 100,
        },
      }),
    )
    setIsOpenEditPrise(false)
  })

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
      />
      <PriceList items={selectedPriceList} />
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

// import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import {
//   getPriceListByIdThunk,
//   replaceTabPriceById,
// } from '../../../../../redux/price/priseThunk'
// import type { AppDispatch, RootState } from '../../../../../redux/store'
// import { useNavigate, useParams } from 'react-router-dom'
// import ButtonMedium from '../../../../../components/atoms/ButtonMedium'
// import EditPriseTabModal from '../../../../../components/Admin/SettingPages/Prise/EditPriseTabModal'
// import { useForm } from 'react-hook-form'
// import type {
//   DataEdit,
//   EditRequest,
// } from '../../../../../redux/price/priceType'

// function PricePage() {
//   const { priceID } = useParams<{ priceID: string }>()
//   const navigate = useNavigate()
//   const { selectedPriceList, priceList } = useSelector(
//     (state: RootState) => state.prices,
//   )
//   // const [page, setPage] = useState(1)
//   // const [perPage, setPerPage] = useState(50)
//   const dispatch = useDispatch<AppDispatch>()
//   const [isOpenEditPrise, setIsOpenEditPrise] = useState(false)
//   const [hoverData, setHoverData] = useState<DataEdit>({
//     name: '',
//     basePrice: 0,
//     additionalPrice: 0,
//     type: 'design_purposes_map',
//   })
//   const { register, watch, reset, setValue, handleSubmit } =
//     useForm<EditRequest>()
//   const currentTab = priceList.design_purposes_map?.find(
//     (tab) => tab.id === priceID,
//   )

//   useEffect(() => {
//     if (priceID) {
//       dispatch(getPriceListByIdThunk(priceID))
//     }
//   }, [dispatch, priceID])

//   useEffect(() => {
//     if (priceList.design_purposes_map) {
//       const tab = priceList.design_purposes_map.find(
//         (tab) => tab.id === priceID,
//       )
//       if (tab) {
//         setHoverData({
//           name: tab.name || '',
//           basePrice: tab.basePrice?.grossPrice?.amount
//             ? tab.basePrice.grossPrice.amount / 100
//             : 0,
//           additionalPrice: tab.additionalPrice?.grossPrice?.amount
//             ? tab.additionalPrice.grossPrice.amount / 100
//             : 0,
//           type: 'design_purposes_map',
//         })
//       }
//     }
//     console.log(hoverData)
//   }, [priceList, priceID])

//   const handleEditPrice = handleSubmit((body) => {
//     dispatch(
//       replaceTabPriceById({
//         id: priceID,
//         body: {
//           name: body.name,
//           basePrice: body.basePrice * 100,
//           additionalPrice: body.additionalPrice * 100,
//         },
//       }),
//     )
//     // navigate(`/layout/admin/setting/prices/mapForDesignPurposes/${priceID}`)
//     console.log(body)
//     setIsOpenEditPrise(false)
//   })

//   // useEffect(() => {
//   //   dispatch(fetchPricesThunk({ page, per_page: perPage }))
//   // }, [dispatch, page, perPage])
//   if (!currentTab) return <p>Ładowanie danych...</p>

//   return (
//     <div>
//       <div>
//         <div className="flex align-baseline justify-between">
//           <div className="flex gap-[48px]">
//             <div>
//               <h3 className="text-[12px] font-normal text-gray-600">
//                 Cena standardowa:
//               </h3>
//               <p className="text-[12px] font-medium text-gray-800">
//                 {/* {Number(currentTab) / 100 ?? '—'} (za 100 m przyłącza)
//                  */}
//                 {currentTab?.basePrice?.grossPrice?.amount
//                   ? (currentTab.basePrice.grossPrice.amount / 100).toFixed(2)
//                   : '—'}{' '}
//                 PLN (za 100 m przyłącza)
//               </p>
//             </div>
//             <div>
//               <h3 className="text-[12px] font-normal text-gray-600">
//                 Cena standardowa:
//               </h3>
//               <p className="text-[12px] font-medium text-gray-800">
//                 {currentTab?.additionalPrice?.grossPrice?.amount
//                   ? (
//                       currentTab.additionalPrice.grossPrice.amount / 100
//                     ).toFixed(2)
//                   : 0}{' '}
//                 PLN (za kolejne 100 m przyłącza)
//               </p>
//             </div>
//           </div>
//           <ButtonMedium
//             tittle="Edytuj"
//             onClick={() => {
//               if (currentTab) {
//                 setValue('name', hoverData.name || '')
//                 setValue('basePrice', hoverData.basePrice || 0)
//                 setValue('additionalPrice', hoverData.additionalPrice || 0)
//                 setIsOpenEditPrise(true)
//               }
//             }}
//           />
//         </div>
//         {selectedPriceList?.length ? (
//           <ul className="list-disc ml-5">
//             {selectedPriceList.map((item) => (
//               <li key={item.id}>
//                 {item.county.name} — {item.basePrice?.grossPrice?.amount ?? 0}{' '}
//                 PLN
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Brak pozycji w tym cenniku.</p>
//         )}
//       </div>
//       {isOpenEditPrise && (
//         <EditPriseTabModal
//           watch={watch}
//           setHoverData={setHoverData}
//           hoverData={hoverData}
//           register={register}
//           handleEdit={handleEditPrice}
//           setIsOpenEdit={setIsOpenEditPrise}
//         />
//       )}
//     </div>
//   )
// }

// export default PricePage
