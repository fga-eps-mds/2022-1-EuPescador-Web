/* eslint-disable @typescript-eslint/no-unsafe-return */
import wikiService from './wikiService'
import { AxiosResponse } from 'axios'
type fishType = {
  commonName?: string
  family?: string
  food?: string
  funFact?: string
  group?: string
  habitat?: string
  hasSpawningSeason?: boolean
  hasSpawningSeasonInfo?: string
  id?: string,
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

export async function UpdateWikiFish(fishWiki: fishType, token: string) {
  const userToken = `Bearer ${token}`
  const hasSpawning = fishWiki.hasSpawningSeasonInfo === 'Sim' ? true : false
  const isEndemic = fishWiki.isEndemicInfo === 'Sim' ? true : false
  const isThreatenedInfo = fishWiki.isThreatenedInfo === 'Sim' ? true : false
  const res : AxiosResponse = await wikiService.patch(
    `/fishWiki/${fishWiki.id}`,
    {
      commonName: fishWiki.commonName,
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
      maxSize: fishWiki.maxSize,
      maxWeight: fishWiki.maxWeight,
      photo: fishWiki.photo,
      scientificName: fishWiki.scientificName,
      wasIntroduced: fishWiki.wasIntroduced,
    },
    { headers: { Authorization: userToken } },
  )
  return res.data
}
