import { fetchClients } from '../../../api/admin/clients'
import React, { useEffect, useRef, useState } from 'react'
import type { Clients, ClientsFilters } from 'type/typeAdmin'
import ClientsHead from './ClientsHead'
import ClientRow from './ClientRow'

type OrdersTableType = {
  setPage: React.Dispatch<React.SetStateAction<number>>
  page: number
  perPage: number
  rows: Clients[]
  setRows: React.Dispatch<React.SetStateAction<Clients[]>>
}

function ClientsTable({
  setPage,
  page,
  perPage,
  rows,
  setRows,
}: OrdersTableType) {
  const [selectTypeIsOpen, setSelectTypeIsOpen] = useState(false)
  const [filters, setFilters] = useState<ClientsFilters>({
    name: '',
    type: null,
    phone: '',
    mail: '',
    address: '',
  })
  const typeClientRef = useRef<HTMLTableHeaderCellElement | null>(null)

  const setFiltersFunction = <K extends keyof ClientsFilters>(
    key: K,
    value: ClientsFilters[K],
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
    setPage(1)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        typeClientRef.current &&
        !typeClientRef.current?.contains(event.target as Node)
      ) {
        setSelectTypeIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchClients({
          page,
          per_page: perPage,
          pagination: true,
          fullName: filters.name,
        })
        setRows(data)
        // console.log('load rows clients ', data)
      } catch (error) {
        console.log('Err load', error)
      }
    }
    load()
  }, [page, perPage, filters, setRows])

  return (
    <table className=" relative table-auto rounded-[10px] overflow-hidden">
      <ClientsHead
        typeClientRef={typeClientRef}
        selectTypeIsOpen={selectTypeIsOpen}
        setSelectTypeIsOpen={setSelectTypeIsOpen}
        setFiltersFunction={setFiltersFunction}
        filters={filters}
      />
      {rows.length > 0 ? (
        <ClientRow rows={rows} />
      ) : (
        <tbody>
          <tr className="grid grid-cols-5 border-b  border-gray-300 ">
            <td className="text-gray-600 p-2 border-r border-gray-300 font-light">
              ---
            </td>
            <td className="text-gray-600 p-2 border-r border-gray-300 font-light">
              ---
            </td>
            <td className="text-gray-600 p-2 border-r border-gray-300 font-light">
              ---
            </td>
            <td className="text-gray-600 p-2 border-r border-gray-300 font-light">
              ---
            </td>
            <td className="text-gray-600 p-2 font-light">---</td>
          </tr>
        </tbody>
      )}
    </table>
  )
}

export default ClientsTable
