import React from 'react'
import type { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form'

type TextAriasProps = {
  inputLabel: string
  register: UseFormRegisterReturn<any>
}

function TextArias({ inputLabel, register }: TextAriasProps) {
  return (
    <div className="flex flex-col">
      <h3 className="text-gray-800 text-ml font-normal pl-[8px] pb-[4px]">
        {inputLabel}
      </h3>
      <textarea
        {...register}
        className="w-full h-[100px] p-[8px] text-gray-600 border border-gray-200 rounded-[10px] font-light placeholder:font-light"
      />
    </div>
  )
}

export default TextArias
