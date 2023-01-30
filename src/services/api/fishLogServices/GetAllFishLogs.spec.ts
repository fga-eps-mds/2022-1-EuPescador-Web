/* eslint-disable @typescript-eslint/no-unsafe-call */
import { GetAllFishLogs } from './GetAllFishLogs'


jest.mock('./fishLogService', () => {
  return {
    fishLogService: {
      get: jest.fn().mockResolvedValue({status: 200 }),
    },
}
})


describe('fishLogServices Test', () => {

  it('Shoud get status code 200', async() => {
    await GetAllFishLogs('token', '1')
  })

})
