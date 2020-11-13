import axios from 'axios'

const ApiClient = axios.create({ baseURL: 'http://localhost:3006/api' })

export default ApiClient