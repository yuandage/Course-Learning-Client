import request from '@/util/request'

//查询所有评论
export function findAllComment() {
    return request({
        url: '/comment',
        method: 'get'
    })
}
//添加评论
export function addComment(data) {
    return request({
        url: '/comment',
        method: 'post',
        data
    })
}