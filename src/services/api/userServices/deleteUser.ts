import { ResI } from '../interfaces'
import { adminService } from '../adminServices/adminService'
import { UserProps } from '~components/Header'

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
export async function deleteUser(id: string) {
  const user: UserProps = JSON.parse(localStorage.getItem('UserData')) as UserProps
  try {
    if (user.admin) {
      const token = user.token
      const adminToken = `Bearer ${token}`
      const res: ResI = await adminService.delete(`/user/${id}`, { headers: { Authorization: 
        adminToken } 
      })
      return res.status
    } else {
      console.log('Usuario nao administrador')
    }
  } catch (error) {
    console.error(error)
  }
}
