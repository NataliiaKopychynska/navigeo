import MiddleButton from '../../../../../components/atoms/MiddleButton'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import type { RootState, AppDispatch } from '../../../../../redux/store'
// import { postPriceThunk } from '../../../../../redux/price/priseThunk'
import type { PriceGroup } from '../../../../../redux/price/priceType'
import { useOutletContext } from 'react-router-dom'

type OutletContextType = {
  handleAddTab: () => void
}

function MapForDesignPurposes() {
  // const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { priceID } = useParams()
  const { priceList } = useSelector((state: RootState) => state.prices)
  const designPrices = priceList.design_purposes_map

  const { handleAddTab } = useOutletContext<OutletContextType>()

  const tabClick = (tab: PriceGroup) => {
    navigate(`/layout/admin/setting/prices/mapForDesignPurposes/${tab.id}`)
  }
  console.log(priceList)

  return (
    <div>
      <div className="flex flex-wrap justify-between gap-6 items-center mt-[20px] mb-[16px]">
        <div className="flex flex-wrap gap-6 border-b border-b-gray-300">
          {designPrices?.map((tab) => (
            <button
              key={tab.id}
              onClick={() => tabClick(tab)}
              className={`pb-[9px] transition-all duration-200 ${
                priceID === tab.id
                  ? 'text-gray-900 border-b-[4px] border-amber-600 font-medium'
                  : 'text-gray-600 border-b-[4px] border-transparent hover:text-gray-900'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <MiddleButton
          tittle="Dodaj cennik"
          type="add"
          onClick={() => handleAddTab()}
        />
      </div>

      <Outlet />
    </div>
  )
}

export default MapForDesignPurposes

// function MapForDesignPurposes() {
//   const dispatch = useDispatch<AppDispatch>()
//   const { priceList, status } = useSelector((state: RootState) => state.prices)

//   const navigate = useNavigate()
//   const { priceID } = useParams()

//   const [page, setPage] = useState(1)
//   const [perPage, setPerPage] = useState(50)

//   // const [priceTabs, setPriceTabs] = useState<PriceGroup[]>([
//   //   {
//   //     id: 'basic',
//   //     label: 'Cennik podstawowy',
//   //   },
//   // ])
//   const [isOpenAdd, setIsOpenAdd] = useState(false)

//   // const [currentTab, setCurrentTab] = useState({
//   //   id: 'basic',
//   //   label: 'Cennik podstawowy',
//   // })

//   useEffect(() => {
//     dispatch(fetchPricesThunk({ page }))
//     console.log(priceTabs)

//     // if (!priceID && priceTabs.length > 0) {
//     //   navigate(priceTabs[0].id)
//     // }
//   }, [page, dispatch])

//   const handleAddTab = () => {
//     // const newTab = {
//     //   id: `new-${Date.now()}`,
//     //   label: `Cennik ${priceTabs.length + 1}`,
//     // }
//     // setPriceTabs((prev) => [...prev, newTab])
//     // navigate(newTab.id)
//   }

//   return (
//     <div>
//       <div className="flex gap-6 items-center mb-6">
//         {priceList &&
//           priceList.map((tab) => (
//             <button
//               key={tab.id}
//               // onClick={() => navigate(tab.id)}
//               onClick={() => tabClick(tab)}
//               className={`pb-[9px] transition-all duration-200 ${
//                 priceID === tab.id
//                   ? 'text-gray-900 border-b-[4px] border-amber-600 font-medium'
//                   : 'text-gray-600 border-b-[4px] border-transparent hover:text-gray-900'
//               }`}
//             >
//               {tab.label}
//             </button>
//           ))}
//         <MiddleButton
//           tittle="Dodaj cennik"
//           type="add"
//           onClick={() => setIsOpenAdd((prev) => !prev)}
//         />
//       </div>

//       <Outlet />
//     </div>
//   )
// }

// export default MapForDesignPurposes

{
  /* <div className="p-4 border rounded bg-gray-50">
  {currentTab ? (
    <div>
      <h2 className="text-lg font-semibold">{currentTab.label}</h2>
      <p>ID: {currentTab.id}</p>
      <p>Tu możesz dodać formularz, tabele, cennik itd...</p>
    </div>
  ) : (
    <p>Wybierz lub dodaj cennik</p>
  )}
</div> */
}
