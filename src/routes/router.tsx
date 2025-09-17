import { createBrowserRouter } from 'react-router-dom'
import PublicRoute from './PublicRoute'
import Login from '../pages/Login'
import PrivateRoute from './PrivateRoute'
import Layouts from '../layouts/Layouts'
import NotFound from '../pages/NotFound'
import ChangePassword from '../pages/ChangePassword'

export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/changePassword',
        element: <ChangePassword />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
    children: [{ path: '/layout', element: <Layouts /> }],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
