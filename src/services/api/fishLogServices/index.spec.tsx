import { UserLogin } from '../userServices/login'
import { GetAllFishLogs } from './GetAllFishLogs'
// import { GetOneFishLog } from './getOneFishLog'

describe('Fish Log Service Test', () => {
  it('Recuperar todos os logs', async () => {
    await UserLogin('teste123@email.com', '123').then(async (response) => {
      await GetAllFishLogs(response.data.token, '').then((res) => {
        expect(res.length).toBeGreaterThanOrEqual(1)
      })
    })
  }, 700000)

  // it('Recuperar um log', async () => {
  //   await UserLogin('teste123@email.com', '123').then(async (response) => {
  //     await GetOneFishLog('0573b008-beb5-40b9-9ec9-71dcb7c7a7ea', response.data.token).then((res) => {
  //       expect(res.id).toEqual('0573b008-beb5-40b9-9ec9-71dcb7c7a7ea')
  //     })
  //   })
  // }, 700000)
})
