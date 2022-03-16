import { errorMessage } from './status'

export const setInterceptors = (axiosInstance) => {
  // request intercept
  axiosInstance.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // response intercept
  axiosInstance.interceptors.response.use(
    (config) => {
      return config
    },
    (error) => {
      const { response } = error
      console.log(response)
      if (response) console.log(errorMessage(response.status))
      return Promise.reject(error)
    }
  )
}