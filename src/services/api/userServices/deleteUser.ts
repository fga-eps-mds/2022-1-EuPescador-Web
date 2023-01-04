import { ResI } from '../interfaces'
import { adminService } from '../adminServices/adminService'
import { UserProps } from '~components/Header'

export async function deleteUser(id: string) {
  try {
    const userData = JSON.parse(localStorage.getItem('UserData')) as UserProps

    if (userData.superAdmin) {
      const token = userData.token
      const superAdminToken = `Bearer ${token}`
      const res: ResI = await adminService.delete(`/user/${id}`, { headers: { Authorization: superAdminToken } })
      // Mudança de rotas de admin para user
      return res.status
    } else {
      console.log('Deu errado')
    }
  } catch (error) {
    console.error(error)
  }
}
