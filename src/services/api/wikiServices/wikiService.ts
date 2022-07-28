import axios from 'axios'

const wikiService = axios.create({
  baseURL: `https://fish-wiki-2022-1.herokuapp.com`,
})

export default wikiService
