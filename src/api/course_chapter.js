import request from '@/util/request'

//查询课程章节
export function getChapter(courseId,parentId) {
    return request({
        url: '/chapter/'+courseId+'/'+parentId,
        method: 'get'
    })
}