import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from 'redux/store'
import { loginThunk } from '../redux/auth/authThunk'
import type { LoginUser } from '../redux/auth/authTypes'
import { useState } from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { FiLock } from 'react-icons/fi'
import { FaRegEye } from 'react-icons/fa6'
import { FaRegEyeSlash } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Login() {
  const dispatch = useDispatch<AppDispatch>()
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>()

  const onSubmit = (data: LoginUser) => {
    dispatch(loginThunk(data))
  }

  return (
    <div className="bg-[url(/public/tlo.png)] bg-fixed w-screen h-screen flex  items-center justify-center">
      <div className="max-w-sm p-[40px] m-auto  shadow-md bg-white flex flex-col items-center justify-center rounded-[10px]">
        <img
          src="/public/delair-tech.svg"
          className="w-[312px] h-[65px]  justify-center"
        />
        <h2 className="w-[312px] text-2xl font-bold mb-2 text-center text-gray-600 mt-[24px]">
          Zaloguj
        </h2>
        <h3 className="w-[300px] text-gray-500 mb-6 text-center">
          Uzupełnij poniższe pola aby się zalogować
        </h3>
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
          <div className="flex flex-col w-[312px] relative gap-[4px]">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="******"
              {...register('password', { required: 'Password is required' })}
              className="h-[40px] p-[10px] pl-[40px] text-gray-950 border border-gray-200 rounded-[10px]"
            />
            <FiLock className="absolute top-[38px] left-[10px] text-gray-500 w-[18px] h-[18px]" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px]  text-gray-500 w-[18px] h-[18px]"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>

            {errors.email && (
              <p className="text-red-400">{errors.email.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-[312px] h-[40px] bg-[#f28557] text-white rounded-[10px] mt-2 text-[14px] border-[1px] border-[#d75336] hover:bg-[#ef6e23]"
          >
            Zaloguj
          </button>
        </form>
        <Link
          to="/changePassword"
          className="w-[300px] text-gray-500 mb-6 text-center pt-[8px]"
        >
          Nie pamiętam hasło
        </Link>
      </div>
    </div>
  )
}

export default Login
