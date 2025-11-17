import { useNavigate } from 'react-router-dom'

interface Props {
  items: any[]
  type: string
}

export const PriceList = ({ items, type }: Props) => {
  const navigate = useNavigate()

  const routeMap: Record<string, string> = {
    design_purposes_map: 'mapForDesignPurposes',
    inventory: 'inventoryStaking',
    staking: 'staking',
  }

  if (!items?.length) return <p>Brak pozycji w tym cenniku.</p>

  return (
    <ul className="list-disc ml-5">
      {items.map((item) => (
        <li
          key={item.id}
          className="cursor-pointer hover:underline"
          onClick={() =>
            navigate(
              `/layout/admin/setting/prices/${routeMap[type]}/${item.id}`,
            )
          }
        >
          {item.county.name} — {(item.basePrice?.grossPrice?.amount ?? 0) / 100}{' '}
          PLN
        </li>
      ))}
    </ul>
  )
}
// interface Props {
//   items: any[]
// }

// export const PriceList = ({ items }: Props) => {
//   if (!items?.length) return <p>Brak pozycji w tym cenniku.</p>

//   return (
//     <ul className="list-disc ml-5">
//       {items.map((item) => (
//         <li key={item.id}>
//           {item.county.name} — {(item.basePrice?.grossPrice?.amount ?? 0) / 100}{' '}
//           PLN
//         </li>
//       ))}
//     </ul>
//   )
// }
