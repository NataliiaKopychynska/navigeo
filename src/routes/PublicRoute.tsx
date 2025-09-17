import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import type { RootState } from 'redux/store'

function PublicRoute() {
  const user = useSelector((state: RootState) => state.auth.user)

  if (user) {
    return <Navigate to="/layout" replace />
  }
  return <Outlet />
}

export default PublicRoute
