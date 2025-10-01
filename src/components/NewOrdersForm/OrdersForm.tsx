import { useForm } from 'react-hook-form'
import type { FormValues } from './Types'
import AccessibleSelect from './AccessibleSelect'

function OrdersForm() {
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AccessibleSelect />
    </form>
  )
}

export default OrdersForm
