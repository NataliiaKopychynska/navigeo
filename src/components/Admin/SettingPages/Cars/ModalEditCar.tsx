import { IoIosAdd } from 'react-icons/io'
import Input from '../../../../components/atoms/Input'
import ModalWindow from '../../../../components/atoms/ModalWindow'
import type { UseFormRegister } from 'react-hook-form'
import type { PostCar, DataEdit } from '../../../../redux/cars/carsType'
import { useEffect } from 'react'

type ModalEditCarProps = {
  hoverData: DataEdit | null
  register: UseFormRegister<PostCar>
  handleEdit: () => void
  setIsOpenEdit: React.Dispatch<React.SetStateAction<boolean>>
  setHoverData: React.Dispatch<React.SetStateAction<DataEdit | null>>
  watch: any
}

function ModalEditCar({
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
      modalName={'Edytuj samochód'}
      modalIcon={
        <IoIosAdd className="flex items-center justify-center  h-[28px] w-[28px] fill-amber-600" />
      }
      acceptButtonTittle={'Zapisz'}
    >
      <form className="pb-[100px] flex flex-col gap-[16px] border-b border-gray-300">
        <Input
          inputLabel="Nazwa samochodu"
          register={register('name')}
          type="text"
          defaultValue={hoverData?.name ?? ''}
          required={true}
        />
        <Input
          inputLabel="Numer rejestracyjny samochodu"
          register={register('registrationNumber')}
          type="text"
          defaultValue={hoverData?.registrationNumber ?? ''}
          required={true}
        />
      </form>
    </ModalWindow>
  )
}

export default ModalEditCar
