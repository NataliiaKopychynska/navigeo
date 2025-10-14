import type { RootState } from '../../../redux/store'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCarsThunk } from '../../../redux/cars/carsThunk'
import type { AppDispatch } from '../../../redux/store'
// import type { Car } from '../../../redux/cars/carsType'
import Pagination from '../../../components/atoms/Pagination'
import MiddleButton from '../../../components/atoms/MiddleButton'
import CarsTable from '../../../components/Admin/SettingPages/Cars/CarsTable'
import ModalWindow from '../../../components/atoms/ModalWindow'
import Input from '../../../components/atoms/Input'
import { IoIosAdd } from 'react-icons/io'
import type { AddCarModal } from '../../../lib/pageType'
import { useForm } from 'react-hook-form'

function AdminCars() {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(50)
  const [isOpenAdd, setIsOpenAdd] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const { cars, status } = useSelector((state: RootState) => state.cars)
  const { register, handleSubmit, reset } = useForm<AddCarModal>()

  useEffect(() => {
    dispatch(fetchCarsThunk({ page }))
  }, [page, dispatch])

  const handleAddCar = () => {
    setIsOpenAdd((prev) => !prev)
  }

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
            onClick={handleAddCar}
          />
        </div>
        <CarsTable cars={cars} status={status} />
        <Pagination totalPages={perPage} page={page} setPage={setPage} />
      </div>
      {isOpenAdd && (
        <ModalWindow
          modalName={'Dodaj samochód'}
          modalIcon={
            <IoIosAdd className="flex items-center justify-center  h-[28px] w-[28px] fill-amber-600" />
          }
        >
          <form>
            <Input
              inputLabel="Nazwa samochodu"
              register={register('name')}
              type="text"
              placeholder=""
              required={true}
            />
            <Input
              inputLabel="Numer rejestracyjny samochodu"
              register={register('number')}
              type="text"
              placeholder=""
              required={true}
            />
          </form>
        </ModalWindow>
      )}
    </>
  )
}

export default AdminCars
