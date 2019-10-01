<template>
    <div id="banner">
        
        <div class="bk" :class="changeBk"></div>
        <div class="banner-box" v-if="this.$route.name!='subjectList'">
            <div class="aside-menu">
                <div class="aside-menu-item" v-for="(item,index) in subject" :key="item.id">
                    <el-popover placement="right" width="500" trigger="hover">
                        <div class="submenu">

                            <el-divider content-position="left">
                                <router-link class="divider" :to="'/subject/'+index+'/-1'">{{item.name}}</router-link>
                            </el-divider>
                            <div class="subItem">
                                <router-link :to="'/subject/'+index+'/'+subIndex" v-for="(subItem,subIndex) in item.subjectList" :key="subItem.id" class="subItemLink">
                                    {{subItem.name}} </router-link>
                            </div>
                        </div>
                        <router-link class="popover-a" :to="'/subject/'+index+'/-1'" slot="reference">
                            <div class="mask"></div>
                            <span>{{item.name}}</span>
                            <i class="el-icon-caret-right"></i>
                        </router-link>
                    </el-popover>
                </div>


            </div>

            <div class="banner-content">
                <div class="carousel">

                    <el-carousel trigger="click" height="316px" @change="changeBackground">
                        <el-carousel-item v-for="item in 6" :key="item">
                            <img :src="require('../assets/carousel-'+item+'.jpg')" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>

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
                    <!-- <a href='//class.imooc.com/sale/webfullstack?mc_marking=b70aa16310ddf4a6ebc2e976561b0f3d&mc_channel=L4' target="_blank" data-track='ljtj-1-2'>
                <i class="i-fullstack"></i>
                <p class="tit">大前端</p>
                <p class="desc">5G时代热门职业</p>
            </a> -->

                </div>

            </div>


        </div>

    </div>
</template>

<script>
import {
    findAllSubject
} from '@/util/api'

export default {
    data() {
        return {
            changeBk: 'bk',
             subject:this.$store.state.subject
           
        };
    },
    methods: {
        changeBackground(val, oldVal) {
            val = val + 1
            this.changeBk = 'bk' + val
        },

        findAllSubject() {
            findAllSubject().then(res => {
                if (res.data.code === 20000) {
                    console.log(res.data.data);
                    this.subject = res.data.data
                }
            })
        }
    },
    created() {
        this.findAllSubject()
        // this.$store.commit('setSubject',this.subject)
    }
}
</script>

<style>
.bk {
    z-index: -10;
    opacity: 0.3;
    -webkit-filter: blur(100px);
    -moz-filter: blur(100px);
    -o-filter: blur(100px);
    -ms-filter: blur(100px);
    filter: blur(100px);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius='100');
    width: 98%;
    height: 490px;
    position: absolute;
    top: 0px;
    background-image: url(../assets/carousel-1.jpg);
    background-size: cover;
    transition: all .3s;
}

.bk1{
    background-image: url(../assets/carousel-1.jpg);
}

.bk2{
    background-image: url(../assets/carousel-2.jpg);
}

.bk3{
    background-image: url(../assets/carousel-3.jpg);
}

.bk4{
    background-image: url(../assets/carousel-4.jpg);
}

.bk5{
    background-image: url(../assets/carousel-5.jpg);
}

.bk6{
    background-image: url(../assets/carousel-6.jpg);
}

.banner-box{
    display: flex;
    justify-content: center;
    width: 1152px;
    margin: 0 auto;
    box-shadow: 0 0 20px 10px rgba(7, 17, 27, 0.2);
    border-radius: 10px;
}

.aside-menu{
    display: block;
    width: 250px;
    background-color: #2b333b;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
}

.aside-menu a{
    color: rgba(255, 255, 255, 0.6);
    padding: 15px 10px;
}

.aside-menu span{
    font-size: 14px;
    letter-spacing:1px;
}

.aside-menu-item{
    margin: 10px 10px;
    height: 50px;
}

.submenu{
    width: 500px;
    height: 400px;
}

.divider{
    color: red;
    font-size: 16px;
    font-weight: bold;
}

.subItem{
  float: left;
  padding: 10px;
}

.subItem a{
    margin-bottom: 16px;
    color: #4D555D;
    line-height: 22px;
    margin-right: 24px;
    display: inline-block;
}

.subItem a:hover{
    color: red;
}

.popover-a{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 60px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    opacity: 0;
}

.popover-a:hover .mask{
    opacity: 1; 
    color: #fff;       
}

.popover-a:hover{

    color: #fff;       
}

.carousel {
    cursor: pointer;
    width: 936px;
    height: 316px;
}
.carousel img{
    width: 100%;
    height: 100%;
}


.el-carousel__item,.el-carousel{
    border-top-right-radius: 10px;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.path-banner{
    position: relative;
    overflow: hidden;
    width: 936px;
    height: 128px;
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