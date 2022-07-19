import apiService from '../api'
import { ResI } from '../interfaces'

export async function GetAllFishLogs(token: string, query: string) {
  let route = '/fishLog/'
  if (query) route += query

  const userToken = `Bearer ${token}`
  const res: ResI = await apiService.get(route, {
    headers: { Authorization: userToken },
  })
  return res.data as any
}
