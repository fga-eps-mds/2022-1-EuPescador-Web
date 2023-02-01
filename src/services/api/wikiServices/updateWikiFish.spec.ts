/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { UpdateWikiFish } from './updateWikiFish'
import { fish } from "../../../mocks/fishWiki"

jest.mock('./wikiService', () => {
  return {
    patch: jest.fn(() => {
      return Promise.resolve( { data: { message: 'Fish updated' }, status: 200 })
    }),
  }
})

describe('updateWikiFish', () => {

  it('Should get status code 200', async () => {
    fish.hasSpawningSeason = true
    fish.isEndemic = true
    fish.wasIntroduced = true
    fish.isThreatenedInfo = 'Sim'
    const data = await UpdateWikiFish(fish, 'token')
    expect(data.status).toBe(200)
  })

  it('Should get status code 200', async () => {
    fish.hasSpawningSeason = false
    fish.isEndemic = false
    fish.wasIntroduced = false
    fish.isThreatenedInfo = 'Não'
    const data = await UpdateWikiFish(fish, 'token')
    expect(data.status).toBe(200)
  })

})
