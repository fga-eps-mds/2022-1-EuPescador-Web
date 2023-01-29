import wikiService  from './wikiServices/wikiService'


export interface ResI {
  data: []
  status: string
}

export interface FishWiki {
  id?: number
  largeGroup?: string
  group?: string
  commonName?: string
  scientificName?: string
  family?: string
  food?: string
  habitat?: string
  maxSize?: string
  maxWeight?: string
  isEndemicInfo?: string
  isEndemic?: boolean
  isThreatenedInfo?: string
  isThreatened?: boolean
  hasSpawningSeasonInfo?: string
  hasSpawningSeason?: boolean
  wasIntroducedInfo?: string
  wasIntroduced?: boolean
  funFact?: string
  photo?: string
}

export interface FishWikiArray {
  allFishWiki? : FishWiki[]
  page?: number
  count?: number
  totalPages?: number
}

export async function GetAllFishes(page: number, count: number) {
  const res: ResI = await wikiService.get(`/fishWiki?page=${page}&count=${count}`)
  return res.data as unknown as FishWikiArray
}
