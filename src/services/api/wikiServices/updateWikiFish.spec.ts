/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { UpdateWikiFish } from './updateWikiFish'
import { fish } from "../../../mocks/fishWiki"

jest.mock('./wikiService', () => {
  return {
    patch: jest.fn(() => {
      return Promise.resolve({ status: 200 })
    }),
  }
})

describe('updateWikiFish', () => {

  it('Shoud get status code 200', async () => {
    const data = await UpdateWikiFish(fish, 'token')
    expect(data).toBeUndefined()
  })

  it('Shoud get status code 200', async () => {
    fish.isEndemicInfo = 'Sim'
    fish.isThreatenedInfo = 'Sim'
    fish.hasSpawningSeasonInfo = 'Sim'
    const data = await UpdateWikiFish(fish, 'token')
    expect(data).toBeUndefined()
  })

})
