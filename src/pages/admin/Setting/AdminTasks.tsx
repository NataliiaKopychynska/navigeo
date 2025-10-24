import { useState } from 'react'
import MiddleButton from '../../../components/atoms/MiddleButton'
import Pagination from '../../../components/atoms/Pagination'

function AdminTasks() {
  const [isOpenAdd, setIsOpenAdd] = useState(false)
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(50)

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
      <Pagination totalPages={perPage} page={page} setPage={setPage} />
    </div>
  )
}

export default AdminTasks
