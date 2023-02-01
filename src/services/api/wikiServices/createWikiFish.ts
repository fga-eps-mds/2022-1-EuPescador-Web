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
  id?: string
  isEndemic?: boolean
  isEndemicInfo?: string
  isThreatened?: boolean
  isThreatenedInfo?: string
  largeGroup?: string
  wasIntroducedInfo?: string
  maxSize?: string
  maxWeight?: string
  photo?: string
  scientificName?: string
  wasIntroduced?: boolean
}

export const createWikiFish = async (fishWiki: fishType, token: string) => {
  const userToken = `Bearer ${token}`
  const hasSpawningSeasonInfo = fishWiki.hasSpawningSeason === true ? 'Sim' : 'Não'
  const isEndemicInfo = fishWiki.isEndemic === true ? 'Sim' : 'Não'
  const wasIntroducedInfo = fishWiki.wasIntroduced === true ? 'Sim' : 'Não'
  const isThreatenedInfo = fishWiki.isThreatenedInfo === 'Sim' ? true : false

  const res: AxiosResponse = await wikiService.post(
    '/fishWiki/',
    {
      commonName: fishWiki.commonName,
      family: fishWiki.family,
      food: fishWiki.food,
      funFact: fishWiki.funFact,
      group: fishWiki.group,
      habitat: fishWiki.habitat,
      hasSpawningSeason: fishWiki.hasSpawningSeason,
      hasSpawningSeasonInfo: hasSpawningSeasonInfo,
      isEndemic: fishWiki.isEndemic,
      isEndemicInfo: isEndemicInfo,
      isThreatened: isThreatenedInfo,
      isThreatenedInfo: fishWiki.isThreatenedInfo,
      largeGroup: fishWiki.largeGroup,
      wasIntroducedInfo: wasIntroducedInfo,
      maxSize: fishWiki.maxSize,
      maxWeight: fishWiki.maxWeight,
      photo: fishWiki.photo,
      scientificName: fishWiki.scientificName,
      wasIntroduced: fishWiki.wasIntroduced,
    },
    { headers: { Authorization: userToken } },
  )
  return res
}
