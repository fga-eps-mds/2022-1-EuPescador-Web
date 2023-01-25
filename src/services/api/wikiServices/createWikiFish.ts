import wikiService from './wikiService'
import { ResI } from '../interfaces'

type fishType = {
  commonName?: string
  family?: string
  food?: string
  funFact?: string
  group?: string
  habitat?: string
  hasSpawningSeason?: boolean
  hasSpawningSeasonInfo?: string
  id?: number
  isEndemic?: boolean
  isEndemicInfo?: string
  isThreatened?: boolean
  isThreatenedInfo?: string
  largeGroup?: string
  maxSize?: string
  maxWeight?: string
  photo?: string
  scientificName?: string
  wasIntroduced?: boolean
}

export const createWikiFish = async (fishWiki: fishType, token: string) => {
  const userToken = `Bearer ${token}`
  const hasSpawning = fishWiki.hasSpawningSeasonInfo === 'Sim' ? true : false
  const isEndemic = fishWiki.isEndemicInfo === 'Sim' ? true : false
  const isThreatenedInfo = fishWiki.isThreatenedInfo === 'Sim' ? true : false
  const photo = fishWiki.photo ? fishWiki.photo : null

  // ao criar deve aparecer em primeiro
  const res: ResI = await wikiService.post(
    '/fishWiki/',
    {
      commonName: fishWiki.commonName, // tem q ser obrigatorio
      family: fishWiki.family,
      food: fishWiki.food,
      funFact: fishWiki.funFact,
      group: fishWiki.group,
      habitat: fishWiki.habitat,
      hasSpawningSeason: hasSpawning,
      hasSpawningSeasonInfo: fishWiki.hasSpawningSeasonInfo,
      isEndemic: isEndemic,
      isEndemicInfo: fishWiki.isEndemicInfo,
      isThreatened: isThreatenedInfo,
      isThreatenedInfo: fishWiki.isThreatenedInfo,
      largeGroup: fishWiki.largeGroup,
      maxSize: fishWiki.maxSize, // esta como obrigatorio
      maxWeight: fishWiki.maxWeight, // esta como obrigatorio
      photo: photo,
      scientificName: fishWiki.scientificName,
      wasIntroduced: fishWiki.wasIntroduced,
    },
    { headers: { Authorization: userToken } },
  )
  return res.data
}
