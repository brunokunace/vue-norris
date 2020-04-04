import http from '@/services/http'

const randomApi = () => http.get('random')
const searchApi = (query) => http.get(`search?query=${query}`)

const initial = async () => {
  const payload = await randomApi()
  return formatter(payload.data)
}

const search = async (query) => {
  const payload = await searchApi(query)
  return formatter(payload.data.result)
}

const isObject = (item) => !Array.isArray(item) && (typeof item === 'object')

const formatter = (payload) => {
  if (!payload) {
    return []
  }
  if (isObject(payload)) {
    payload = [payload]
  }
  return payload.map((item, index) => {
    return { ...item, currentFact: index + 1 }
  })
}

export {
  search,
  initial
}
