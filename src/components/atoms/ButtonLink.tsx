type Props = {
  tittle: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick: () => void
}
import React from 'react'

function ButtonLink({
  tittle,
  disabled = false,
  type = 'submit',
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`shadow-md w-fit  pl-[16px] pr-[16px] h-[30px]  rounded-[10px] text-[14px] font-normal border-[1px] ${
        disabled
          ? 'bg-[#ffffff00]  cursor-not-allowed text-gray-400'
          : ' text-gray-600 border-transparent hover:bg-gray-100 hover:border-gray-400'
      }`}
    >
      {tittle}
    </button>
  )
}

export default ButtonLink
