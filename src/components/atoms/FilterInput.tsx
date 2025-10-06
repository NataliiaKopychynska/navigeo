import type { FiltersOrder } from 'type/type'

type FilterInputProps = {
  tittle: string
  setFiltersFunction: <K extends keyof FiltersOrder>(
    key: K,
    value: FiltersOrder[K],
  ) => void
  search: string
}

function FilterInput({ setFiltersFunction, search, tittle }: FilterInputProps) {
  return (
    <th className=" flex flex-col">
      <h3 className="text-gray-600 bg-gray-100 text-lg font-normal p-[8px] flex flex-col text-left h-[40px] overflow-hidden text-ellipsis">
        {tittle}
      </h3>
      <input
        type="text"
        placeholder="Wyszukaj"
        value={search}
        onChange={(e) => setFiltersFunction('search', e.target.value)}
        className=" h-[40px] p-[10px]  text-gray-950 border border-gray-200 rounded-[10px] placeholder:font-light "
      />
    </th>
  )
}

export default FilterInput
