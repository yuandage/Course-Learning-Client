<template>
  <div class="user">

    <div class="user-info">
      <div class="user-avatar" >
        <img width="120" height="120" src="@/assets/avatar.gif">
      </div>

      <div class="user-info-box">
        <h2 style="width:30px">{{this.username}}</h2>
        <p class="user-info-desc" >{{this.user.sex==1?'男':'女'}}</p> 
        <p class="user-info-desc">上次登录时间:{{this.user.lastDate}}</p>
        <p class="user-info-desc"> 个性签名：太懒了，什么都没有写 ~ </p>
      </div>

      <div >
        <el-button size="medium" round icon="el-icon-search">个人设置</el-button>
      </div>
    </div>

    <div class="tabBox">
      <el-tabs   class="tab" tab-position="left" type="card" style="height: 600px;">
        <el-tab-pane class="tab-pane" label="我的课程">
         
          <el-tabs class="child-tab" type="card">
            <el-tab-pane label="全部" name="first">全部课程</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>

          </el-tabs>
        </el-tab-pane>

        <el-tab-pane class="tab-pane" label="我的试题">我的试题</el-tab-pane>
        <el-tab-pane class="tab-pane" label="我的收藏">我的收藏</el-tab-pane>
        <el-tab-pane class="tab-pane" label="个人设置">
            <el-tabs class="child-tab" type="card">
            <el-tab-pane label="全部" name="first">全部课程</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>

          </el-tabs>
        </el-tab-pane>
      </el-tabs>

    </div>

    <div>
      <br>
      用户信息展示
      <br>
      <br>
      <p>{{this.user}}</p>

    </div>
  </div>
</template>

<script>
import dataStorage from '@/util/dataStorage'
import {getUserInfo} from '@/util/api'

export default {
  data() {
    return {
      username: dataStorage.getUserInfo(),
      user: {
        "id": "1173422474768027648",
        "username": "yh",
        "mobile": "18608212510",
        "password": "$2a$10$H/f/AC.hGflPHFpWIEkUXepcHUnTgpEptd7WgmphYN3Lh58gQIV.6",
        "role": "1",
        "nickname": "小袁",
        "sex": "2",
        "birthday": null,
        "avatar": null,
        "email": null,
        "regDate": 1568600694000,
        "updateDate": 1568600694000,
        "lastDate": 1568600694000,
        "online": 0,
        "interest": null,
        "personality": null,
        "fansCount": 0,
        "followCount": 0
      }
    }
  },
  methods: {
    getUserInfo(username) {
      if (username != null) {
        getUserInfo({
          username
        }).then((res) => {
          if (res.data.code == 20000) {
            this.user = res.data.data
          }
        })
      }
    }
  },
  created() {
    this.getUserInfo(this.username)
  },
}
</script>

<style>
.user{
  text-align: center;
}

.user-info{
  width: 1000px;
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 40px;
}

.user-avatar img{
    border-color: #4d5559;
    border-radius: 50%;
}

.user-info-box{
  height: 140px;
  text-align: left;

}
.user-info-desc{
  margin: 5px 0;
}

.tabBox{
  width: 1100px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

.tab .el-tabs__item {
  margin: 60px;
  font-size: 16px;
}

.child-tab{
}

.child-tab .el-tabs__item {
  margin: 0px 40px;
}

</style>