import ModalWindow from '../../../../components/atoms/ModalWindow'
import { MdDeleteOutline } from 'react-icons/md'
export type Props = {
  CancelBTN: () => void
  AcceptBTN: () => void
}

function ModalDeleteNote({ CancelBTN, AcceptBTN }: Props) {
  return (
    <ModalWindow
      CancelBTN={CancelBTN}
      AcceptBTN={AcceptBTN}
      modalName={'Usuwanie zadania'}
      modalIcon={
        <MdDeleteOutline className="flex items-center justify-center  h-[28px] w-[28px] fill-red-600" />
      }
      acceptButtonTittle={'Usuń zadanie'}
    >
      <p className="text-gray-600 mb-16px">
        Usunięcie zadania skutkuje wymazaniem danych odnośnie danego zadania w
        systemie.
      </p>
      <h3 className="text-gray-700 pb-[32px] border-b border-gray-300">
        Czy jesteś pewien, że chcesz usunąć zadanie?
      </h3>
    </ModalWindow>
  )
}

export default ModalDeleteNote
