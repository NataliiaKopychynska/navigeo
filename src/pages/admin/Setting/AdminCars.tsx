import type { RootState } from '../../../redux/store'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchCarsThunk,
  postCarsThunk,
  replaceCarThunk,
  deleteCarThunk,
} from '../../../redux/cars/carsThunk'
import type { AppDispatch } from '../../../redux/store'
import Pagination from '../../../components/atoms/Pagination'
import MiddleButton from '../../../components/atoms/MiddleButton'
import CarsTable from '../../../components/Admin/SettingPages/Cars/CarsTable'
import ModalAddCar from '../../../components/Admin/SettingPages/Cars/ModalAddCar'
import ModalEditCar from '../../../components/Admin/SettingPages/Cars/ModalEditCar'
import { useForm } from 'react-hook-form'
import type { DataEdit, PostCar } from '../../../redux/cars/carsType'
import ModalDeleteCar from '../../../components/Admin/SettingPages/Cars/ModalDeleteCar'
import { toast } from 'react-toastify'

function AdminCars() {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(50)

  const [isOpenAdd, setIsOpenAdd] = useState(false)
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [isOpenDelete, setIsOpenDelete] = useState(false)

  const [hoverData, setHoverData] = useState<DataEdit | null>(null)

  const dispatch = useDispatch<AppDispatch>()
  const { cars, status } = useSelector((state: RootState) => state.cars)
  const { register, handleSubmit, reset, setValue, watch } = useForm<PostCar>()

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
        toast.success('Samochód został dodany pomyślnie')
      }
    } catch (error) {
      console.log('Error add cars', error)
      toast.error('Nie udało się dodać samochodu')
    }
  })

  const handleEdit = handleSubmit(async (data) => {
    if (hoverData === null) return
    try {
      await dispatch(
        replaceCarThunk({
          id: hoverData.id,
          updatedCar: {
            name: data.name,
            registrationNumber: data.registrationNumber.toUpperCase(),
          },
        }),
      )
      dispatch(fetchCarsThunk({ page }))
      reset()
      setIsOpenEdit(false)
      toast.info('Dane samochodu zostały zaktualizowane')
    } catch (error) {
      console.log('Error replace elements', hoverData.id, error)
      toast.error('Nie udało się zaktualizować samochodu')
    }
  })

  const deleteCarById = async () => {
    try {
      await dispatch(deleteCarThunk(hoverData?.id))
      dispatch(fetchCarsThunk({ page }))
      setIsOpenDelete(false)
      toast.warning('Samochód został usunięty')
    } catch (error) {
      console.log('Error delete elements', hoverData?.id, error)
      toast.error('Nie udało się usunąć samochodu')
    }
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
            onClick={() => setIsOpenAdd((prev) => !prev)}
          />
        </div>
        <CarsTable
          cars={cars ?? []}
          status={status}
          hoverData={hoverData}
          setHoverData={setHoverData}
          onDelete={() => setIsOpenDelete(true)}
          onEdit={() => {
            if (hoverData) {
              setValue('name', hoverData.name || '')
              setValue('registrationNumber', hoverData.registrationNumber || '')
              setIsOpenEdit(true)
            }
          }}
        />
        <Pagination totalPages={perPage} page={page} setPage={setPage} />
      </div>
      {isOpenAdd && (
        <ModalAddCar
          CancelBTN={() => setIsOpenAdd((prev) => !prev)}
          AcceptBTN={acceptNewCar}
          register={register}
        />
      )}
      {isOpenEdit && (
        <ModalEditCar
          watch={watch}
          setHoverData={setHoverData}
          hoverData={hoverData}
          register={register}
          handleEdit={handleEdit}
          setIsOpenEdit={setIsOpenEdit}
        />
      )}
      {isOpenDelete && (
        <ModalDeleteCar
          CancelBTN={() => setIsOpenDelete((prev) => !prev)}
          AcceptBTN={deleteCarById}
        />
      )}
    </>
  )
}

export default AdminCars

// import type { RootState } from '../../../redux/store'
// import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import {
//   fetchCarsThunk,
//   postCarsThunk,
//   replaceCarThunk,
// } from '../../../redux/cars/carsThunk'
// import type { AppDispatch } from '../../../redux/store'
// import Pagination from '../../../components/atoms/Pagination'
// import MiddleButton from '../../../components/atoms/MiddleButton'
// import CarsTable from '../../../components/Admin/SettingPages/Cars/CarsTable'
// import ModalWindow from '../../../components/atoms/ModalWindow'
// import Input from '../../../components/atoms/Input'
// import { IoIosAdd } from 'react-icons/io'
// import { MdDeleteOutline } from 'react-icons/md'
// import { useForm } from 'react-hook-form'
// import type { Car, PostCar } from '../../../redux/cars/carsType'

// function AdminCars() {
//   const [page, setPage] = useState(1)
//   const [perPage, setPerPage] = useState(50)

//   const [isOpenAdd, setIsOpenAdd] = useState(false)
//   const [isOpenEdit, setIsOpenEdit] = useState(false)
//   const [isOpenDelete, setIsOpenDelete] = useState(false)

//   const [selectedCar, setSelectedCar] = useState<Car | null>(null)

//   const [hoverData, setHoverData] = useState<{
//     id: string
//     x: number
//     y: number
//   } | null>(null)

