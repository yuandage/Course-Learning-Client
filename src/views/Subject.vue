<template>
    <div id="Subject">
        <div class="wrap ">
            <div class="top">
                <div class="course-content">
                    <div class="course-nav-box">
                        <div class="course-nav-row">
                            <span class="hd l">方向：</span>
                            <div class="bd">
                                <ul class="">
                                    <li class="course-nav-item">
                                        <router-link :class="{courseNavItem:itemOn==-1}"
                                            :to="{name:'Subject',params:{id:-1,subId:-1}}">全部</router-link>
                                    </li>
                                    <li class="course-nav-item" v-for="(item,index) in subject" :key="index">
                                        <router-link :class="{courseNavItem:itemOn==index}"
                                            :to="{name:'Subject',params:{id:index,subId:-1}}">{{item.name}}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="course-nav-row course-nav-skills clearfix">
                            <div class="js-course-skills course-skills-box">
                                <span class="hd l">分类：</span>
                                <div class="bd">
                                    <ul class="">
                                        <li class="course-nav-item on">
                                            <router-link :class="{courseNavItem:subItemOn==-1}"
                                                :to="{name:'Subject',params:{id:itemOn,subId:-1}}">全部</router-link>
                                        </li>

                                        <li class="course-nav-item"
                                            v-for="(item,index) in itemOn==-1?allChildSubject:subject[itemOn].courseClassificationList"
                                            :key="index">
                                            <router-link :class="{courseNavItem:subItemOn==index}"
                                                :to="{name:'Subject',params:{id:itemOn,subId:index}}">
                                                {{item.name}}</router-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 课程展示信息 -->
        <div class="subject-course">
            <div class="course-list">
                <router-link v-for="item in ($route.query.courseName != null && $route.query.courseName != '')?course.slice((currentPage-1)*pageSize,currentPage*pageSize):course" :key="item.id" :to="'/course/'+item.id">
                    <div class="course-list-top">
                        <img class="course-cover" :src="item.coverUrl">
                    </div>
                    <div class="course-list-content">
                        <h3 class="course-list-name">{{item.name}}</h3>
                        <p class="course-list-desc">{{item.summary}}</p>
                    </div>
                </router-link>
            </div>
        </div>

        <!-- 分页组件 -->
        <div class="pagination">
            <el-pagination background @current-change="handleCurrentChange" :current-page="currentPage"
                :page-size="pageSize" layout="prev, pager, next, total, jumper" :total="totalCount">
            </el-pagination>
        </div>

    </div>
</template>

<script>
    import {
        getAllCourse,
        findByNameLike
    } from '@/api/course'
    import {
        getSubjectCourse,
        getCourse,
        findAllSubject,
        findChildSubject
    } from '@/api/subject'

    export default {
        name: 'Subject',
        data() {
            return {
                itemOn: -1, //方向索引
                subItemOn: -1, //分类索引
                subject: [], //学科分类树
                allChildSubject: [], //所有二级学科分类
                course: [], //课程
                // 默认显示第几页
                currentPage: 1,
                // 总条数，根据接口获取数据长度(注意：这里不能为空)
                totalCount: 0,
                // 默认每页显示的条数（可修改）
                pageSize: 30
            }
        },
        methods: {
            checkArg(route) { //检查查询参数
                this.itemOn = parseInt(route.params.id)
                this.subItemOn = parseInt(route.params.subId)
                if (this.itemOn < -1 || this.itemOn > this.subject.length)
                    this.itemOn = -1
                if (this.subItemOn < -1)
                    this.subItemOn = -1
            },
            async getAllSubject() {
                let res = await findAllSubject()
                if (res.data.code === 20000) {
                    this.subject = res.data.data
                }
                res = await findChildSubject()
                if (res.data.code === 20000) {
                    this.allChildSubject = res.data.data
                }
            },
            getCourse(id, subId, courseName) {
                if (courseName != null && courseName != '') {
                    findByNameLike(courseName).then(res => {
                        if (res.data.code == 20000) {
                            this.course = res.data.data
                            this.totalCount = this.course.length
                        }
                    })
                } else {
                    if (id === -1 && subId == -1) {
                        getAllCourse(this.currentPage, this.pageSize).then((res) => { //获取全部的课程信息
                            if (res.data.code === 20000) {
                                this.course = res.data.data.rows
                                this.totalCount = res.data.data.total
                            }
                        })
                    } else if (id === -1 && subId != -1) {
                        let parentId = this.allChildSubject[subId].id
                        getCourse(parentId, this.currentPage, this.pageSize).then((res) => { //获取二级级分类下的全部课程信息
                            if (res.data.code === 20000) {
                                this.course = res.data.data.rows
                                this.totalCount = res.data.data.total
                            }
                        })
                    } else if (id != -1 && subId === -1) {
                        getSubjectCourse(id + 1, this.currentPage, this.pageSize).then((res) => { //获取一级分类下的全部课程信息
                            if (res.data.code === 20000) {
                                this.course = res.data.data.rows
                                this.totalCount = res.data.data.total
                            }
                        })
                    } else {
                        let parentId = this.subject[id].courseClassificationList[subId].id
                        getCourse(parentId, this.currentPage, this.pageSize).then((res) => { //获取二级级分类下的全部课程信息
                            if (res.data.code === 20000) {
                                this.course = res.data.data.rows
                                this.totalCount = res.data.data.total
                            }
                        })
                    }
                }
            },
            // 显示第几页
            handleCurrentChange(val) {
                // 改变默认的页数
                this.currentPage = val
                if(this.$route.query.courseName==null||this.$route.query.courseName=="")
                    this.getCourse(this.itemOn, this.subItemOn)
            }
        },
        async created() {
            await this.getAllSubject()
            this.checkArg(this.$route)
            this.getCourse(this.itemOn, this.subItemOn)
        },
        beforeRouteUpdate(to, from, next) {
            this.currentPage = 1
            this.checkArg(to)
            this.getCourse(this.itemOn, this.subItemOn, to.query.courseName)
            next();
        }
    }
