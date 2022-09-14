import { UserLogin } from '../userServices/login'
import GetAllFishLogs from './GetAllFishLogs'
import { GetOneFishLog } from './getOneFishLog'

describe('Fish Log Service Test', () => {
  it('Recuperar todos os logs', async () => {
    await UserLogin('lulu@gmail.com', '702200').then(async (response) => {
      await GetAllFishLogs(response.data.token, '').then((res) => {
        expect(res.length).toBeGreaterThanOrEqual(1)
      })
    })
  }, 700000)

  it('Recuperar um log', async () => {
    await UserLogin('lulu@gmail.com', '702200').then(async (response) => {
      await GetOneFishLog('22', response.data.token).then((res) => {
        expect(res.id).toEqual(22)
      })
    })
  }, 700000)

  it('Log não existente', async () => {
    await UserLogin('lulu@gmail.com', '702200').then(async (response) => {
      await GetOneFishLog('6000', response.data.token).catch((res) => {
        expect(res.response.status).toEqual(404)
      })
    })
  })
})
