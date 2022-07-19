import { fishLogService } from './fishLogService'

export const createFishLog = async (
  photoString: string | undefined,
  name: string | undefined,
  largeGroup: string | undefined,
  group: string | undefined,
  species: string | undefined,
  weight: string | undefined,
  length: string | undefined,
  latitude: string | undefined,
  longitude: string | undefined,
  visible: boolean,
) => {
  const userId = await localStorage.getItem('@eupescador/userId')
  const token = await localStorage.getItem('@eupescador/token')
  let photo = null

  const coordenates = {
    latitude: latitude ? parseFloat(latitude) : null,
    longitude: longitude ? parseFloat(longitude) : null,
  }

  if (photoString) {
    photo = photoString
  }

  await fishLogService.post(
    '/fishLog/',
    {
      userId,
      name,
      largeGroup,
      group,
      species,
      coordenates,
      photo,
      length: length ? parseFloat(length) : null,
      weight: weight ? parseFloat(weight) : null,
      createdBy: Number(userId),
      visible,
    },
    { headers: { Authorization: `Bearer ${token}` } },
  )
}
