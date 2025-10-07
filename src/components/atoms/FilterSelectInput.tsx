import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'

type Props<T extends string> = {
  options: { value: T; label: string }[]
  selected: T | null
  setSelected: (value: T) => void
  wrapperRef: React.RefObject<HTMLTableHeaderCellElement | null>
  inputLabel: string
}

function FilterSelectInput<T extends string>({
  options,
  selected,
  setSelected,
  wrapperRef,
  inputLabel,
}: Props<T>) {
  const [isOpen, setIsOpen] = useState(false)
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
  }, [wrapperRef])
  return (
    <th className="flex flex-col bg-gray-100" ref={wrapperRef}>
      <h3 className="text-gray-600  text-lg font-normal p-[8px] flex flex-col text-left h-[40px] overflow-hidden text-ellipsis">
        {inputLabel}
      </h3>
      <div className="relative w-full h-[40px] p-[8px]   text-gray-600 border border-gray-200 bg-white rounded-[10px] font-light  text-start flex flex-row justify-between">
        <div
          className="flex justify-between pl-[8px]  w-full relative gap-[4px]"
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
                <span>{option.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </th>
  )
}

export default FilterSelectInput
