import Cookies from 'js-cookie'
import config from '../config/app.js'

export function getUserInfo (key = null) {
  let userInfo = Cookies.get(config.userInfoKey)
  if (key) return userInfo.hasOwnProperty(key) ? userInfo[key] : null
  return userInfo?JSON.parse(userInfo):null
}

export function setUserInfo (user) {
  Cookies.set(config.userInfoKey, user ,{ expires: config.cookiesExpires })
  return user
}

export function removeUserInfo () {
  return Cookies.remove(config.userInfoKey)
}

export function getToken () {
  return Cookies.get(config.tokenKey)
}

export function setToken (token) {
  return Cookies.set(config.tokenKey, token ,{ expires: config.cookiesExpires })
}

export function removeToken () {
  return Cookies.remove(config.tokenKey)
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
