import request from '@/util/request'

//查询用户收藏
export function getUserFavorite(userId) {
  return request({
    url: '/userFavorite/userId/' + userId,
    method: 'get'
  })
}
//添加用户收藏
export function addUserFavorite(data) {
  return request({
    url: '/userFavorite',
    method: 'post',
    data
  })
}
//删除用户收藏
export function delUserFavorite(id) {
  return request({
    url: '/userFavorite/' + id,
    method: 'delete'
  })
}
