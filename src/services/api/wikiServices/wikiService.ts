import axios from 'axios'

const wikiService = axios.create({
  baseURL: `https://eupescador-fishwiki2022-2.herokuapp.com`,
})

export default wikiService
