import axios from 'axios'

const userService = axios.create({
  baseURL: `https://pescador-user.herokuapp.com`,
})

export { userService }
