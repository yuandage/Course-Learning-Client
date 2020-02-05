// 每个模块都应该有自己的接口文件去统一管理api
import service from '@/util/request'

//用户登录
export const login = (params) => service.post('/user/login', params)
//用户注册
export const register = (params) => service.post('/user/register', params)
//查询所有的学科分类
export const findAllSubject = () => service.get('/subject')
//查询所有的课程
export const getAllCourse = (page,pageSize) => service.get('/course/'+page+'/'+pageSize)
//查询课程详情
export const getCourseInfo = (courseId) => service.get('/course/'+courseId)
//查询一级学科分类下的课程
export const getSubjectCourse = (subjectId,page,pageSize) => service.get('/course/subject/'+subjectId+'/'+page+'/'+pageSize)
//查询二级学科分类下的课程
export const getCourse = (parentId,page,pageSize) => service.get('/course/parentId/'+parentId+'/'+page+'/'+pageSize)
//查询用户信息
export const getUserInfo = (params) => service.post('/user', params)
//查询热门课程
export const findPopularCourse = () => service.get('/course/popular')
//查询二级学科分类
export const findChildSubject = () => service.get('/subject/child')