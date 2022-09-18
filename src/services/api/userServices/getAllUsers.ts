import { ResI } from '../interfaces'
import { userService } from './userService'

/*
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
*/

const GetAllUsers = async() =>{
  const res: ResI = await userService.get('/user/')
  return res.data
}

export default GetAllUsers