import type { FiltersOrder } from '../../../../type/type'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// import { renderTyp } from '../renderTyp'
// import { renderStatus } from '../renderStatus'
import React, { RefObject } from 'react'
import FilterInput from '../../../atoms/FilterInput'
import FilterTypeSelect from './FilterTypeSelect'
import FilterStatusSelect from './FilterStatusSelect'

type OrderHeadProps = {
  orderRef: RefObject<HTMLTableHeaderCellElement | null>
  typeOrderSelect: boolean
  setTypeOrderSelect: React.Dispatch<React.SetStateAction<boolean>>
  statusRef: RefObject<HTMLTableHeaderCellElement | null>
  typeStatusSelect: boolean
  setTypeStatusSelect: React.Dispatch<React.SetStateAction<boolean>>
  setFiltersFunction: <K extends keyof FiltersOrder>(
    key: K,
    value: FiltersOrder[K],
  ) => void
  filters: FiltersOrder
}

function OrderHead({
  orderRef,
  typeOrderSelect,
  setTypeOrderSelect,
  statusRef,
  typeStatusSelect,
  setTypeStatusSelect,
  setFiltersFunction,
  filters,
}: OrderHeadProps) {
  const isSameDay = (date1: Date, date2: Date | string | null) => {
    if (!date2) return false
    const d2 = typeof date2 === 'string' ? new Date(date2) : date2
    return (
      date1.getFullYear() === d2.getFullYear() &&
      date1.getMonth() === d2.getMonth() &&
      date1.getDate() === d2.getDate()
    )
  }

  return (
    <thead>
      <tr className="grid grid-cols-6">
        <FilterInput
          tittle="Zlecenie"
          search={filters.search}
          setFiltersFunction={setFiltersFunction}
        />
        <FilterTypeSelect
          setTypeOrderSelect={setTypeOrderSelect}
          typeOrderSelect={typeOrderSelect}
          orderRef={orderRef}
          typeOrder={filters.typeOrder}
          setFiltersFunction={setFiltersFunction}
        />
        <FilterStatusSelect
          status={filters.status}
          statusRef={statusRef}
          typeStatusSelect={typeStatusSelect}
          setTypeStatusSelect={setTypeStatusSelect}
          setFiltersFunction={setFiltersFunction}
        />

        <th className=" flex flex-col">
          <h3 className="bg-gray-100 text-gray-600 text-lg font-normal p-[8px] flex flex-col text-left h-[40px] overflow-hidden text-ellipsis">
            Data utworzenia
          </h3>
          <DatePicker
            selected={filters.createAt ? new Date(filters.createAt) : null}
            onChange={(date: Date | null) =>
              setFiltersFunction(
                'createAt',
                date ? date.toISOString().split('T')[0] : '',
              )
            }
            placeholderText="Wybierz datę"
            className="h-[40px] p-[10px] text-gray-900 font-normal border border-gray-200 rounded-[10px] w-full focus:outline-none focus:ring-0"
            calendarClassName=" border border-gray-200 rounded-xl shadow-lg p-2 text-gray-600 font-normal"
            dateFormat="yyyy-MM-dd"
            dayClassName={(day) => {
              const isSelected =
                filters.createAt &&
                new Date(filters.createAt).toDateString() === day.toDateString()

              const isToday = new Date().toDateString() === day.toDateString()

              if (isSelected) return 'bg-orange-500 text-white rounded-full'
              if (isToday) return 'bg-orange-200 text-orange-700 rounded-full'
              return ''
            }}
          />
        </th>

        <th className=" flex flex-col">
          <h3 className="text-gray-600 bg-gray-100 text-lg font-normal p-[8px] flex flex-col text-left h-[40px] overflow-hidden text-ellipsis">
            Przewidywana data z ośrodka
          </h3>
          <DatePicker
            selected={
              filters.predictedDate ? new Date(filters.predictedDate) : null
            }
            onChange={(date: Date | null) =>
              setFiltersFunction(
                'predictedDate',
                date ? date.toISOString().split('T')[0] : '',
              )
            }
            placeholderText="Wybierz datę"
            className="h-[40px] p-[10px] text-gray-900 font-normal border border-gray-200 rounded-[10px] w-full focus:outline-none focus:ring-0"
            calendarClassName=" border border-gray-200 rounded-xl shadow-lg p-2 text-gray-600 font-normal"
            dateFormat="yyyy-MM-dd"
            dayClassName={(day) => {
              const isSelected =
                filters.predictedDate &&
                new Date(filters.predictedDate).toDateString() ===
                  day.toDateString()

              const isToday = new Date().toDateString() === day.toDateString()

              if (isSelected) return 'bg-orange-500 text-white rounded-full'
              if (isToday) return 'bg-orange-200 text-orange-700 rounded-full'
              return ''
            }}
          />
        </th>

        <th className=" flex flex-col">
          <h3 className="text-gray-600 bg-gray-100 text-lg font-normal p-[8px] flex flex-col text-left h-[40px] overflow-hidden text-ellipsis ">
            Termin realizacji
          </h3>

          <DatePicker
            selected={filters.deadline ? new Date(filters.deadline) : null}
            onChange={(date: Date | null) =>
              setFiltersFunction(
                'deadline',
                date ? date.toISOString().split('T')[0] : '',
              )
            }
            placeholderText="Wybierz datę"
            className="h-[40px] p-[10px] text-gray-900 font-normal border border-gray-200 rounded-[10px] w-full focus:outline-none focus:ring-0"
            calendarClassName=" border border-gray-200 rounded-xl shadow-lg p-2 text-gray-600 font-normal"
            dateFormat="yyyy-MM-dd"
            dayClassName={(day) => {
              const isSelected =
                filters.deadline &&
                new Date(filters.deadline).toDateString() === day.toDateString()

              const isToday = new Date().toDateString() === day.toDateString()

              if (isSelected) return 'bg-orange-500 text-white rounded-full'
              if (isToday) return 'bg-orange-200 text-orange-700 rounded-full'
              return ''
            }}
          />
        </th>
      </tr>
    </thead>
  )
}

export default OrderHead
