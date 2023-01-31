import { userService } from './userService'

export async function UpdateUser(user_id: string, password: string) {
  const route = '/user/'

  await userService.put(route, { user_id, password })
}

export async function VerifyToken(token: string) {
  const res = await userService.get(`/recover-password/token?value=${token}`)

  return res
}
