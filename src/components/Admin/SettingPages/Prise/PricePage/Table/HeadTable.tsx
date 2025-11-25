import type React from 'react'
import type { PriceFilters } from '../../../../../../redux/price/priceType'
import FilterInput from '../../../../../atoms/FilterInput'

type Props = {
  filters: PriceFilters
  setFilters: React.Dispatch<React.SetStateAction<PriceFilters>>
  setFiltersFunction: <K extends keyof PriceFilters>(
    key: K,
    value: PriceFilters[K],
  ) => void
}

function HeadTable({ filters, setFilters, setFiltersFunction }: Props) {
  return (
    <thead>
      <tr className="grid grid-cols-3">
        {/* { value: string; label: string }[] */}
        <FilterInput
          tittle="Powiat"
          name={'localization'}
          search={filters.localization}
          //   search={filters.phone}
          setFiltersFunction={setFiltersFunction}
        />
        <FilterInput
          tittle="Kwota (za 100m przyłącza )"
          name={'basic_prise'}
          search={filters.basic_prise}
          //   search={filters.mail}
          setFiltersFunction={setFiltersFunction}
        />
        <FilterInput
          tittle="Kwota (za kolejne 100 m przyłącza)"
          name={'extra_price'}
          search={filters.extra_price}
          setFiltersFunction={setFiltersFunction}
          // search={filters.address}
        />
      </tr>
    </thead>
  )
}

export default HeadTable
