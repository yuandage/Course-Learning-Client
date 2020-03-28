import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      meta: {
        title: '在线教育学习平台',
        icon: 'example'
      },
      component: () => import('@/layout/App.vue'),
      children: [{
          path: 'courseCategory/:id/:subId',
          name: 'CourseCategory',
          meta: {
            title: '全部课程-在线教育学习平台',
            icon: 'example'
          },
          component: () => import('@/views/CourseCategory.vue')
        },
        {
          path: 'course/:id',
          name: 'courseInfo',
          meta: {
            title: '课程详情-在线教育学习平台',
            icon: 'example'
          },
          component: () => import('@/views/CourseInfo.vue')
        }, {
          path: 'video',
          name: 'CourseVideo',
          meta: {
            title: '课程视频-在线教育学习平台',
            icon: 'example'
          },
          component: () => import('@/views/CourseVideo.vue')
        }, {
          path: 'test/:courseId/:testType',
          name: 'CourseTest',
          meta: {
            title: '课程试题-在线教育学习平台',
            icon: 'example'
          },
          component: () => import('@/views/CourseTest.vue')
        }, {
          path: 'doTest',
          name: 'CourseAllTest',
          meta: {
            title: '课程试题-在线教育学习平台',
            icon: 'example'
          },
          component: () => import('@/views/CourseAllTest.vue')
        },
        {
          path: 'user/:username/:userNav',
          name: 'userInfo',
          meta: {
            title: '个人中心-在线教育学习平台',
            icon: 'example'
          },
          component: () => import('@/views/user/UserInfo.vue')
        }
      ]
    },
    // 404 page must be placed at the end !!!
    {
      path: '*',
      name: '404',
      meta: {
        title: '在线教育学习平台-404',
        icon: 'example'
      },
      component: () => import('@/views/404.vue'),
    }
  ]
})