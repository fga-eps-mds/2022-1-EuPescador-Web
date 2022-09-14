import { GetAllUsers } from './getAllUsers'
import { UserLogin } from './login'

describe('User Service Test', () => {
  it('Deve realizar o login', async () => {
    await UserLogin('lulu@gmail.com', '702200').then((response) => {
      expect(response.status).toEqual(200)
      expect(response.data.email).toContain('lulu@gmail.com')
    })
  })

  it('Deve falhar o login', async () => {
    await UserLogin('lulu@gmail.com', '1234').catch((error) => {
      expect(error.response.status).toEqual(401)
    })
  })

  it('Listar todos os usuarios', async () => {
    await GetAllUsers().then((res) => {
      expect(res.length).toBeGreaterThanOrEqual(1)
    })
  })
})
