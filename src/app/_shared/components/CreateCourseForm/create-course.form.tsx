import { Input } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { ICreateCourse } from './interfaces/create-course.interface'

export default function CreateCourseForm() {
  const { control, handleSubmit } = useForm<ICreateCourse>()

  function createCourse(data: ICreateCourse) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(createCourse)}>
      <Controller
        name="name"
        control={control}
        render={({
          field: { name, value, onBlur, onChange },
          formState: { errors }
        }) => (
          <Input
            id="name"
            name={name}
            type="text"
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            placeholder="Entre com o nome do curso"
          />
        )}
      />
    </form>
  )
}
