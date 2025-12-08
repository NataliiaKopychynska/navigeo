import ModalWindow from '../../../../../atoms/ModalWindow'
import { MdDeleteForever } from 'react-icons/md'
import type { PriceListItem } from '../../../../../../redux/price/priceType'

type Props = {
  rowData: PriceListItem | null
  onClose: () => void
  onConfirm: () => void
}

function ModalDeleteRow({ rowData, onClose, onConfirm }: Props) {
  return (
    <ModalWindow
      modalIcon={<MdDeleteForever className="h-[32px] w-[32px] fill-red-600" />}
      CancelBTN={onClose}
      AcceptBTN={onConfirm}
      modalName="Usuń element"
      acceptButtonTittle="Usuń"
    >
      <div className="text-gray-600 mt-4 text-lg">
        Czy na pewno chcesz usunąć powiat:
        <span className="font-bold ml-1 text-black">
          {rowData?.county.name}
        </span>
        ?
      </div>
    </ModalWindow>
  )
}

export default ModalDeleteRow
