/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { DeleteWikiFish } from './deleteWikiFish'


jest.mock('./wikiService', () => {
  return {
    delete: jest.fn(() => {
      return Promise.resolve({ status: 200 })
    }),
  }
})

describe('deleteWikiFish', () => {
  it('should return 200', async () => {
    localStorage.setItem('UserData', JSON.stringify({
      superAdmin: true,
    }))
    await DeleteWikiFish('1')
  })

  it('should user not Super admin', async () => {
    localStorage.setItem('UserData', JSON.stringify({
      superAdmin: false,
    }))
    await DeleteWikiFish('1')
  })
})
