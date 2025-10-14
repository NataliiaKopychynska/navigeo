import React from 'react'

type Props = {
  tittle: string
  type?: 'button' | 'reset'
  onClick: () => void
}

function DisabledButtonM({ tittle, type = 'button', onClick }: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        'shadow-md w-fit  pl-[16px] pr-[16px] pb-[2px] h-[30px]  rounded-[10px] text-[14px] font-normal border-[1px] bg-gray-400 border-gray-400  text-white hover:bg-gray-500 hover:border-gray-500'
      }
    >
      {tittle}
    </button>
  )
}

export default DisabledButtonM
