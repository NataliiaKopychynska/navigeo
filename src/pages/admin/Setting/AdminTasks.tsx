import { useEffect, useState } from 'react'
import MiddleButton from '../../../components/atoms/MiddleButton'
import Pagination from '../../../components/atoms/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchNotesThunk,
  postNotesThunk,
  replaceNoteThunk,
  deleteNoteThunk,
} from '../../../redux/notes/notesThunk'
import ModalAddTask from '../../../components/Admin/SettingPages/Notes/ModalAddTask'
import { useForm } from 'react-hook-form'
import type { DataEdit, Note } from 'redux/notes/notesTypes'
import { toast } from 'react-toastify'
import type { AppDispatch, RootState } from 'redux/store'
import NotesList from '../../../components/Admin/SettingPages/Notes/NotesList'
import ModalEditNote from '../../../components/Admin/SettingPages/Notes/ModalEditNote'
import ModalDeleteNote from '../../../components/Admin/SettingPages/Notes/ModalDeleteNote'

function AdminTasks() {
  const dispatch = useDispatch<AppDispatch>()
  const { notes, status } = useSelector((state: RootState) => state.notes)
  const { register, handleSubmit, reset, setValue, watch } = useForm<Note>()

  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(50)
  const [hoverData, setHoverData] = useState<DataEdit | null>(null)

  const [isOpenAdd, setIsOpenAdd] = useState(false)
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [isOpenDelete, setIsOpenDelete] = useState(false)

  useEffect(() => {
    dispatch(fetchNotesThunk({ page }))
  }, [page, dispatch])

  const handleAdd = handleSubmit(async (data) => {
    const persistedAuth = localStorage.getItem('persist:auth')

    if (!persistedAuth) {
      toast.error('Brak danych użytkownika w localStorage')
      return
    }

    let user
    try {
      const parsedAuth = JSON.parse(persistedAuth)
      user = JSON.parse(parsedAuth.user)
    } catch (error) {
      console.error('Błąd parsowania danych użytkownika:', error)
      toast.error('Błąd danych użytkownika')
      return
    }

    const payload = {
      text: data.text,
      source: {
        source: 'order',
        sourceId: user.id,
      },
    }
    try {
      if (isOpenAdd) {
        await dispatch(postNotesThunk(payload))
        // dispatch(fetchNotesThunk({ page }))
        reset()
        setIsOpenAdd(false)
        toast.success('Zadanie zostało dodany pomyślnie')
      }
    } catch (error) {
      console.log(error)
      toast.error('Nie udało się dodać zadanie')
    }
  })

  const handleEdit = handleSubmit(async (data) => {
    console.log('edittt')
    setIsOpenEdit(false)

    if (hoverData === null) return
    try {
      await dispatch(
        replaceNoteThunk({
          id: hoverData.id,
          text: hoverData.text,
        }),
      )
      dispatch(fetchNotesThunk({ page }))
      reset()
      setIsOpenEdit(false)
      toast.info('Dane samochodu zostały zaktualizowane')
    } catch (error) {
      console.log('Error replace elements', hoverData.id, error)
      toast.error('Nie udało się zaktualizować samochodu')
    }
  })

  const deleteById = async () => {
    try {
      await dispatch(deleteNoteThunk({ id: hoverData?.id }))
      dispatch(fetchNotesThunk({ page }))
      setIsOpenDelete(false)
      toast.warning('Samochód został usunięty')
    } catch (error) {
      console.log('Error delete elements', hoverData?.id, error)
      toast.error('Nie udało się usunąć samochodu')
    }
  }

  return (
    <div>
      <div className="flex justify-between mt-[20px] mb-[16px]">
        <h1 className="text-2xl font-medium text-gray-900">Lista zadań</h1>
        <MiddleButton
          tittle="Dodaj zadanie"
          type="add"
          onClick={() => setIsOpenAdd((prev) => !prev)}
        />
      </div>
      <NotesList
        notes={notes ?? []}
        status={status}
        hoverData={hoverData}
        setHoverData={setHoverData}
        onDelete={() => setIsOpenDelete(true)}
        onEdit={() => {
          if (hoverData) {
            setValue('text', hoverData.text || '')
            setIsOpenEdit(true)
          }
        }}
      />

      <Pagination totalPages={perPage} page={page} setPage={setPage} />
      {isOpenAdd && (
        <ModalAddTask
          CancelBTN={() => setIsOpenAdd(false)}
          AcceptBTN={handleAdd}
          register={register}
        />
      )}
      {isOpenEdit && (
        <ModalEditNote
          watch={watch}
          setHoverData={setHoverData}
          hoverData={hoverData}
          register={register}
          handleEdit={handleEdit}
          setIsOpenEdit={setIsOpenEdit}
        />
      )}
      {isOpenDelete && (
        <ModalDeleteNote
          CancelBTN={() => setIsOpenDelete((prev) => !prev)}
          AcceptBTN={deleteById}
        />
      )}
    </div>
  )
}

export default AdminTasks
