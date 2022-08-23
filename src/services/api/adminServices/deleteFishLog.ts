import { ResI } from '../interfaces'
import { adminService } from './adminService'

export async function deleteFishLogs(id: string) {
  try {
    const userSuperAdmin = localStorage.getItem('@eupescador/userSuperAdmin')

    if (userSuperAdmin === 'true') {
      const token = 'admToken'
      const superAdminToken = `Bearer ${token}`
      const res: ResI = await adminService.delete(`/admin/${id}`, { headers: { Authorization: superAdminToken } })
      return res.status
    } else {
      console.log('Deu errado')
    }
  } catch (error) {
    console.error(error)
  }
}
