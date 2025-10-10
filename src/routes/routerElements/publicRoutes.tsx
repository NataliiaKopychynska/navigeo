import StartPage from '../../pages/StartPage'
import Login from '../../pages/Login'
import ChangePassword from '../../pages/ChangePassword'

export const publicRoutes = [
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
]
