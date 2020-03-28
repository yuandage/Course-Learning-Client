import request from '@/util/request'


// 查询课程分类树
export function getCourseCategory() {
    return request({
      url: `/category/courseCategory`,
      method: 'get'
    })
  }

// 查询课程子分类
export function getCourseSubCategory() {
  return request({
    url: `/category/subCategory`,
    method: 'get'
  })
}

