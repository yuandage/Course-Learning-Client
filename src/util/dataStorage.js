import storage from 'good-storage'
import config from '../config/app.js'

export function getUserInfo (key = null) {
  let userInfo = storage.session.get(config.userInfoKey)
  if (key) return userInfo.hasOwnProperty(key) ? userInfo[key] : null
  return userInfo
}

export function setUserInfo (user) {
  storage.session.set(config.userInfoKey, user)
  return user
}

export function removeUserInfo () {
  return storage.session.remove(config.userInfoKey)
}

export function getToken () {
  return storage.session.get(config.tokenKey)
}

export function setToken (token) {
  return storage.session.set(config.tokenKey, token)
  // return Cookies.set(config.tokenKey, token ,{ expires: config.cookiesExpires })
}

export function removeToken () {
  return storage.session.remove(config.tokenKey)
}

export function isLogin () {
  return (getToken() || '').length > 5
}

export default {
  getUserInfo,
  setUserInfo,
  getToken,
  setToken,
  removeToken,
  removeUserInfo,
  isLogin
}
