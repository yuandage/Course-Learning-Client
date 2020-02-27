<template>
  <div class="header">

    <div class="logo">
      <router-link to="/" target="_self">
        <img title="学习平台-在线课程学习与练习" src="@/assets/logo1.png">
      </router-link>
    </div>

    <ul class="nav-item">
      <li>
        <router-link :to="{name:'Subject',params:{id:-1,subId:-1}}">课程</router-link>
      </li>
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
    name:'Header',
    data() {
      return {

      }
    },
    name: 'Header',
    components: {
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
    height: 72px;
  }

  .logo a img {
    height: 72px;
  }

  .nav-item li {
    float: left;
  }

  .nav-item li a {
    display: block;
    padding: 0 20px;
    color: #4D555D;
  }

  .nav-item li a:hover {
    color: #1c1f21;

  }

  .search-bar {
    margin: 0 auto;
  }
</style>