import React, { type RefObject } from 'react'
import type { ClientsFilters } from '../../../type/typeAdmin'
import FilterInput from '../../../components/atoms/FilterInput'
import FilterSelectInput from '../../../components/atoms/FilterSelectInput'

type Props = {
  typeClientRef: RefObject<HTMLTableHeaderCellElement | null>
  selectTypeIsOpen: boolean
  setSelectTypeIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setFiltersFunction: <K extends keyof ClientsFilters>(
    key: K,
    value: ClientsFilters[K],
  ) => void
  filters: ClientsFilters
}

function ClientsHead({
  typeClientRef,
  selectTypeIsOpen,
  setSelectTypeIsOpen,
  setFiltersFunction,
  filters,
}) {
  return (
    <thead>
      <tr className="grid grid-cols-6">
        <FilterInput
          tittle="Nazwa"
          search={filters.name}
          setFiltersFunction={setFiltersFunction}
        />
        <FilterSelectInput />
        <FilterInput
          tittle="Telefon"
          search={filters.phone}
          setFiltersFunction={setFiltersFunction}
        />
        <FilterInput
          tittle="E-mail"
          search={filters.mail}
          setFiltersFunction={setFiltersFunction}
        />
        <FilterInput
          tittle="Adres"
          search={filters.address}
          setFiltersFunction={setFiltersFunction}
        />
      </tr>
    </thead>
  )
}

export default ClientsHead
