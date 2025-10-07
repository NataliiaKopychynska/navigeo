import { useForm } from 'react-hook-form'
import { useRef, useState } from 'react'
import type { InternalClientCreateRequest } from './Types'
import SelectInput from '../../atoms/SelectInput'
import { optionsTypeClient } from '../../../lib/options'
import Input from '../../atoms/Input'

function AddClientForm() {
  const { register, handleSubmit } = useForm<InternalClientCreateRequest>()
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const wrapperRefType = useRef<HTMLDivElement | null>(null)
  const [sameInvoiceAddress, setSameInvoiceAddress] = useState(true)

  const onSubmit = (data: InternalClientCreateRequest) => {
    if (sameInvoiceAddress) {
      data.invoiceAddress = {
        city: data.city,
        postCode: data.postCode,
        postName: data.postName,
        streetName: data.streetName,
        houseNumber: data.houseNumber,
        streetNumber: data.streetNumber,
        phoneNumber: data.phoneNumber,
        email: data.email,
      }
    }
    console.log('Form data', data)
  }

  return (
    <div className="flex flex-col gap-[16px] items-center">
      <div className="w-[456px] border-b border-gray-300 p-[8px] pb-[24px]">
        <h3 className="text-gray-800 text-[16px] pb-[4px]">Nowy klient</h3>
        <p className="text-gray-700 text-[14px]">
          Recommend an Integration to help us.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[16px] w-[456px]"
      >
        {/* Тип аккаунта */}
        <SelectInput
          inputLabel="Typ konta"
          options={
            optionsTypeClient as unknown as { value: string; label: string }[]
          }
          selected={selectedType}
          setSelected={setSelectedType}
          wrapperRef={wrapperRefType}
        />

        {/* Основні дані */}
        <Input
          inputLabel="Nazwa klienta"
          register={register('fullName')}
          type="text"
          placeholder="Nazwa klienta"
        />
        <Input
          inputLabel="Cennik inwentaryzacja"
          register={register('inventoryPriceListId')}
          type="text"
          placeholder="ID cennika inwentaryzacja"
        />
        <Input
          inputLabel="Cennik mapa do celów"
          register={register('designPurposesMapPriceListId')}
          type="text"
          placeholder="ID cennika mapa"
        />
        <Input
          inputLabel="Termin płatności (dni)"
          register={register('paymentDateOffset')}
          type="number"
          placeholder="Termin płatności"
        />
        <Input
          inputLabel="NIP"
          register={register('nip')}
          type="text"
          placeholder="NIP"
        />
        <Input
          inputLabel="Email"
          register={register('email')}
          type="email"
          placeholder="Adres e-mail"
        />
        <Input
          inputLabel="Numer telefonu"
          register={register('phoneNumber')}
          type="text"
          placeholder="Numer telefonu"
        />

        {/* Адреса клієнта */}
        <Input
          inputLabel="Miejscowość"
          register={register('city')}
          type="text"
          placeholder="Miejscowość"
        />
        <div className="flex w-full justify-between gap-[16px]">
          <Input
            inputLabel="Kod pocztowy"
            register={register('postCode')}
            type="text"
            placeholder="Kod pocztowy"
          />
          <Input
            inputLabel="Poczta"
            register={register('postName')}
            type="text"
            placeholder="Poczta"
          />
        </div>
        <Input
          inputLabel="Ulica"
          register={register('streetName')}
          type="text"
          placeholder="Ulica"
        />
        <div className="flex w-full justify-between gap-[16px]">
          <Input
            inputLabel="Numer domu"
            register={register('houseNumber')}
            type="text"
            placeholder="Numer domu"
          />
          <Input
            inputLabel="Numer mieszkania"
            register={register('streetNumber')}
            type="text"
            placeholder="Numer mieszkania"
          />
        </div>

        {/* Чекбокс для адреси до фактури */}
        <div className="flex items-center gap-2 mt-2">
          <input
            type="checkbox"
            checked={sameInvoiceAddress}
            onChange={() => setSameInvoiceAddress(!sameInvoiceAddress)}
          />
          <label className="text-gray-700 text-[14px]">
            Dane do faktury takie same jak dane klienta
          </label>
        </div>

        {/* Адреса до фактури */}
        {!sameInvoiceAddress && (
          <div className="flex flex-col gap-[12px] mt-2 border-t pt-2">
            <h4 className="text-gray-800 text-[14px]">Adres do faktury</h4>
            <Input
              inputLabel="Miejscowość"
              register={register('invoiceAddress.city')}
              type="text"
              placeholder="Miejscowość"
            />
            <div className="flex w-full justify-between gap-[16px]">
              <Input
                inputLabel="Kod pocztowy"
                register={register('invoiceAddress.postCode')}
                type="text"
                placeholder="Kod pocztowy"
              />
              <Input
                inputLabel="Poczta"
                register={register('invoiceAddress.postName')}
                type="text"
                placeholder="Poczta"
              />
            </div>
            <Input
              inputLabel="Ulica"
              register={register('invoiceAddress.streetName')}
              type="text"
              placeholder="Ulica"
            />
            <div className="flex w-full justify-between gap-[16px]">
              <Input
                inputLabel="Numer domu"
                register={register('invoiceAddress.houseNumber')}
                type="text"
                placeholder="Numer domu"
              />
              <Input
                inputLabel="Numer mieszkania"
                register={register('invoiceAddress.streetNumber')}
                type="text"
                placeholder="Numer mieszkania"
              />
            </div>
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Dodaj klienta
        </button>
      </form>
    </div>
  )
}

export default AddClientForm
