<template>
    <div class="other" v-if="this.$route.name!='subjectList'">

      <div>
        <h3 class="types-title clearfix"><span>快速学习</span><span class="intro">零基础快速就业</span></h3>
        <div class="path-banner">
          <a href="//class.imooc.com/sale/newfe?mc_marking=6be094dafde423bf49df7978fb1b5b44&amp;mc_channel=L1"
            target="_blank" data-track="ljtj-1-1">
            <i class="i-web"></i>
            <p class="tit">Web前端攻城狮</p>
            <p class="desc">从未接触编程也可以学好</p>
          </a>
          <a href="//class.imooc.com/sale/newjava?mc_marking=b9b1bf4f19e124900889941731e52a4b&amp;mc_channel=L2"
            target="_blank" data-track="ljtj-1-3">
            <i class="i-java"></i>
            <p class="tit">Java攻城狮</p>
            <p class="desc">综合就业排名第一</p>
          </a>
          <a href="//class.imooc.com/sale/python?mc_marking=b098f828d4a7229958cf4ad9c4a7cac5&amp;mc_channel=L5"
            target="_blank" data-track="ljtj-1-5">
            <i class="i-python"></i>
            <p class="tit">Python攻城狮</p>
            <p class="desc">应用领域最为广泛的语言</p>
          </a>
          <a href="//class.imooc.com/sale/newandroid?mc_marking=7e464a4870e13dc90f4b8d534a20efe0&amp;mc_channel=L3"
            target="_blank" data-track="ljtj-1-4">
            <i class="i-android"></i>
            <p class="tit">Android攻城狮</p>
            <p class="desc">移动设备市场份额第一</p>
          </a>
          <a href="//class.imooc.com/sale/php?mc_marking=c03f3d2ee3d0598c6fa775ff2b4c27d0&amp;mc_channel=L4"
            target="_blank" data-track="ljtj-1-2">
            <i class="i-php"></i>
            <p class="tit">PHP攻城狮</p>
            <p class="desc">Web开发首选语言</p>
          </a>
        </div>
      </div>

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
    

    <Pagination/>


    </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'

export default {
    components:{
      Pagination
    }
}
</script>

<style>
    

.other{
  text-align: center;
}


.path-banner{
    position: relative;
    overflow: hidden;
    width: 936px;
    height: 128px;
    margin: 0 auto;
}

.path-banner::before {
    content: " ";
    background: url(../assets/new-path.png) no-repeat;
    width: 68px;
    height: 68px;
    position: absolute;
    left: 0;
    top: 0;
}

.path-banner a{
    float: left;
    font-size: 0;
    display: block;
    width: 20%;
    height: 128px;
    overflow: hidden;
    transition: all .3s;
}

.path-banner > a:hover {
    margin-top: -4px;
}

.path-banner i {
    display: inline-block;
    width: 36px;
    height: 36px;
    background: url(../assets/path-2019-2.png) no-repeat;
    background-size: 100%;
    margin-top: 22px;
}

.path-banner .tit {
    font-size: 14px;
    color: #07111B;
    letter-spacing: 1px;
    margin-top: 6px;
}

.path-banner .desc {
    font-size: 12px;
    color: #93999F;
    line-height: 16px;
    margin-top: 2px;
    font-weight: 400;
}

.path-banner .i-java {
    background-position: center -36px;
}

.path-banner .i-python {
    background-position: center -72px;
}

.path-banner .i-android {
    background-position: center -108px;
}

.path-banner .i-php {
    background-position: center -144px;
}


</style>