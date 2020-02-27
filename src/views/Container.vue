<template>
  <div class="other">
    <div class="container-types container-recommend ">
      <h3 class="types-title "> <span>零基础就业</span><span class="intro">零基础快速就业</span> </h3>
      <div class="path-list "> <a
          href="//class.imooc.com/sale/newfe?mc_marking=6be094dafde423bf49df7978fb1b5b44&amp;mc_channel=L1"
          target="_blank"> <i class="i-web"></i>
          <p class="tit">Web前端攻城狮</p>
          <p class="desc">从未接触编程也可以学好</p>
        </a> <a href="//class.imooc.com/sale/newjava?mc_marking=b9b1bf4f19e124900889941731e52a4b&amp;mc_channel=L2"
          target="_blank"> <i class="i-java"></i>
          <p class="tit">Java攻城狮</p>
          <p class="desc">综合就业排名第一</p>
        </a> <a href="//class.imooc.com/sale/python?mc_marking=b098f828d4a7229958cf4ad9c4a7cac5&amp;mc_channel=L5"
          target="_blank"> <i class="i-python"></i>
          <p class="tit">Python攻城狮</p>
          <p class="desc">应用领域最为广泛</p>
        </a> <a href="//class.imooc.com/sale/newandroid?mc_marking=7e464a4870e13dc90f4b8d534a20efe0&amp;mc_channel=L3"
          target="_blank"> <i class="i-android"></i>
          <p class="tit">Android攻城狮</p>
          <p class="desc">移动市场份额第一</p>
        </a> <a href="//class.imooc.com/sale/php?mc_marking=c03f3d2ee3d0598c6fa775ff2b4c27d0&amp;mc_channel=L4"
          target="_blank"> <i class="i-php"></i>
          <p class="tit">PHP攻城狮</p>
          <p class="desc">Web开发首选语言</p>
        </a> </div>
    </div>
    <div class="container-types container-recommend ">
      <h3 class="types-title "> <span>职场提升</span><span class="intro">1年以上开发经验系统成长</span> </h3>
      <div class="recommend-box"> <a
          href="https://class.imooc.com/sale/javafullstack?mc_marking=53bac465973c096055bae2d7a383fde5&amp;mc_channel=syzcjj2"
          target="_blank">
          <div class="recommend l1"> </div>
        </a> <a
          href="https://class.imooc.com/sale/webfullstack?mc_marking=1eb5ce0be2ada8da4a6387b391f00b92&amp;mc_channel=syzcjj1"
          target="_blank">
          <div class="recommend l2"> </div>
        </a> <a
          href="https://class.imooc.com/sale/javaarchitect?mc_marking=6b18866d206ad1c75273bf8eb194a0f9&amp;mc_channel=syzcjj3"
          target="_blank">
          <div class="recommend l3"> </div>
        </a> </div>
    </div>

    <div class="boder"></div>

    <div class="container-types container-recommend course-card">
      <h3 class="types-title "> <span>热门课程</span></h3>
      <div class="course-card-container">
        <router-link :to="'/course/'+item.id" v-for="item in popularCourse" :key="item.id">
          <div class="course-card-top">
            <img class="course-banner" :src="item.coverUrl">
          </div>
          <div class="course-card-content">
            <h3 class="course-card-name">{{item.name}}</h3>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {getPopularCourse} from '@/api/course'
  export default {
    name:'Container',
    data(){
      return{
        popularCourse:[]
      }
    },
    methods:{
      getPopularCourse(){
        getPopularCourse().then(res=>{
          if(res.data.code===20000)
            this.popularCourse=res.data.data
        })
      }
    },
    created(){
      this.getPopularCourse()
    }
  }
</script>

<style>
  .other {
    text-align: left;
    margin-top: 50px;
  }

  .container-types.container-recommend {
    padding-top: 0px;
    padding-bottom: 44px;
  }

  .container-types {
    width: 1152px;
    margin: 0 auto;
  }

  .container-types .types-title {
    font-size: 24px;
    color: #1C1F21;
    letter-spacing: 0px;
    line-height: 32px;
    height: 32px;
  }

  .container-types .types-title span {
    font-size: 24px;
    float: left;
    font-weight: bold;
  }

  .container-types .types-title .intro {
    margin-top: 6px;
    margin-left: 12px;
    font-weight: normal;
    font-size: 14px;
    color: #545C63;
    line-height: 20px;
  }

  .path-list {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
  }

  .path-list a {
    width: 216px;
    padding-top: 15px;
    height: 65px;
    overflow: hidden;
    transition: all .3s;
    background: rgba(243, 245, 246, 0.7);
    border-radius: 8px;
  }

  .path-list a:hover {
    box-shadow: 0px 6px 10px #0000001f;
  }

  .path-list i {
    float: left;
    width: 50px;
    height: 50px;
    background: url(../assets/path-2019-9.png) no-repeat;
    background-size: 100%;
    margin-left: 12px;
    margin-right: 10px;
  }

  .path-list .i-web {
    background-position: center 0;
  }

  .path-list .i-java {
    background-position: center -50px;
  }

  .path-list .i-python {
    background-position: center -100px;
  }

  .path-list .i-android {
    background-position: center -150px;
  }

  .path-list .i-php {
    background-position: center -200px;
  }

  .path-list .tit {
    font-size: 16px;
    font-weight: bold;
    color: #1C1F21;
    letter-spacing: 1px;
    margin-top: 4px;
  }

  .path-list .desc {
    font-size: 12px;
    color: #1C1F21;
    line-height: 16px;
    margin-top: 2px;
    font-weight: 400;
  }

  .container-types .recommend-box {
    margin-top: 24px;
    margin-left: 0px;
    display: flex;
    justify-content: space-between;
  }

  .container-types .recommend-box .recommend {
    width: 368px;
    height: 90px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .container-types .recommend-box .l1 {
    background-image: url(../assets/box-java1.png);
  }

  .container-types .recommend-box .l2 {
    background-image: url(../assets/box-fe.png);
  }

  .container-types .recommend-box .l3 {
    background-image: url(../assets/box-java2.png);
  }

  .boder {
    height: 20px;
    box-shadow: 0 10px 8px 0 rgba(7, 17, 27, 0.06);
  }

  .course-card {
    margin-top: 30px;
    ;
  }

  .course-card-container {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .course-card-container a {
    width: 286px;
    height: 210px;
    margin-bottom: 24px;
  }

  .course-card-container a:hover .course-card-name {
    color: #F20D0D;
  }

  .course-card-container .course-card-top {
    width: 270px;
    height: 148px;
    position: relative;
    border-radius: 8px;
    transition: all .3s;
  }

  .course-card-top:hover {
    box-shadow: 0 10px 16px 0 rgba(8, 24, 43, 0.3);
  }

  .course-card-container .course-card-top .course-banner {
    width: 100%;
    height: 100%;
    background-color: #f3f5f7;
    border-radius: 8px;
  }

  .course-card-container .course-card-content {
    padding: 8px;
    width: 270px;
  }

  .course-card-container .course-card-content .course-card-name {
    font-size: 16px;
    color: #07111B;
    line-height: 24px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    transition: all .3s;
    font-weight: bold;
    height: 46px;
  }
</style>