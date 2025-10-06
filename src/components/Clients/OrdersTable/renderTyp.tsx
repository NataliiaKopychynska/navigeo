import { LuListTodo } from 'react-icons/lu'
import { LuPenLine } from 'react-icons/lu'
import { LiaMapSolid } from 'react-icons/lia'

export const renderTyp = (typ: string) => {
  switch (typ) {
    case 'Tyczenie':
      return (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium h-[40px] overflow-hidden text-ellipsis">
          <LuPenLine className="w-4 h-4" /> {typ}
        </span>
      )
    case 'Mapa do celów projektowych':
      return (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium truncate ">
          <LiaMapSolid className="w-4 h-4" /> {typ}
        </span>
      )
    case 'Inwentaryzacja':
      return (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium h-[40px] overflow-hidden text-ellipsis">
          <LuListTodo className="w-4 h-4" /> {typ}
        </span>
      )
    default:
      return <span>{typ}</span>
  }
}
