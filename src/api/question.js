import request from '@/util/request'

//查询课程题目
export function getQuestion(id) {
  return request({
    url: '/question/' + id,
    method: 'get'
  })
}
//查询课程题目
export function findByCourseIdAndType(courseId, type) {
  return request({
    url: '/question/' + courseId + '/' + type,
    method: 'get'
  })
}
//查询课程题目类型
export function findQuestionType(courseId) {
  return request({
    url: '/question/questionType/' + courseId,
    method: 'get'
  })
}


