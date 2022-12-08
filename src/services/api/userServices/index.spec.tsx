import { GetAllUsers } from './getAllUsers'
import { UserLogin } from './login'

describe('User Service Test', () => {
  it('Deve realizar o login', async () => {
    await UserLogin('teste123@email.com', '123').then((response) => {
      expect(response.status).toEqual(200)
      expect(response.data.email).toContain('teste123@email.com')
    })
  }, 700000)

  it('Deve falhar o login', async () => {
    await UserLogin('teste123@email.com', '1234').catch((error) => {
      expect(error.response.status).toEqual(401)
    })
  }, 700000)

  it('Listar todos os usuarios', async () => {
    await GetAllUsers().then((res) => {
      expect(res.length).toBeGreaterThanOrEqual(1)
    })
  }, 700000)
})
