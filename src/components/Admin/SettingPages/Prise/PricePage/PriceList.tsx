interface Props {
  items: any[]
}

export const PriceList = ({ items }: Props) => {
  if (!items?.length) return <p>Brak pozycji w tym cenniku.</p>

  return (
    <ul className="list-disc ml-5">
      {items.map((item) => (
        <li key={item.id}>
          {item.county.name} — {(item.basePrice?.grossPrice?.amount ?? 0) / 100}{' '}
          PLN
        </li>
      ))}
    </ul>
  )
}
