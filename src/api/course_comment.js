import request from '@/util/request'

//添加评论
export function addComment(data) {
  return request({
    url: '/comment',
    method: 'post',
    data
  })
}
//查询评论-通过课程id
export function findByCourseId(id) {
  return request({
    url: '/comment/courseId/' + id,
    method: 'get'
  })
}
