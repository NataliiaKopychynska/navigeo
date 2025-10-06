import React, { type RefObject } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { FaCircleExclamation } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import type { FiltersOrder } from 'type/type'

type StatusFilterType = {
  setFiltersFunction: <K extends keyof FiltersOrder>(
    key: K,
    value: FiltersOrder[K],
  ) => void
  setTypeStatusSelect: React.Dispatch<React.SetStateAction<boolean>>
  typeStatusSelect: boolean
  statusRef: RefObject<HTMLTableHeaderCellElement | null>
  status: string | null
}

function FilterStatusSelect({
  setFiltersFunction,
  setTypeStatusSelect,
  typeStatusSelect,
  status,
  statusRef,
}: StatusFilterType) {
  return (
    <th className=" flex flex-col" ref={statusRef}>
      <h3 className="text-gray-600 bg-gray-100  text-lg font-normal p-[8px] flex flex-col text-left h-[40px] overflow-hidden text-ellipsis">
        Status
      </h3>
      <button
        onClick={() => setTypeStatusSelect(!typeStatusSelect)}
        className=" h-[40px] p-[8px]  text-gray-600 border border-gray-200 rounded-[10px] font-light  text-start flex flex-row justify-between"
      >
        <span className="flex-1 truncate">{status || 'Wybierz'}</span>
        {!typeStatusSelect ? (
          <IoIosArrowDown className="mt-[4px] shrink-0" />
        ) : (
          <IoIosArrowUp className="mt-[4px] shrink-0" />
        )}
      </button>
      {typeStatusSelect && (
        <div className="absolute flex flex-col gap-[8px] top-[90px] bg-gray-100 rounded-b-2xl shadow-2xs p-[8px] min-w-[120px]">
          <div
            onClick={() =>
              setFiltersFunction('status', 'Zgłoszenie pracy geodezyjnej')
            }
            className="flex flex-row gap-[8px] bg-blue-100 rounded-2xl p-[4px] pl-[12px]"
          >
            <FaCheckCircle className="fill-gray-600 w-[16px] h-[16px] mt-[2px]" />
            <span className=" text-gray-600 text-sm font-medium">
              Zgłoszenie pracy geodezyjnej
            </span>
          </div>
          <div
            onClick={() => setFiltersFunction('status', 'Rozpoczęto pomiar')}
            className="flex flex-row gap-[8px] bg-green-100 rounded-2xl p-[4px] pl-[12px] pr-[12px] "
          >
            <FaCheckCircle className="fill-gray-600 w-[16px] h-[16px] mt-[2px]" />
            <span className=" text-gray-600 text-sm font-medium">
              Rozpoczęto pomiar
            </span>
          </div>
          <div
            onClick={() => setFiltersFunction('status', 'Dokonano pomiaru')}
            className="flex flex-row gap-[8px] bg-purple-100 rounded-2xl p-[4px] pl-[12px]"
          >
            <FaCheckCircle className="fill-gray-600 w-[16px] h-[16px] mt-[2px]" />
            <span className=" text-gray-600 text-sm font-medium">
              Dokonano pomiaru
            </span>
          </div>
          <div
            onClick={() => setFiltersFunction('status', 'Gotowe opracowanie')}
            className="flex flex-row gap-[8px] bg-yellow-100 rounded-2xl p-[4px] pl-[12px]"
          >
            <FaCheckCircle className="fill-gray-600 w-[16px] h-[16px] mt-[2px]" />
            <span className=" text-gray-600 text-sm font-medium">
              Gotowe opracowanie
            </span>
          </div>
          <div
            onClick={() => setFiltersFunction('status', 'Opracowanie złożone')}
            className="flex flex-row gap-[8px] bg-orange-100 rounded-2xl p-[4px] pl-[12px]"
          >
            <FaCheckCircle className="fill-gray-600 w-[16px] h-[16px] mt-[2px]" />
            <span className=" text-gray-600 text-sm font-medium">
              Opracowanie złożone
            </span>
          </div>
          <div
            onClick={() => setFiltersFunction('status', 'Problem z realizacją')}
            className="flex flex-row gap-[8px] bg-red-100 rounded-2xl p-[4px] pl-[12px]"
          >
            <FaCircleExclamation className="fill-gray-600 w-[16px] h-[16px] mt-[2px]" />
            <span className=" text-gray-600 text-sm font-medium">
              Problem z realizacją
            </span>
          </div>
        </div>
      )}
    </th>
  )
}

export default FilterStatusSelect
