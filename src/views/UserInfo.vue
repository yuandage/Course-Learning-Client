<template>
  <div class="user">

    <div class="user-info">
      <div class="user-avatar">
        <img width="100" height="100" src="@/assets/avatar.gif">
      </div>

      <div>
        <h2 style="width:30px">{{this.username}}</h2>
        <p><span>{{this.user.sex==1?'男':'女'}}</span> <span> 个性签名：太懒了，什么都没有写 ~ </span></p>
      </div>

      <div>
        <el-button size="medium" round icon="el-icon-search">个人设置</el-button>
      </div>
    </div>

    <div>
      <el-tabs tab-position="left" type="card" style="height: 200px;">
        <el-tab-pane label="我的课程">
          <el-tabs>
            <el-tab-pane label="全部" name="first">全部课程</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>

          </el-tabs>
        </el-tab-pane>

        <el-tab-pane label="我的试题">我的试题</el-tab-pane>
        <el-tab-pane label="我的收藏">我的收藏</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
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
  width: 600px;
  height: 140px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  border: 2px;
}

.user-avatar img{
    border-color: #4d5559;
    border-radius: 50%;
}

</style>