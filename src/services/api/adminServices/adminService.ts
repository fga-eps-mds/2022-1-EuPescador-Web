import axios from 'axios'

const adminService = axios.create({
  baseURL: `https://user-2022-1.herokuapp.com`,
})

export { adminService }
