import apiService from '../api'
import { ResI } from '../interfaces'

export async function deleteUser(id: string) {
  try {
    const userSuperAdmin = await localStorage.getItem('@eupescador/userSuperAdmin')

    if (userSuperAdmin === 'true') {
      const token: string = 'admToken'
      const superAdminToken = `Bearer ${token}`
      const res: ResI = await apiService.delete(`/admin/${id}`, { headers: { Authorization: superAdminToken } })
      return res.status
    } else {
      console.log('Deu errado')
    }
  } catch (error) {}
}
