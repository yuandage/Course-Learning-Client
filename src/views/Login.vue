<template>
  <div class="user-login-box">
    <div v-if="isLogin==true" class="user-card-box">
      <el-dropdown class="user-dropdown" @command="handleCommand">
        <router-link
          class="user-card-item"
          :to="{ name: 'userInfo',params: {username: user.username,userNav: 'home'}}">
          <img width="50" height="50" src="@/assets/avatar.gif">
        </router-link>
        <el-dropdown-menu slot="dropdown" class="user-popover">
          <h3>{{ user.username }}</h3>
          <el-dropdown-item icon="el-icon-plus" command="home">个人中心</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus" command="course">我的课程</el-dropdown-item>
          <el-dropdown-item icon="el-icon-check" command="favorites">我的收藏</el-dropdown-item>
          <el-dropdown-item icon="el-icon-check" command="setting">我的设置</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-check" divided command="exit">安全退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div v-else class="loginBox">
      <a class="loginBt" href="javascript:;" type="text" @click="loginFormVisible=true">登 录</a>
      <el-dialog title="请登录" :visible.sync="loginFormVisible" width="400px" center :modal="false">
        <el-form :model="loginForm" label-position="left">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="loginForm.username" autocomplete="off" clearable></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="loginForm.password" autocomplete="off" show-password clearable></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="login">确 定</el-button>
          <el-button @click="loginFormVisible = false">取 消</el-button>
        </div>
      </el-dialog>

      <a class="registerBt" href="javascript:;" type="text" @click="registerFormVisible=true">注 册</a>
      <el-dialog title="注册" :visible.sync="registerFormVisible" width="400px" center :modal="false">
        <el-form :model="registerForm" label-position="left">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="registerForm.username" autocomplete="off" clearable></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="registerForm.password" autocomplete="off" show-password clearable></el-input>
          </el-form-item>
          <el-form-item label="身份" :label-width="formLabelWidth">
            <el-radio v-model="role" label="1">学生</el-radio>
            <el-radio v-model="role" label="2">教师</el-radio>
          </el-form-item>
          <el-form-item v-if="role=='2'" label="说明" :label-width="formLabelWidth">
            <p>需管理员审核通过, 请联系管理员:</p>
            <p>电话:18608212510</p>
            <p>邮箱:1027928543@qq.com</p>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="register">确 定</el-button>
          <el-button @click="registerFormVisible = false">取 消</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import dataStorage from '@/util/dataStorage'
import { login, register } from '@/api/user'

export default {
  name: 'Login',
  data() {
    return {
      user: dataStorage.getUserInfo(),
      isLogin: dataStorage.isLogin(),
      role: '1',
      loginFormVisible: false,
      registerFormVisible: false,
      loginForm: {
        username: 'student',
        password: '123456'
      },
      registerForm: {
        username: 'yh1',
        password: '123456'
      },
      formLabelWidth: '60px'
    }
  },
  methods: {
    handleCommand(command) {
      if (command === 'exit')
        this.logout()
      else {
        if (this.$route.params.userNav !== command) {
          this.$router.push({
            name: 'userInfo',
            params: {
              username: this.user.username,
              userNav: command
            }
          })
        }
      }

    },
    login() {
      login({
        username: this.loginForm.username,
        password: this.loginForm.password
      }).then(res => {
        if (res.data.code === 20000) {
          this.$notify({
            title: res.data.message,
            message: res.data.code,
            type: 'success',
            duration: 1000,
            offset: 50
          })
          console.log(res.data)
          dataStorage.setToken(res.data.data.token)
          dataStorage.setUserInfo(res.data.data.user)
          this.$store.commit('setUserInfo')
          this.$store.commit('setIsLogin')
          this.loginFormVisible = false
          this.isLogin = true
          this.user = res.data.data.user
        }
      })

    },
    register() {
      register({
        username: this.registerForm.username,
        password: this.registerForm.password,
        role: this.role
      }).then(res => {
        if (res.data.code === 20000) {
          this.$notify({
            title: res.data.message,
            message: res.data.message,
            type: 'success',
            duration: 1000,
            offset: 50
          })

          this.registerFormVisible = false
        }
      })
    },
    logout() {
      this.isLogin = false
      this.user = ''
      dataStorage.removeUserInfo()
      dataStorage.removeToken()
      this.$store.commit('removeUserInfo')
      //跳转到首页
      this.$router.push('/')
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style>
    .user-login-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 72px;
    }

    .user-login-box a {
        color: #4D555D;
    }

    .user-login-box a:hover {
        color: #fb7299;
    }

    .loginBox {
        width: 150px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .user-card-box {
        height: 50px;
    }

    .user-card-box a {
        width: 120px;
        height: 72px;
    }

    .user-card-box .user-card-item:hover img {
        width: 55px;
        height: 55px;
    }

    .user-card-item img {
        width: 50px;
        height: 50px;
        border-color: #4d5559;
        border-radius: 50%;
    }

    .user-popover {
        width: 200px;
        text-align: center;
    }

    .user-dropdown {
        height: 49px;
    }

    .user-popover h3 {
        font-size: 16px;
        color: #fb7299;
        padding: 10px;
    }
</style>
