<template>
    <div id="main">
        <!-- 学科分类菜单和轮播图 -->
        <Banner  />

        <!-- 主页上的其他展示内容 -->

        <div class="other" v-if="this.$route.name!='subjectList'">
            <div v-if="this.$store.state.isLogin">
                登录之后显示内容
                <br>
                <br>
                <br>
                <br>
            </div>
            <div>
                <br>
                <br>
                <br>

                主体区域的其他展示内容
                <br>
                <br>
                <br>
                <br>
                <br>
                主体区域的其他展示内容
                <br>
                <br>
                <br>
                <br>
                主体区域的其他展示内容
                <br>
                <br>
                <br>
                <br>
                主体区域的其他展示内容
            </div>

        </div>

        <!-- 主页上显示嵌套的二级路由视图 -->
        <router-view></router-view>

    </div >
</template>

<script>
import Banner from '@/views/Banner.vue'

export default {
     data () {
    return {
    }
  },
  name: 'Main',
  components: {
   Banner
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

.other{
  text-align: center;
}
</style>