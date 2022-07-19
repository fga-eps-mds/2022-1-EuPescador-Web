import axios from 'axios'

const adminService = axios.create({
  baseURL: `https://pescador-user.herokuapp.com:4000`,
})

export { adminService }
