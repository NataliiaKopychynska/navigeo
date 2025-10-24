import ModalWindow from '../../../../components/atoms/ModalWindow'
import { MdDeleteOutline } from 'react-icons/md'

function ModalDeleteCar({ CancelBTN, AcceptBTN }) {
  return (
    <ModalWindow
      CancelBTN={CancelBTN}
      AcceptBTN={AcceptBTN}
      modalName={'Usuwanie samochodu'}
      modalIcon={
        <MdDeleteOutline className="flex items-center justify-center  h-[28px] w-[28px] fill-red-600" />
      }
      acceptButtonTittle={'Usuń samochód'}
    >
      <p className="text-gray-600 mb-16px">
        Usunięcie samochodu skutkuje wymazaniem danych odnośnie danego samochodu
        w systemie.{' '}
      </p>
      <h3 className="text-gray-700 pb-[32px] border-b border-gray-300">
        Czy jesteś pewien, że chcesz usunąć ten samochód?
      </h3>
    </ModalWindow>
  )
}

export default ModalDeleteCar
