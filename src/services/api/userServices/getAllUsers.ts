import { ResI } from '../interfaces'
import { userService } from './userService'

export async function GetAllUsers() {
  const res: ResI = await userService.get('/user/')
  return res.data as any
}
