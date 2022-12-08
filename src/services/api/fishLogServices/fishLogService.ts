import axios from 'axios'

const fishLogService = axios.create({
  baseURL: `https://eupescador-fishlog.herokuapp.com`,
})

export { fishLogService }
