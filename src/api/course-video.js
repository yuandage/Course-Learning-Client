import request from '@/util/request'

//测试提交
export function getVideo(courseId) {
  return request({
    url: `/video/courseId/${courseId}`,
    method: 'get'
  })
}

//获取课程视频信息
export function getVideoInfo(courseId,sectionId) {
  return request({
    url: `/video/info/${courseId}/${sectionId}`,
    method: 'get'
  })
}

export function addVideo(data) {
  return request({
    url: '/video',
    method: 'post',
    data
  })
}

export function updateVideo(id, data) {
  return request({
    url: `/video/${id}`,
    method: 'put',
    data
  })
}

export function deleteVideo(id) {
  return request({
    url: `/video/${id}`,
    method: 'delete'
  })
}

export function uploadVideo(data) {
  return request({
    url: '/video/videoUpload',
    method: 'post',
    data
  })
}
