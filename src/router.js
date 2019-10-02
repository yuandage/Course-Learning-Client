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
          path: 'subject/:id/:subId',
          name: 'subjectList',
          component: () => import('@/views/SubjectList.vue')
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
