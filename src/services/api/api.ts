import axios from 'axios'

const apiService = axios.create({
  baseURL: process.env.BFF_URL,
  withCredentials: true,
  timeout: 60000,
  headers: {
    'content-Type': 'application/json',
    Accept: '/',
    'Cache-Control': 'no-cache',
  },
})

apiService.interceptors.request.use(
  (request) => {
    const accessToken = 'lala'

    if (accessToken) {
      request.headers = {
        ...request.headers,
        Authorization: `Bearer ${accessToken}`,
      }
    }
    return request
  },

  (err) => Promise.reject(err),
)

apiService.interceptors.response.use(
  (response) => response.data,
  (err) => {
    if (err.response === undefined) {
      return Promise.reject(new Error('Não foi possível conectar ao servidor.'))
    }

    if (err.response.status === 401) {
      window.location.assign(process.env.CENTRAL_URL)
      return Promise.resolve()
    }

    return Promise.reject(err)
  },
)

export default apiService
