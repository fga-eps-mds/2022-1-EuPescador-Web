import { ResI } from '../interfaces'
import { fishLogService } from './fishLogService'

export async function DeleteFishLog(token: string, logId: string) {
  const userToken = `Bearer ${token}`
  const res: ResI = await fishLogService.delete(`/fishLog/${logId}`, { headers: { Authorization: userToken } })
  return res.data
}
