import { ResI } from '../interfaces'
import wikiService from './wikiService'

export async function GetOneWikiFish(fish_id: string) {
  const res: ResI = await wikiService.get(`/fishWiki/${fish_id}`)

  return res.data
}
