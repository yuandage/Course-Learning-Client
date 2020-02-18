import Vue from 'vue'
import Vuex from 'vuex'
import dataStorage from '@/util/dataStorage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: dataStorage.isLogin(),
    username: dataStorage.getUserInfo(),
    searchText:''
  },
  getters:{
    // getSearchText(state){
    //   return state.searchText
    // }
  },
  mutations: {
    setUserInfo(state) {
      state.username = dataStorage.getUserInfo()
    },
    setIsLogin(state) {
      state.isLogin = dataStorage.isLogin()
    },
    setSearchText(state,val){
      state.searchText=val.trim()
    }
  },
  actions: {

  }

})