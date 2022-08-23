export interface ResI {
  data: [any]
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
