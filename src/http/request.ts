import axios from 'axios'
import axiosConfig from '@/http/config'

axiosConfig()

export const httpGet: (url: string, params: any) => any = (url = '', params = {}) => {
  return new Promise((resolve: any) => {
    axios.get(url, {params: Object.assign(params, { random: new Date().getTime()}) })
      .then((res) => {
        // 可以添加对接口返回值的判断
        resolve(res)
      })
      .catch((err) => {
        console.log(err)
      })
  })
}

export const httpPost: (url: string, params: any) => any = (url = '', params = {}) => {
  return new Promise((resolve: any) => {
    axios.post(url, Object.assign(params, { random: new Date().getTime()}))
      .then((res) => {
        // 可以添加对接口返回值的判断
        resolve(res)
      })
      .catch((err) => {
        console.log(err)
      })
  })
}
