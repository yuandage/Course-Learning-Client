<template>
  <div class="main">
    <BlurBackground />
    <!-- 主页上显示嵌套的二级路由视图 -->
    <router-view v-if="this.$route.name!='home'"></router-view>

    <div class="main-other" v-else>
      <!-- 学科分类菜单和轮播图 -->
      <Banner />

      <!-- 主页上的其他展示内容 -->
      <Container />

    </div>
  </div>
</template>

<script>
  import Banner from '@/views/Banner.vue'
  import Container from '@/views/Container.vue'
  import BlurBackground from '@/components/BlurBackground.vue'

  export default {
    data() {
      return {}
    },
    name: 'Main',
    components: {
      Banner,
      Container,
      BlurBackground
    },
    methods: {

    }
  }
</script>


<style>
  .main {
    padding: 32px 0;
  }
</style>