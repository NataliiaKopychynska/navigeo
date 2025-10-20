import { CiEdit } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'

type Props = {
  onEdit: () => void
  onDelete: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  //   hoverIdItem: string | number
}

function MenuHover({ onEdit, onDelete, onMouseEnter, onMouseLeave }: Props) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute right-0   bg-white shadow-md border border-gray-300 rounded-md text-sm z-10 p-2 flex flex-col gap-1"
    >
      <button
        onClick={onEdit}
        className="flex flex-row gap-[8px] hover:text-gray-800 px-2 py-1 text-gray-700 text-left"
      >
        <CiEdit className="flex items-center justify-center  fill-gray-700 h-[20px] w-[20px] hover:fill-gray-800" />
        Edytuj
      </button>
      <button
        onClick={onDelete}
        className="flex flex-row gap-[8px] hover:text-red-700 px-2 py-1 text-red-600 text-left"
      >
        <MdDeleteOutline className="flex items-center justify-center fill-red-600  h-[18px] w-[18px] hover:fill-red-700" />
        Usuń
      </button>
    </div>
  )
}

export default MenuHover
