import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/layout/App.vue'),
      children:[
        {
          path: 'subject',
          name: 'subjectList',
          component: () => import('@/views/SubjectList.vue')
        },
        {
          path: 'course',
          name: 'courseInfo',
          component: () => import('@/views/CourseInfo.vue')
        },{
          path: 'video',
          name: 'CourseVideo',
          component: () => import('@/views/CourseVideo.vue')
        },{
          path: 'test',
          name: 'CourseTest',
          component: () => import('@/views/CourseTest.vue')
        },
        {
          path: 'user',
          name: 'userInfo',
          component: () => import('@/views/UserInfo.vue')
        }
      ]

    },
   

  ]
})
