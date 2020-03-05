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

  if (to.name === 'home' || to.name === 'Subject') {
    next()
  } else {
    if (hasToken) {
      next()
    } else {
      Notification({
        title: '未登录',
        message: '请先登录',
        type: 'warning',
        duration: 2000,
        offset: 50
      })
      if (to.name != 'courseInfo')
        next('/')

    }
  }

})