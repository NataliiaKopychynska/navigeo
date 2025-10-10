import { useForm } from 'react-hook-form'
import { useRef, useState } from 'react'
import type { InternalClientCreateRequest } from './Types'
import SelectInput from '../../atoms/SelectInput'
import { optionsTypeClient } from '../../../lib/options'
import Input from '../../atoms/Input'
import CheckButton from '../../atoms/CheckButton'
import Button from '../../atoms/Button'
import ClientAddressFields from './ClientAddressFields'
import { addClient } from '../../../api/admin/clients'
import { useNavigate } from 'react-router-dom'

function AddClientForm() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<InternalClientCreateRequest>({
    mode: 'onChange',
  })
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const wrapperRefType = useRef<HTMLDivElement | null>(null)
  const [sameInvoiceAddress, setSameInvoiceAddress] = useState(true)

  const onSubmit = async (data: InternalClientCreateRequest) => {
    if (sameInvoiceAddress) {
      data.invoiceAddress = {
        city: data.city,
        postCode: data.postCode,
        postName: data.postName,
        streetName: data.streetName,
        houseNumber: data.houseNumber,
        streetNumber: data.streetNumber,
        country: 'PL',
        phoneNumber: data.phoneNumber,
        email: data.email,
      }
    }

    try {
      const response = await addClient(data)
      navigate('/clients')
      return response
      // console.log("create new client");
    } catch (error) {
      console.log('error create new client in addClient request', error)
    }
    // console.log('Form data', data)
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
        <SelectInput
          inputLabel="Typ konta"
          options={
            optionsTypeClient as unknown as { value: string; label: string }[]
          }
          selected={selectedType}
          setSelected={setSelectedType}
          wrapperRef={wrapperRefType}
        />
        <Input
          inputLabel="Nazwa klienta"
          register={register('fullName')}
          type="text"
          placeholder="Nazwa klienta"
          required={true}
        />
        <Input
          inputLabel="Cennik inwentaryzacja"
          register={register('inventoryPriceListId')}
          type="text"
          placeholder="ID cennika inwentaryzacja"
          required={true}
        />
        <Input
          inputLabel="Cennik mapa do celów"
          register={register('designPurposesMapPriceListId')}
          type="text"
          placeholder="ID cennika mapa"
          required={true}
        />
        <Input
          inputLabel="Termin płatności (dni)"
          register={register('paymentDateOffset')}
          type="number"
          placeholder="Termin płatności"
          required={true}
        />
        <Input
          inputLabel="NIP"
          register={register('nip')}
          type="text"
          placeholder="NIP"
          required={true}
        />
        <Input
          inputLabel="Email"
          register={register('email')}
          type="email"
          placeholder="Adres e-mail"
          required={true}
        />
        <Input
          inputLabel="Numer telefonu"
          register={register('phoneNumber')}
          type="text"
          placeholder="Numer telefonu"
          required={true}
        />

        <ClientAddressFields register={register} />
        <CheckButton
          checked={sameInvoiceAddress}
          onChange={() => setSameInvoiceAddress(!sameInvoiceAddress)}
          inputLabel="Dane do faktury takie same jak dane klienta"
        />
        {!sameInvoiceAddress && <ClientAddressFields register={register} />}
        <Button type="submit" disabled={!isValid} tittle="Dodaj klienta" />
      </form>
    </div>
  )
}

export default AddClientForm

{
  /* Адреса клієнта */
}
{
  /* <Input
          inputLabel="Miejscowość"
          register={register('city')}
          type="text"
          placeholder="Miejscowość"
          required={true}
        />
        <div className="flex w-full justify-between gap-[16px]">
          <Input
            inputLabel="Kod pocztowy"
            register={register('postCode')}
            type="text"
            placeholder="Kod pocztowy"
            required={true}
          />
          <Input
            inputLabel="Poczta"
            register={register('postName')}
            type="text"
            placeholder="Poczta"
            required={true}
          />
        </div>
        <Input
          inputLabel="Ulica"
          register={register('streetName')}
          type="text"
          placeholder="Ulica"
          required={true}
        />
        <div className="flex w-full justify-between gap-[16px]">
          <Input
            inputLabel="Numer domu"
            register={register('houseNumber')}
            type="text"
            placeholder="Numer domu"
            required={true}
          />
          <Input
            inputLabel="Numer mieszkania"
            register={register('streetNumber')}
            type="text"
            placeholder="Numer mieszkania"
            required={true}
          />
        </div> */
}

/* Адреса до фактури */
// {
//   !sameInvoiceAddress && (
// <div className="flex flex-col gap-[12px] mt-2 border-t border-gray-300 pt-4">
//   <h3 className="text-gray-800 text-[16px] pb-[4px]">
//     Adres do faktury
//   </h3>

//   <Input
//     inputLabel="Miejscowość"
//     register={register('invoiceAddress.city')}
//     type="text"
//     placeholder="Miejscowość"
//     required={true}
//   />
//   <div className="flex w-full justify-between gap-[16px]">
//     <Input
//       inputLabel="Kod pocztowy"
//       register={register('invoiceAddress.postCode')}
//       type="text"
//       placeholder="Kod pocztowy"
//       required={true}
//     />
//     <Input
//       inputLabel="Poczta"
//       register={register('invoiceAddress.postName')}
//       type="text"
//       placeholder="Poczta"
//       required={true}
//     />
//   </div>
//   <Input
//     inputLabel="Ulica"
//     register={register('invoiceAddress.streetName')}
//     type="text"
//     placeholder="Ulica"
//     required={true}
//   />
//   <div className="flex w-full justify-between gap-[16px]">
//     <Input
//       inputLabel="Numer domu"
//       register={register('invoiceAddress.houseNumber')}
//       type="text"
//       placeholder="Numer domu"
//       required={true}
//     />
//     <Input
//       inputLabel="Numer mieszkania"
//       register={register('invoiceAddress.streetNumber')}
//       type="text"
//       placeholder="Numer mieszkania"
//       required={true}
//     />
//   </div>
// </div>
//   )
// }
