import { http } from '../../lib/http'

export async function fetchCounties() {
  const { data } = await http.get('/counties')
  return data
}

export async function fetchCountryByID(id: string) {
  const { data } = await http.get(`counties/${id}`)
  return data
}
