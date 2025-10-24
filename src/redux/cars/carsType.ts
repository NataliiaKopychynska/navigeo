export type FetchCars = {
  page?: number
  per_page?: number
}

export type Car = {
  id: string
  name: string
  registrationNumber: string
}

export type Cars = {
  items: Car[]
}

export type CarsState = {
  cars: null | Cars
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null | { message: string }
}

export type PostCar = {
  name: string
  registrationNumber: string
}

export type DataEdit = {
  id: string
  x: number
  y: number
  name: string
  registrationNumber: string
}
