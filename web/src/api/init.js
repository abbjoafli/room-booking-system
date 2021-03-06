import axios from 'axios'
import { rememberToken, getValidToken } from './token'

const baseURL = "http://iot.abbindustrigymnasium.se:7000" //process.env.REACT_APP_API_URL //http://10.22.2.109:7000 //Lokalhost

// Create an axios instance
const api = axios.create({
  baseURL
})

export function setToken(token) {
  // saves token to local storage
  rememberToken(token)
  if (token) {
    // Setting the Authorisation header for all future GET requests
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete api.defaults.headers.common['Authorization']
  }
}

// Validates token, and removes it if it's invalid
setToken(getValidToken())

export default api
