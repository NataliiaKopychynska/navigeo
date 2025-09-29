import { NavLink } from 'react-router-dom'
import { GrList } from 'react-icons/gr'
import { BsCalendar3 } from 'react-icons/bs'

function Sidebar() {
  return (
    <div className="w-[200px] ">
      <NavLink to="setting" className="pl-[12px]">
        <img
          src="/public/delair-tech.svg"
          className="w-[160px] h-[80px]  justify-center pl-[20px]"
        />
      </NavLink>
      <NavLink
        to="orders"
        className="flex flex-row gap-[8px] content-center  text-gray-700 mb-6 text-center pl-[20px]"
      >
        <GrList className="w-[20px] h-[20px] mt-[2px] content-center" />
        Zlecenia
      </NavLink>
      <NavLink
        to="trips"
        className="flex flex-row gap-[8px] content-center  text-gray-700 mb-6 text-center pl-[20px]"
      >
        <BsCalendar3 className="w-[20px] h-[20px] mt-[2px] content-center" />
        Wyjazdy
      </NavLink>
    </div>
  )
}

export default Sidebar
