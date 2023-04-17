import { HomeCotainer, LoginBox, LoginOptions } from './styles'

import TrampayLogo from '../../assets/trampay-logo.png'
import { BasicButton } from '../../components/BasicButton'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { authenticateUser } from '../../helpers/apiHelpers'
import { BasicFrom } from '../../components/BasicForm'

const loginFormSchema = z.object({
  email: z.string().nonempty('email is required'),
  password: z
    .string()
    .nonempty('password is required')
    .min(8, 'Password must be at least 8 characters'),
})

type LoginFormInputs = z.infer<typeof loginFormSchema>

export function Home() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginFormSchema),
  })

  async function handleLogin(data: LoginFormInputs) {
    try {
      const authenticatedUser = await authenticateUser(data)

      console.log('Usuario logado com sucesso', authenticatedUser)

      // TODO Implementar sessão de usuário

      alert(
        `USUÁRIO LOGADO COM SUCESSO\nId: ${authenticatedUser.id}\nNome: ${authenticatedUser.name}\nEmail: ${authenticatedUser.email}`,
      )

      reset()
    } catch (error: any) {
      alert(error.response.data.message)
    }
  }

  const formIsInvalid = !watch('password') || !watch('email')

  return (
    <HomeCotainer>
      <LoginBox>
        <img src={TrampayLogo} alt="" />
        <section>
          <BasicFrom action="" onSubmit={handleSubmit(handleLogin)}>
            <input placeholder="Email" type="text" {...register('email')} />
            {errors.email && <span>{errors.email?.message}</span>}
            <input
              placeholder="Senha"
              type="password"
              {...register('password')}
            />
            {errors.password && <span>{errors.password?.message}</span>}
            <BasicButton disabled={formIsInvalid}>LOGIN</BasicButton>
          </BasicFrom>
          <LoginOptions>
            <a href="/create-user">Criar nova conta</a> |
            <a href="/restore-password">Recupear senha</a>
          </LoginOptions>
        </section>
      </LoginBox>
    </HomeCotainer>
  )
}
