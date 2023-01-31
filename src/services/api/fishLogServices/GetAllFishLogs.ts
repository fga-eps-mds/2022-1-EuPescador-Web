import { ResI } from '../interfaces'
import { fishLogService } from './fishLogService'

export interface FishLogI {
  id: string
  userId: string
  name: string
  largeGroup: string
  group: string
  species: string
  photo: string
  length: string
  weight: string
  reviewed: boolean | string
  latitude: string
  longitude: string
  coordenates: {
    latitude: string
    longitude: string
  }
  reviewedBy,
  family,
  visible,
  createdAt,
  createdBy,
  updatedAt,
  updatedBy,
  deletedAt,
  deletedBy,
}

export const GetAllFishLogs = async (token: string, query: string) => {
  let route = '/fishLog/all'
  if (query) route += query

  const userToken = `Bearer ${token}`

  const res: ResI = await fishLogService.get(route, {
    headers: {Authorization: userToken},
  })
  return res.data as FishLogI[]
}
