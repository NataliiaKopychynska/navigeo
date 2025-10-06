import React, { useEffect, useRef, useState } from 'react'
import type { FiltersOrder, Order } from '../../../type/type'
import { fetchOrders } from '../../../api/client/orders'
import OrderRow from './OrderRow'
import OrderHead from './OrderHead/OrderHead'

type OrdersTableType = {
  setPage: React.Dispatch<React.SetStateAction<number>>
  page: number
  perPage: number
  rows: Order[]
  setRows: React.Dispatch<React.SetStateAction<Order[]>>
}

function OrdersTable({
  setPage,
  page,
  perPage,
  rows,
  setRows,
}: OrdersTableType) {
  const [typeOrderSelect, setTypeOrderSelect] = useState(false)
  const [typeStatusSelect, setTypeStatusSelect] = useState(false)
  const [filters, setFilters] = useState<FiltersOrder>({
    search: '',
    typeOrder: null,
    status: null,
    createAt: '',
    predictedDate: '',
    deadline: '',
  })

  const orderRef = useRef<HTMLTableHeaderCellElement | null>(null)
  const statusRef = useRef<HTMLTableHeaderCellElement | null>(null)

  const setFiltersFunction = <K extends keyof FiltersOrder>(
    key: K,
    value: FiltersOrder[K],
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        orderRef.current &&
        !orderRef.current.contains(event.target as Node)
      ) {
        setTypeOrderSelect(false)
      }
      if (
        statusRef.current &&
        !statusRef.current.contains(event.target as Node)
      ) {
        setTypeStatusSelect(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchOrders({
          page,
          per_page: perPage,
          q: filters.search || undefined,
          type: filters.typeOrder,
          status: filters.status,
          createdAt: filters.createAt || undefined,
          estimatedDecisionDate: filters.predictedDate || undefined,
          realizationDate: filters.deadline || undefined,
        })

        setRows(data.data)
        // console.log(data.data)
      } catch (err) {
        console.error(err)
      }
    }
    load()
  }, [page, perPage, filters, setRows])

  useEffect(() => {
    setPage(1)
  }, [filters, perPage])

  return (
    <table className=" relative table-auto">
      <OrderHead
        filters={filters}
        orderRef={orderRef}
        typeOrderSelect={typeOrderSelect}
        setTypeOrderSelect={setTypeOrderSelect}
        statusRef={statusRef}
        typeStatusSelect={typeStatusSelect}
        setTypeStatusSelect={setTypeStatusSelect}
        setFiltersFunction={setFiltersFunction}
      />
      {rows ? (
        <OrderRow rows={rows} />
      ) : (
        <tbody>
          <tr className="grid grid-cols-6 border-b p-2">
            <td className="text-gray-600 font-light">---</td>
            <td className="text-gray-600 font-light">---</td>
            <td className="text-gray-600 font-light">---</td>
            <td className="text-gray-600 font-light">---</td>
            <td className="text-gray-600 font-light">---</td>
            <td className="text-gray-600 font-light">---</td>
          </tr>
        </tbody>
      )}
    </table>
  )
}

export default OrdersTable
