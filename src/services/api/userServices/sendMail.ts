import { userService } from './userService'

export async function SendMail(email: string) {
  userService.post('/recover-password', { email })
}
