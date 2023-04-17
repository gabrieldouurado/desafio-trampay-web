import { BasicButton } from '../../components/BasicButton'
import { RestorePasswordBox, RestorePasswordCotainer } from './styles'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendResetPasswordMail } from '../../helpers/apiHelpers'
import { BasicFrom } from '../../components/BasicForm'

const restoreFormSchema = z.object({
  email: z.string().nonempty('email is required'),
})

type RestoreFormInputs = z.infer<typeof restoreFormSchema>

export function RestorePassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RestoreFormInputs>({
    resolver: zodResolver(restoreFormSchema),
  })

  async function handleRestorePassword({ email }: RestoreFormInputs) {
    try {
      await sendResetPasswordMail(email)
      console.log('Email enviado com sucesso')
      alert('Email enviado com sucesso')
      reset()
    } catch (error: any) {
      alert(error.response.data.message)
    }
  }

  return (
    <RestorePasswordCotainer>
      <RestorePasswordBox>
        <strong>Recuperar Senha</strong>
        <section>
          <BasicFrom action="" onSubmit={handleSubmit(handleRestorePassword)}>
            <input placeholder="Email" type="text" {...register('email')} />
            {errors.email && <span>{errors.email?.message}</span>}
            <BasicButton>CRIAR</BasicButton>
          </BasicFrom>
        </section>
      </RestorePasswordBox>
    </RestorePasswordCotainer>
  )
}
