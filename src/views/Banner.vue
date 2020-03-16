<template>
    <div id="banner">
        <div class="banner-box">
            <div class="aside-menu">
                <div class="aside-menu-item" v-for="(item,index) in subject" :key="item.id">
                    <el-popover placement="right" width="400" trigger="hover">
                        <div class="submenu">
                            <el-divider content-position="left">
                                <router-link class="divider" :to="{name:'Subject',params:{id:index,subId:-1}}">
                                    {{item.name}}</router-link>
                            </el-divider>
                            <div class="subItem">
                                <router-link :to="{name:'Subject',params:{id:index,subId:subIndex}}"
                                    v-for="(subItem,subIndex) in item.courseClassificationList" :key="subItem.id"
                                    class="subItemLink">
                                    {{subItem.name}} </router-link>
                            </div>
                        </div>
                        <router-link class="popover-a" :to="{name:'Subject',params:{id:index,subId:-1}}"
                            slot="reference">
                            <div class="mask"></div>
                            <span>{{item.name}}</span>
                            <i class="el-icon-caret-right"></i>
                        </router-link>
                    </el-popover>
                </div>
            </div>
            <div class="banner-content">
                <div class="carousel">
                    <el-carousel trigger="click" height="382px">
                        <el-carousel-item v-for="item in 6" :key="item">
                            <img :src="require('@/assets/carousel-'+item+'.jpg')" alt="">
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        findAllSubject
    } from '@/api/subject'

    export default {
        name: 'Banner',
        data() {
            return {
                subject: []
            };
        },
        methods: {
            findAllSubject() {
                findAllSubject().then(res => {
                    if (res.data.code === 20000) {
                        this.subject = res.data.data
                    }
                })
            }
        },
        created() {
            this.findAllSubject()
        }
    }
</script>

<style>
    .banner-box {
        display: flex;
        justify-content: center;
        width: 1152px;
        margin: 0 auto;
        box-shadow: 0 0 20px 10px rgba(7, 17, 27, 0.2);
        border-radius: 10px;
    }

    .aside-menu {
        display: block;
        width: 250px;
        height: 382px;
        background-color: #2b333b;
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
    }

    .aside-menu a {
        color: rgba(255, 255, 255, 0.6);
        padding: 15px 10px;
    }

    .aside-menu span {
        font-size: 16px;
        letter-spacing: 1px;
    }

    .aside-menu-item {
        margin: 10px 10px;
        height: 50px;
    }

    .divider {
        color: red;
        font-size: 16px;
        font-weight: bold;
    }

    .subItem {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 10px;
    }

    .subItem a {
        margin-bottom: 16px;
        color: #4D555D;
        line-height: 22px;
        margin-right: 24px;
        display: inline-block;
    }

    .subItem a:hover {
        color: red;
    }

    .popover-a {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 60px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 6px;
        opacity: 0;
    }

    .popover-a:hover .mask {
        opacity: 1;
        color: #fff;
    }

    .popover-a:hover {

        color: #fff;
    }

    .carousel {
        cursor: pointer;
        width: 936px;
        height: 382px;
    }

    .carousel img {
        width: 100%;
        height: 100%;
    }


    .el-carousel__item,
    .el-carousel {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
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
</style>