</script>

<style>
    .wrap {
        text-align: left;
        width: 100%;
        box-shadow: 0 4px 8px 0 rgba(28, 31, 33, .1);
    }

    .wrap .top {
        max-width: 1386px;
        margin: auto;
    }

    .course-content {
        float: none;
        width: 100%;
        box-shadow: none;
    }

    .course-nav-row {
        position: relative;
        padding: 16px 0 5px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        /* box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1); */
    }

    .course-nav-row .hd {
        width: 52px;
        height: 20px;
        line-height: 30px;
        font-weight: 700;
        font-size: 14px;
        color: #07111b;
        text-align: left;
    }

    .course-nav-row .bd {
        margin-left: 50px;
    }

    .course-nav-item {
        display: inline-block;
        margin: 0 4px;
    }

    .course-nav-item:hover a {
        color: #f20d0d;
    }

    .courseNavItem {
        background: rgba(242, 13, 13, .1);
        border-radius: 6px;
        font-weight: 700;
        color: #f20d0d;
    }

    .course-nav-item a {
        display: block;
        line-height: 14px;
        margin-bottom: 10px;
        padding: 10px;
        font-size: 16px;
    }

    .course-nav-item a:hover {
        cursor: pointer;
    }

    .course-nav-skills {
        max-height: 132px;
    }

    .course-skills-box {
        position: relative;
        z-index: 1;
    }

    .course-list {
        margin: 40px 55px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .course-list a {
        width: 216px;
        height: 210px;
        margin: 0 0 18px 18px;
    }

    .course-list-content {
        height: 76px;
        text-align: left;
        padding: 8px;
    }

    .course-list-content .course-list-name {
        font-size: 16px;
        line-height: 24px;

    }

    .course-list-content .course-list-desc {
        font-size: 12px;
        line-height: 18px;
        color: #9199a1;
    }

    .course-list a:hover .course-list-name {
        color: #F20D0D;
    }

    .course-list .course-list-top {
        width: 216px;
        height: 120px;
        position: relative;
        border-radius: 8px;
        transition: all .3s;
    }

    .course-list-top:hover {
        box-shadow: 0 10px 16px 0 rgba(8, 24, 43, 0.3);
    }

    .course-list .course-list-top .course-cover {
        width: 100%;
        height: 100%;
        background-color: #f3f5f7;
        border-radius: 8px;
    }

    .course-list .course-list-content .course-list-name {
        font-size: 16px;
        color: #07111B;
        line-height: 24px;
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        transition: all .3s;
        font-weight: bold;
        height: 46px;
    }

    .pagination {
        margin-top: 40px;
        text-align: center;
    }
</style>