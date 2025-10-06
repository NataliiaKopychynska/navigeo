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
  type: string | null
  phone: string
  mail: string
  address: string
}
