import apiService from '../api'
import { ResI } from '../interfaces'

export async function GetAllUsers() {
  const res: ResI = await apiService.get('/user/')
  return res.data as any
}
