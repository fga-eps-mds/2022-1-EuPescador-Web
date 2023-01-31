import { GetAllUsers } from './getAllUsers'

jest.mock('./userService', () => {
  const userList = [
    {
			"id": "ae1d1c08-08eb-4a6b-a51b-cf2a23b6fefb",
			"admin": false,
			"superAdmin": false,
			"name": "Nome 1",
			"email": "a@gmail.com",
			"phone": "61999909999",
			"state": "DF",
			"city": "Brasília"
		},
		{
			"id": "f578615f-f22e-4b91-8cf2-1fbf9feb9a83",
			"admin": true,
			"superAdmin": true,
			"name": "Nome 2",
			"email": "gustavobarbosa7162@gmail.com",
			"phone": "61999907676",
			"state": "DF",
			"city": "Brasília"
		}
  ]
  return {
    userService: {
      get: jest.fn().mockResolvedValue({status: 200, data: userList }),
    },
}
})

describe('Get all user', () => {

  it('Should get status code 200', async () => {
    const res = await GetAllUsers('token', 1, 10)
    expect(res[0].name).toEqual("Nome 1")
    expect(res[1].name).toEqual("Nome 2")
  })

})
