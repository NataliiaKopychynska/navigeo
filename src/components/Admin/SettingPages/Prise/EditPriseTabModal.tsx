import ModalWindow from '../../../atoms/ModalWindow'
import Input from '../../../atoms/Input'
import { IoIosAdd } from 'react-icons/io'
import type { UseFormRegister, UseFormWatch } from 'react-hook-form'
import { useEffect } from 'react'
import type { DataEdit } from 'redux/price/priceType'

type FormData = {
  name: string
  basePrice: number
  additionalPrice: number
}

type Props = {
  hoverData: DataEdit | null
  register: UseFormRegister<FormData>
  handleEdit: () => void
  setIsOpenEdit: React.Dispatch<React.SetStateAction<boolean>>
  setHoverData: React.Dispatch<React.SetStateAction<DataEdit | null>>
  watch: UseFormWatch<FormData>
  reset: (values?: Partial<FormData>) => void
}

function EditPriseTabModal({
  hoverData,
  register,
  handleEdit,
  setIsOpenEdit,
  setHoverData,
  watch,
  reset,
}: Props) {
  // console.log(hoverData, '0')
  useEffect(() => {
    if (hoverData) {
      reset({
        name: hoverData.name,
        basePrice:
          typeof hoverData.basePrice === 'number' ? hoverData.basePrice : 0,
        additionalPrice:
          typeof hoverData.additionalPrice === 'number'
            ? hoverData.additionalPrice
            : 0,
      })
    }
  }, [hoverData, reset])
  // useEffect(() => { // const subscription = watch((values) => { // setHoverData((prev) => ({ ...prev!, ...values }) as DataEdit) // })
  // return () => subscription.unsubscribe()
  // }, [watch, setHoverData])

  return (
    <ModalWindow
      CancelBTN={() => setIsOpenEdit((prev) => !prev)}
      AcceptBTN={handleEdit}
      modalName="Edytuj cennik"
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
          defaultValue={hoverData?.name ?? ''}
          required
        />{' '}
        <Input
          inputLabel="Kwota (za 100m przyłącza)"
          register={register('basePrice', { valueAsNumber: true })}
          type="number"
          defaultValue={
            typeof hoverData?.basePrice === 'number' ? hoverData.basePrice : 0
          }
          required
        />
        <Input
          inputLabel="Kwota (za kolejne 100m przyłącza)"
          register={register('additionalPrice', { valueAsNumber: true })}
          type="number"
          defaultValue={
            typeof hoverData?.additionalPrice === 'number'
              ? hoverData.additionalPrice
              : 0
          }
          required
        />
      </form>
    </ModalWindow>
  )
}
export default EditPriseTabModal
