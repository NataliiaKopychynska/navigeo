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
