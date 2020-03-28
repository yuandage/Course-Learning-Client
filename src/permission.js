import router from './router'
import dataStorage from '@/util/dataStorage'
import {
  Notification
} from 'element-ui';

router.beforeEach((to, from, next) => {

  // set page title
  document.title = to.meta.title

  // determine whether the user has logged in
  const hasToken = dataStorage.getToken()

  if (hasToken||to.name === 'home' || to.name === 'CourseCategory') {
    next() //已登录,放行
  } else {//未登录
    if(from.name === 'CourseCategory'){
      Notification({
        title: '未登录',
        message: '请先登录',
        type: 'warning',
        duration: 2000,
        offset: 50
      })
    }else{
      Notification({
        title: '未登录',
        message: '请先登录',
        type: 'warning',
        duration: 2000,
        offset: 50
      })
      next('/')
    }
      
  }
})