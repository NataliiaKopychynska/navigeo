export type Order = {
  id: number
  addressName: string
  type: string
  status: string
  createdAt: string
  predictedDate: string
  deadline: string
}

export type ApiOrder = {
  id: number
  type: string
  status: string
  createdAt: string
  estimatedDecisionDate: string
  realizationDate: string
  orderAddress: { fullAddress: string }
}

export interface FiltersOrder {
  search: string
  typeOrder: string | null
  status: string | null
  createAt: string
  predictedDate: string
  deadline: string
}
