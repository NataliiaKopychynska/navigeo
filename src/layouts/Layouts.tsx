import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

function Layouts() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layouts
