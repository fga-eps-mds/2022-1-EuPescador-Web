import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { defaultsDeep } from 'lodash'
import {
  handleRequestFulfilled,
  handleRequestRejected,
  handleResponseFulfilled,
  handleResponseRejected,
} from './interceptors'

const defaultConfig = {
  headers: {
    Accept: 'application/json',
  },
}

const api = (baseURL: string, config?: AxiosRequestConfig) => {
  const axiosApi = axios.create({ baseURL, ...config })

  const request = async <TData>(path: string, config?: AxiosRequestConfig) => {
    const mergedConfig = defaultsDeep(config, defaultConfig) as AxiosRequestConfig

    return axiosApi(path, mergedConfig).then((response: AxiosResponse<TData>) => response.data)
  }

  axiosApi.request = request
  axiosApi.get = request
  axiosApi.put = request
  axiosApi.delete = request
  axiosApi.patch = request
  axiosApi.post = request

  axiosApi.interceptors.request.use(handleRequestFulfilled, handleRequestRejected)
  axiosApi.interceptors.response.use(handleResponseFulfilled, handleResponseRejected)

  return axiosApi
}

export default api
