import { ResI } from '../interfaces'
import { fishLogService } from './fishLogService'

export async function GetAllFishLogs(token: string, query: string) {
  let route = '/fishLog/'
  if (query) route += query

  const userToken = `Bearer ${token}`
  const res: ResI = await fishLogService.get(route, {
    headers: { Authorization: userToken },
  })
  return res.data as any
}
