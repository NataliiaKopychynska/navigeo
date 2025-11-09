import ModalWindow from '../../../atoms/ModalWindow'
import Input from '../../../atoms/Input'
import { IoIosAdd } from 'react-icons/io'

type Props = {
  CancelBTN: () => void
  AcceptBTN: () => void
  register: UseFormRegister<Price>
}

function AddPriseTabModal({ CancelBTN, AcceptBTN, register }: Props) {
  return (
    <ModalWindow
      CancelBTN={CancelBTN}
      AcceptBTN={AcceptBTN}
      modalName="Nowy cennik"
      modalIcon={
        <IoIosAdd className="flex items-center justify-center h-[28px] w-[28px] fill-amber-600" />
      }
      acceptButtonTittle="Zapisz"
    >
      <form className="mb-[40px]">
        <Input
          inputLabel="Nazwa"
          register={register('name')}
          type="text"
          placeholder="Nowy cennik"
          required
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

export default AddPriseTabModal
