<template>
  <div id="app">
    <el-container>
      <el-header style="height:72px;padding: 0;">
        <Header />
      </el-header>

      <el-main style=" padding: 0;">
           <Main/>

      </el-main>

      <el-footer style="padding: 0;">
        <Footer />
      </el-footer>

    </el-container>
  </div>

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
}


.el-main {
  text-align: center;
}

</style>