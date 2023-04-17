import { CreateUserCotainer, CreationBox } from './styles'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { BasicButton } from '../../components/BasicButton'
import { BasicFrom } from '../../components/BasicForm'

const newUserFormSchema = z.object({
  name: z.string().nonempty('name is required'),
  email: z.string().nonempty('email is required'),
  password: z
    .string()
    .nonempty('password is required')
    .min(8, 'Password must be at least 8 characters'),
})

type NewUserFormInputs = z.infer<typeof newUserFormSchema>

export function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewUserFormInputs>({
    resolver: zodResolver(newUserFormSchema),
  })

  function handleCreateNewUser(data: NewUserFormInputs) {
    // TODO Implementar no backend a criação de usuário
    console.log(data)
  }

  return (
    <CreateUserCotainer>
      <CreationBox>
        <strong>Novo usuário</strong>
        <section>
          <BasicFrom action="" onSubmit={handleSubmit(handleCreateNewUser)}>
            <input placeholder="Nome" type="text" {...register('name')} />
            {errors.name && <span>{errors.name?.message}</span>}
            <input placeholder="Email" type="text" {...register('email')} />
            {errors.email && <span>{errors.email?.message}</span>}
            <input
              placeholder="Senha"
              type="password"
              {...register('password')}
            />
            {errors.password && <span>{errors.password?.message}</span>}
            <BasicButton>CRIAR</BasicButton>
          </BasicFrom>
        </section>
      </CreationBox>
    </CreateUserCotainer>
  )
}
