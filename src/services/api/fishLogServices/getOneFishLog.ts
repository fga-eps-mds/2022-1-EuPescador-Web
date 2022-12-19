import { FishLogProps } from 'pages/Logs/Details'
import { ResI } from '../interfaces'
import { fishLogService } from './fishLogService'

export async function GetOneFishLog(log_id: string, token: string) {
  const userToken = `Bearer ${token}`
  const res: ResI = await fishLogService.get(`/fishLog/${log_id}`, {
    headers: { Authorization: userToken },
  })

  return (res.data as unknown) as FishLogProps
}
