<template>
  <div id="main">

    <BlurBackground :bk="this.bk" />

    <!-- 主页上显示嵌套的二级路由视图 -->
    <router-view v-if="this.$route.name!='home'"></router-view>

    <div v-else>
    <!-- 学科分类菜单和轮播图 -->
    <Banner @changeBk="change" />

    <!-- 主页上的其他展示内容 -->
    <Container/>

    </div>

  </div>
</template>

<script>
import Banner from '@/views/Banner.vue'
import Container from '@/views/Container.vue'
import BlurBackground from '@/components/BlurBackground.vue'

export default {
  data() {
    return {
      bk:1
    }
  },
  name: 'Main',
  components: {
    Banner,
    Container,
    BlurBackground
  },
  methods: {
      change(val){
        if(val==null)
          
          this.bk=val
    }
  }
}

</script>


<style>
#main{
  overflow: hidden;
  padding: 32px 0;
  min-height: 500px;
}

</style>