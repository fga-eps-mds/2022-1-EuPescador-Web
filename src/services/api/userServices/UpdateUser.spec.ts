/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { UpdateUser } from './UpdateUser'
import { user } from "../../../mocks/user"

jest.mock('./userService', () => {
  return {
    userService: {
      put: jest.fn().mockResolvedValue({status: 200, data: {id: '1', name: 'Nome 1'}}),
    },
}
})

describe('Update User', () => {

  it('Shoud get status code 200', async () => {
    const res = await UpdateUser(user.id, 'token', user) as any
    expect(res.name).toEqual("Nome 1")
  })

})
