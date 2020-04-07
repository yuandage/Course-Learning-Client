import Vue from 'vue'
import Vuex from 'vuex'
import dataStorage from '@/util/dataStorage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: dataStorage.isLogin(),
    user: dataStorage.getUserInfo()
  },
  mutations: {
    setUserInfo(state) {
      state.user = dataStorage.getUserInfo()
    },
    setIsLogin(state) {
      state.isLogin = dataStorage.isLogin()
    },
    removeUserInfo(state) {
      state.user = {}
    }
  },
  actions: {

  }

} 
)
