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
}


ol,ul,p{
  list-style: none;
  margin: 0;
  padding: 0;
}

a{
  text-decoration: none;
  color: #1c1f21;
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