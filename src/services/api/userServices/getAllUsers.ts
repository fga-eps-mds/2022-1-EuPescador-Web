import { ResI } from '../interfaces'
import { userService } from './userService'

export interface UserI {
  admin: boolean
  city: string
  email: string
  id: number
  name: string
  password: string
  phone: string
  state: string
  superAdmin: boolean
}

export async function GetAllUsers(token: string) {
  const userToken = `Bearer ${token}`
  const res: ResI = await userService.get('/user/', {
    headers: { Authorization: userToken }
  })
  return res.data as UserI[]
}
