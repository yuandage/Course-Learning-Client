<template>
  <div class="header">

    <div class="logo">
      <router-link to="/" target="_self" title="首页">
        <img title="学习平台" src="@/assets/logo1.png">
      </router-link>
    </div>

    <ul class="nav-item">
      <li>
        <router-link to="/subject/-1/-1" target="_self">免费课程</router-link>
      </li>
      <li><a href="//coding.imooc.com" target="_self">实战课程</a></li>
      <li><a href="//class.imooc.com" target="_self">就业班</a></li>
      <li><a href="/read" target="_self">专栏<i class="icn-new"></i></a></li>
      <li><a href="/wenda" target="_self">猿问</a></li>
      <li><a href="/article" target="_self">手记</a></li>

    </ul>

    <div class="search-bar">
      <HeaderSearchBar />
    </div>

    <div class="log-box">
      <Login />
    </div>

  </div>
</template>

<script>

import Login from "@/views/Login.vue"
import HeaderSearchBar from '@/components/HeaderSearchBar.vue'

export default {

  data(){
    return{

    }
  },
  name: 'Header',
  components:{
    Login,
    HeaderSearchBar
  }
  
}
</script>

<style>
.header {
  margin-top: 0;
  height: 72px;
  overflow: hidden;
  box-shadow: 0px 4px 8px 0px rgba(7, 17, 27, 0.1);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.logo {
  margin: 0 20px;
}

.logo a {
  font-size: 16px;
  display: block;
  width: 140px;
  height: 72px;
}

.logo a img {
  height: 72px;
}

.nav-item, .nav-item li {
list-style:none; /* 将默认的列表符号去掉 */
margin:0; /* 将默认的外边距去掉 */
}

.nav-item li { 
 float:left; 
}
.nav-item li a {
 display:block;
 padding:0 20px;
 color:#4D555D;
 text-decoration:none;

}
.nav-item li a:hover {
 color:#1c1f21;
 text-decoration:none;

}

.search-bar{
  margin: 0 auto;
}

</style>
