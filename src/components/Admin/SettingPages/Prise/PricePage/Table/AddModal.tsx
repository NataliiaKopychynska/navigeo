import SelectInput from '../../../../../atoms/SelectInput'
import Input from '../../../../../atoms/Input'
import ModalWindow from '../../../../../atoms/ModalWindow'
import React from 'react'
import type { UseFormRegister } from 'react-hook-form'
import { IoIosAdd } from 'react-icons/io'

type AddPriceFormData = {
  basePrice: number
  additionalPrice: number
}

type Props = {
  CancelBTN: () => void
  AcceptBTN: () => void
  register: UseFormRegister<AddPriceFormData>
  options: { value: string; label: string }[]
  selected: string | null
  setSelected: (value: string) => void
  wrapperRef: React.RefObject<HTMLDivElement | null>
}

function AddModal({
  CancelBTN,
  AcceptBTN,
  register,
  options,
  selected,
  setSelected,
  wrapperRef,
}: Props) {
  return (
    <ModalWindow
      CancelBTN={CancelBTN}
      AcceptBTN={AcceptBTN}
      modalName="Definiuj cennik"
      modalIcon={
        <IoIosAdd className="flex items-center justify-center h-[28px] w-[28px] fill-amber-600" />
      }
      acceptButtonTittle="Zapisz"
    >
      <form>
        <SelectInput
          options={options}
          selected={selected}
          setSelected={setSelected}
          wrapperRef={wrapperRef}
          inputLabel="Powiat"
        />
        <Input
          inputLabel="Kwota (za 100m przyłącza)"
          register={register('basePrice', { valueAsNumber: true })}
          type="number"
          placeholder="140"
          required
        />
        <Input
          inputLabel="Kwota (za kolejne 100m przyłącza)"
          register={register('additionalPrice', { valueAsNumber: true })}
          type="number"
          placeholder="140"
          required
        />
      </form>
    </ModalWindow>
  )
}

export default AddModal
