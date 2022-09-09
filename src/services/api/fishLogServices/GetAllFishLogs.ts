import { ResI } from '../interfaces'
import { fishLogService } from './fishLogService'

const GetAllFishLogs = async (token: string, query: string) => {
  let route = '/fishLog/all'
  if (query) route += query

  const userToken = `Bearer ${token}`
  const res: ResI = await fishLogService.get(route, {
    headers: { Authorization: userToken },
  })
  return res.data
}

export default GetAllFishLogs