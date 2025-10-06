import { IoIosAdd } from 'react-icons/io'
import { Link } from 'react-router-dom'

type Props = {
  address: string
  tittle: string
}

function AddButton({ address, tittle }: Props) {
  return (
    <Link
      to={address}
      // to="/layout/new"
      className=" shadow-md flex gap-1 items-center justify-center  pr-[8px] h-[30px] w-[200px] bg-[#f28557] text-white rounded-[10px]  text-[14px] font-light border-[1px] border-[#d75336] hover:bg-[#ef6e23]"
    >
      <IoIosAdd className="flex items-center justify-center  h-[20px] w-[20px]" />
      {tittle}
    </Link>
  )
}

export default AddButton
