import Vue from 'vue'
import Vuex from 'vuex'
import dataStorage from '@/util/dataStorage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: dataStorage.isLogin(),
    username: dataStorage.getUserInfo(),
    subject: [{
      "id": 1,
      "name": "计算机等级考试",
      "parentId": null,
      "subjectList": [{
          "id": 21,
          "name": "二级C语言",
          "parentId": 1,
          "subjectList": null
        },{
        "id": 22,
        "name": "二级Office",
        "parentId": 1,
        "subjectList": null
      }, {
        "id": 23,
        "name": "三级数据库",
        "parentId": 1,
        "subjectList": null
      }, {
        "id": 24,
        "name": "三级网络",
        "parentId": 1,
        "subjectList": null
      }, {
        "id": 25,
        "name": "三级信息安全",
        "parentId": 1,
        "subjectList": null
      }, {
        "id": 26,
        "name": "四级网络工程师",
        "parentId": 1,
        "subjectList": null
      }, {
        "id": 27,
        "name": "四级数据库工程师",
        "parentId": 1,
        "subjectList": null
      }, {
        "id": 28,
        "name": "四级信息安全工程师",
        "parentId": 1,
        "subjectList": null
      }]
    }, {
      "id": 2,
      "name": "前端语言程序设计",
      "parentId": null,
      "subjectList": [{
        "id": 31,
        "name": "HTML",
        "parentId": 2,
        "subjectList": null
      }, {
        "id": 32,
        "name": "JavaScript",
        "parentId": 2,
        "subjectList": null
      }, {
        "id": 33,
        "name": "CSS",
        "parentId": 2,
        "subjectList": null
      }, {
        "id": 34,
        "name": "Node.js",
        "parentId": 2,
        "subjectList": null
      }, {
        "id": 35,
        "name": "Vue.js",
        "parentId": 2,
        "subjectList": null
      }]
    }, {
      "id": 3,
      "name": "后端语言程序设计",
      "parentId": null,
      "subjectList": [{
        "id": 41,
        "name": "C语言程序设计",
        "parentId": 3,
        "subjectList": null
      }, {
        "id": 42,
        "name": "C++语言程序设计",
        "parentId": 3,
        "subjectList": null
      }, {
        "id": 43,
        "name": "JAVA语言程序设计",
        "parentId": 3,
        "subjectList": null
      }]
    }, {
      "id": 4,
      "name": "数据结构与算法分析",
      "parentId": null,
      "subjectList": [{
        "id": 51,
        "name": "数据结构",
        "parentId": 4,
        "subjectList": null
      }, {
        "id": 52,
        "name": "算法分析与实现",
        "parentId": 4,
        "subjectList": null
      }]
    }, {
      "id": 5,
      "name": "数据库设计",
      "parentId": null,
      "subjectList": [{
        "id": 61,
        "name": "数据库基础",
        "parentId": 5,
        "subjectList": null
      }]
    }],
    allChildSubject:[]
  },
  mutations: {
    setUserInfo(state) {
      state.username = dataStorage.getUserInfo()
    },
    setIsLogin(state) {
      state.isLogin = dataStorage.isLogin()
    },
    setSubject(state, val) {
      console.log(val);
      state.subject = val
    },
    setAllChildSubject(state) {
      var newArr = [];
      for (let i = 0; i < state.subject.length; i++)
        for (let j = 0; j < state.subject[i].subjectList.length; j++)
          newArr.push(state.subject[i].subjectList[j])
      state.allChildSubject =newArr
    },
  },
  actions: {

  }

})