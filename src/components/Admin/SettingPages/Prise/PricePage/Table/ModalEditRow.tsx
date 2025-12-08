import { useForm } from 'react-hook-form'
import ModalWindow from '../../../../../atoms/ModalWindow'
import Input from '../../../../../atoms/Input'
import { IoIosSave } from 'react-icons/io'
import type { PriceListItem } from '../../../../../../redux/price/priceType'

export type EditPriceValues = {
  basePrice: number
  additionalPrice: number
}

type Props = {
  rowData: PriceListItem
  onClose: () => void
  onSubmit: (data: EditPriceValues) => void
}

function ModalEditRow({ rowData, onClose, onSubmit }: Props) {
  const { register, handleSubmit } = useForm<EditPriceValues>({
    defaultValues: {
      basePrice: rowData.basePrice.grossPrice.amount / 100,
      additionalPrice: rowData.additionalPrice.grossPrice.amount / 100,
    },
  })

  return (
    <ModalWindow
      modalIcon={<IoIosSave className="h-[28px] w-[28px] fill-amber-600" />}
      CancelBTN={onClose}
      AcceptBTN={handleSubmit(onSubmit)}
      modalName="Edytuj cenę"
      acceptButtonTittle="Zapisz"
    >
      <form className="flex flex-col gap-6 mb-6">
        <Input
          inputLabel="Cena podstawowa"
          register={register('basePrice', { valueAsNumber: true })}
          type="number"
          required
        />
        <Input
          inputLabel="Cena dodatkowa"
          register={register('additionalPrice', { valueAsNumber: true })}
          type="number"
          required
        />
      </form>
    </ModalWindow>
  )
}

export default ModalEditRow
