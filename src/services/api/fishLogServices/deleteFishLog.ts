import { UserProps } from '~components/Header'
import { ResI } from '../interfaces'
import { fishLogService } from './fishLogService'

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
export async function deleteFishLog(logId: string) {
  const user: UserProps = JSON.parse(localStorage.getItem('UserData')) as UserProps

  try {
    if (user.admin) {

      const token = user.token
      const adminToken = `Bearer ${token}`

      const res: ResI = await fishLogService.delete(`/fishLog/${logId}`, { headers: 
        { Authorization: adminToken } 
      })
      return res.status
    } else {
      console.log('Usuario nao administrador')
    }
  } catch (error) {
    console.error(error)
  }
}

