import { NavLink, useNavigate } from 'react-router-dom'
import { GrList } from 'react-icons/gr'
import { BsCalendar3 } from 'react-icons/bs'
// import { FaPeopleGroup } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '@reduxjs/toolkit/query'
import { useEffect, useState } from 'react'
import Navigation from './Admin/Setting /Navigation'
import SettingNavigation from './Admin/Setting /SettingNavigation'
import { MdLogout } from 'react-icons/md'
import { logout } from '../redux/auth/authSlice'

function Sidebar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state: RootState) => state.auth.user)
  // const [showSettingsMenu, setShowSettingsMenu] = useState(false)
  const [showSettingsMenu, setShowSettingsMenu] = useState(() => {
    const saved = localStorage.getItem('showSettingsMenu')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    localStorage.setItem('showSettingsMenu', JSON.stringify(showSettingsMenu))
  }, [showSettingsMenu])

  const handleLogout = () => {
    dispatch(logout())
    // localStorage.removeItem('user')
    // localStorage.removeItem('persist:auth')
    localStorage.clear()

    navigate('/login')
  }

  return (
    <div className="h-screen pl-[20px] pt-[20px] shadow w-[200px] flex flex-col justify-between pb-[24px] ">
      {user.type === '' && (
        <div className="">
          <NavLink to="client/setting">
            <img
              src="/public/delair-tech.svg"
              className="w-[160px] h-[40px]   mb-[20px]"
            />
          </NavLink>
          <NavLink
            to="client/orders"
            className="flex flex-row gap-[8px] content-center  text-gray-700 mb-6 text-center"
          >
            <GrList className="w-[20px] h-[20px] mt-[2px] content-center" />
            Zlecenia
          </NavLink>
          <NavLink
            to="client/trips"
            className="flex flex-row gap-[8px] content-center  text-gray-700 mb-6 text-center "
          >
            <BsCalendar3 className="w-[20px] h-[20px] mt-[2px] content-center" />
            Wyjazdy
          </NavLink>
        </div>
      )}
      {user.type === 'super_admin' && (
        <div className=" ">
          {!showSettingsMenu && (
            <Navigation setShowSettingsMenu={setShowSettingsMenu} />
          )}
          {showSettingsMenu && (
            <SettingNavigation setShowSettingsMenu={setShowSettingsMenu} />
          )}
        </div>
      )}
      <NavLink
        to="/login"
        className="flex flex-row gap-[8px] content-center  text-gray-700 mb-6 text-centerr"
        onClick={handleLogout}
      >
        <MdLogout className="w-[20px] h-[20px] mt-[2px] content-center" />
        Wyloguj
      </NavLink>
    </div>
  )
}

export default Sidebar
