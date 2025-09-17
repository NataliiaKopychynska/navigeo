import { useForm } from 'react-hook-form'
import type { LoginUser } from 'redux/auth/authTypes'
import { MdOutlineEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <div className="bg-[url(/public/tlo.png)] bg-fixed w-screen h-screen flex  items-center justify-center">
      <div className="max-w-sm p-[40px] m-auto  shadow-md bg-white flex flex-col items-center justify-center rounded-[10px]">
        <img
          src="/public/delair-tech.svg"
          className="w-[312px] h-[65px]  justify-center"
        />
        <h2 className="w-[312px] text-2xl font-bold mb-2 text-center text-gray-600 mt-[24px]">
          Reset hasła
        </h2>
        <h3 className="w-[300px] text-[17px] text-gray-500 mb-6 ">
          Podaj poniżej swój adres e-mail, który został użyty podczas tworzenia
          konta.
        </h3>

        <p className="w-[300px]  text-gray-500 mb-6 ">
          Po wprowadzeniu poprawnego adresu e-mail,
          <br /> wyślemy Ci wiadomość mailową z linkiem umożliwiającym
          ustawienie nowego hasła.
          <br />
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[16px] "
        >
          <div className="flex flex-col w-[312px] relative gap-[4px]">
            <label htmlFor="email">Adres e-mail</label>
            <input
              id="email"
              type="email"
              placeholder="hello@alignui.com"
              {...register('email', { required: 'Email is required' })}
              className="h-[40px] p-[10px] pl-[40px] text-gray-950 border border-gray-200 rounded-[10px]"
            />
            <MdOutlineEmail className="absolute top-[40px] left-[10px] text-gray-500 w-[18px] h-[18px]" />

            {errors.email && (
              <p className="text-red-400">{errors.email.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-[312px] h-[40px] bg-[#f28557] text-white rounded-[10px] mt-2 text-[14px] border-[1px] border-[#d75336] hover:bg-[#ef6e23]"
          >
            Zaloguj się
          </button>
        </form>
        <Link to="/login">Pamiętam hasło</Link>
      </div>
    </div>
  )
}

export default ChangePassword
