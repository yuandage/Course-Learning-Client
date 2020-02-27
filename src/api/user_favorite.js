import request from '@/util/request'

//查询用户学习课程记录
export function getUserFavorite(userId) {
    return request({
        url: '/userFavorite/userId/'+userId,
        method: 'get'
    })
}