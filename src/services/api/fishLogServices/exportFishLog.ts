import apiService from '../api'
import { ResI } from '../interfaces'

export async function ExportFishLogs(token: string, exportList: Array<string>) {
  const userToken = `Bearer ${token}`

  const res: ResI = await apiService.get(`/fishLog/export/${exportList.join()}`, {
    headers: { Authorization: userToken },
  })
  return res.data
}
