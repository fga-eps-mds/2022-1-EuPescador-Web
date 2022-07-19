import apiService from '../api'

export async function UserLogin(emailPhone: string, password: string) {
  const res = await apiService.post('/user/login', {
    emailPhone,
    password,
  })

  return res
}
