import axios from 'axios'
import env2 from '../config_bouffe'

export const api_bouffe = axios.create({
  baseURL: env2.API_BOUFFE_URI,
})
