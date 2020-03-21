<template>
    <div class="course">

        <div class="course-info">
            <div class="info-bg">
                <div class="course-info-box">
                    <div class="share">
                        <span v-if="!courseFavoriteStatus" title="收藏" @click="addcourseFavorite">
                            <i class="el-icon-star-off"></i>
                        </span>
                        <span v-else title="取消收藏" @click="delCourseFavorite">
                            <i class="el-icon-star-on" />
                        </span>
                        <span title="分享到微信">
                            <svg t="1581001454217" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="4192" width="35" height="35">
                                <path
                                    d="M958.828 614.546c0-120.659-111.006-218.796-250.973-223.622-16.090-141.573-152.836-252.582-318.542-252.582-176.967 0-320.15 123.879-320.15 278.321 0 91.7 51.483 172.142 130.311 223.622 9.653 4.827-28.959 85.266-19.305 90.094 16.090 9.653 80.441-59.525 98.137-53.090 35.394 11.263 72.396 17.696 112.617 17.696 19.305 0 38.61-1.609 57.917-4.827 37.003 85.266 133.531 146.399 246.146 146.399 30.567 0 61.134-4.827 88.485-12.87 8.043-3.219 70.787 51.483 78.831 48.265 14.478-4.827-25.741-69.178-12.87-77.222 65.962-40.22 109.398-106.181 109.398-180.186zM598.457 558.236c-14.478 0-27.348-12.87-27.348-27.348s11.263-27.348 27.348-27.348c14.478 0 27.348 12.87 27.348 27.348 0 14.478-11.263 27.348-27.348 27.348zM432.75 614.546c0 6.434 0 14.478 1.609 22.523-14.478 1.609-28.959 3.219-43.437 3.219-37.003 0-72.396-6.434-104.571-17.696-3.219-1.609-14.478-4.827-20.914 0-14.478 9.653-32.174 32.174-32.174 32.174s6.434-16.090 9.653-38.61c1.609-9.653-14.478-17.696-17.696-19.305-59.525-40.22-98.137-109.398-98.137-178.578 0-123.879 117.441-223.622 263.841-223.622 136.749 0 247.756 86.874 262.234 199.489-125.486 17.696-220.405 109.398-220.405 220.405zM765.771 558.236c-14.478 0-27.348-12.87-27.348-27.348s11.263-27.348 27.348-27.348c14.478 0 27.348 12.87 27.348 27.348 0 14.478-11.263 27.348-27.348 27.348z"
                                    fill="" p-id="4193"></path>
                                <path
                                    d="M501.93 360.356c22.523 0 41.828-19.305 41.828-41.828s-19.305-41.828-41.828-41.828c-22.523 0-41.828 19.305-41.828 41.828 0 24.132 19.305 41.828 41.828 41.828zM279.915 360.356c22.523 0 41.828-19.305 41.828-41.828s-19.305-41.828-41.828-41.828c-22.523 0-41.828 19.305-41.828 41.828 0 24.132 17.696 41.828 41.828 41.828z"
                                    fill="" p-id="4194"></path>
                            </svg></span>
                        <span title="分享到QQ空间">
                            <svg t="1581001674853" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="5988" width="35" height="35">
                                <path
                                    d="M183.136 558.528c-27.68 68.992-32.288 134.752-9.984 146.976 15.424 8.48 39.456-10.912 62.08-46.208 8.96 38.656 31.104 73.344 62.72 101.376-33.12 12.896-54.816 33.984-54.816 57.824 0 39.264 58.592 70.976 130.848 70.976 65.184 0 119.2-25.728 129.184-59.648h15.52c10.176 33.92 64.064 59.648 129.344 59.648 72.352 0 130.848-31.712 130.848-70.976 0-23.84-21.664-44.768-54.848-57.824 31.52-28.032 53.792-62.72 62.688-101.376 22.624 35.296 46.528 54.688 62.016 46.208 22.432-12.224 17.952-77.984-10.016-146.976-21.856-54.016-51.456-93.888-74.016-102.816a108.384 108.384 0 0 0-14.496-66.4 60.608 60.608 0 0 0-5.728-30.112c-5.696-140.608-92.672-252.384-233.504-252.384-140.8 0-227.872 111.808-233.568 252.384a62.624 62.624 0 0 0-5.92 26.496c0 1.248 0 2.432 0.16 3.712a109.44 109.44 0 0 0-14.912 55.968c0 3.52 0.192 7.04 0.416 10.464-22.464 8.864-52.192 48.672-74.016 102.688z"
                                    p-id="5989"></path>
                            </svg>

                        </span>
                        <span title="分享到微博">
                            <svg t="1581001748220" class="icon" viewBox="0 0 1025 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="8131" width="35" height="35">
                                <path
                                    d="M690.325333 102.848c-13.802667 2.453333-44.629333 14.293333-44.885333 39.808-0.256 25.493333 27.050667 42.133333 40.832 43.413333 50.88 0 294.208-13.205333 249.706667 221.568-6.165333 25.749333-10.88 65.173333 19.669333 73.472 27.754667 6.976 44.885333-22.016 52.586667-44.096C1011.925333 411.328 1124.458667 74.858667 690.325333 102.848z"
                                    p-id="8132"></path>
                                <path
                                    d="M753.621333 495.786667c0 0-51.008 11.029333-26.88-26.922667 37.888-74.218667-23.786667-196.010667-183.658667-115.072-55.082667 29.354667-55.082667 8.554667-53.248-28.16 4.949333-200.469333-366.634667-57.536-471.914667 203.114667C-41.429333 686.912 53.632 823.552 200.682667 883.2c358.933333 128.128 620.266667-83.904 664.810667-220.949333C924.906667 456.32 753.621333 495.786667 753.621333 495.786667zM409.429333 835.797333c-169.898667 23.338667-320.490667-51.328-336.426667-166.677333-15.850667-115.413333 108.992-227.946667 278.890667-251.285333 169.898667-23.36 320.469333 51.242667 336.405333 166.656C704.170667 699.882667 579.285333 812.330667 409.429333 835.797333z"
                                    p-id="8133"></path>
                                <path
                                    d="M834.624 435.349333c17.088 4.266667 23.744-9.749333 25.621333-22.549333 1.749333-12.8 31.253333-186.325333-158.250667-166.314667-14.336 1.578667-24 10.154667-22.336 22.741333 1.578667 12.608 12.202667 19.669333 20.288 18.709333 8.085333-0.938667 134.656-23.125333 124.288 110.250667C826.133333 410.325333 817.6 431.082667 834.624 435.349333z"
                                    p-id="8134"></path>
                                <path
                                    d="M354.069333 498.624c-88.554667 16.981333-149.461333 87.744-135.978667 158.08 13.482667 70.336 96.256 113.536 184.853333 96.533333 88.576-16.96 149.418667-87.744 135.978667-158.037333C525.376 524.885333 442.666667 481.642667 354.069333 498.624zM343.552 688.384c-30.592 0-55.402667-21.013333-55.402667-47.125333 0-26.005333 24.810667-47.125333 55.402667-47.125333s55.381333 21.12 55.381333 47.125333C398.933333 667.328 374.122667 688.384 343.552 688.384zM434.282667 624.789333c-11.413333 0-23.018667-13.76-23.018667-30.698667 0-16.917333 11.605333-30.634667 23.018667-30.634667s23.061333 13.717333 23.061333 30.634667C457.344 611.050667 445.696 624.789333 434.282667 624.789333z"
                                    p-id="8135"></path>
                            </svg>

                        </span>

                    </div>

                    <h2>{{course.name}}</h2>

                    <div class="static">
                        <div class="teacher-info">
                            <a href="">
                                <img width="50" height="50" src="@/assets/avatar.gif">
                                <span>唐小燕</span>
                            </a>
                        </div>
                        <div class="static-item">
                            <span>难度</span>
                            <span>入门</span>
                        </div>
                        <div class="static-item">
                            <span>时长</span>
                            <span>5小时0分</span>
                        </div>
                        <div class="static-item">
                            <span>学习人数</span>
                            <span>1997</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="box-shadow"></div>
        <div class="course-info-menu">
            <el-tabs class="menu-tab" value="first" @tab-click="handleClick()">
                <el-tab-pane label="课程章节" name="first">
                    <div class="course-description">
                        简介：{{course.description}}
                    </div>
                    <div class="course-chapter">
                        <div class="chapter" v-for="(item,index) in chapter" :key="item.id">
                            <h3>{{item.title}}</h3>
                            <p class="chapter-description">
                                {{item.description}}
                            </p>
                            <ul class="video">
                                <li v-for="subItem in subChapter[index] " :key="subItem.id">
                                    <router-link :to="{name:'CourseVideo',query:{courseId:$route.params.id,sectionId:subItem.id}}">
                                        <svg t="1581056346451" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="2331" width="25" height="25">
                                            <path
                                                d="M512 78.8c-239.3 0-433.2 194-433.2 433.2 0 239.3 194 433.2 433.2 433.2 239.3 0 433.2-194 433.2-433.2 0.1-239.2-193.9-433.2-433.2-433.2z m183.3 447.9L455.1 720c-12.3 9.9-30.5 1.1-30.5-14.6V318.7c0-15.7 18.2-24.5 30.5-14.6l240.2 193.4c9.4 7.5 9.4 21.7 0 29.2z"
                                                p-id="2332"></path>
                                        </svg>
                                        <span> {{subItem.title}} ({{subItem.time}})</span>
                                    </router-link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="课程评论" name="second">
                    <div class="tab-pane-comment"></div>
                    <CourseComment :courseId="$route.params.id" />
                </el-tab-pane>

            </el-tabs>
            <div class="course-aside">
                <div class="course-info-tip">
                    <span>已学 19%</span>
                    <el-progress :percentage="19" :stroke-width="18" :show-text="false" color="#f20d0d"></el-progress>
                    <el-button type="danger" @click="learnCourse">继续学习
                    </el-button>
                    <!-- <div class="course-info-btn">
                        <el-button type="success" @click="doTest('选择题.docx')">在线测试</el-button>
                    </div> -->
                </div>

                <div class="course-info-test">
                    <h4>在线测试</h4>
                    <div v-if="questionType.length">
                        <ul>
                            <li v-for="item in questionType" :key="item">
                                <i class="el-icon-document"><span style="margin-left: 10px">{{ item }}</span></i>
                                <el-button type="primary" size="mini" @click="doTest(item)">练习</el-button>
                            </li>
                        </ul>
                    </div>
                    <div v-else>
                        <ul>
                            <li>
                                <i class="el-icon-document"></i>
                                <span style="margin-left: 10px">暂无试题资源</span>
                                <el-button type="primary" size="mini">上传</el-button>
                            </li>
                        </ul>
                    </div>

                </div>

                <div class="course-info-res">
                    <h4>资料下载</h4>
                    <el-scrollbar style="height:100%">
                        <el-table :data="tableData" style="width: 96%" :show-header="false">

                            <el-table-column prop="name" width="180" label="简介">
                                <template slot-scope="scope">
                                    <i class="el-icon-document"></i>
                                    <span style="margin-left: 10px">{{ scope.row.name }}</span>
                                </template>

                            </el-table-column>

                            <el-table-column label="操作" align="right">
                                <template slot-scope="scope">
                                    <a :href="scope.row.resUrl">
                                        <el-button type="primary" size="mini">
                                            下载</el-button>
                                    </a>

                                </template>
                            </el-table-column>

                        </el-table>
                    </el-scrollbar>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import CourseComment from '@/views/CourseComment.vue'
    import {
        getCourseInfo
    } from '@/api/course'
    import {
        getChapter
    } from '@/api/course_chapter'
    import {
        findQuestionType
    } from '@/api/question'
    import {
        findCourseResource
    } from '@/api/resource'
    import {
        addUserCourse,
        getUserCourse
    } from '@/api/user_course'
    import {
        getUserFavorite,
        addUserFavorite,
        delUserFavorite
    } from '@/api/user_favorite'
    import {
        getUserInfo
    } from '@/util/dataStorage'
    export default {
        name: 'CourseInfo',
        components: {
            CourseComment
        },
        data() {
            return {
                course: {},
                chapter: [],
                subChapter: [],
                questionType: [],
                tableData: [],
                courseFavorite: [],
                courseFavoriteStatus: false,
            }
        },
        filters: {
            formatDate(value) {
                let date = new Date(value);
                let y = date.getFullYear();
                let MM = date.getMonth() + 1;
                MM = MM < 10 ? ('0' + MM) : MM;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                let h = date.getHours();
                h = h < 10 ? ('0' + h) : h;
                let m = date.getMinutes();
                m = m < 10 ? ('0' + m) : m;
                let s = date.getSeconds();
                s = s < 10 ? ('0' + s) : s;
                return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
            }
        },
        methods: {
            getCourseInfo() {
                getCourseInfo(this.$route.params.id).then(res => {
                    if (res.data.code === 20000) {
                        this.course = res.data.data
                        this.$route.meta.title = this.course.name
                    }
                })
            },
            handleClick() {
                // this.getCourseChapter()
            },
            getCourseChapter() {
                getChapter(this.$route.params.id,0).then(res => {
                    if (res.data.code === 20000) {
                        this.chapter = res.data.data
                        for (let i = 0; i < this.chapter.length; i++) {
                            getChapter(this.$route.params.id, this.chapter[i].id).then(res => {
                                if (res.data.code === 20000) {
                                    this.subChapter.push(res.data.data)
                                }
                            })
                        }
                    }
                })
            },
            getQuestionType() {
                findQuestionType(this.$route.params.id).then(res => {
                    if (res.data.code == 20000) {
                        this.questionType = res.data.data
                    }
                })
            },
            getCourseResource() {
                findCourseResource(this.$route.params.id).then(res => {
                    if (res.data.code == 20000) {
                        this.tableData = res.data.data
                    }
                })
            },
            playVideo(videoName) {
                this.$router.push({
                    name: 'CourseVideo',
                    params: {
                        videoName: videoName
                    }
                })
            },
            doTest(test) {
                // this.$router.push('/test/'+this.course.id+'/'+test.title)
                this.$router.push({
                    name: 'CourseTest',
                    params: {
                        courseId: this.course.id,
                        testType: test
                    }
                })
            },
            getUserFavorite() {
                let user = getUserInfo()
                getUserFavorite(user.id).then(res => {
                    if (res.data.code === 20000) {
                        let userFavorite = res.data.data
                        for (let i = 0; i < userFavorite.length; i++) {
                            if (userFavorite[i].type === '课程') {
                                this.courseFavorite.push(userFavorite[i])
                            }
                            if (userFavorite[i].courseId === this.course.id)
                                this.courseFavoriteStatus = true
                        }
                    }
                })
            },
            addcourseFavorite() {
                let user = getUserInfo()
                let userFavorite = {
                    userId: user.id,
                    courseId: this.course.id,
                    type: '课程'
                }
                addUserFavorite(userFavorite).then(res => {
                    if (res.data.code === 20000) {
                        this.courseFavoriteStatus = true
                        this.courseFavorite.push({
                            id: res.data.data,
                            userId: user.id,
                            courseId: this.course.id,
                            type: '课程'
                        })
                        this.$notify({
                            title: '收藏成功',
                            message: '课程已收藏',
                            type: 'success',
                            duration: 2000,
                            offset: 50
                        })
                    }
                })
            },
            delCourseFavorite() {
                let id = ''
                this.courseFavorite.forEach((item, i) => {
                    if (item.courseId === this.course.id) {
                        id = item.id
                        this.courseFavorite.splice(i, 1)
                    }
                })
                console.log(id);
                delUserFavorite(id).then(res => {
                    if (res.data.code === 20000) {
                        this.courseFavoriteStatus = false
                        this.$notify({
                            title: '取消收藏成功',
                            message: '课程已取消收藏',
                            type: 'success',
                            duration: 2000,
                            offset: 50
                        })
                    }
                })
            },
            async learnCourse() {
                let user = getUserInfo()
                let userCourse = []
                let hasUserCourse = false
                let res = await getUserCourse(user.id)
                if (res.data.code === 20000) {
                    userCourse = res.data.data
                }
                userCourse.forEach(item => {
                    if ((item.userId === user.id) && (item.courseId === this.course.id)) {
                        hasUserCourse = true
                    }
                })
                if (!hasUserCourse) {
                    let newUserCourse = {
                        userId: user.id,
                        courseId: this.course.id
                    }
                    addUserCourse(newUserCourse).then(res => {
                        if (res.data.code === 20000) {
                            console.log('开始学习课程');
                        }
                    })
                    this.$router.push({
                        name: 'CourseVideo',
                        params: {
                            id: this.course.id
                        }
                    })
                } else {
                    this.$router.push({
                        name: 'CourseVideo',
                        params: {
                            id: this.course.id
                        }
                    })
                }
            },
            handleEdit(index, row) {
                console.log(index, row);
            }
        },
        created() {
            this.getCourseInfo()
            this.getUserFavorite()
            this.getCourseChapter()
            this.getQuestionType()
            this.getCourseResource()
        },
        mounted() {
            document.querySelector(".el-scrollbar__wrap").scrollTop = 0 //回到顶部
        }
    }
