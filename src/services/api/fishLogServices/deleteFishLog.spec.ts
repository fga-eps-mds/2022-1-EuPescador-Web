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
    const data = await deleteFishLog('1')
    expect(data.status).toBe(200)
  })

  it('Shoud get status code 200', async() => {
    window.localStorage.setItem("UserData", JSON.stringify({
      "admin": false,
    }))
    const data = await deleteFishLog('1')
    expect(data.status).toBe(401)
  })

})
