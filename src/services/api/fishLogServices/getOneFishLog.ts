import apiService from '../api'
import { ResI } from '../interfaces'

export async function GetOneFishLog(log_id: string, token: string) {
  const userToken = `Bearer ${token}`
  const res: ResI = await apiService.get(`/fishLog/${log_id}`, {
    headers: { Authorization: userToken },
  })
  return res.data as any
}
