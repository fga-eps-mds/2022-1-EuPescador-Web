import apiService from '../api'
import { ResI } from '../interfaces'

export async function GetOneWikiFish(fish_id: string) {
  const res: ResI = await apiService.get(`/fishWiki/${fish_id}`)

  return res.data
}
