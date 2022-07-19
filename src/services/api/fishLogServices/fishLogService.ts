import axios from 'axios'

const fishLogService = axios.create({
  baseURL: `https://pescador-fish-log.herokuapp.com`,
})

export { fishLogService }
