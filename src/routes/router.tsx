import { createBrowserRouter, Navigate } from 'react-router-dom'
import PublicRoute from './PublicRoute'
import Login from '../pages/Login'
import PrivateRoute from './PrivateRoute'
import Layouts from '../components/layouts/Layouts'
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
import AdminClientsAdd from '../pages/admin/AdminClientsAdd'

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
            path: 'client',
            children: [
              {
                index: true,
                element: <Navigate to="orders" replace />,
              },
              {
                path: 'setting',
                element: <UserSetting />,
              },
              {
                path: 'orders',
                element: <Orders />,
              },
              {
                path: 'new',
                element: <NewOrder />,
              },
              {
                path: 'trips',
                element: <Trips />,
              },
            ],
          },
          {
            path: 'admin',
            children: [
              {
                index: true,
                element: <Navigate to="orders" replace />,
              },
              {
                path: 'orders',
                element: <AdminOrders />,
              },
              {
                path: 'clients',
                element: <AdminClients />,
              },
              {
                path: 'addClient',
                element: <AdminClientsAdd />,
              },
              {
                path: 'trips',
                element: <AdminTrips />,
              },
              {
                path: 'setting',
                element: <AdminSetting />,
              },
            ],
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