//   const dispatch = useDispatch<AppDispatch>()
//   const { cars, status } = useSelector((state: RootState) => state.cars)
//   const { register, handleSubmit, reset, setValue } = useForm<PostCar>()

//   useEffect(() => {
//     dispatch(fetchCarsThunk({ page }))
//   }, [page, dispatch])

//   const handleEdit = async (car: Car) => {
//     // setIsOpenEdit(true)
//     console.log('Replacing car with ID:', car.id)
//     try {
//       await dispatch(
//         replaceCarThunk({
//           id: car.id,
//           updatedCar: {
//             name: car.name,
//             registrationNumber: car.registrationNumber,
//           },
//         }),
//       )
//       dispatch(fetchCarsThunk({ page }))
//       reset()
//       setIsOpenEdit(false)
//     } catch (error) {
//       console.log('Error replace elements', car.id)
//     } finally {
//       // setIsOpenEdit(false)
//       console.log('finally')
//     }
//   }

//   const handleDelete = (car: Car) => {
//     setIsOpenDelete(true)
//     // console.log('d', car.id)
//   }

//   const acceptNewCar = handleSubmit(async (data) => {
//     const payload = {
//       ...data,
//       registrationNumber: data.registrationNumber.toUpperCase(),
//     }
//     try {
//       if (isOpenAdd) {
//         await dispatch(postCarsThunk(payload))
//         dispatch(fetchCarsThunk({ page }))
//         reset()
//         setIsOpenAdd(false)
//       }
//       // if (isOpenEdit) {
//       //   console.log('edit')
//       //   reset()
//       //   setIsOpenEdit(false)
//       // }
//       // if (isOpenDelete) {
//       //   console.log('delete')
//       //   reset()
//       //   setIsOpenDelete(false)
//       // }
//     } catch (error) {
//       console.log('Error add cars', error)
//     }
//   })

//   if (status === 'loading') return <p>Ładowanie...</p>
//   if (status === 'failed') return <p>Błąd pobierania danych</p>

//   return (
//     <>
//       <div>
//         <div className="flex justify-between mt-[20px] mb-[16px]">
//           <h1 className="text-2xl font-medium text-gray-900">
//             Lista samochodów
//           </h1>
//           <MiddleButton
//             tittle="Dodaj samochód"
//             type="add"
//             onClick={() => setIsOpenAdd((prev) => !prev)}
//           />
//         </div>
//         <CarsTable
//           // ={setSelectedCar}
//           cars={cars ?? []}
//           status={status}
//           hoverData={hoverData}
//           setHoverData={setHoverData}
//           onDelete={() => setIsOpenDelete(true)}
//           onEdit={() => {
//             setIsOpenEdit(true)
//             //!
//             setSelectedCar(car)
//           }}
//         />
//         <Pagination totalPages={perPage} page={page} setPage={setPage} />
//       </div>
//       {isOpenAdd && (
//         <ModalWindow
//           CancelBTN={() => setIsOpenAdd((prev) => !prev)}
//           AcceptBTN={acceptNewCar}
//           modalName={'Dodaj samochód'}
//           modalIcon={
//             <IoIosAdd className="flex items-center justify-center  h-[28px] w-[28px] fill-amber-600" />
//           }
//           acceptButtonTittle={'Dodaj nowy samochód'}
//         >
//           <form className="mb-[40px]">
//             <Input
//               inputLabel="Nazwa samochodu"
//               register={register('name')}
//               type="text"
//               placeholder=""
//               required={true}
//             />
//             <Input
//               inputLabel="Numer rejestracyjny samochodu"
//               register={register('registrationNumber')}
//               type="text"
//               placeholder=""
//               required={true}
//             />
//           </form>
//         </ModalWindow>
//       )}
//       {isOpenEdit && (
//         <ModalWindow
//           CancelBTN={() => setIsOpenEdit((prev) => !prev)}
//           AcceptBTN={handleEdit}
//           modalName={'Edytuj samochód'}
//           modalIcon={
//             <IoIosAdd className="flex items-center justify-center  h-[28px] w-[28px] fill-amber-600" />
//           }
//           acceptButtonTittle={'Zapisz'}
//         >
//           <form className="pb-[100px] flex flex-col gap-[16px] border-b border-gray-300">
//             <Input
//               inputLabel="Nazwa samochodu"
//               register={register('name')}
//               type="text"
//               placeholder=""
//               required={true}
//             />
//             <Input
//               inputLabel="Numer rejestracyjny samochodu"
//               register={register('registrationNumber')}
//               type="text"
//               placeholder=""
//               required={true}
//             />
//           </form>
//         </ModalWindow>
//       )}
//       {isOpenDelete && (
//         <ModalWindow
//           CancelBTN={() => setIsOpenDelete((prev) => !prev)}
//           AcceptBTN={acceptNewCar}
//           modalName={'Usuwanie samochodu'}
//           modalIcon={
//             <MdDeleteOutline className="flex items-center justify-center  h-[28px] w-[28px] fill-red-600" />
//           }
//         >
//           <p className="text-gray-600 mb-16px">
//             Usunięcie samochodu skutkuje wymazaniem danych odnośnie danego
//             samochodu w systemie.{' '}
//           </p>
//           <h3 className="text-gray-700 pb-[32px] border-b border-gray-300">
//             Czy jesteś pewien, że chcesz usunąć ten samochód?
//           </h3>
//         </ModalWindow>
//       )}
//     </>
//   )
// }

// export default AdminCars
