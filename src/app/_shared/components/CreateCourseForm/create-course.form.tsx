'use client'
import { Autocomplete, Box, Button, TextField } from '@mui/material'
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
    <form
      onSubmit={handleSubmit(createCourse)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        paddingInline: '15%'
      }}
    >
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
            label="Nome do curso"
            slotProps={{
              input: {
                type: 'text',
                placeholder: 'Ballet Adulto'
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
            label="Valor da mensalidade"
            slotProps={{
              input: {
                type: 'text',
                placeholder: '0,00'
              }
            }}
            error={Boolean(errors.price)}
            helperText={errors.price?.message}
          />
        )}
      />
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
      <Controller
        name="duration"
        control={control}
        render={({
          field: { name, value, onBlur, onChange },
          formState: { errors }
        }) => (
          <TextField
            id={'duration'}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            label="Duração da aula(em minutos)"
            slotProps={{
              input: {
                type: 'text',
                placeholder: '60'
              }
            }}
            error={Boolean(errors.duration)}
            helperText={errors.duration?.message}
          />
        )}
      />
      <Box display={'flex'} gap={'8px'}>
        <Controller
          name="startClass"
          control={control}
          render={({
            field: { name, value, onBlur, onChange },
            formState: { errors }
          }) => (
            <TextField
              id={'startClass'}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              sx={{ width: '100%' }}
              label="Horário de início"
              slotProps={{
                input: {
                  type: 'time'
                }
              }}
              error={Boolean(errors.startClass)}
              helperText={errors.startClass?.message}
            />
          )}
        />
        <Controller
          name="endClass"
          control={control}
          render={({
            field: { name, value, onBlur, onChange },
            formState: { errors }
          }) => (
            <TextField
              id={'endClass'}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              sx={{ width: '100%' }}
              label="Horário de término"
              slotProps={{
                input: {
                  type: 'time'
                }
              }}
              error={Boolean(errors.endClass)}
              helperText={errors.endClass?.message}
            />
          )}
        />
      </Box>
      <Button type="submit" variant="contained">
        Criar curso
      </Button>
    </form>
  )
}
