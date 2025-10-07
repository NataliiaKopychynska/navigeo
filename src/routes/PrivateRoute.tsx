import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import type { RootState } from 'redux/store'

function PrivateRoute() {
  const user = useSelector((state: RootState) => state.auth.user)
  const location = useLocation()

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  if (
    user.type !== 'super_admin' &&
    location.pathname.includes('/layout/admin')
  ) {
    return <Navigate to="/layout/client" replace />
  }

  if (
    user.type === 'super_admin' &&
    location.pathname.includes('/layout/client')
  ) {
    return <Navigate to="/layout/admin" replace />
  }

  return <Outlet />
}

export default PrivateRoute
