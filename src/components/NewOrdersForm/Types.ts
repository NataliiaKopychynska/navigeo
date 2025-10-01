export type FormValues = {
  type:
    | 'inventory'
    | 'staking_out'
    | 'other'
    | 'egib_update'
    | 'service'
    | 'resumption'
    | 'division'
    | 'house_staking_out'
    | 'house_inventory'
    | 'design_purposes_map'

  plotNumber: string
  geodeticPoints: string[]
  connectionLength: string
  email: string
  number: string
  streetName: string
  streetNumber: string
  city: string
  postCode: string
  postName: string
  houseNumber: string
  additionalInformation: string
}
