import { GetOneUser } from './getOneUser'

jest.mock('./userService', () => {
  return {
    userService: {
      get: jest.fn().mockResolvedValue({status: 200, data: {id: '1', name: 'Nome 1'} }),
    },
}
})

describe('Get one user', () => {

  it('Should get status code 200', async () => {
    const res = await GetOneUser('1', 'token')
    expect(res.name).toEqual("Nome 1")
  })

})
