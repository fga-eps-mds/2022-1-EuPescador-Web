import { userService } from './userService'

export async function UserEmail() {
  const route = '/user/'

  const res = await userService.get(route)

  return res
}
