import request from '@/util/request'

//查询所有的学科分类
export function findAllSubject() {
    return request({
        url: '/subject',
        method: 'get'
    })
}
//查询二级学科分类
export function findChildSubject() {
    return request({
        url: '/subject/child',
        method: 'get'
    })
}
//查询一级学科分类下的课程
export function getSubjectCourse(subjectId,page,pageSize) {
    return request({
        url: '/course/subject/'+subjectId+'/'+page+'/'+pageSize,
        method: 'get'
    })
}
//查询二级学科分类下的课程
export function getCourse(parentId,page,pageSize) {
    return request({
        url: '/course/parentId/'+parentId+'/'+page+'/'+pageSize,
        method: 'get'
    })
}