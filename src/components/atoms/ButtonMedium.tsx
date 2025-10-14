type Props = {
  tittle: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick: () => void
}

function ButtonMedium({
  tittle,
  disabled = false,
  type = 'submit',
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`shadow-md w-fit  pl-[16px] pr-[16px] h-[30px]  rounded-[10px] text-[14px] font-normal border-[1px] ${
        disabled
          ? 'bg-[#f3ab9b] border-[#f3ab9b] cursor-not-allowed text-white'
          : 'bg-[#f28557] border-[#d75336] text-white hover:bg-[#ef6e23]'
      }`}
    >
      {tittle}
    </button>
  )
}

export default ButtonMedium
