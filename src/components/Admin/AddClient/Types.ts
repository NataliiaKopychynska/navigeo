export type FormValues = object

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
  legalSubject: 'business_entity' | 'individual'
  paymentDateOffset: number
  wfirmaCompanyId?: number
  designPurposesMapPriceListId?: string | null | Record<string, never>
  inventoryPriceListId?: string | null | Record<string, never>
  fullName: string
  email: string
  nip: string
  // Top-level client address and contact fields used by the form
  city: string
  postCode: string
  postName: string
  streetName: string
  houseNumber: string
  streetNumber: string
  phoneNumber: string
  invoiceAddress: InvoiceAddress
}
