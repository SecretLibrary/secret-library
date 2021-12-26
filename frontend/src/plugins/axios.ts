import axios from 'axios'

axios.defaults.headers.common.Accept = 'application/json'

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('access_token')

    if(token) {
      config.headers = {
        'x-access-token': `${token}`
      }
    }

    return config
  },
  error => Promise.reject(error)
)

axios.interceptors.response.use(
  response => response.data.result,
  error => {
    if (error.response.status === 403 || error.response.status === 401) {
      localStorage.removeItem('access_token')
      window.location.reload()
    }

    return Promise.reject(error.response.data ?? error)
  }
)
