import { BasicButton } from '../../components/BasicButton'
import { ResetPasswordBox, ResetPasswordCotainer } from './styles'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate, useParams } from 'react-router-dom'
import { BasicFrom } from '../../components/BasicForm'
import { resetPassword } from '../../helpers/apiHelpers'

const resetPasswordFormSchema = z.object({
  newPassword: z
    .string()
    .nonempty('password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirmationNewPassword: z
    .string()
    .nonempty('password is required')
    .min(8, 'Password must be at least 8 characters'),
})

type ResetPasswordFormInputs = z.infer<typeof resetPasswordFormSchema>

export function ResetPassword() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ResetPasswordFormInputs>({
    resolver: zodResolver(resetPasswordFormSchema),
  })

  const navigate = useNavigate()

  const { token } = useParams()

  const passwordDoesNotEqual =
    watch('newPassword') !== watch('confirmationNewPassword')

  async function handleResetPassword({ newPassword }: ResetPasswordFormInputs) {
    try {
      await resetPassword({
        password: newPassword,
        token: token as string,
      })
      alert('Senha alterada com sucesso')
      reset()
      navigate('/')
    } catch (error: any) {
      alert(error.response.data.message)
    }
  }

  return (
    <ResetPasswordCotainer>
      <ResetPasswordBox>
        <strong>Criar nova senha</strong>
        <section>
          <BasicFrom action="" onSubmit={handleSubmit(handleResetPassword)}>
            <input
              placeholder="Senha"
              type="password"
              {...register('newPassword')}
            />
            {errors.newPassword && <span>{errors.newPassword?.message}</span>}
            <input
              placeholder="Senha"
              type="password"
              {...register('confirmationNewPassword')}
            />
            {passwordDoesNotEqual && <span>passwords must be the same</span>}
            <BasicButton>ATUALIZAR</BasicButton>
          </BasicFrom>
        </section>
      </ResetPasswordBox>
    </ResetPasswordCotainer>
  )
}
