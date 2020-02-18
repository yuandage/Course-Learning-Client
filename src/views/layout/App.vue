<template>
  <div class="app">
    <el-scrollbar style="height:100%">
      <template>
        <el-backtop target=".el-scrollbar__wrap" :bottom="60">
          <div class="backtop">UP</div>
        </el-backtop>
      </template>
      <el-container>
        <el-header style="height:72px;">
          <Header />
        </el-header>

        <el-main>
          <Main />
        </el-main>

        <el-footer style="height:152px;">
          <Footer />
        </el-footer>

      </el-container>
    </el-scrollbar>

  </div>
</template>

<script>
  import Header from '@/views/layout/Header.vue'
  import Main from '@/views/layout/Main.vue'
  import Footer from '@/views/layout/Footer.vue'

  export default {
    name: 'app',
    components: {
      Header,
      Main,
      Footer
    }
  }
</script>

<style>
  .app {
    overflow-y: hidden;
    height: 100vh;
  }

  .el-scrollbar__wrap {
    overflow-x: hidden;
  }

  .backtop {
    height: 100%;
    width: 100%;
    background-color: #f2f5f6;
    box-shadow: 0 0 6px rgba(0, 0, 0, .2);
    text-align: center;
    line-height: 40px;
    color: #1989fa;
    border-radius: 5px;
  }

  .el-header,
  .el-footer {
    line-height: 60px;
    padding: 0;
  }

  .el-main {
    padding: 0;
  }

  /*全局样式*/
  html,
  body {
    overflow: hidden;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    min-width: 1200px;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #1c1f21;
  }

  body,
  dd,
  div,
  dl,
  dt,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  li,
  ol,
  p,
  td,
  textarea,
  th,
  ul {
    margin: 0;
    padding: 0;
  }
</style>