import React from 'react'
import ButtonMedium from './ButtonMedium'
import DisabledButtonM from './DisabledButtonM'
import { MdOutlineCancel } from 'react-icons/md'

type Props = {
  modalIcon: React.ReactNode
  modalName: string
  CancelBTN: () => void
  AcceptBTN: () => void
  children: React.ReactNode
  acceptButtonTittle: string
}

function ModalWindow({
  modalIcon,
  modalName,
  children,
  CancelBTN,
  AcceptBTN,
  acceptButtonTittle,
}: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.5)] flex justify-center items-center ">
      <div className=" bg-white flex flex-col justify-center w-[516px] gap-[16px] p-[20px] shadow-md rounded-[12px] ">
        <div className="flex justify-between">
          <div className="flex gap-[8px]  ">
            {modalIcon}
            <h2 className="text-lg font-semibold mb-4">{modalName}</h2>
          </div>
          <MdOutlineCancel
            onClick={CancelBTN}
            className="flex items-center justify-center  h-[24px] w-[24px] fill-gray-300 hover:fill-gray-400"
          />
        </div>
        {children}
        <div className="flex justify-end gap-[16px]">
          <DisabledButtonM tittle={'Anuluj'} onClick={CancelBTN} />
          <ButtonMedium tittle={acceptButtonTittle} onClick={AcceptBTN} />
        </div>
      </div>
    </div>
  )
}

export default ModalWindow
