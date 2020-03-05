<template>
  <div class="user">

    <div class="top-img"></div>

    <div class="user-content">
      <div class="content-left">
        <span class="user-title">个人中心</span>
        <ul class="user-ul">
          <li class="user-li" v-for="(item,index) in userNav" :key="index" :class="currentUserNav===index?'active':''"
            @click="changeUserNav(index)"><i :class="item.icon"></i>
            <span v-if="index===0" class="user-nav-name">首<b style="width:28px; display:inline-block"></b>页</span>
            <span v-else class="user-nav-name">{{item.title}}</span>
          </li>
        </ul>
      </div>

      <div class="content-right">
        <div class="content-right-title">
          <span class="content-right-title-icon"></span>
          <span class="content-right-title-text">{{userNav[currentUserNav].title}}</span>
        </div>

        <div v-if="currentUserNav===0" class="user-home">
          <div class="home-info">
            <div class="home-head">
              <el-avatar :size="92" src="http://localhost:8000/img/avatar.ecba1844.gif">
              </el-avatar>
              <div class="update-avator">
                <p @click="dialogVisible = true">更换头像</p>

                <el-dialog v-if="dialogVisible" title="更换头像" :visible.sync="dialogVisible" width="30%" :modal="false"
                  center>
                  <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false" drag :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                  </span>
                </el-dialog>
              </div>
            </div>
            <div class="home-right">
              <span>{{user.username}}</span>

            </div>
          </div>
        </div>
        <div v-if="currentUserNav===1" class="user-course">
          <div class="course-content">
            <div class="course-item" v-for="(item,index) in course" :key="item.id">
              <div class="course-img">
                <router-link :to="'/course/'+item.id">
                  <img width="200" height="116" :src="item.coverUrl" alt=""> </router-link>
              </div>
              <div class="course-item-info">
                <div class="course-title course-magrin">
                  <router-link :to="'/course/'+item.id">
                    <h3>{{item.name}}</h3>
                  </router-link>
                </div>
                <div class="study-info course-magrin">
                  <span class="i-left span-common">已学19%</span>
                  <span class="i-mid span-common">用时 1小时25分</span>
                  <span class="i-right span-common">学习至1.04 练习的题 </span>
                </div>
                <div class="course-option course-magrin">
                  <el-button @click="delCourse(item.userCourseId,index)">删除课程</el-button>
                  <el-button type="danger">继续学习</el-button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div v-if="currentUserNav===2" class="user-favorites">
          <div class="course-content">
            <div class="course-item" v-for="(item,index) in courseFavorite" :key="item.name">
              <div class="course-img">
                <router-link :to="'/course/'+item.id">
                  <img width="200" height="116" :src="item.coverUrl" alt=""> </router-link>
              </div>
              <div class="course-item-info">
                <div class="course-title course-magrin">
                  <router-link :to="'/course/'+item.id">
                    <h3>{{item.name}}</h3>
                  </router-link>
                </div>
                <div class="study-info course-magrin">
                  <span class="i-left span-common">已学19%</span>
                  <span class="i-mid span-common">用时 1小时25分</span>
                  <span class="i-right span-common">学习至1.04 练习的题 </span>
                </div>
                <div class="course-option course-magrin">
                  <el-button @click="delFavorite(item.userFavoriteId,index,'课程')">取消收藏</el-button>
                  <el-button type="danger">继续学习</el-button>
                </div>
              </div>
            </div>

            <div class="course-item" v-for="(item,index) in questionFavorite" :key="item.content">

              <div class="course-item-info" style="width:770px">
                <div class="course-title course-magrin">
                  <h3>{{item.content}}</h3>
                </div>

                <div class="course-option course-magrin">
                  <el-button @click="delFavorite(item.userFavoriteId,index,'试题')">取消收藏</el-button>
                  <el-button type="danger">继续做题</el-button>
                </div>
              </div>
            </div>


          </div>
        </div>
        <div v-if="currentUserNav===3" class="user-setting">
          <el-form ref="form" :model="user" label-width="80px" class="user-setting-form">
            <el-form-item label="用户名">
              <span>{{user.username}}</span>
            </el-form-item>

            <el-form-item label="昵称">
              <el-input v-model="user.nickname"></el-input>
            </el-form-item>

            <el-form-item label="手机">
              <el-input v-model="user.mobile"></el-input>
            </el-form-item>

            <el-form-item label="角色">
              <span>{{user.role==1?"学生":"教师"}}</span>
            </el-form-item>

            <el-form-item label="性别">
              <el-radio-group v-model="user.sex">
                <el-radio-button label="男"></el-radio-button>
                <el-radio-button label="女"></el-radio-button>
              </el-radio-group>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  import dataStorage from '@/util/dataStorage'
  import {
    getUserInfo
  } from '@/api/user'
  import {
    getCourseInfo
  } from '@/api/course'
  import {
    getUserCourse,
    delUserCourse
  } from '@/api/user_course'
  import {
    getUserFavorite,
    delUserFavorite
  } from '@/api/user_favorite'
  import {
    getQuestion
  } from '@/api/question'

  export default {
    name: 'UserInfo',
    data() {
      return {
        user: dataStorage.getUserInfo(),
        userNav: [{
            id: 1,
            title: '首页',
            text: 'home',
            icon: 'el-icon-discount'
          }, {
            id: 2,
            title: '我的课程',
            text: 'course',
            icon: 'el-icon-discount'
          }, {
            id: 3,
            title: '我的收藏',
            text: 'favorites',
            icon: 'el-icon-discount'
          },
          {
            id: 4,
            title: '我的设置',
            text: 'setting',
            icon: 'el-icon-discount'
          },
        ],
        currentUserNav: 0,
        dialogVisible: false,
        userCourse: [],
        course: [],
        userFavorite: [],
        courseFavorite: [],
        questionFavorite: []
      }
    },
    created() {
      this.changeRouteUserNav(this.$route)
      this.getUserNavData()
    },
    beforeRouteUpdate(to, from, next) {
      this.changeRouteUserNav(to)
      this.getUserNavData()
      next();
    },
    methods: {
      changeUserNav(index) {
        if (this.$route.params.userNav != this.userNav[index].text) {
          this.$router.push({
            name: 'userInfo',
            params: {
              username: this.user.username,
              userNav: this.userNav[index].text
            }
          })
        }
      },
      changeRouteUserNav(to) {
        for (let i = 0; i < this.userNav.length; i++) {
          if (to.params.userNav === this.userNav[i].text) {
            this.currentUserNav = i
          }

        }
      },
      getUserNavData() {
        if (this.userNav[this.currentUserNav].text === 'course') {
          this.getUserCourse()
        } else if (this.userNav[this.currentUserNav].text === 'favorites') {
          this.getUserFavorite()
        }
      },
      getUserCourse() {
        getUserCourse(this.user.id).then((res) => {
          if (res.data.code == 20000) {
            this.userCourse = res.data.data
          }
          let course = []
          for (let i = 0; i < this.userCourse.length; i++) {
            getCourseInfo(this.userCourse[i].courseId).then(res => {
              if (res.data.code == 20000) {
                let c = {
                  ...res.data.data,
                  userCourseId: this.userCourse[i].id
                }
                course.push(c)
              }
            })
          }
          this.course = course
        })
      },
      getUserFavorite() {
        getUserFavorite(this.user.id).then((res) => {
          if (res.data.code == 20000) {
            this.userFavorite = res.data.data
          }
          let courseFavorite = []
          let questionFavorite = []
          for (let i = 0; i < this.userFavorite.length; i++) {
            if (this.userFavorite[i].type === '课程') {
              getCourseInfo(this.userFavorite[i].courseId).then(res => {
                if (res.data.code == 20000) {
                  let cF = {
                    ...res.data.data,
                    userFavoriteId: this.userFavorite[i].id
                  }
                  courseFavorite.push(cF)
                }
              })
            } else if (this.userFavorite[i].type === '试题') {
              getQuestion(this.userFavorite[i].questionId).then(res => {
                if (res.data.code == 20000) {
                  let cF = {
                    ...res.data.data,
                    userFavoriteId: this.userFavorite[i].id
                  }
                  questionFavorite.push(cF)
                }
              })
            }

          }
          this.courseFavorite = courseFavorite
          this.questionFavorite = questionFavorite
        })
      },
      delFavorite(id, index, type) {
        delUserFavorite(id).then(res => {
          if (res.data.code === 20000) {
            this.$notify({
              title: '取消收藏成功',
              message: '已取消收藏',
              type: 'success',
              duration: 2000,
              offset: 50
            })
          }
          if (type === '课程')
            this.courseFavorite.splice(index, 1);
          else if (type === '试题')
            this.questionFavorite.splice(index, 1);

        })
      },
      delCourse(id, index) {
        delUserCourse(id).then(res => {
          if (res.data.code === 20000) {
            this.$notify({
              title: '删除成功',
              message: '不再学习该课程',
              type: 'success',
              duration: 2000,
              offset: 50
            })
          }
          this.course.splice(index, 1);
        })
      }
    }
  }
