import { ResI } from '../interfaces'
import { userService } from './userService'

export interface UserI {
  admin: boolean
  city: string
  email: string
  id: string
  name: string
  password: string
  phone: string
  state: string
  superAdmin: boolean
}

export interface UserResponseI {
  data: UserI[],
  page: number,
  count: number,
  totalPages: number
}

export async function GetAllUsers(token: string, page: number, count: number) {
  const userToken = `Bearer ${token}`
  const res: ResI = await userService.get(`/user?page=${page}&count=${count}`, {
    headers: { Authorization: userToken }
  })
  return res.data as unknown as UserResponseI
}
