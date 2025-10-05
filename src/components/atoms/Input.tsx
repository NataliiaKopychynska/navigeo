import React from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'

type InputProps = {
  inputLabel: string
  register: UseFormRegisterReturn<any>
  type: string
  placeholder: string
}
function Input({ inputLabel, register, type, placeholder }: InputProps) {
  return (
    <div className="flex w-full flex-col">
      <h3 className="text-gray-800 text-ml font-normal pl-[8px] pb-[4px]">
        {inputLabel}
      </h3>
      <input
        {...register}
        type={type}
        placeholder={placeholder}
        className="relative  h-[40px] p-[8px]   text-gray-600 border border-gray-200 rounded-[10px] font-light  text-start flex flex-row justify-between font-light placeholder:font-light "
      />
    </div>
  )
}

export default Input
