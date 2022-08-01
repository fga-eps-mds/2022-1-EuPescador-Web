import { ResI } from '../interfaces'
import wikiService from './wikiService'

export async function GetWikiFishes(query?: string) {
  let route = '/fishWiki/'
  if (query) route += query

  const res: ResI = await wikiService.get(route)

  return res.data
}
