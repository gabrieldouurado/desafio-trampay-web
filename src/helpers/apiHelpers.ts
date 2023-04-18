// eslint-disable-next-line no-unused-vars
import axios, { AxiosError } from 'axios'

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
})

interface AuthenticateUserProps {
  email: string
  password: string
}

interface ResetPassowordProps {
  password: string
  token: string
}

interface CreateNewUserProps {
  name: string
  email: string
  password: string
}

export async function authenticateUser(data: AuthenticateUserProps) {
  const authenticatedUser = await api.post('/account/authentication', data)

  return authenticatedUser.data
}

export async function sendResetPasswordMail(email: string) {
  await api.post('/account/send-mail-reset-password', { email })
}

export async function resetPassword({ password, token }: ResetPassowordProps) {
  await api.patch('/account/reset-password', { password, token })
}

export async function createNewUser(data: CreateNewUserProps) {
  await api.post('/account/create-user', data)
}
