import { userService } from './userService'

export async function UserEmail() {
  let route = '/user/'

  const res = await userService.get(route)

  return res
}
