import { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'

type SelectInputProps = {
  options: { value: string; label: string }[]
  selected: string | null
  setSelected: (value: string) => void
  wrapperRef: React.RefObject<HTMLDivElement | null>
  inputLabel: string
}

function SelectInput({
  options,
  selected,
  setSelected,
  wrapperRef,
  inputLabel,
}: SelectInputProps) {
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
  }, [])

  return (
    <div className="flex flex-col">
      <h3 className="text-gray-800 text-[14px] font-normal pl-[8px] pb-[4px]">
        {inputLabel}
      </h3>
      <div
        ref={wrapperRef}
        className="relative w-full h-[40px] p-[8px]   text-gray-600 border border-gray-200 rounded-[10px] font-light  text-start flex flex-row justify-between"
      >
        {/* w-[456px] */}
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
    </div>
  )
}

export default SelectInput
