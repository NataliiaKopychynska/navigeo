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
import AdminPrices from '../../pages/admin/Setting/AdminPrices'
import AdminSurgery from '../../pages/admin/Setting/AdminSurgery'
import AdminEquipment from '../../pages/admin/Setting/AdminEquipment'
import { Navigate } from 'react-router-dom'
import AdminPassword from '../../pages/admin/Setting/AdminPassword'
import MapForDesignPurposes from '../../components/Admin/SettingPages/Prise/MapForDesignPurposes'
import InventoryStaking from '../../components/Admin/SettingPages/Prise/InventoryStaking'

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
      { path: 'mapForDesignPurposes', element: <MapForDesignPurposes /> },
      { path: 'inventoryStaking', element: <InventoryStaking /> },
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
