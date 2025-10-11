import { NavLink } from 'react-router-dom'
// import type { ItemNav } from './setting'
import { FaPeopleGroup } from 'react-icons/fa6'
import { GrList } from 'react-icons/gr'
import { BsCalendar3 } from 'react-icons/bs'
import type React from 'react'

type Props = {
  setShowSettingsMenu: React.Dispatch<React.SetStateAction<boolean>>
}

function Navigation({ setShowSettingsMenu }: Props) {
  return (
    <div>
      <div>
        <NavLink to="admin/setting" onClick={() => setShowSettingsMenu(true)}>
          <img
            src="/public/delair-tech.svg"
            className="w-[160px] h-[40px]   mb-[20px]"
          />
        </NavLink>
        <NavLink
          to="admin/orders"
          className="flex flex-row gap-[8px] content-center  text-gray-700 mb-6 text-center"
        >
          <GrList className="w-[20px] h-[20px] mt-[2px] content-center" />
          Zlecenia
        </NavLink>
        <NavLink
          to="admin/trips"
          className="flex flex-row gap-[8px] content-center  text-gray-700 mb-6 text-center "
        >
          <BsCalendar3 className="w-[20px] h-[20px] mt-[2px] content-center" />
          Wyjazdy
        </NavLink>
        <NavLink
          to="admin/clients"
          className="flex flex-row gap-[8px] content-center  text-gray-700 mb-6 text-center "
        >
          <FaPeopleGroup className="w-[20px] h-[20px] mt-[2px] content-center" />
          Klienci
        </NavLink>
      </div>
      {/* <NavLink
        to="admin/clients"
        className="flex flex-row gap-[8px] content-center  text-gray-700 mb-6 text-center "
      >
        Wyloguj
      </NavLink> */}
    </div>
  )
}

export default Navigation
