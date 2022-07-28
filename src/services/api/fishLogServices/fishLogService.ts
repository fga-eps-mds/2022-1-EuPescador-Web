import axios from 'axios'

const fishLogService = axios.create({
  baseURL: `https://fish-log-2022-1.herokuapp.com`,
})

export { fishLogService }
