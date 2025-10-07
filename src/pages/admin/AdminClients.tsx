import React, { useState } from 'react'
import type { Clients } from 'type/typeAdmin'
import { FaArrowRight } from 'react-icons/fa6'
import AddButton from '../../components/atoms/AddButton'
import Pagination from '../../components/atoms/Pagination'
import ClientsTable from '../../components/Admin/table/ClientsTable'

function AdminClients() {
  const [perPage, setPerPage] = useState(50)
  const [page, setPage] = useState(1)
  const [rows, setRows] = useState<Clients[]>([])
  return (
    <div className="  pb-[12px]">
      <div className="flex gap-2 items-center">
        <p className="text-orange-300 text-[14px] ">Panel</p>
        <FaArrowRight className="fill-gray-600 w-[8px]" />
        <p className="text-gray-600 text-[14px]">Lista klientów</p>
      </div>
      <div className="flex justify-between mt-[20px] mb-[16px]">
        <h1 className="text-2xl font-medium text-gray-900">Lista klientów</h1>
        <AddButton
          address="/layout/admin/addClient"
          tittle="Dodaj nowego klienta"
        />
      </div>
      <ClientsTable
        perPage={perPage}
        page={page}
        setPage={setPage}
        rows={rows}
        setRows={setRows}
      />
      <Pagination totalPages={perPage} page={page} setPage={setPage} />
    </div>
  )
}

export default AdminClients
