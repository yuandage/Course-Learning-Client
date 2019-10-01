<template>
    <div class="user-login-box">
        <div class="user-card-box" id="header-user-card" v-if="isLogin==true">
            <a id="header-avator" class="user-card-item js-header-avator" action-type="my_menu"
                href="/index/allcourses" target="_self">
                <img width="40" height="40" src="@/assets/avatar.gif">

            </a>
            <div class="g-user-card">
                <div class="card-inner">
                    <div class="card-top clearfix"> 
                        <a class="l" href="https://www.imooc.com/u/index/allcourses">
                            <img src="@/assets/avatar.gif" alt="袁大哥4073105"></a>
                        <div class="card-top-right-box l"> 
                            <a href="https://www.imooc.com/u/index/allcourses">
                            <span class="name text-ellipsis">{{this.username}}</span></a>
                      
                        </div>
                    </div>
                    
                    <div class="card-sets clearfix">
                        <a class="l" href="#" @click="logout">安全退出</a></div>
                </div>
            </div>

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
                    console.log(res, '这是响应的结果')
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
                    console.log(res, '这是响应的结果')
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


.user-card-box a {
    display: block;
    width: 60px;
    height: 72px;
    line-height: 72px;
    color: #787d82;
    text-align: center;
    transition: background-color 0.2s;
}

.user-card-box:hover .user-card-item img {
    border: 2px solid #f01414 !important;
}

.user-card-box .user-card-item img {
    width: 40px;
    height: 40px;
    border-color: #4d5559;
    margin-top: 16px;
    border-radius: 50%;
}


.user-card-box:hover .g-user-card {
    visibility: visible;
}

.user-card-box .g-user-card {
    visibility:hidden;
    position: absolute;
    right: 20px;
    top: 72px;
    z-index: 1000;
    width: 306px;
    padding: 24px;
    background-color: #fff;
    box-shadow: 0 8px 16px 0 rgba(7,17,27,0.2);
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    box-sizing: border-box;
}

.user-card-box .g-user-card .card-top {
    color: #93999f;
    position: relative;
}

.user-card-box .g-user-card .card-top a {
    display: inline-block;
    color: #93999f;
}

.user-card-box .g-user-card .card-top a img {
    float: left;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin-right: 12px;
}


.l {
    float: left;
}

.user-card-box .g-user-card .card-top a {
    display: inline-block;
    color: #93999f;
}

.user-card-box .g-user-card .card-top .name {
    display: inline-block;
    font-size: 16px;
    color: #07111b;

    line-height: 20px;
}


.user-card-box .g-user-card .user-center-box {
    margin-top: 16px;
    margin-bottom: 14px;
}



.user-card-box .g-user-card .card-sets {
    margin-top: 16px;
    font-size: 12px;
    line-height: 12px;
}

.user-card-box .g-user-card .card-sets a {
    color: #93999F;
}

.avatar{
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 20px;
}


</style>