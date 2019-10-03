// 每个模块都应该有自己的接口文件去统一管理api
import service from '@/util/request'

export const login = (params) => service.post('/user/login', params)
export const register = (params) => service.post('/user/register', params)

export const findAllSubject = () => service.get('/subject')

export const getAllCourse = (page,pageSize) => service.get('/course/'+page+'/'+pageSize)
export const getCourse = (parentId,page,pageSize) => service.get('/course/parentId/'+parentId+'/'+page+'/'+pageSize)
export const getSubjectCourse = (subjectId,page,pageSize) => service.get('/course/subject/'+subjectId+'/'+page+'/'+pageSize)

export const getUserInfo = (params) => service.post('/user', params)