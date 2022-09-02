import { fishLogService } from '../fishLogServices/fishLogService'
import { ResI } from '../interfaces'
import { adminService } from './adminService'

export interface UserProps {
  admin: boolean
  name: string
  token: string
  superAdmin: boolean
}

export async function deleteFishLogs(id: number) {
  try {
    const userData = JSON.parse(localStorage.getItem('UserData')) as UserProps
    console.log(`Deletar peixe ${id}`)
    console.log(userData)

    if (userData.superAdmin) {
      const token = userData.token
      const superAdminToken = `Bearer ${token}`
      const res: ResI = await fishLogService.delete(`/fishLog/${id}`, { headers: { Authorization: superAdminToken } })
      console.log(res)
      return res.status
    } else {
      console.log('Deu errado')
    }
  } catch (error) {
    console.error(error)
  }
}
