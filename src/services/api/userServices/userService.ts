import axios from 'axios'

const userService = axios.create({
  baseURL: `https://user-2022-1.herokuapp.com`,
})

export { userService }
