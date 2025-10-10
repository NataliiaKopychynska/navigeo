import UserSetting from '../../pages/Clients/UserSetting'
import Orders from '../../pages/Clients/OrdersPage/Orders'
import NewOrder from '../../pages/Clients/OrdersPage/NewOrder'
import Trips from '../../pages/Clients/Trips'
import { Navigate } from 'react-router-dom'

export const clientRoutes = [
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
]
