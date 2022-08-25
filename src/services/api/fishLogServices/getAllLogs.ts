import { ResI } from '../interfaces'
import { fishLogService } from './fishLogService'

export interface FishLogI {
  id: number
  userId: string
  name: string
  largeGroup: string
  group: string
  species: string
  coordenates: string
  photo: string
  length: string
  weight: string
  visible,
}

export async function GetAllLogs(token: string, query: string) {
  let route = '/logs/'
  if (query) route += query

  const userToken = `Bearer ${token}`

  const res: ResI = await fishLogService.get(route, {
    headers: {Authorization: userToken},
  })
  return res.data as FishLogI[]
}
