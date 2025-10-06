import React, { type RefObject } from 'react'

import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import { LuPenLine } from 'react-icons/lu'
import { LuListTodo } from 'react-icons/lu'
import { LiaMapSolid } from 'react-icons/lia'
import type { FiltersOrder } from 'type/type'

type FilterTypeSelectType = {
  setTypeOrderSelect: React.Dispatch<React.SetStateAction<boolean>>
  typeOrderSelect: boolean
  orderRef: RefObject<HTMLTableHeaderCellElement | null>
  typeOrder: string | null
  setFiltersFunction: <K extends keyof FiltersOrder>(
    key: K,
    value: FiltersOrder[K],
  ) => void
}

function FilterTypeSelect({
  setTypeOrderSelect,
  typeOrderSelect,
  orderRef,
  typeOrder,
  setFiltersFunction,
}: FilterTypeSelectType) {
  return (
    <th className=" flex flex-col" ref={orderRef}>
      <h3 className="text-gray-600 bg-gray-100  text-lg font-normal p-[8px] flex flex-col text-left h-[40px] overflow-hidden text-ellipsis">
        Typ zlecenia
      </h3>
      <button
        onClick={() => setTypeOrderSelect(!typeOrderSelect)}
        className="h-[40px] p-[8px]  text-gray-600 border border-gray-200 rounded-[10px] font-light  text-start flex flex-row justify-between"
      >
        <span className="flex-1 truncate">{typeOrder || 'Wybierz'}</span>
        {!typeOrderSelect ? (
          <IoIosArrowDown className="mt-[4px] shrink-0" />
        ) : (
          <IoIosArrowUp className="mt-[4px] shrink-0" />
        )}
      </button>
      {typeOrderSelect && (
        <div className="absolute flex flex-col gap-[8px] top-[90px] bg-gray-100 rounded-b-2xl shadow-2xs p-[8px] min-w-[120px]">
          <button
            type="button"
            onClick={() => setFiltersFunction('typeOrder', 'Tyczenie')}
            className="flex items-center gap-[8px] bg-blue-100 rounded-2xl p-[4px] pl-[12px] w-full text-left"
          >
            <LuPenLine className="stroke-blue-400 w-[16px] h-[16px] mt-[2px]" />
            <span className="text-blue-400 text-sm font-medium">Tyczenie</span>
          </button>
          <button
            type="button"
            onClick={() =>
              setFiltersFunction('typeOrder', 'Mapa do celów projektowych')
            }
            className="flex items-center gap-[8px] bg-orange-100 rounded-2xl p-[4px] pl-[12px] w-full text-left"
          >
            <LiaMapSolid className="fill-orange-400 w-[16px] h-[16px] mt-[2px]" />
            <span className="text-orange-400 text-sm font-medium">
              Mapa do celów projektowych
            </span>
          </button>
          <button
            type="button"
            onClick={() => setFiltersFunction('typeOrder', 'Inwentaryzacja')}
            className="flex items-center gap-[8px] bg-purple-100 rounded-2xl p-[4px] pl-[12px] w-full text-left"
          >
            <LuListTodo className="stroke-purple-400 w-[16px] h-[16px] mt-[2px]" />
            <span className="text-purple-400 text-sm font-medium">
              Inwentaryzacja
            </span>
          </button>
          {/* <div className="flex flex-row gap-[8px] bg-blue-100 rounded-2xl p-[4px] pl-[12px]">
            <LuPenLine className="stroke-blue-400 w-[16px] h-[16px] mt-[2px]" />
            <p className=" text-blue-400 text-sm font-medium">Tyczenie</p>
          </div>
          <div className="flex flex-row gap-[8px] bg-orange-100 rounded-2xl p-[4px] pl-[12px] pr-[12px] ">
            <LiaMapSolid className="fill-orange-400 w-[16px] h-[16px] mt-[2px]" />
            <p className=" text-orange-400 text-sm font-medium">
              Mapa do celów projektowych
            </p>
          </div>
          <div className="flex flex-row gap-[8px] bg-purple-100 rounded-2xl p-[4px] pl-[12px]">
            <LuListTodo className="stroke-purple-400 w-[16px] h-[16px] mt-[2px]" />
            <p className=" text-purple-400 text-sm font-medium">
              Inwentaryzacja
            </p>
          </div> */}
        </div>
      )}
    </th>
  )
}

export default FilterTypeSelect
