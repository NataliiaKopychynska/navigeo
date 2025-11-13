import type { UseFormRegisterReturn } from 'react-hook-form'

type InputProps = {
  inputLabel: string
  register: UseFormRegisterReturn<any>
  type: string
  placeholder?: string
  required?: boolean
  defaultValue?: string | number
}
function Input({
  defaultValue,
  inputLabel,
  register,
  type,
  placeholder,
  required,
}: InputProps) {
  // console.log(defaultValue)

  return (
    <div className="flex w-full flex-col">
      <h3 className="text-gray-800 text-[14px] font-normal pl-[8px] pb-[4px]">
        {inputLabel}
      </h3>
      <input
        defaultValue={defaultValue}
        {...register}
        type={type}
        placeholder={placeholder}
        required={required}
        className="relative  h-[40px] p-[8px]   text-gray-600 border border-gray-200 rounded-[10px] font-light  text-start flex flex-row justify-between font-light placeholder:font-light "
      />
    </div>
  )
}

export default Input
