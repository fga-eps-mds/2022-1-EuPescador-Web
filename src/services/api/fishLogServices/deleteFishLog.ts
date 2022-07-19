import apiService from '../api'
import { ResI } from '../interfaces'

export async function DeleteFishLog(token: string, logId: string) {
  const userToken = `Bearer ${token}`
  const res: ResI = await apiService.delete(`/fishLog/${logId}`, { headers: { Authorization: userToken } })
  return res.data
}
