'use client'
import { Autocomplete, MenuItem, TextField } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import { ICreateCourse } from './interfaces/create-course.interface'
import { weekDays } from './seed/form.seed'

export default function CreateCourseForm() {
  const { control, handleSubmit } = useForm<ICreateCourse>({
    mode: 'all',
    defaultValues: {
      weekDays: []
    }
  })

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
          <TextField
            id={'name'}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            slotProps={{
              input: {
                type: 'text',
                placeholder: 'Ballet Adulto',
                label: 'Nome do curso'
              }
            }}
            error={Boolean(errors.name)}
            helperText={errors.name?.message}
          />
        )}
      />
      <Controller
        name="price"
        control={control}
        render={({
          field: { name, value, onBlur, onChange },
          formState: { errors }
        }) => (
          <TextField
            id={'price'}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            slotProps={{
              input: {
                type: 'text',
                placeholder: '0,00',
                label: 'Valor da mensalidade'
              }
            }}
            error={Boolean(errors.price)}
            helperText={errors.price?.message}
          />
        )}
      />
      {/* <Controller
        name="weekDays"
        control={control}
        render={({
          field: { name, value, onBlur, onChange },
          formState: { errors }
        }) => (
          <TextField
            id={'weekDays'}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            select
            slotProps={{
              select: {
                multiple: true
              }
            }}
            error={Boolean(errors.weekDays)}
            helperText={errors.weekDays?.message}
          >
            {weekDays.map((day) => (
              <MenuItem key={day.value} value={day.value}>
                {day.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      /> */}
      <Controller
        name="weekDays"
        control={control}
        render={({ field }) => (
          <Autocomplete
            multiple
            options={weekDays}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField {...params} label="Select Options" />
            )}
            onChange={(_, data) =>
              field.onChange(
                data.map((item) => ({ value: item.value, label: item.label }))
              )
            }
            value={field.value || []}
          />
        )}
      />
    </form>
  )
}
