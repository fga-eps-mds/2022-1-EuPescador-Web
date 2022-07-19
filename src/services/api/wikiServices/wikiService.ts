import axios from 'axios'

const wikiService = axios.create({
  baseURL: `https://pescador-fish-wiki.herokuapp.com`,
})

export default wikiService
