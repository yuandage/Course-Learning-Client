// 每个模块都应该有自己的接口文件去统一管理api
import service from '@/util/request'

export const login = (params) => service.post('/user/login', params)
export const register = (params) => service.post('/user/register', params)

export const findAllSubject = (params) => service.get('/subject', params)

export const getAllCourse = (params) => service.get('/course', params)
export const getCourse = (params) => service.get('/course/parentId/'+params, params)
export const getSubjectCourse = (params) => service.get('/course/subject/'+params, params)