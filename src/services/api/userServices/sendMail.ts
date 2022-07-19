import apiService from '../api'

export async function SendMail(email: string) {
  apiService.post('/recover-password', { email })
}
