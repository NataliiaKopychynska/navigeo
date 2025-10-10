import { NavLink } from 'react-router-dom'
import { GrList } from 'react-icons/gr'
import { BsCalendar3 } from 'react-icons/bs'
// import { FaPeopleGroup } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import type { RootState } from '@reduxjs/toolkit/query'
import { useState } from 'react'
import Navigation from './Admin/Setting /Navigation'
import SettingNavigation from './Admin/Setting /SettingNavigation'

function Sidebar() {
  const user = useSelector((state: RootState) => state.auth.user)
  const [showSettingsMenu, setShowSettingsMenu] = useState(false)

  return (
    <div className="w-[200px] ">
      {user.type === '' && (
        <div className="h-screen pl-[20px] pt-[20px] shadow">
          <NavLink to="client/setting">
            <img
              src="/public/delair-tech.svg"
              className="w-[160px] h-[40px]   mb-[20px]"
            />
          </NavLink>
          <NavLink
            to="client/orders"
            className="flex flex-row gap-[8px] content-center  text-gray-700 mb-6 text-center"
          >
            <GrList className="w-[20px] h-[20px] mt-[2px] content-center" />
            Zlecenia
          </NavLink>
          <NavLink
            to="client/trips"
            className="flex flex-row gap-[8px] content-center  text-gray-700 mb-6 text-center "
          >
            <BsCalendar3 className="w-[20px] h-[20px] mt-[2px] content-center" />
            Wyjazdy
          </NavLink>
        </div>
      )}
      {user.type === 'super_admin' && (
        <div className=" h-screen  pl-[20px] pt-[20px] shadow">
          {!showSettingsMenu && (
            <Navigation setShowSettingsMenu={setShowSettingsMenu} />
          )}
          {showSettingsMenu && (
            <SettingNavigation setShowSettingsMenu={setShowSettingsMenu} />
          )}
        </div>
      )}
    </div>
  )
}

export default Sidebar
