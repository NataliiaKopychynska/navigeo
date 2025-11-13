import ButtonMedium from '../../../../atoms/ButtonMedium'

interface Props {
  currentTab: any
  onEdit: () => void
}

function PriceHeader({ currentTab, onEdit }: Props) {
  //   console.log(currentTab)

  return (
    <div className="flex align-baseline justify-between">
      <div className="flex gap-[48px]">
        <div>
          <h3 className="text-[12px] font-normal text-gray-600">
            Cena standardowa:
          </h3>
          <p className="text-[12px] font-medium text-gray-800">
            {currentTab?.basePrice?.grossPrice?.amount
              ? (currentTab.basePrice.grossPrice.amount / 100).toFixed(2)
              : '—'}{' '}
            PLN (za 100 m przyłącza)
          </p>
        </div>

        <div>
          <h3 className="text-[12px] font-normal text-gray-600">
            Cena dodatkowa:
          </h3>
          <p className="text-[12px] font-medium text-gray-800">
            {currentTab?.additionalPrice?.grossPrice?.amount
              ? (currentTab.additionalPrice.grossPrice.amount / 100).toFixed(2)
              : 0}{' '}
            PLN (za kolejne 100 m)
          </p>
        </div>
      </div>

      <ButtonMedium tittle="Edytuj" onClick={onEdit} />
    </div>
  )
}

export default PriceHeader
