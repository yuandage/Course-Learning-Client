<template>
<el-container id="app">
      <el-header style="height:72px;">
        <Header />
      </el-header>

      <el-main>
           <Main/>

      </el-main>

      <el-footer>
        <Footer />
      </el-footer>

</el-container>

</template>

<script>

import Header from '@/views/layout/Header.vue'
import Main from '@/views/layout/Main.vue'
import Footer from '@/views/layout/Footer.vue'

export default {
  name: 'app',
  components:{
    Header,
    Main,
    Footer
  }
}
</script>

<style>
/*全局样式*/
html,body {
  margin: 0;
  padding: 0;
  height:100%;
  width: 100%;
  min-width: 1200px;
  font: 12px/1.5 Microsoft YaHei,tahoma,\5B8B\4F53,sans-serif;
}


body, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, 
input, li, ol, p, td, textarea, th, ul{
  margin: 0;
  padding: 0;
}

ol, ul {
  list-style: none;
}

a{
  font-size: 16px;
  text-decoration: none;
  color: #1c1f21;
}

p,span{
  font-size: 16px;
}

.el-header, .el-footer {
  text-align: center;
  line-height: 60px;
  padding: 0;
}


.el-main {
  text-align: center;
  padding: 0;
}

</style>