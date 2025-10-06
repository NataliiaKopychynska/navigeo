import { useForm } from 'react-hook-form'
import type { FormValues } from './Types'
// import AccessibleSelect from './AccessibleSelect'
import { optionsTypeOrder } from '../../../lib/options'
import { useRef, useState } from 'react'
import SelectInput from '../../atoms/SelectInput'
import Input from '../../atoms/Input'
import TextArias from '../../atoms/TextArias'
import { createNewOrders } from '../../../api/client/orders'

function OrdersForm() {
  const { register, handleSubmit } = useForm<FormValues>()
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const wrapperRefType = useRef<HTMLDivElement | null>(null)

  const onSubmit = async (data: FormValues) => {
    if (!selectedType) {
      alert('Wybierz typ zlecenia')
      return
    }

    const payload = {
      price: 10000,
      clientId: 'c6d3aa47-3375-4ee1-930d-f29a525c2466',
      type: selectedType,
      area: data.area ? Number(data.area) : 1.0,
      plotNumber: data.plotNumber || 'Numer działki',
      countyId: '1b9d6bcd-bbfd-4b2d-9b8a-3b1e9f1c1234',
      geodeticPoints: data.geodeticPoints
        ? data.geodeticPoints.split(',').map(Number)
        : [[0, 0]],
      nodePoints: [
        [1, 2],
        [3, 4],
        [5, 6],
      ],
      clientPlotNumbers: ['1.0', '2.0'],
      connectionLength: Number(data.connectionLength || 1.2),
      orderAddress: {
        id: '00000000-0000-0000-0000-000000000000',
        streetName: data.streetName,
        country: 'PL',
        streetNumber: data.streetNumber,
        city: data.postName,
        postCode: data.postCode || '00-000',
        postName: data.postName,
        houseNumber: data.houseNumber,
        email: data.email,
        phoneNumber: data.number,
        lat: '52.2222',
        lng: '18.2222',
        voivodeship: 'kujawsko-pomorskie',
        county: 'Ukraine',
        registrationUnit: 'Bydgoszcz',
        precinct: 'string',
      },
      clientAttachments: [
        '00000000-0000-0000-0000-000000000000',
        '00000000-0000-0000-0000-000000000001',
        '00000000-0000-0000-0000-000000000002',
      ],
      additionalInformation: data.additionalInformation || '',
      buffer: 0,
    }

    try {
      console.log(payload)
      const res = await createNewOrders(payload)
      console.log('✅ Zamówienie utworzone:', res)
    } catch (error: any) {
      console.error(
        '❌ Error created new order',
        error.response?.data || error.message,
      )
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[16px] w-[456px]"
    >
      {/* <AccessibleSelect /> */}
      <SelectInput
        inputLabel="Typ zlecenia"
        options={optionsTypeOrder}
        selected={selectedType}
        setSelected={setSelectedType}
        wrapperRef={wrapperRefType}
      />
      <Input
        inputLabel="Adres e-mail"
        register={register('email')}
        type="email"
        placeholder="adres e-mail"
      />
      <Input
        inputLabel="Numer telefonu"
        register={register('number')}
        type="number"
        placeholder="numer "
      />
      <Input
        inputLabel="Numery działek"
        register={register('geodeticPoints')}
        type="text"
        placeholder="123,5"
      />
      <Input
        inputLabel="Obszar"
        register={register('area')}
        type="number"
        placeholder="123 h2"
      />
      <Input
        inputLabel="Ulica"
        register={register('streetName')}
        type="text"
        placeholder="Adama Mickiewicza"
      />
      <div className="flex w-full justify-between gap-[16px]">
        <Input
          inputLabel="Kod pocztowy"
          register={register('postCode')}
          type="text"
          placeholder="12-345"
        />
        <Input
          inputLabel="Poczta"
          register={register('postName')}
          type="text"
          placeholder="Warszawa"
        />
      </div>
      <div className="flex w-full justify-between gap-[16px]">
        <Input
          inputLabel="Numer domu"
          register={register('streetNumber')}
          type="text"
          placeholder="123"
        />
        <Input
          inputLabel="Numer mieszkania"
          register={register('houseNumber')}
          type="text"
          placeholder="123"
        />
      </div>
      <TextArias
        inputLabel="Dodatkowe informacje"
        register={register('additionalInformation')}
      />
      <button
        type="submit"
        className="w-[456px] h-[40px] bg-[#f28557] text-white rounded-[10px] mt-2 text-[14px] border-[1px] border-[#d75336] hover:bg-[#ef6e23]"
      >
        Utwórz zlecenie
      </button>
    </form>
  )
}

export default OrdersForm
