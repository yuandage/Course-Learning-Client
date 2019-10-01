<template>
  <div id="main">
    <!-- 学科分类菜单和轮播图 -->
    <Banner />

    <!-- 主页上的其他展示内容 -->
    <Container/>

    <!-- 主页上显示嵌套的二级路由视图 -->
    <router-view></router-view>

  </div>
</template>

<script>
import Banner from '@/views/Banner.vue'
import Container from '@/views/Container.vue'

export default {
     data () {
    return {
    }
  },
  name: 'Main',
  components: {
   Banner,
   Container
  },
  methods:{
  }
}

</script>


<style>
#main{
  overflow: hidden;
  padding: 32px 0;
}

</style>