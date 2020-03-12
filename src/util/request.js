import axios from 'axios'
import router from '@/router'
import {
  Loading,
  Notification,
} from 'element-ui' // 这里我是使用elementUI的组件来给提示
import Config from '@/config/app.js'
import dataStorage from '@/util/dataStorage'

let loadingInstance = null // 加载全局的loading

const service = axios.create({ //创建axios实例，在这里可以设置请求的默认配置
  baseURL: Config.apiUrl + '/' + Config.apiPrefix,
  timeout: Config.timeout,
})
// 文档中的统一设置post请求头。下面会说到post请求的几种'Content-Type'
// service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


/** 添加请求拦截器 **/
service.interceptors.request.use(config => {
  loadingInstance = Loading.service({ // 发起请求时加载全局loading，请求失败或有响应时会关闭
    spinner: 'el-icon-loading',
    text: '拼命加载中...',
    background: 'rgba(255, 255, 255, 0)'
  })
  if(dataStorage.getToken()){
    config.headers.Authorization='Bearer '+dataStorage.getToken()
  }
  // 在这里：可以根据业务需求可以在发送请求之前做些什么:例如我这个是导出文件的接口，因为返回的是二进制流，所以需要设置请求响应类型为blob，就可以在此处设置。
  if (config.url.includes('pur/contract/export')) {
    config.headers['responseType'] = 'blob'
  }
  // 我这里是文件上传，发送的是二进制流，所以需要设置请求头的'Content-Type'
  if (config.url.includes('pur/contract/upload')) {
    config.headers['Content-Type'] = 'multipart/form-data'
  }
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

/** 添加响应拦截器  **/
service.interceptors.response.use(response => {
  loadingInstance.close()
  if (response.data.code === 20000) { // 响应结果里的status: ok是我与后台的约定，大家可以根据实际情况去做对应的判断
    return Promise.resolve(response)
  } else {
    Notification({
      title: response.data.message,
      message: '状态码:' + response.data.code+' 详细信息:'+response.data.data,
      type: 'error',
      duration: 2000, //一秒关闭,
      offset: 50
    })

    return Promise.reject(response)
  }
}, error => {
  loadingInstance.close()
  if (error.response) {
    // 根据请求失败的http状态码去给用户相应的提示
    Notification({
      title: error.response.data.message,
      message: '状态码:' + response.data.code+' 详细信息:'+response.data.data,
      type: 'warning',
      duration: 2000, //2秒关闭
      offset:50
    })
    console.log(error.response);
    if (error.response.data.code === 20002) { // token或者登陆失效情况下跳转到登录页面，根据实际情况，在这里可以根据不同的响应错误结果，做对应的事。这里我以401判断为例
      router.push({
        path: `/login`
      })
    }
    return Promise.reject(error)
  } else {
    Notification({
      title: '服务器错误',
      message: '服务器可能出了点问题',
      type: 'warning',
      duration: 2000, //2秒关闭
      offset:50
    })
    return Promise.reject(error)
  }
})

export default service