import type { RepeatNewPassword } from 'lib/pageType'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { repeatNewPassword } from '../../../redux/auth/meThunk'
import type { AppDispatch } from '../../../redux/store'
import Input from '../../../components/atoms/Input'
import ButtonMedium from '../../../components/atoms/ButtonMedium'
import { FaArrowRight } from 'react-icons/fa6'

function AdminPassword() {
  const dispatch = useDispatch<AppDispatch>()
  const { register, handleSubmit, reset } = useForm<RepeatNewPassword>()
  const onSubmit = async (data: RepeatNewPassword) => {
    try {
      const response = await dispatch(repeatNewPassword(data))
      return response
    } catch (error) {
      console.log('error repeat password', error)
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
        <p className="text-gray-600 text-[14px]">Zmiana hasła</p>
      </div>
      <h1 className="text-2xl font-medium text-gray-900 pt-[24px] mb-[24px]">
        Dane konta
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className=" w-[456px]">
        <div className="flex flex-col gap-[16px] pb-[24px] mb-[32px] border-b-[1px] border-b-gray-300">
          <Input
            inputLabel="Aktualne hasło"
            register={register('currentPassword')}
            type="text"
            placeholder=""
            required={true}
          />
          <Input
            inputLabel="Nowe hasło"
            register={register('newPassword')}
            type="text"
            placeholder=""
            required={true}
          />
          <Input
            inputLabel="Powtórz nowe hasło"
            register={register('repeatNewPassword')}
            type="text"
            placeholder=""
            required={true}
          />
        </div>
        <ButtonMedium tittle={'Zapisz zmiany'} />
      </form>
    </div>
  )
}

export default AdminPassword
