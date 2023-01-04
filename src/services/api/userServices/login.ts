import { userService } from './userService'

export async function UserLogin(emailPhone: string, password: string) {
  const res = await userService.post('/login', {
    emailPhone,
    password,
  })

  return res
}
