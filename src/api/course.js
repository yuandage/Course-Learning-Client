import request from '@/util/request'

//查询所有的课程
export function getAllCourse(page, pageSize) {
  return request({
    url: '/course/' + page + '/' + pageSize,
    method: 'get'
  })
}
//查询一级学科分类下的课程
export function getSubCategoryCourse(subjectId, page, pageSize) {
  return request({
    url: '/course/subject/' + subjectId + '/' + page + '/' + pageSize,
    method: 'get'
  })
}
//查询二级学科分类下的课程
export function getCourse(parentId, page, pageSize) {
  return request({
    url: '/course/parentId/' + parentId + '/' + page + '/' + pageSize,
    method: 'get'
  })
}
//查询课程详情
export function getCourseInfo(courseId) {
  return request({
    url: '/course/' + courseId,
    method: 'get'
  })
}
//通过课程名查询课程
export function findByNameLike(courseName) {
  return request({
    url: '/course/name',
    method: 'get',
    params: { name: courseName }
  })
}
//查询热门课程
export function getPopularCourse() {
  return request({
    url: '/course/popular',
    method: 'get'
  })
}
