import OrdersForm from '../../../components/NewOrdersForm/OrdersForm'
import { GoArrowLeft } from 'react-icons/go'
import { Link } from 'react-router-dom'

function NewOrder() {
  return (
    <div>
      <div>
        <Link
          to="/layout/client/orders"
          className="flex gap-[16px] items-center"
        >
          <GoArrowLeft className="w-[24px] h-[24px] p-[2px] shadow-2xl border-1 rounded-[4px] border-gray-300" />
          <h1 className="text-2xl font-medium text-gray-900">
            Tworzenie nowego zlecenia
          </h1>
        </Link>
      </div>
      <OrdersForm />
    </div>
  )
}

export default NewOrder
