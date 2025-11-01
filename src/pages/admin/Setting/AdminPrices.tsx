import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
// import MiddleButton from '../../../components/atoms/MiddleButton'

export default function AdminPrices() {
  //  const [page, setPage] = useState(1)
  //  const [perPage, setPerPage] = useState(50)

  const [isOpenAdd, setIsOpenAdd] = useState(false)
  //  const [isOpenEdit, setIsOpenEdit] = useState(false)
  //  const [isOpenDelete, setIsOpenDelete] = useState(false)
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between mt-[20px] mb-[16px]">
        <h1 className="text-2xl font-medium text-gray-900">Grupy cennikowe</h1>

        {/* <MiddleButton
          tittle="Dodaj samochód"
          type="add"
          onClick={() => setIsOpenAdd((prev) => !prev)}
        /> */}
      </div>
      <div className="w-full pb-[8px] border-b-gray-300 ">
        <NavLink
          to="/layout/admin/setting/prices/mapForDesignPurposes"
          className="text-gray-700"
        >
          Mapa do celów projektowych
        </NavLink>
        <NavLink to="/layout/admin/setting/prices/inventoryStaking">
          Inwentaryzacja, tyczenie
        </NavLink>
      </div>
      <Outlet />
    </div>
  )
}
