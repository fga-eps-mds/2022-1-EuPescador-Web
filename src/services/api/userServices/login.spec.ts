/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { UserLogin, RecoverPassword } from './login'

jest.mock('./userService', () => {
  return {
    userService: {
      post: jest.fn().mockResolvedValue({status: 200 }),
    },
}
})

describe('Login and Recovery', () => {

  it('Should get status code 200 if login user', async () => {
    const res = await UserLogin('email@mock.com', 'password')
    expect(res.status).toEqual(200)
  })

  it('Should get status code 200 if user recovery password', async () => {
    const res = await RecoverPassword('email@mock.com')
    expect(res.status).toEqual(200)
  })

})
