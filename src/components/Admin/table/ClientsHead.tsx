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
  // selectTypeIsOpen,
  // setSelectTypeIsOpen,
  setFiltersFunction,
  filters,
}: Props) {
  return (
    <thead>
      <tr className="grid grid-cols-5">
        <FilterInput
          tittle="Nazwa"
          name={'name'}
          search={filters.name}
          setFiltersFunction={setFiltersFunction}
        />

        <FilterSelectInput
          options={[
            { value: 'B2B', label: 'B2B' },
            { value: 'B2C', label: 'B2C' },
          ]}
          selected={filters.type}
          setSelected={(value: 'B2B' | 'B2C') =>
            setFiltersFunction('type', value)
          }
          wrapperRef={typeClientRef}
          inputLabel="Typ konta"
        />
        {/* { value: string; label: string }[] */}
        <FilterInput
          tittle="Telefon"
          name={'phone'}
          search={filters.phone}
          setFiltersFunction={setFiltersFunction}
        />
        <FilterInput
          tittle="E-mail"
          name={'mail'}
          search={filters.mail}
          setFiltersFunction={setFiltersFunction}
        />
        <FilterInput
          tittle="Adres"
          name={'address'}
          search={filters.address}
          setFiltersFunction={setFiltersFunction}
        />
      </tr>
    </thead>
  )
}

export default ClientsHead
