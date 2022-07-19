import apiService from '../api'

export async function UserEmail() {
  let route = '/user/'

  const res = await apiService.get(route)

  return res
}
