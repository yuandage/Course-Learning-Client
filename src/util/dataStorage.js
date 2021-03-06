import Cookies from 'js-cookie'
import config from '../config/app.js'

export function getUserInfo(key = null) {
  const userInfo = Cookies.get(config.userInfoKey)
  if (key) return userInfo.key ? userInfo[key] : null
  return userInfo ? JSON.parse(userInfo) : null
}

export function setUserInfo(user) {
  Cookies.set(config.userInfoKey, user, {
    expires: config.cookiesExpires
  })
  return user
}

export function getUserRole() {
  const roles = Cookies.get('roles')
  return roles ? JSON.parse(roles) : null
}

export function setUserRole(roles) {
  Cookies.set('roles', roles, {
    expires: config.cookiesExpires
  })
  return roles
}

export function removeUserInfo() {
  return Cookies.remove(config.userInfoKey)
}

export function getToken() {
  if (Cookies.get(config.tokenKey))
    return Cookies.get(config.tokenKey)
  else return null
}

export function setToken(token) {
  return Cookies.set(config.tokenKey, token, {
    expires: config.cookiesExpires
  })
}

export function removeToken() {
  return Cookies.remove(config.tokenKey)
}

export function isLogin() {
  return (getToken() || '').length > 5
}

export default {
  getUserInfo,
  setUserInfo,
  getToken,
  setToken,
  removeToken,
  removeUserInfo,
  isLogin,
  getUserRole,
  setUserRole
}
