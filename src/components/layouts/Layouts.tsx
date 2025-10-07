import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'

function Layouts() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-row  min-w-[1280px]">
        <Sidebar />
        <main className="flex-1 m-[20px] mt-[28px] ">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layouts
