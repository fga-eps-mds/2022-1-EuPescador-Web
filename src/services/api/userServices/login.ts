import { userService } from './userService'

export async function UserLogin(emailPhone: string, password: string) {
  const res = await userService.post('/login', {
    emailPhone,
    password,
  })

  return res
}

export async function RecoverPassword(emailPhone: string) {
  const res = await userService.post('/recover-password', {
    emailPhone,
  })

  return res
}
