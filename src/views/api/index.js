import axios from 'axios'
const instance = axios.create({
  baseURL: '/service',
})
let router
const initAPI = _router => (router = _router)
const createAPI = (url, method, config) => {
  config = config || {}
  return instance({
    url,
    method,
    ...config
  })
}

const kanban = {
  getList: config => createAPI('/', 'get', config) 
}

export {
  kanban,
  initAPI
}