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

//查询课程父章节
export const findParentChapter = (courseId) => service.get('/chapter/parentChapter/'+courseId)
//查询课程子章节
export const findSubChapter = (courseId,parentId) => service.get('/chapter/subChapter/'+courseId+'/'+parentId)
//查询所有评论
export const findAllComment = () => service.get('/comment')
//添加评论
export const addComment = (comment) => service.post('/comment',comment)

//查询课程题目
export const findByCourseIdAndType = (courseId,type) => service.get('/question/'+courseId+'/'+type)

//查询课程题目类型
export const findQuestionType = (courseId) => service.get('/question/questionType/'+courseId)
//查询课程资料
export const findCourseResource = (courseId) => service.get('/resource/course/'+courseId)

//通过课程名查询课程
export const findByNameLike = (courseName) => service.get('/course/name',{params: {name: courseName  }})
