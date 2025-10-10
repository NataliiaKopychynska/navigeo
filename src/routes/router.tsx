import { createBrowserRouter } from 'react-router-dom'
import PublicRoute from './PublicRoute'
import { publicRoutes } from './routerElements/publicRoutes'
import PrivateRoute from './PrivateRoute'
import Layouts from '../components/layouts/Layouts'
import { clientRoutes } from './routerElements/clientRoutes'
import { adminRoutes } from './routerElements/adminRoutes'

export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: publicRoutes,
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: '/layout',
        element: <Layouts />,
        children: [
          { path: 'admin', children: adminRoutes },
          {
            path: 'client',
            children: clientRoutes,
          },
        ],
      },
    ],
  },
])
