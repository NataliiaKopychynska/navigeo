import { createBrowserRouter } from 'react-router-dom'
import PublicRoute from './PublicRoute'
import Login from '../pages/Login'
import PrivateRoute from './PrivateRoute'
import Layouts from '../layouts/Layouts'
import NotFound from '../pages/NotFound'
import ChangePassword from '../pages/ChangePassword'
import UserSetting from '../pages/Clients/UserSetting'
import Orders from '../pages/Clients/OrdersPage/Orders'
import Trips from '../pages/Clients/Trips'
import StartPage from '../pages/StartPage'
import NewOrder from '../pages/Clients/OrdersPage/NewOrder'
import AdminOrders from '../pages/admin/AdminOrders'
import AdminClients from '../pages/admin/AdminClients'
import AdminTrips from '../pages/admin/AdminTrips'
import AdminSetting from '../pages/admin/AdminSetting'

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
            path: 'client/setting',
            element: <UserSetting />,
          },
          {
            path: 'client/orders',
            element: <Orders />,
          },
          {
            path: 'client/new',
            element: <NewOrder />,
          },
          {
            path: 'client/trips',
            element: <Trips />,
          },
          {
            path: 'admin/orders',
            element: <AdminOrders />,
          },
          {
            path: 'admin/clients',
            element: <AdminClients />,
          },
          {
            path: 'admin/trips',
            element: <AdminTrips />,
          },
          {
            path: 'admin/setting',
            element: <AdminSetting />,
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
