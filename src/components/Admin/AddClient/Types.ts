export type FormValues = {}

export type InvoiceAddress = {
  id?: string
  streetName: string
  country: string
  streetNumber: string
  city: string
  postCode: string
  postName: string
  houseNumber: string
  email: string
  phoneNumber: string
  lat?: string
  lng?: string
  voivodeship?: string
  county?: string
  registrationUnit?: string
  precinct?: string
}

export type InternalClientCreateRequest = {
  legalSubject: 'business_entity' | 'individual' // залежно від того, що дозволяє API
  paymentDateOffset: number
  wfirmaCompanyId?: number
  designPurposesMapPriceListId?: string | null
  inventoryPriceListId?: string | null
  fullName: string
  email: string
  nip: string
  invoiceAddress: InvoiceAddress
}
