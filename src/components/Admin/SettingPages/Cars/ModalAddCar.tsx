import Input from '../../../../components/atoms/Input'
import ModalWindow from '../../../../components/atoms/ModalWindow'
import { IoIosAdd } from 'react-icons/io'
import type { UseFormRegister } from 'react-hook-form'
import type { PostCar } from '../../../../redux/cars/carsType'

type ModalAddCarProps = {
  CancelBTN: () => void
  AcceptBTN: () => void
  register: UseFormRegister<PostCar>
}

function ModalAddCar({ CancelBTN, AcceptBTN, register }: ModalAddCarProps) {
  return (
    <ModalWindow
      CancelBTN={CancelBTN}
      AcceptBTN={AcceptBTN}
      modalName="Dodaj samochód"
      modalIcon={
        <IoIosAdd className="flex items-center justify-center h-[28px] w-[28px] fill-amber-600" />
      }
      acceptButtonTittle="Dodaj nowy samochód"
    >
      <form className="mb-[40px]">
        <Input
          inputLabel="Nazwa samochodu"
          register={register('name')}
          type="text"
          placeholder=""
          required
        />
        <Input
          inputLabel="Numer rejestracyjny samochodu"
          register={register('registrationNumber')}
          type="text"
          placeholder=""
          required
        />
      </form>
    </ModalWindow>
  )
}

export default ModalAddCar
