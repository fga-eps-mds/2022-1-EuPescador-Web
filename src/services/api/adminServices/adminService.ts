import axios from 'axios'

const adminService = axios.create({
  baseURL: `https://eupescador-user.herokuapp.com`,
})

export { adminService }
