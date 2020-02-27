import request from '@/util/request'

//查询课程父章节
export function findParentChapter(courseId) {
    return request({
        url: '/chapter/parentChapter/'+courseId,
        method: 'get'
    })
}
//查询课程子章节
export function findSubChapter(courseId,parentId) {
    return request({
        url: '/chapter/subChapter/'+courseId+'/'+parentId,
        method: 'get'
    })
}