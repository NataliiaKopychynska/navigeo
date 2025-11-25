import React from 'react'
import type { PriceListItem } from '../../../../../../redux/price/priceType'
import ButtonLink from '../../../../../atoms/ButtonLink'
import { BsThreeDotsVertical } from 'react-icons/bs'
import MenuHover from '../../../../../atoms/MenuHover'

type Props = {
  selectedPriceList: PriceListItem[]
  onClick: () => void
  isOpenEditPanel: boolean
}

function BodyTable({ selectedPriceList, onClick, isOpenEditPanel }: Props) {
  return (
    <tbody>
      {selectedPriceList.length === 0 ? (
        <tr>
          <td colSpan={3} className="text-center py-4">
            Dodaj pierwszą miejscowość
          </td>
        </tr>
      ) : (
        selectedPriceList.map((item) => (
          <tr
            key={item.id}
            className="grid grid-cols-3 border-b  border-gray-300 "
          >
            <td className="text-gray-600 p-2 border-r border-gray-300 font-light">
              {item.county.name}
            </td>
            <td className="text-gray-600 p-2 border-r border-gray-300 font-light">
              {item.basePrice.grossPrice.amount}
            </td>
            <td className="flex justify-between text-gray-600 p-2 border-r border-gray-300 font-light">
              {item.additionalPrice.grossPrice.amount}
              <ButtonLink tittle={<BsThreeDotsVertical />} onClick={onClick} />
              {isOpenEditPanel && (
                <MenuHover
                  onDelete={console.log('Delite')}
                  onEdit={console.log('edit')}
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
