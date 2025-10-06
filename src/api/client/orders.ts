import { http } from '../../lib/http'

export async function fetchOrders(params: {
  page?: number
  per_page?: number
  q?: string
  type?: string | null
  status?: string | null
  createdAt?: string
  estimatedDecisionDate?: string
  realizationDate?: string
}) {
  const { data } = await http.get('/orders', { params })
  return data
}

export async function createNewOrders(payload: any) {
  try {
    const response = await http.post('/orders', payload)
    return response.data
  } catch (error: any) {
    console.error('Order dont post', error)
    throw error
  }
}

// Order collection

// Media type

// application/json
// Controls Accept header.
// Example Value
// Schema
// [
//   {
//     "id": "35c17060-4fe2-48dc-80a8-ca6e5eb76916",
//     "client": {
//       "id": "35c17060-4fe2-48dc-80a8-ca6e5eb76916",
//       "fullName": "John Doe",
//       "email": "string",
//       "nip": "string",
//       "legalSubject": "business_entity",
//       "invoiceAddress": {
//         "id": "string",
//         "country": "PL",
//         "streetName": "Sezamkowa",
//         "streetNumber": "4a",
//         "city": "Bydgoszcz",
//         "postCode": "04-224",
//         "postName": "Poczta w Bydgoszczy",
//         "houseNumber": "10",
//         "email": "email@example.com",
//         "phoneNumber": "48111111111",
//         "fullAddress": "Lublin, Ul. jakaś 10",
//         "lat": "51.1",
//         "lng": "17.1",
//         "voivodeship": "kujawsko-pomorskie",
//         "county": "bydgoski",
//         "registrationUnit": "Bydgoszcz",
//         "precinct": "string"
//       }
//     },
//     "orderNumber": "2342350389765",
//     "plotNumber": "2342350389765",
//     "orderSecretHash": "2342350389765",
//     "status": "measurement_started",
//     "type": "inventory",
//     "area": "1.2",
//     "connectionLength": "1.2",
//     "buffer": 1,
//     "geodeticPoints": [],
//     "nodePoints": [],
//     "clientPlotNumbers": [
//       "1.0",
//       "2.0"
//     ],
//     "county": {
//       "id": "string",
//       "name": "string",
//       "province": "string",
//       "link": "string"
//     },
//     "estimatedPrice": {
//       "netPrice": {
//         "amount": "1000",
//         "currency": "PLN"
//       },
//       "grossPrice": {
//         "amount": "1000",
//         "currency": "PLN"
//       },
//       "vatAmount": {
//         "amount": "1000",
//         "currency": "PLN"
//       },
//       "vatRate": 23.55
//     },
//     "price": {
//       "netPrice": {
//         "amount": "1000",
//         "currency": "PLN"
//       },
//       "grossPrice": {
//         "amount": "1000",
//         "currency": "PLN"
//       },
//       "vatAmount": {
//         "amount": "1000",
//         "currency": "PLN"
//       },
//       "vatRate": 23.55
//     },
//     "createdAt": "2025-09-18T12:11:47.632Z",
//     "updatedAt": "2025-09-18T12:11:47.632Z",
//     "assignees": [
//       {
//         "systemId": 0,
//         "id": "35c17060-4fe2-48dc-80a8-ca6e5eb76916",
//         "email": "Melyna_Collins",
//         "fullName": "Melyna Collins",
//         "type": "super_admin",
//         "isBlocked": true,
//         "emailUpdateRequested": true,
//         "createdAt": "2022-10-24 10:30:00",
//         "lastLoginAt": "2022-10-24 10:30:00"
//       }
//     ],
//     "additionalInformation": "string",
//     "caseNumber": "string",
//     "realizationDate": "2025-09-18T12:11:47.632Z",
//     "estimatedDecisionDate": "2025-09-18T12:11:47.632Z",
//     "orderAddress": {
