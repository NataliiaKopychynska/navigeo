type Currency = 'PLN' | 'EUR' | 'USD'

export type PriceType = 'design_purposes_map' | 'inventory' | 'staking'

export type SelectTabInfo = {
  priceType: PriceType
  priceId: string
}

interface Money {
  amount: string | number
  currency: Currency
}

export interface PriceDetails {
  netPrice: Money
  grossPrice: Money
  vatAmount: Money
  vatRate: number
}

export type County = {
  id: string
  name: string
  province: string
  link: string
}

export interface PriceGroup {
  id: string
  type: PriceType
  isDefault: boolean
  name: string
  basePrice: PriceDetails
  additionalPrice: PriceDetails
}

export type PriceState = {
  priceList: Record<PriceType, PriceGroup[] | null>
  // type: PriceType
  selectedPriceList: null | PriceListItem[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null | { message: string }
}

export type FetchData = {
  page?: number
  per_page?: number
  type?: PriceType
}

export type EditRequestPriceTab = {
  type?: PriceType
  name: string
  basePrice: number
  additionalPrice: number
}

export type PriseListId = {
  id: string
  name: string
  registrationNumber: string
}

export type PriceListItem = {
  id: string
  county: County
  basePrice: PriceDetails
  additionalPrice: PriceDetails
}

export type DataEdit = {
  id?: string
  type?: PriceType
  // county: County
  name: string
  basePrice: PriceDetails | number
  additionalPrice: PriceDetails | number
}

export type EditRequest = {
  name: string
  basePrice: PriceDetails
  additionalPrice: PriceDetails
}

export type RequestNewCountyPrice = {
  countyId: string
  basePrice: number
  additionalPrice: number
}

///Table
export type County = {
  id: string
  name: string
  province: string
  link: string
}

export type PriceFilters {
  localization: string
  basic_prise: number 
  extra_price: number 
}

type CountyOption = {
  label: string 
  value: string 
}
