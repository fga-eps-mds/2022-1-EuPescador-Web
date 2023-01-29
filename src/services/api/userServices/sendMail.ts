import { userService } from './userService'

export async function SendMail(email: string) {
  await userService.post('/recover-password', { email })
}
