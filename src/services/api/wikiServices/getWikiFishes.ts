import apiService from '../api'
import { ResI } from '../interfaces'

export async function GetWikiFishes(query?: string) {
  let route = '/fishWiki/'
  if (query) route += query

  const res: ResI = await apiService.get(route)

  return res.data as any[]
}
