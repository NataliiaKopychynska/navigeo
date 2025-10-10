import React from 'react'
import Input from '../../atoms/Input'
import type { UseFormRegister } from 'react-hook-form'
import type { InternalClientCreateRequest, InvoiceAddress } from './Types'

type Props = {
  register:
    | UseFormRegister<InternalClientCreateRequest>
    | UseFormRegister<InvoiceAddress>
  prefix?: string // наприклад 'invoiceAddress.' для nested полів
}

const ClientAddressFields = ({ register, prefix = '' }: Props) => {
  const fieldName = (name: string) => `${prefix}${name}`

  return (
    <>
      <Input
        inputLabel="Miejscowość"
        register={register(fieldName('city'))}
        type="text"
        placeholder="Miejscowość"
        required
      />
      <div className="flex w-full justify-between gap-[16px]">
        <Input
          inputLabel="Kod pocztowy"
          register={register(fieldName('postCode'))}
          type="text"
          placeholder="Kod pocztowy"
          required
        />
        <Input
          inputLabel="Poczta"
          register={register(fieldName('postName'))}
          type="text"
          placeholder="Poczta"
          required
        />
      </div>
      <Input
        inputLabel="Ulica"
        register={register(fieldName('streetName'))}
        type="text"
        placeholder="Ulica"
        required
      />
      <div className="flex w-full justify-between gap-[16px]">
        <Input
          inputLabel="Numer domu"
          register={register(fieldName('houseNumber'))}
          type="text"
          placeholder="Numer domu"
          required
        />
        <Input
          inputLabel="Numer mieszkania"
          register={register(fieldName('streetNumber'))}
          type="text"
          placeholder="Numer mieszkania"
          required
        />
      </div>
    </>
  )
}

export default ClientAddressFields
