import localKey from './localKey'

const devApiUrl = 'http://localhost:9000/'
const proApiUrl = 'http://18.162.126.205:9000/'
const nodeDevEnv = process.env.NODE_ENV === 'development'

export default {
  version: '0.1.0',
  nodeDevEnv: nodeDevEnv,
  apiUrl: nodeDevEnv ? devApiUrl : proApiUrl,
  siteName: 'Course_Learning',
  minSiteMame: 'EUI',
  apiPrefix: '',
  timeout: 2000,
  cookiesExpires: 7,
  requestRetry: 4,
  requestRetryDelay: 800,
  tokenKey: 'token',
  userInfoKey: 'userInfo',
  gitHub: 'https://github.com/yuandage/Course-Learning-Client.git',
  ...localKey
}
