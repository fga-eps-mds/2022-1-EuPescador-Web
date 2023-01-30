import { ResI } from '../interfaces'
import wikiService from './wikiService'
import { UserProps } from '~components/Header'

export async function DeleteWikiFish(fish_id: string) {
  try {
    const userData = JSON.parse(localStorage.getItem('UserData')) as UserProps

    if (userData.superAdmin) {
      const token = userData.token
      const superAdminToken = `Bearer ${token}`
      const res: ResI = await wikiService.delete(`/fishWiki/${fish_id}`, {
        headers: { Authorization: superAdminToken },
      })
      return res.status
    } else {
      //console.log('Deu errado')
    }
  } catch (error) {
    //console.error(error)
  }
}
