import { fishLogService } from '../fishLogServices/fishLogService'
import { ResI } from '../interfaces'
import { UserProps } from '~components/Header'

export async function deleteFishLogs(id: number) {
  try {
    const userData = JSON.parse(localStorage.getItem('UserData')) as UserProps
    
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
