type FilterInputProps<K extends string> = {
  tittle: string
  name: K
  setFiltersFunction: (key: K, value: string) => void
  search: string
}

function FilterInput<K extends string>({
  setFiltersFunction,
  search,
  tittle,
  name,
}: FilterInputProps<K>) {
  return (
    <th className=" flex flex-col bg-gray-100">
      <h3 className="text-gray-600 text-lg font-normal p-[8px] flex flex-col text-left h-[40px] overflow-hidden text-ellipsis">
        {tittle}
      </h3>
      <input
        type="text"
        placeholder="Wyszukaj"
        value={search}
        onChange={(e) => setFiltersFunction(name, e.target.value)}
        className="bg-white h-[40px] p-[10px]  text-gray-950 border border-gray-200 rounded-[10px] placeholder:font-light "
      />
    </th>
  )
}

export default FilterInput
