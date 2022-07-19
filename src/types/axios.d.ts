import { AxiosInstance, AxiosRequestConfig } from 'axios'

declare module 'axios' {
  export interface AxiosInstance {
    request<TData>(path: string, config?: AxiosRequestConfig): Promise<TData>
    get<TData>(path: string, config?: AxiosRequestConfig): Promise<TData>
    put<TData>(path: string, config?: AxiosRequestConfig): Promise<TData>
    delete<TData>(path: string, config?: AxiosRequestConfig): Promise<TData>
    patch<TData>(path: string, config?: AxiosRequestConfig): Promise<TData>
    post<TData>(path: string, config?: AxiosRequestConfig): Promise<TData>
  }
}
