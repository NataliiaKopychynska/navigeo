import type { RootState } from '../../../redux/store'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCarsThunk, postCarsThunk } from '../../../redux/cars/carsThunk'
import type { AppDispatch } from '../../../redux/store'
// import type { Car } from '../../../redux/cars/carsType'
import Pagination from '../../../components/atoms/Pagination'
import MiddleButton from '../../../components/atoms/MiddleButton'
import CarsTable from '../../../components/Admin/SettingPages/Cars/CarsTable'
import ModalWindow from '../../../components/atoms/ModalWindow'
import Input from '../../../components/atoms/Input'
import { IoIosAdd } from 'react-icons/io'
import { useForm } from 'react-hook-form'
import type { PostCar } from '../../../redux/cars/carsType'

function AdminCars() {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(50)
  const [isOpenAdd, setIsOpenAdd] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const { cars, status } = useSelector((state: RootState) => state.cars)
  const { register, handleSubmit, reset } = useForm<PostCar>()

  useEffect(() => {
    dispatch(fetchCarsThunk({ page }))
  }, [page, dispatch])

  const acceptNewCar = handleSubmit(async (data) => {
    const payload = {
      ...data,
      registrationNumber: data.registrationNumber.toUpperCase(),
    }
    try {
      await dispatch(postCarsThunk(payload))
      dispatch(fetchCarsThunk({ page }))
      reset()
      setIsOpenAdd(false)
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
        <CarsTable cars={cars} status={status} />
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
    </>
  )
}

export default AdminCars
