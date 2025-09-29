import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function StartPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login', { replace: true })
    }, 4000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="flex flex-col justify-center items-center bg-[url(/public/tlo.png)] bg-fixed w-screen h-screen g">
      <img
        src="/public/delair-tech.svg"
        className="w-[400px] h-[200px]  justify-center"
      />
      <Link
        to="/login"
        className="bg-[#f28557] text-white rounded-[10px] mt-2 text-[24px] border border-[#d75336] hover:bg-[#ef6e23] w-[400px] h-[60px] flex items-center justify-center"
      >
        Zaloguj
      </Link>
    </div>
  )
}

export default StartPage
