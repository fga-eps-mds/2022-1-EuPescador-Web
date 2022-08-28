import { ResI } from '../interfaces'
import { fishLogService } from './fishLogService'

export async function DeleteFishLog(logId: string) {
  try {
    const userSuperAdmin = localStorage.getItem('@eupescador/userSuperAdmin')
    
    if (userSuperAdmin === 'true') {
      const token = 'admToken'
      const superAdminToken = `Bearer ${token}`
      const res: ResI = await fishLogService.delete(`/fishLog/${logId}`, { 
    headers: { Authorization: superAdminToken } 
    })
    return res.data
    } else {
      console.log('Deu errado')
    }
  } catch (error) {
    console.error(error)
  }
}

