import apiService from '../api'

async function CreateUser(
  name: string,
  email: string,
  phone: string,
  state: string,
  city: string,
  password: string,
  admin: boolean,
  token?: string,
  superAdmin?: boolean,
  superToken?: string,
) {
  await apiService.post('/user/', {
    name,
    email,
    phone,
    state,
    city,
    password,
    admin,
    token,
    superAdmin,
    superToken,
  })
}

export { CreateUser }
