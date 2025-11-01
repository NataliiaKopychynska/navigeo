import React from 'react'
import type { DataEdit, Note } from '../../../../redux/notes/notesTypes'
import MenuHover from '../../../../components/atoms/MenuHover'

type Props = {
  notes: Note[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  setHoverData: React.Dispatch<React.SetStateAction<null | DataEdit>>
  hoverData: null | DataEdit
  onDelete: (car: Note) => void
  onEdit: (car: Note) => void
}

function NotesList({
  notes,
  status,
  setHoverData,
  hoverData,
  onDelete,
  onEdit,
}: Props) {
  return (
    <div>
      <h3>Zadania</h3>
      {status === 'succeeded' && notes && notes.length >= 0
        ? notes.map((note: Note, i) => (
            <div
              key={note.id}
              className={` relative p-[8px] border-b border-gray-300 text-gray-500 ${
                i % 2 !== 0 ? 'bg-gray-50' : ''
              }`}
              onMouseEnter={(e) =>
                setHoverData({
                  id: note.id,
                  x: e.clientX,
                  y: e.clientY,
                  text: note.text,
                  createdAt: note.createdAt,
                })
              }
            >
              {note.text}

              {hoverData?.id === note.id && (
                <MenuHover
                  onDelete={() => onDelete(note)}
                  onEdit={() => onEdit(note)}
                  onMouseEnter={() =>
                    setHoverData((prev) =>
                      prev ? { ...prev, id: note.id } : prev,
                    )
                  }
                  onMouseLeave={() => {
                    setTimeout(() => {
                      setHoverData((prev) =>
                        prev?.id === note.id ? null : prev,
                      )
                    }, 5000)
                  }}
                />
              )}
            </div>
          ))
        : status === 'succeeded' && (
            <p className="col-span-2 text-center p-[40px]">
              Brak zadań do wyświetlenia
            </p>
          )}
    </div>
  )
}

export default NotesList
