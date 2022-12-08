import axios from 'axios'

const userService = axios.create({
  baseURL: `https://eupescador-user.herokuapp.com`,
})

export { userService }
