import { createBrowserRouter } from 'react-router-dom'
import PublicRoute from './PublicRoute'
import Login from '../pages/Login'
import PrivateRoute from './PrivateRoute'
import Layouts from '../layouts/Layouts'
import NotFound from '../pages/NotFound'
import ChangePassword from '../pages/ChangePassword'
import UserSetting from '../pages/UserSetting'
import Orders from '../pages/OrdersPage/Orders'
import Trips from '../pages/Trips'
import StartPage from '../pages/StartPage'
import NewOrder from '../pages/OrdersPage/NewOrder'

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
            path: 'new',
            element: <NewOrder />,
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

// {
//   "price": 10000,
//   "clientId": "00000000-0000-0000-0000-000000000000",
//   "type": "inventory",
//   "area": "1.2",
//   "plotNumber": "Numer działki",
//   "countyId": "00000000-0000-0000-0000-000000000000",
//   "geodeticPoints": [],
//   "nodePoints": [
//     [
//       1,
//       2
//     ],
//     [
//       3,
//       4
//     ],
//     [
//       5,
//       6
//     ]
//   ],
//   "clientPlotNumbers": [
//     "1.0",
//     "2.0"
//   ],
//   "connectionLength": "1.2",
//   "orderAddress": {
//     "id": "00000000-0000-0000-0000-000000000000",
//     "streetName": "Sezamkowa",
//     "country": "PL",
//     "streetNumber": "4a",
//     "city": "Bydgoszcz",
//     "postCode": "04-224",
//     "postName": "Poczta w Bydgoszczy",
//     "houseNumber": "2",
//     "email": "email@example.com",
//     "phoneNumber": "48111111111",
//     "lat": "52.2222",
//     "lng": "18.2222",
//     "voivodeship": "kujawsko-pomorskie",
//     "county": "bydgoski",
//     "registrationUnit": "Bydgoszcz",
//     "precinct": "string"
//   },
//   "clientAttachments": [
//     "00000000-0000-0000-0000-000000000000",
//     "00000000-0000-0000-0000-000000000001",
//     "00000000-0000-0000-0000-000000000002"
//   ],
//   "additionalInformation": "Description",
//   "buffer": 0
// }
