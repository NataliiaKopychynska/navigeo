import type { Note } from 'redux/notes/notesTypes'
import Input from '../../../../components/atoms/Input'
import ModalWindow from '../../../../components/atoms/ModalWindow'
import { IoIosAdd } from 'react-icons/io'

type Props = {
  CancelBTN: () => void
  AcceptBTN: () => void
  register: UseFormRegister<Note>
}

export default function ModalAddTask({
  CancelBTN,
  AcceptBTN,
  register,
}: Props) {
  return (
    <ModalWindow
      CancelBTN={CancelBTN}
      AcceptBTN={AcceptBTN}
      modalName="Dodaj zadanie"
      modalIcon={
        <IoIosAdd className="flex items-center justify-center h-[28px] w-[28px] fill-amber-600" />
      }
      acceptButtonTittle="Dodaj nowe zadanie "
    >
      <form className="mb-[40px]">
        <Input
          inputLabel="Zadanie"
          register={register('text')}
          type="text"
          placeholder="Wpisz treść zadania"
          required
        />
      </form>
    </ModalWindow>
  )
}
