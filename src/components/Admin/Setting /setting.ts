export type ItemNav = {
  id: string
  label: string
  to: string
}

export const itemsNav: ItemNav[] = [
  { id: '1', label: 'Dane konta', to: 'account-details' },
  { id: '2', label: 'Zmiana hasła', to: 'password' },
  // { id: '2', label: 'Użytkownicy', to: 'users' },
  // { id: '3', label: 'Konta administracyjne', to: 'admin-accounts' },
  { id: '3', label: 'Samochody', to: 'cars' },
  { id: '4', label: 'Zadania', to: 'tasks' },
  { id: '5', label: 'Cenniki', to: 'prices' },
  { id: '6', label: 'Operat', to: 'surgery' },
  { id: '7', label: 'Sprzęt', to: 'equipment' },
  { id: '8', label: 'Konta administracyjne', to: 'admin-accounts' },
  { id: '9', label: 'Użytkownicy', to: 'users' },
]
