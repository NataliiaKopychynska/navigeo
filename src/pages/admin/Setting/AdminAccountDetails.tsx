import type { ChangeMainData, MainDataInputs } from '../../../lib/pageType'
import { useForm } from 'react-hook-form'
import { FaArrowRight } from 'react-icons/fa6'
import { changeMainDataThunk } from '../../../redux/auth/meThunk'
import Input from '../../../components/atoms/Input'
import ButtonMedium from '../../../components/atoms/ButtonMedium'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../../redux/store'
import { toast } from 'react-toastify'

function AdminAccountDetails() {
  const dispatch = useDispatch<AppDispatch>()
  const { register, handleSubmit, reset } = useForm<MainDataInputs>()
  const { user } = useSelector((state: RootState) => state.auth)

  const fullNameArr = user?.fullName.split(' ') || ['', '']
  const firstName = fullNameArr[0] || ''
  const lastName = fullNameArr.slice(1).join(' ') || ''

  const onSubmit = async (data: MainDataInputs) => {
    const replaceFormData: ChangeMainData = {
      fullName: `${data.name} ${data.sureName}`,
      email: data.mail,
    }

    try {
      const response = await dispatch(changeMainDataThunk(replaceFormData))
      toast.success('Dane zostały zaktualizowane')
      return response
    } catch (error) {
      console.error('error update user data', error)
      toast.error('Nie udało się zaktualizować dane')
    } finally {
      reset()
    }
  }

  return (
    <div className="pb-[12px]">
      <div className="flex gap-2 items-center">
        <p className="text-orange-300 text-[14px] ">Panel</p>
        <FaArrowRight className="fill-gray-600 w-[8px]" />
        <p className="text-orange-300 text-[14px]">Ustawienia</p>
        <FaArrowRight className="fill-gray-600 w-[8px]" />
        <p className="text-gray-600 text-[14px]">Dane konta</p>
      </div>
      <h1 className="text-2xl font-medium text-gray-900 pt-[24px] mb-[24px]">
        Dane konta
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className=" w-[456px]">
        <div className="flex flex-col gap-[16px] pb-[24px] mb-[32px] border-b-[1px] border-b-gray-300">
          <Input
            inputLabel="Imię"
            register={register('name')}
            type="text"
            defaultValue={firstName}
            required={true}
          />
          <Input
            inputLabel="Nazwisko"
            register={register('sureName')}
            type="text"
            defaultValue={lastName}
            required={true}
          />
          <Input
            inputLabel="Adres e-mail"
            register={register('mail')}
            type="email"
            defaultValue={user?.email}
            required={true}
          />
        </div>
        <ButtonMedium tittle={'Zapisz zmiany'} />
      </form>
    </div>
  )
}

export default AdminAccountDetails
