import React, { useEffect } from 'react'
import type { DataEdit, Note } from '../../../../redux/notes/notesTypes'
import type { UseFormRegister } from 'react-hook-form'
import { IoIosAdd } from 'react-icons/io'
import Input from '../../../../components/atoms/Input'
import ModalWindow from '../../../../components/atoms/ModalWindow'

type ModalEditCarProps = {
  hoverData: DataEdit | null
  register: UseFormRegister<Note>
  handleEdit: () => void
  setIsOpenEdit: React.Dispatch<React.SetStateAction<boolean>>
  setHoverData: React.Dispatch<React.SetStateAction<DataEdit | null>>
  watch: any
}

function ModalEditNote({
  hoverData,
  register,
  handleEdit,
  setIsOpenEdit,
  setHoverData,
  watch,
}: ModalEditCarProps) {
  useEffect(() => {
    const subscription = watch((values) => {
      setHoverData((prev) => ({ ...prev!, ...values }))
    })
    return () => subscription.unsubscribe()
  }, [watch])
  return (
    <ModalWindow
      CancelBTN={() => setIsOpenEdit((prev) => !prev)}
      AcceptBTN={handleEdit}
      modalName={'Edytuj zadanie'}
      modalIcon={
        <IoIosAdd className="flex items-center justify-center  h-[28px] w-[28px] fill-amber-600" />
      }
      acceptButtonTittle={'Zapisz'}
    >
      <form className="pb-[100px] flex flex-col gap-[16px] border-b border-gray-300">
        <Input
          inputLabel="Nazwa samochodu"
          register={register('text')}
          type="text"
          defaultValue={hoverData?.text ?? ''}
          required={true}
        />
      </form>
    </ModalWindow>
  )
}

export default ModalEditNote
