/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { DeleteWikiFish } from './deleteWikiFish'


jest.mock('./wikiService', () => {
  return {
    delete: jest.fn(() => {
      return Promise.reject({ status: 500 })
    }),
  }
})

describe('deleteWikiFish', () => {
  it('should return 500', async () => {
    localStorage.setItem('UserData', JSON.stringify({
      superAdmin: true,
    }))
    await DeleteWikiFish('1')
  })
})
