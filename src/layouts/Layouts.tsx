import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function Layouts() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <main className="flex-1 m-[20px] mt-[28px]">
        <Outlet />
      </main>
    </div>
  )
}

export default Layouts
