/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createWikiFish } from './createWikiFish'
import { fish } from "../../../mocks/fishWiki"
import { f } from 'msw/lib/glossary-dc3fd077'

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
    fish.hasSpawningSeason = true
    fish.isEndemic = true
    fish.wasIntroduced = true
    fish.isThreatenedInfo = 'Sim'
    const res = await createWikiFish(fish, 'token')
    expect(res.status).toBe(200)
  })

  it('Should get status code 200', async () => {
    fish.hasSpawningSeason = false
    fish.isEndemic = false
    fish.wasIntroduced = false
    fish.isThreatenedInfo = 'Não'
    const res = await createWikiFish(fish, 'token')
    expect(res.status).toBe(200)
  })
})
