import AdminOrders from '../../pages/admin/AdminOrders'
import AdminClients from '../../pages/admin/AdminClients'
import AdminClientsAdd from '../../pages/admin/AdminClientsAdd'
import AdminTrips from '../../pages/admin/AdminTrips'
import AdminSetting from '../../pages/admin/AdminSetting'
import AdminAccountDetails from '../../pages/admin/Setting/AdminAccountDetails'
import AdminUsers from '../../pages/admin/Setting/AdminUsers'
import AdminAccounts from '../../pages/admin/Setting/AdminAccounts'
import AdminCars from '../../pages/admin/Setting/AdminCars'
import AdminTasks from '../../pages/admin/Setting/AdminTasks'
import AdminPrices from '../../pages/admin/Setting/AdminPrices/AdminPrices'
import AdminSurgery from '../../pages/admin/Setting/AdminSurgery'
import AdminEquipment from '../../pages/admin/Setting/AdminEquipment'
import { Navigate } from 'react-router-dom'
import AdminPassword from '../../pages/admin/Setting/AdminPassword'
// import MapForDesignPurposes from '../../pages/admin/Setting/AdminPrices/MapForDesignPurposes/MapForDesignPurposes'
// import InventoryStaking from '../../pages/admin/Setting/AdminPrices/InventoryStaking/InventoryStaking'
import PricePage from '../../pages/admin/Setting/AdminPrices/PricePage'
import PriceTabsPage from '../../pages/admin/Setting/AdminPrices/PriceTabsPage'

// export const adminSettingRoutes = [
//   { path: 'account-details', element: <AdminAccountDetails /> },
//   { path: 'password', element: <AdminPassword /> },
//   { path: 'users', element: <AdminUsers /> },
//   { path: 'admin-accounts', element: <AdminAccounts /> },
//   { path: 'cars', element: <AdminCars /> },
//   { path: 'tasks', element: <AdminTasks /> },
//   {
//     path: 'prices',
//     element: <AdminPrices />,
//     children: [
//       {
//         path: 'mapForDesignPurposes',
//         element: <MapForDesignPurposes />,
//         children: [
//           {
//             path: ':priceID',
//             element: <PricePage />,
//           },
//         ],
//       },
//       { path: 'inventoryStaking', element: <InventoryStaking /> },
//     ],
//   },
//   { path: 'surgery', element: <AdminSurgery /> },
//   { path: 'equipment', element: <AdminEquipment /> },
// ]
export const adminSettingRoutes = [
  { path: 'account-details', element: <AdminAccountDetails /> },
  { path: 'password', element: <AdminPassword /> },
  { path: 'users', element: <AdminUsers /> },
  { path: 'admin-accounts', element: <AdminAccounts /> },
  { path: 'cars', element: <AdminCars /> },
  { path: 'tasks', element: <AdminTasks /> },
  {
    path: 'prices',
    element: <AdminPrices />,
    children: [
      {
        path: 'mapForDesignPurposes',
        element: <PriceTabsPage type="design_purposes_map" />,
        children: [
          {
            path: ':priceID',
            element: <PricePage />,
          },
        ],
      },
      {
        path: 'inventoryStaking',
        element: <PriceTabsPage type="inventory" />,
        children: [
          {
            path: ':priceID',
            element: <PricePage />,
          },
        ],
      },
      {
        path: 'staking',
        element: <PriceTabsPage type="staking" />,
        children: [
          {
            path: ':priceID',
            element: <PricePage />,
          },
        ],
      },
    ],
  },
  { path: 'surgery', element: <AdminSurgery /> },
  { path: 'equipment', element: <AdminEquipment /> },
]

export const adminRoutes = [
  {
    index: true,
    element: <Navigate to="orders" replace />,
  },
  { path: 'orders', element: <AdminOrders /> },
  { path: 'clients', element: <AdminClients /> },
  { path: 'addClient', element: <AdminClientsAdd /> },
  { path: 'trips', element: <AdminTrips /> },
  {
    path: 'setting',
    element: <AdminSetting />,
    children: adminSettingRoutes,
  },
]
