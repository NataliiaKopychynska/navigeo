import { http } from '../../lib/http'

export async function fetchClients(params: {
  page?: number
  per_page?: number
  pagination: boolean
  fullName: string
  legalSubject?: string
  legalSubjectArray?: string[]
  nip?: string
}) {
  const { data } = await http.get('/clients', { params })
  return data
}
