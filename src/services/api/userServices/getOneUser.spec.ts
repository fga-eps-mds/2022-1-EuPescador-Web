import { GetOneUser } from './getOneUser'

jest.mock('./userService', () => {
  return {
    userService: {
      get: jest.fn().mockResolvedValue({status: 200 }),
    },
}
})

describe('Get one user', () => {

  it('Shoud get status code 200', async () => {
    await GetOneUser('1', 'token')
  })

})
