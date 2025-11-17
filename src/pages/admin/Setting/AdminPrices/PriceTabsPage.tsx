import MiddleButton from '../../../../components/atoms/MiddleButton'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  useNavigate,
  useParams,
  Outlet,
  useOutletContext,
} from 'react-router-dom'
import type { RootState } from '../../../../redux/store'
import type { PriceGroup, PriceType } from '../../../../redux/price/priceType'
// import DeletePriceModal from '../../../../components/Admin/SettingPages/Prise/DeletePriceModal'

type OutletContextType = {
  handleAddTab: () => void
}

type PriceTabsPageProps = {
  type: PriceType // 'design_purposes_map' | 'inventory' | 'staking'
}

export default function PriceTabsPage({ type }: PriceTabsPageProps) {
  const navigate = useNavigate()
  const { priceID } = useParams()
  const { priceList } = useSelector((state: RootState) => state.prices)
  const tabs = priceList[type] || []

  const { handleAddTab } = useOutletContext<OutletContextType>()

  const routeMap: Record<PriceType, string> = {
    design_purposes_map: 'mapForDesignPurposes',
    inventory: 'inventoryStaking',
    staking: 'staking',
  }

  useEffect(() => {
    if (tabs.length > 0 && !priceID) {
      navigate(`/layout/admin/setting/prices/${routeMap[type]}/${tabs[0].id}`, {
        replace: true,
      })
    }
  }, [navigate, tabs, priceID, type])

  const tabClick = (tab: PriceGroup) => {
    navigate(`/layout/admin/setting/prices/${routeMap[type]}/${tab.id}`)
  }

  return (
    <div>
      <div className="flex flex-wrap justify-between gap-6 items-center mt-[20px] mb-[16px]">
        <div className="flex flex-wrap gap-6 border-b border-b-gray-300">
          {tabs.map((tab) => (
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
