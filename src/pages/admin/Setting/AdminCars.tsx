import type { RootState } from '../../../redux/store'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCarsThunk, postCarsThunk } from '../../../redux/cars/carsThunk'
import type { AppDispatch } from '../../../redux/store'
import Pagination from '../../../components/atoms/Pagination'
import MiddleButton from '../../../components/atoms/MiddleButton'
import CarsTable from '../../../components/Admin/SettingPages/Cars/CarsTable'
import ModalWindow from '../../../components/atoms/ModalWindow'
import Input from '../../../components/atoms/Input'
import { IoIosAdd } from 'react-icons/io'
import { MdDeleteOutline } from 'react-icons/md'
import { useForm } from 'react-hook-form'
import type { Car, PostCar } from '../../../redux/cars/carsType'

function AdminCars() {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(50)
  const [isOpenAdd, setIsOpenAdd] = useState(false)
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [isOpenDelete, setIsOpenDelete] = useState(false)

  const [hoverData, setHoverData] = useState<{
    id: string
    x: number
    y: number
  } | null>(null)

  const dispatch = useDispatch<AppDispatch>()
  const { cars, status } = useSelector((state: RootState) => state.cars)
  const { register, handleSubmit, reset } = useForm<PostCar>()

  const handleEdit = (car: Car) => {
    setIsOpenEdit(true)
    // console.log('ed', car.id)
  }
  const handleDelete = (car: Car) => {
    setIsOpenDelete(true)
    // console.log('d', car.id)
  }

  useEffect(() => {
    dispatch(fetchCarsThunk({ page }))
  }, [page, dispatch])

  const acceptNewCar = handleSubmit(async (data) => {
    const payload = {
      ...data,
      registrationNumber: data.registrationNumber.toUpperCase(),
    }
    try {
      if (isOpenAdd) {
        await dispatch(postCarsThunk(payload))
        dispatch(fetchCarsThunk({ page }))
        reset()
        setIsOpenAdd(false)
      }
      if (isOpenEdit) {
        console.log('edit')
        reset()
        setIsOpenEdit(false)
      }
      if (isOpenDelete) {
        console.log('delete')
        reset()
        setIsOpenDelete(false)
      }
    } catch (error) {
      console.log('Error add cars', error)
    }
  })

  if (status === 'loading') return <p>Ładowanie...</p>
  if (status === 'failed') return <p>Błąd pobierania danych</p>

  return (
    <>
      <div>
        <div className="flex justify-between mt-[20px] mb-[16px]">
          <h1 className="text-2xl font-medium text-gray-900">
            Lista samochodów
          </h1>
          <MiddleButton
            tittle="Dodaj samochód"
            type="add"
            onClick={() => setIsOpenAdd((prev) => !prev)}
          />
        </div>
        <CarsTable
          cars={cars ?? []}
          status={status}
          hoverData={hoverData}
          setHoverData={setHoverData}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
        <Pagination totalPages={perPage} page={page} setPage={setPage} />
      </div>
      {isOpenAdd && (
        <ModalWindow
          CancelBTN={() => setIsOpenAdd((prev) => !prev)}
          AcceptBTN={acceptNewCar}
          modalName={'Dodaj samochód'}
          modalIcon={
            <IoIosAdd className="flex items-center justify-center  h-[28px] w-[28px] fill-amber-600" />
          }
        >
          <form className="mb-[40px]">
            <Input
              inputLabel="Nazwa samochodu"
              register={register('name')}
              type="text"
              placeholder=""
              required={true}
            />
            <Input
              inputLabel="Numer rejestracyjny samochodu"
              register={register('registrationNumber')}
              type="text"
              placeholder=""
              required={true}
            />
          </form>
        </ModalWindow>
      )}
      {isOpenEdit && (
        <ModalWindow
          CancelBTN={() => setIsOpenEdit((prev) => !prev)}
          AcceptBTN={acceptNewCar}
          modalName={'Edytuj samochód'}
          modalIcon={
            <IoIosAdd className="flex items-center justify-center  h-[28px] w-[28px] fill-amber-600" />
          }
        >
          <form className="pb-[100px] flex flex-col gap-[16px] border-b border-gray-300">
            <Input
              inputLabel="Nazwa samochodu"
              register={register('name')}
              type="text"
              placeholder=""
              required={true}
            />
            <Input
              inputLabel="Numer rejestracyjny samochodu"
              register={register('registrationNumber')}
              type="text"
              placeholder=""
              required={true}
            />
          </form>
        </ModalWindow>
      )}
      {isOpenDelete && (
        <ModalWindow
          CancelBTN={() => setIsOpenDelete((prev) => !prev)}
          AcceptBTN={acceptNewCar}
          modalName={'Usuwanie samochodu'}
          modalIcon={
            <MdDeleteOutline className="flex items-center justify-center  h-[28px] w-[28px] fill-red-600" />
          }
        >
          <p className="text-gray-600 mb-16px">
            Usunięcie samochodu skutkuje wymazaniem danych odnośnie danego
            samochodu w systemie.{' '}
          </p>
          <h3 className="text-gray-700 pb-[32px] border-b border-gray-300">
            Czy jesteś pewien, że chcesz usunąć ten samochód?
          </h3>
        </ModalWindow>
      )}
    </>
  )
}

export default AdminCars
