import request from '@/util/request'

//查询用户学习课程记录
export function getUserCourse(userId) {
    return request({
        url: '/userCourse/userId/'+userId,
        method: 'get'
    })
}