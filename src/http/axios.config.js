const baseURL = import.meta.env.MODE === 'development' ? '/api' : import.meta.env.VITE_APP_API
// const baseURL = 'https://kirukiru.rocket-coding.com/'

// const baseURL = '/api'
const timeout = 20000
const headers = {
  'Content-Type': 'application/json'
}

export default {
  baseURL,
  timeout,
  headers,
}