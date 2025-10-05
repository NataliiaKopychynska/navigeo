import { useState } from 'react'
import AddOrders from '../../../components/AddOrders'
import OrdersTable from '../../../components/OrdersTable/OrdersTable'
import type { Order } from '../../../type/type'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Orders() {
  const [perPage, setPerPage] = useState(50)
  const [page, setPage] = useState(1)
  const [rows, setRows] = useState<Order[]>([])
  return (
    <div className="  pb-[12px]">
      <div className="flex gap-2 items-center">
        <p className="text-orange-300 text-[14px] ">Panel</p>
        <FaArrowRight className="fill-gray-600 w-[8px]" />
        <p className="text-gray-600 text-[14px]">Zlecenia</p>
      </div>
      <div className="flex justify-between mt-[20px] mb-[16px]">
        <h1 className="text-2xl font-medium text-gray-900">Twoje zlecenia</h1>
        <AddOrders />
      </div>
      <OrdersTable
        perPage={perPage}
        page={page}
        setPage={setPage}
        rows={rows}
        setRows={setRows}
      />
    </div>
  )
}

export default Orders
