import { GetAllUsers } from './getAllUsers'

jest.mock('./userService', () => {
  return {
    userService: {
      get: jest.fn().mockResolvedValue({status: 200 }),
    },
}
})

describe('Get all user', () => {

  it('Shoud get status code 200', async () => {
    await GetAllUsers('token', 1, 10)
  })

})
