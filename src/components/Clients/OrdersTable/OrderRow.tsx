import React from 'react'
import { renderTyp } from './renderTyp'
import { renderStatus } from './renderStatus'
import type { Order } from 'type/type'

type Props = {
  rows: Order[]
}

function OrderRow({ rows }: Props) {
  return (
    <tbody>
      {rows.map((order) => (
        <tr key={order.id} className="grid grid-cols-6 border-b p-2">
          <td>{order.addressName}</td>
          <td>{renderTyp(order.type)}</td>
          <td>{renderStatus(order.status)}</td>
          <td className="text-gray-600 font-light">{order.createdAt}</td>
          <td className="text-gray-600 font-light">{order.predictedDate}</td>
          <td className="text-gray-600 font-light">{order.deadline}</td>
        </tr>
      ))}
    </tbody>
  )
}

export default OrderRow
