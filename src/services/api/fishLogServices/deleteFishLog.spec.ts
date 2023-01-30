/* eslint-disable @typescript-eslint/no-unsafe-call */
import { deleteFishLog } from './deleteFishLog'


jest.mock('./fishLogService', () => {
  return {
    fishLogService: {
      delete: jest.fn().mockResolvedValue({status: 200 }),
    },
}
})


describe('fishLogServices Test', () => {

  it('Shoud get status code 200', async() => {
    window.localStorage.setItem("UserData", JSON.stringify({
      "admin": true,
    }))
    await deleteFishLog('1')
  })

  it('Shoud get status code 200', async() => {
    window.localStorage.setItem("UserData", JSON.stringify({
      "admin": false,
    }))
    await deleteFishLog('1')
  })

})