</script>

<style>
    .course {
        margin-top: -32px;
    }

    .course-info {
        text-align: left;
        height: 200px;
        position: relative;
        overflow: hidden;
    }

    .box-shadow {
        height: 68px;
        margin-bottom: -68px;
        box-shadow: 0 10px 8px rgba(7, 17, 27, .06);
    }

    .course-info::before {
        background-image: url(https://img3.mukewang.com/57035ff200014b8a06000338-240-135.jpg);
        background-size: cover;
        content: '';
        position: absolute;
        width: 1536px;
        height: 200px;
        filter: blur(20px);
        z-index: -1;
    }

    .info-bg {
        height: 200px;
        background-color: rgba(94, 94, 94, 0.7);
    }

    .course-info-box {
        height: 200px;
        max-width: 1152px;
        margin: 0 auto;
    }

    .share {
        height: 60px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .share span {
        cursor: pointer;
        width: 40px;
        height: 40px;
        margin: 0 15px;
    }

    .share i {
        font-size: 35px;
    }

    .course-info h2 {
        /* z-index: 1; */
        margin-bottom: 25px;
        line-height: 50px;
        font-size: 32px;
        color: #fff;
    }

    .static {
        color: #fff;
        width: 600px;
        display: flex;
        justify-content: space-between;
    }

    .teacher-info a {
        color: #fff;
        line-height: 22px;
        font-weight: 600;
        width: 110px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .teacher-info img {
        width: 50px;
        height: 50px;
        border-color: #4d5559;
        border-radius: 50%;
    }

    .static-item {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        /* align-items: center; */
    }

    .course-info-menu {
        display: flex;
        justify-content: space-between;
        width: 1152px;
        margin: 0 auto;
        /* height: 68px; */
        /* line-height: 60px; */
        /* box-shadow: 0 4px 8px 0 rgba(28, 31, 33, .1); */
    }

    .menu-tab {
        width: 800px;
        padding-top: 15px;
    }

    .course-info-menu .el-tabs__item {
        font-size: 16px;
        font-weight: 600;
    }

    .course-info-menu .el-tabs__item.is-active,
    .course-info-menu .el-tabs__item:hover {
        color: #f20d0d;
    }

    .course-info-menu .el-tabs__active-bar {
        background-color: #f20d0d;
    }

    .course-info-menu .el-tabs__nav-wrap::after {
        content: none;
    }

    .course-description {
        text-align: left;
        line-height: 28px;
        margin: 40px 5px 20px;
        padding: 24px 32px 32px;
        background: #fff;
        box-shadow: 0 4px 8px 0 rgba(7, 17, 27, .1);
        border-radius: 12px;
    }

    .chapter {
        box-sizing: border-box;
        margin: 0 5px 20px;
        padding: 24px 32px 32px;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 8px 0 rgba(7, 17, 27, .1);
    }

    .chapter .video li {
        position: relative;
        padding-left: 12px;
        height: 48px;
        line-height: 48px;
        list-style: none;
    }

    .chapter .video li a {
        display: flex;
        align-items: center;
    }

    .tab-pane-comment {
        margin-top: 40px;
    }

    .course-aside {
        width: 320px;
        height: 600px;
        /* padding: 30px; */
        background: #fff;
        z-index: 10;
        box-shadow: 0 8px 16px 0 rgba(7, 17, 27, .1);
        border-radius: 12px;
        margin-top: -100px;
    }

    .course-info-tip {
        width: 280px;
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0 20px;
    }

    /* .course-info-btn {} */

    .course-info-btn .el-button {
        width: 200px;
        margin: 5px 40px;
    }

    .course-info-test {
        height: 150px;
        padding: 0 20px;
        margin: 10px 0;
    }

    .course-info-test h4 {
        margin: 5px 0;
    }

    .course-info-test li {
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .course-info-res {
        height: 200px;
        padding: 0 20px;
        margin: 10px 0;
    }

    .course-info-res h4 {
        margin: 5px 0;
    }

    /* .courseInfo {
        margin: 0 200px;
    } */

    .courseInfoForm {
        margin: 0 auto;
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .box-card {
        width: 400px;
        height: 400px;
    }

    .courseLearnTab {

        display: flex;
        justify-content: space-around;
        width: 1000px;
        margin: 0 auto;
    }

    .courseResTab {
        width: 800px;
        margin: 0 auto;
    }
</style>