import type { InitialsState } from '../redux/notes/notesTypes'

export const handlePending = (state: InitialsState) => {
  state.status = 'loading'
  state.error = null
}

export const handleRejected = (state: InitialsState, action) => {
  state.status = 'failed'
  state.error = action.payload ?? 'Login failed'
}
