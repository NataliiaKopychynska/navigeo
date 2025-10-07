export type Clients = {
  id: number
  name: string
  type: string
  phone: string
  mail: string
  address: string
}

export type ClientsFilters = {
  name: string
  type: 'B2B' | 'B2C' | null
  phone: string
  mail: string
  address: string
}
