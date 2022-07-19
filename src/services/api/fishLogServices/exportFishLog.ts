import { ResI } from '../interfaces'
import { fishLogService } from './fishLogService'

export async function ExportFishLogs(token: string, exportList: Array<string>) {
  const userToken = `Bearer ${token}`

  const res: ResI = await fishLogService.get(`/fishLog/export/${exportList.join()}`, {
    headers: { Authorization: userToken },
  })
  return res.data
}
