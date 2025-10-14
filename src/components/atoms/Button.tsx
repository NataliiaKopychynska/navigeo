import React from 'react'

type Props = {
  tittle: string
  disabled?: boolean
  type: 'button' | 'submit' | 'reset'
}

function Button({ tittle, disabled = false, type = 'submit' }: Props) {
  return (
    <button
      type={type}
      className={` pb-[2px] shadow-md flex gap-1 items-center justify-center pr-[8px] h-[40px] w-[456px] rounded-[10px] text-[16px] font-normal font-stretch-semi-expanded border-[1px] ${
        disabled
          ? 'bg-[#f3ab9b] border-[#f3ab9b] cursor-not-allowed text-white'
          : 'bg-[#f28557] border-[#d75336] text-white hover:bg-[#ef6e23]'
      }`}
    >
      {tittle}
    </button>
  )
}

export default Button
