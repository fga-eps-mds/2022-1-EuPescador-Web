import { ResI } from '../interfaces'
import { fishLogService } from './fishLogService'

export interface FishLogInterface {
  id: any
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

export async function GetAllLogs() {
  const res: ResI = await fishLogService.get('/logs/')
  return res.data as FishLogInterface[]
}
