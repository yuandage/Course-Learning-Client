<template>
    <div class="user-login-box">

        <div class="user-card-box" v-if="isLogin==true">

            <el-popover placement="bottom"  width="300" trigger="hover">

                <div class="user-popover">
                    <h3>{{this.username}}</h3>

                    <div class="btg">
                    <el-button class="bt" size="medium" round icon="el-icon-search">我的课程</el-button>
                    <el-button class="bt" size="medium" round icon="el-icon-search">我的试题</el-button>
                    <el-button class="bt" size="medium" round icon="el-icon-search">我的收藏</el-button>
                    
                     <router-link to="/user">
                     <el-button class="bt" size="medium" round icon="el-icon-search">个人中心</el-button>
                    </router-link>
                    </div>

                    <el-button class="bt" size="medium" round icon="el-icon-search" @click="logout">安全退出</el-button>

                </div>

                <router-link  class="user-card-item" slot="reference" to="user">
                    <img width="50" height="50" src="@/assets/avatar.gif">
                    <span>{{this.username}}</span>
                    <i class="el-icon-caret-bottom"></i>
                </router-link>

            </el-popover>

        </div>

        <div class="loginBox" v-else>
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

                    <el-form-item label="说明" :label-width="formLabelWidth" v-if="role=='2'">
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
    import axios from '@/util/request'
    import {login,register} from '@/util/api'

    export default {
        data() {
            return {
                username:dataStorage.getUserInfo(),
                isLogin: dataStorage.isLogin(),
                role: '1',
                loginFormVisible: false,
                registerFormVisible: false,
                loginForm: {
                    username: 'yh',
                    password: '123'
                },
                registerForm: {
                    username: 'yh1',
                    password: '123'
                },
                formLabelWidth: '60px'
            };
        },
        methods: {
            login() {
                login({
                    username: this.loginForm.username,
                    password: this.loginForm.password
                }).then(res => {
                    if (res.data.code === 20000) {
                        this.$notify({
                            title: res.data.message,
                            message: res.data.message,
                            type: 'success',
                            duration: 1000,
                            offset: 50
                        })
                        dataStorage.setToken("Bearer " + res.data.data.token)
                        dataStorage.setUserInfo(res.data.data.username)
                        this.$store.commit('setUserInfo')
                        this.$store.commit('setIsLogin')
                        this.loginFormVisible = false
                        this.isLogin = true
                        this.username=res.data.data.username
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

            logout(){
                this.isLogin=false
                this.username=''
                dataStorage.removeUserInfo(),
                dataStorage.removeToken()
                //跳转到首页
                this.$router.push('/')
            },

            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }

    };
</script>

<style>

.user-login-box{
    overflow: hidden;
    display: flex;
    justify-content: space-evenly;
    width: 200px;
    height: 72px;;
}

.user-login-box a{
    color: #4D555D;
}

.user-login-box a:hover{
    color: red;
}

.loginBox{
    width: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.user-card-item{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.user-card-box a{
    width: 120px;
    height: 72px;
}

.user-card-box:hover .user-card-item img {
    border: 1px solid #f01414 !important;
}

.user-card-item img {
    width: 50px;
    height: 50px;
    border-color: #4d5559;
    border-radius: 50%;
}

.user-popover{
    text-align: center;

}

.btg{
    /* display: flex;
    justify-content: flex-start;
    align-items: center; */
}

.bt{
    margin: 10px;
}

</style>