type Currency = 'PLN' | 'EUR' | 'USD'

export type PriceType = 'design_purposes_map' | 'inventory' | 'staking'

interface Money {
  amount: string
  currency: Currency
}

interface PriceDetails {
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
  // priceList: PriceGroup[] | null
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

export type PriceTab = {
  type: PriceType
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
