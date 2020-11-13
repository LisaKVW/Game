import axios from 'axios'

const ApiClient = axios.create({ baseURL: 'http://localhost:3003/api' })

export default ApiClient