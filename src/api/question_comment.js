import request from '@/util/request'

//添加评论
export function addComment(data) {
    return request({
        url: '/questionComment',
        method: 'post',
        data
    })
}
//查询评论-通过课程id
export function findByQuestionId(id) {
    return request({
        url: '/questionComment/questionId/'+id,
        method: 'get'
    })
}