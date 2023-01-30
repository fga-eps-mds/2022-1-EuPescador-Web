/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { UpdateUser } from './UpdateUser'
import { user } from "../../../mocks/user"

jest.mock('./userService', () => {
  return {
    userService: {
      put: jest.fn().mockResolvedValue({status: 200 }),
    },
}
})

describe('Update User', () => {

  it('Shoud get status code 200', async () => {
    await UpdateUser(user.id, 'token', user)
  })

})
