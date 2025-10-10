import React from 'react'
import { itemsNav } from './setting'
import { Link, NavLink } from 'react-router-dom'
import { GoArrowLeft } from 'react-icons/go'

type Props = {
  setShowSettingsMenu: React.Dispatch<React.SetStateAction<boolean>>
}

function SettingNavigation({ setShowSettingsMenu }: Props) {
  return (
    <div>
      <Link
        onClick={() => setShowSettingsMenu(false)}
        to="/layout/admin/clients"
        className="flex gap-[16px] items-center pb-[16px]"
      >
        <GoArrowLeft className="w-[24px] h-[24px] p-[2px] shadow-2xl border-1 rounded-[4px] border-gray-300 hover:bg-gray-50" />
        <h1 className=" text-2xl font-medium flex flex-row gap-[8px] content-center  text-gray-700  text-center ">
          Ustawienia
        </h1>
      </Link>
      {itemsNav.map((item) => (
        <NavLink
          key={item.id}
          to={`admin/setting/${item.to}`}
          className="flex flex-row gap-[8px] content-center  text-gray-700 mb-6 text-center"
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}

export default SettingNavigation
