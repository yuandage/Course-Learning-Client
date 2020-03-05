import request from '@/util/request'

//查询用户学习课程记录
export function getUserCourse(userId) {
    return request({
        url: '/userCourse/userId/'+userId,
        method: 'get'
    })
}
//删除用户学习课程记录
export function delUserCourse(id) {
    return request({
        url: '/userCourse/'+id,
        method: 'delete'
    })
}
//添加用户学习的新课程
export function addUserCourse(data) {
    return request({
        url: '/userCourse',
        method: 'post',
        data
    })
}