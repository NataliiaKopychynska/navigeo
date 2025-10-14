export type ChangeMainData = {
  fullName: string
  email: string
}
export type MainDataInputs = {
  name: string
  sureName: string
  mail: string
}

export type UserData = {
  systemId: number | string
  id: string
  email: string
  fullName: string
  type: string
  isBlocked: boolean
  emailUpdateRequested: boolean
  createdAt: string
  lastLoginAt: string
}

export type RepeatNewPassword = {
  currentPassword: string
  newPassword: string
  repeatNewPassword: string
}

export type AddCarModal = {
  name: string
  number: string
}
