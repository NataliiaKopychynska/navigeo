import { FaCheckCircle } from 'react-icons/fa'
import { FaCircleExclamation } from 'react-icons/fa6'

export const renderStatus = (status: string) => {
  switch (status) {
    case 'Rozpoczęto pomiar':
      return (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
          <FaCheckCircle className="w-4 h-4" /> {status}
        </span>
      )
    case 'Gotowe opracowanie':
      return (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
          <FaCheckCircle className="w-4 h-4" /> {status}
        </span>
      )
    case 'Problem z realizacją':
      return (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium">
          <FaCircleExclamation className="w-4 h-4" /> {status}
        </span>
      )
    default:
      return <span>{status}</span>
  }
}
