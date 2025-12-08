import type { PriceListItem } from '../../../../../../redux/price/priceType'
import ButtonLink from '../../../../../atoms/ButtonLink'
import MenuHover from '../../../../../atoms/MenuHover'
import { BsThreeDotsVertical } from 'react-icons/bs'

type Props = {
  selectedPriceList: PriceListItem[]
  onEdit: (item: PriceListItem) => void
  onDelete: (item: PriceListItem) => void

  openMenuForId: string | null
  toggleMenu: (id: string) => void
}

function BodyTable({
  selectedPriceList,
  onEdit,
  onDelete,
  openMenuForId,
  toggleMenu,
}: Props) {
  return (
    <tbody>
      {selectedPriceList.length === 0 ? (
        <tr>
          <td colSpan={3} className="py-6 text-center text-gray-500">
            Brak danych
          </td>
        </tr>
      ) : (
        selectedPriceList.map((item) => (
          <tr
            key={item.id}
            className="grid grid-cols-3 border-b border-gray-300 text-sm"
          >
            <td className="border-r border-gray-300 p-2">{item.county.name}</td>

            <td className="border-r border-gray-300 p-2">
              {(item.basePrice.grossPrice.amount / 100).toFixed(2)} zł
            </td>

            <td className="relative border-r border-gray-300 p-2 flex justify-between">
              {(item.additionalPrice.grossPrice.amount / 100).toFixed(2)} zł
              <ButtonLink
                tittle={<BsThreeDotsVertical />}
                onClick={() => toggleMenu(item.id)}
              />
              {openMenuForId === item.id && (
                <MenuHover
                  onEdit={() => onEdit(item)}
                  onDelete={() => onDelete(item)}
                />
              )}
            </td>
          </tr>
        ))
      )}
    </tbody>
  )
}

export default BodyTable
