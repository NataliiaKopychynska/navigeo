import { Outlet } from 'react-router-dom'
import { itemsNav } from '../../components/Admin/Setting /setting'

import { FaArrowRight } from 'react-icons/fa6'

function AdminSetting() {
  return (
    <div>
      <Outlet />
    </div>
    // <div className="pb-[12px]">
    //   <div className="flex gap-2 items-center">
    //     <p className="text-orange-300 text-[14px] ">Panel</p>
    //     <FaArrowRight className="fill-gray-600 w-[8px]" />
    //     <p className="text-gray-600 text-[14px]">Ustawienia</p>
    //   </div>
    //   <h1 className="text-2xl font-medium text-gray-900 pt-[24px]">
    //     Ustawienia
    //   </h1>
    // </div>
  )
}

export default AdminSetting
