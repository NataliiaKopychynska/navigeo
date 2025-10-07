import type { Clients } from 'type/typeAdmin'

type Props = {
  rows: Clients[]
}

function ClientRow({ rows }: Props) {
  return (
    <tbody>
      {rows.map((row) => (
        <tr key={row.id} className="grid grid-cols-5 border-b border-gray-300">
          <td className="text-gray-600 p-2 border-r border-gray-300 font-light">
            {row.name}
          </td>
          <td className="text-gray-600 p-2 border-r border-gray-300 font-light">
            {row.type}
          </td>
          <td className="text-gray-600 p-2 border-r border-gray-300 font-light">
            {row.phone}
          </td>
          <td className="text-gray-600 p-2 border-r border-gray-300 font-light">
            {row.mail}
          </td>
          <td className="text-gray-600 p-2  font-light">{row.address}</td>
        </tr>
      ))}
    </tbody>
  )
}

export default ClientRow
