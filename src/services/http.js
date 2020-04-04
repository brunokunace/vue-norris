import axios from 'axios'
const baseURL = 'https://api.chucknorris.io/jokes/'

const http = axios.create({
  baseURL
})

export default http