</script>

<style>
  @import "../../views/user/user-home.css";
  @import "../../views/user/user-course.css";

  .user {
    text-align: center;
  }

  .top-img {
    margin-top: -32px;
    height: 106px;
    background: url(../../assets/top-img.png)
  }

  .user-content {
    width: 980px;
    height: 100%;
    margin: 40px auto 100px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .14);
    background: #fafafa;
    border-radius: 4px;
    display: flex;
    justify-content: center;
  }

  .content-left {
    width: 150px;
  }

  .user-title {
    display: block;
    width: 150px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    color: #99a2aa;
    cursor: default;
    border-bottom: 1px solid #e1e2e5;
  }

  .user-li {
    width: 150px;
    height: 48px;
    line-height: 48px;
  }

  .user-li:hover {
    background: #e1e4ea;
    cursor: pointer;
  }

  .user-ul .active {
    background-color: #00a1d7;
  }

  .user-ul .active .user-nav-name {
    color: #fff;
  }

  .user-nav-name {
    margin-left: 12px;
    font-size: 14px;
    color: #222;
  }

  .content-right {
    border-left: 1px solid #ddd;
    width: 830px;
  }

  .content-right-title {
    height: 50px;
    padding-left: 30px;
    border-bottom: 1px solid #ddd;
  }

  .content-right-title-icon {
    float: left;
    width: 4px;
    height: 16px;
    margin-top: 18px;
    background-color: #00a1d6;
    border-radius: 4px;
  }

  .content-right-title-text {
    float: left;
    margin: 15px 0 0 5px;
    color: #00a1d6;
    font-size: 14px;
    cursor: default;
  }

  .user-setting-form {
    width: 400px;
  }
</style>