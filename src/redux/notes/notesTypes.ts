export interface Note {
  id: string
  text: string
  createdAt: string
  source?: {
    sourceId?: string
    source?: string
  }
  facility?: {
    facilityId?: string
  }
}

export interface NotesResponse {
  items: Note[]
  total: number
  page: number
  per_page: number
}

export interface NotesQueryParams {
  page?: number
  per_page?: number
  pagination?: boolean
  text?: string
  'source.source'?: string | string[]
  noteId?: string | string[]
  'source.sourceId'?: string | string[]
  'facility.facilityId'?: string | string[]
  'order[createdAt]'?: 'asc' | 'desc'
}

export type InitialsState = {
  notes: null | Note[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null | { message: string }
}

export type DataEdit = {
  id: string
  x: number
  y: number
  text: string
  createdAt: string
  source?: {
    sourceId?: string
    source?: string
  }
  facility?: {
    facilityId?: string
  }
}
