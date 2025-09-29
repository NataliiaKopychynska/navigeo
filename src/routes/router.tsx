import { createBrowserRouter } from 'react-router-dom'
import PublicRoute from './PublicRoute'
import Login from '../pages/Login'
import PrivateRoute from './PrivateRoute'
import Layouts from '../layouts/Layouts'
import NotFound from '../pages/NotFound'
import ChangePassword from '../pages/ChangePassword'
import UserSetting from '../pages/UserSetting'
import Orders from '../pages/Orders'
import Trips from '../pages/Trips'
import StartPage from '../pages/StartPage'

export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: '/',
        element: <StartPage />,
      },
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
    children: [
      {
        path: '/layout',
        element: <Layouts />,
        children: [
          {
            path: 'setting',
            element: <UserSetting />,
          },
          {
            path: 'orders',
            element: <Orders />,
          },
          {
            path: 'trips',
            element: <Trips />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
