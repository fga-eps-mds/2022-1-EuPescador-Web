import apiService from '../api'

export async function UpdateUser(user_id: string, password: string) {
  let route = '/user/'

  await apiService.put(route, { user_id, password })
}

export async function VerifyToken(token: string) {
  const res = await apiService.get(`/recover-password/token?value=${token}`)

  return res
}
