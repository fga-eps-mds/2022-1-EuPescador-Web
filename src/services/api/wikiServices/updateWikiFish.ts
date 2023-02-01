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
  wasIntroducedInfo?: string
  largeGroup?: string
  maxSize?: string
  maxWeight?: string
  photo?: string
  scientificName?: string
  wasIntroduced?: boolean
}

export async function UpdateWikiFish(fishWiki: fishType, token: string) {
  const userToken = `Bearer ${token}`
  const hasSpawningSeasonInfo = fishWiki.hasSpawningSeason === true ? 'Sim' : 'Não'
  const isEndemicInfo = fishWiki.isEndemic === true ? 'Sim' : 'Não'
  const wasIntroducedInfo = fishWiki.wasIntroduced === true ? 'Sim' : 'Não'
  const isThreatened = fishWiki.isThreatenedInfo === 'Não' ? false : true

  const res : AxiosResponse = await wikiService.patch(
    `/fishWiki/${fishWiki.id}`,
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
      isThreatened: isThreatened,
      isThreatenedInfo: fishWiki.isThreatenedInfo,
      wasIntroducedInfo: wasIntroducedInfo,
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
