/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createWikiFish } from './createWikiFish'
import { fish } from "../../../mocks/fishWiki"

jest.mock('./wikiService', () => {
  return {
    post: jest.fn(() => {
      return Promise.resolve( { data: { message: 'Fish created' }, status: 200 })
    }),
  }
})

describe('createWikiFish', () => {

  it('Should get status code 200', async () => {
    const res = await createWikiFish(fish, 'token')
    expect(res.status).toBe(200)
  })

  it('Should get status code 200', async () => {
    fish.isEndemicInfo = 'Sim'
    fish.isThreatenedInfo = 'Sim'
    fish.hasSpawningSeasonInfo = 'Sim'
    const res = await createWikiFish(fish, 'token')
    expect(res.status).toBe(200)
    console.log(res)


  })
})
