import { useEffect, useState } from 'react'
import MiddleButton from '../../../components/atoms/MiddleButton'
import Pagination from '../../../components/atoms/Pagination'
import { useDispatch } from 'react-redux'
import {
  fetchNotesThunk,
  postNotesThunk,
} from '../../../redux/notes/notesThunk'
import ModalAddTask from '../../../components/Admin/SettingPages/Tasks/ModalAddTask'
import { useForm } from 'react-hook-form'
import type { Note } from 'redux/notes/notesTypes'
import { toast } from 'react-toastify'

function AdminTasks() {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(50)
  const dispatch = useDispatch<AppDispatch>()
  const { register, handleSubmit, reset, setValue, watch } = useForm<Note>()

  const [isOpenAdd, setIsOpenAdd] = useState(false)
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [isOpenDelete, setIsOpenDelete] = useState(false)

  useEffect(() => {
    dispatch(fetchNotesThunk({ page }))
  }, [page, dispatch])

  const handleAdd = handleSubmit(async (data) => {
    const userData = localStorage.getItem('persist:auth')
    const user = JSON.parse(userData)
    const payload = {
      text: data.text,
      source: {
        source: 'order',
        sourceId: user.user.id,
      },
    }
    try {
      if (isOpenAdd) {
        await dispatch(postNotesThunk(payload))
        dispatch(fetchNotesThunk({ page }))
        reset()
        setIsOpenAdd(false)
        toast.success('Zadanie zostało dodany pomyślnie')
      }
    } catch (error) {
      toast.error('Nie udało się dodać zadanie')
    }
  })

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
      <div>
        <h3>Zadania</h3>
      </div>
      <Pagination totalPages={perPage} page={page} setPage={setPage} />
      {isOpenAdd && (
        <ModalAddTask
          CancelBTN={() => setIsOpenAdd(false)}
          AcceptBTN={handleAdd}
          register={register}
        />
      )}
    </div>
  )
}

export default AdminTasks
