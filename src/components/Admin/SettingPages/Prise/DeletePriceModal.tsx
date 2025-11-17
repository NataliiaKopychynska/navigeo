import ModalWindow from '../../../../components/atoms/ModalWindow'
import { MdDeleteOutline } from 'react-icons/md'
export type Props = {
  CancelBTN: () => void
  AcceptBTN: () => void
}

function DeletePriceModal({ CancelBTN, AcceptBTN }: Props) {
  return (
    <ModalWindow
      CancelBTN={CancelBTN}
      AcceptBTN={AcceptBTN}
      modalName={'Usuwanie cennika'}
      modalIcon={
        <MdDeleteOutline className="flex items-center justify-center  h-[28px] w-[28px] fill-red-600" />
      }
      acceptButtonTittle={'Usuń'}
    >
      <p className="text-gray-600 mb-16px">
        Usunięcie tego cennika sprawi, że cena dla tego powiatu będzie naliczana
        na podstawie ceny standardowej.
      </p>
      <h3 className="text-gray-700 pb-[32px] border-b border-gray-300">
        Czy jesteś pewien, że chcesz usunąć ten cennik?
      </h3>
    </ModalWindow>
  )
}

export default DeletePriceModal
