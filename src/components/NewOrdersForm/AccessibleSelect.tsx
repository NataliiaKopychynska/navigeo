import React, { useState, useRef, useEffect, useId } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'
import { LuPenLine } from 'react-icons/lu'
import { LuListTodo } from 'react-icons/lu'
import { LiaMapSolid } from 'react-icons/lia'

export type Option = { label: string; value: string }

const options = [
  {
    value: 'staking_out',
    label: <span className="text-blue-400 text-sm font-medium">Tyczenie</span>,
    icon: <LuPenLine className="stroke-blue-400 w-[16px] h-[16px] mt-[2px]" />,
  },
  {
    value: 'design_purposes_map',
    label: (
      <span className="text-orange-400 text-sm font-medium">
        Mapa do celów projektowych
      </span>
    ),
    icon: (
      <LiaMapSolid className="fill-orange-400 w-[16px] h-[16px] mt-[2px]" />
    ),
  },
  {
    value: 'inventory',
    label: (
      <span className="text-purple-400 text-sm font-medium">
        Inwentaryzacja
      </span>
    ),
    icon: (
      <LuListTodo className="stroke-purple-400 w-[16px] h-[16px] mt-[2px]" />
    ),
  },
]

function AccessibleSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="relative w-[456px] h-[40px] p-[8px]  text-gray-600 border border-gray-200 rounded-[10px] font-light  text-start flex flex-row justify-between"
    >
      <div
        className="flex flex-col w-[312px] relative gap-[4px]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected ? (
          <span className="flex items-center gap-2">
            {options.find((o) => o.value === selected)?.label}
          </span>
        ) : (
          <span className="text-gray-400">Wybierz typ</span>
        )}
        {!isOpen ? (
          <IoIosArrowDown className="mt-[4px] shrink-0" />
        ) : (
          <IoIosArrowUp className="mt-[4px] shrink-0" />
        )}
      </div>
      {isOpen && (
        <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                setSelected(option.value)
                setIsOpen(false)
              }}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <span>
                {option.icon}

                {option.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AccessibleSelect
