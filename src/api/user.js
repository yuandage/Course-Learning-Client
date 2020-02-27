import request from '@/util/request'

//用户登录
export function login(data) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}
//用户注册
export function register(data) {
    return request({
        url: '/user/register',
        method: 'post',
        data
    })
}
//查询用户信息
export function getUserInfo(data) {
    return request({
        url: '/user',
        method: 'post',
        data
    })
}