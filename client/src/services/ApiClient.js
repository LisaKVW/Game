import axios from 'axios'

const ApiClient = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? `${window.location.origin}/api`
    : 'http://localhost:3003/api' })

export default ApiClient