import AddClientForm from '../../components/Admin/AddClient/AddClientForm'
import { GoArrowLeft } from 'react-icons/go'
import { Link } from 'react-router-dom'

function AdminClientsAdd() {
  return (
    <div>
      <div>
        <Link
          to="/layout/admin/clients"
          className="flex gap-[16px] items-center"
        >
          <GoArrowLeft className="w-[24px] h-[24px] p-[2px] shadow-2xl border-1 rounded-[4px] border-gray-300 hover:bg-gray-50" />
          <h1 className="text-2xl font-medium text-gray-900">Nowy klient</h1>
        </Link>
      </div>
      <AddClientForm />
      {/* <OrdersForm /> */}
    </div>
  )
}

export default AdminClientsAdd
