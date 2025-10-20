import { IoIosAdd } from 'react-icons/io'

type Props = {
  type?: 'empty' | 'add' | 'edit' | 'delate'
  tittle: string
  onClick: () => void
}

function MiddleButton({ type = 'empty', tittle, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className=" shadow-md flex gap-1 items-center justify-center  pr-[16px] pl-[16px] h-[30px]  bg-[#f28557] text-white rounded-[10px]  text-[14px] font-light border-[1px] border-[#d75336] hover:bg-[#ef6e23]"
    >
      {type === 'add' && (
        <IoIosAdd className="flex items-center justify-center  h-[20px] w-[20px]" />
      )}
      {tittle}
    </button>
  )
}

export default MiddleButton
