<template>
    <div class="video">
        <h2>正在学习视频:{{chapterTitle}}</h2>

        <div class='video-box'>
            <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true"
                :options="playerOptions">
            </video-player>
            <div class="video-chapter">
                <div class="course-chapter">
                    <div class="chapter" v-for="(item,index) in chapter" :key="item.id">
                        <h3>{{item.title}}</h3>

                        <ul class="video-ul">
                            <li v-for="subItem in subChapter[index] " :key="subItem.id">
                                <router-link :to="'/video/'+subItem.id">
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
            </div>
        </div>
        <div class="video-comment">
            <div class="course-info-menu">
                <el-tabs value="first" class="menu-tab">
                    <el-tab-pane label="评论" name="first">
                        <CourseComment />
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    import CourseComment from '@/views/CourseComment.vue'
    import {
        findParentChapter,
        findSubChapter
    } from '@/api/course_chapter'
    import {
        addComment
    } from '@/api/course_comment'
    
    export default {
        name: 'CourseVideo',
        components: {
            CourseComment
        },
        data() {
            return {
                chapter: [],
                subChapter: [],
                chapterTitle: '1-1 Java简介',
                playerOptions: {
                    //播放速度
                    playbackRates: [0.5, 1.0, 1.5, 2.0],
                    //如果true,浏览器准备好时开始回放。
                    autoplay: false,
                    // 默认情况下将会消除任何音频。
                    muted: false,
                    // 导致视频一结束就重新开始。
                    loop: false,
                    // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    preload: 'auto',
                    language: 'zh-CN',
                    // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    aspectRatio: '16:9',
                    // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    fluid: true,
                    sources: [{
                        //类型
                        type: "video/mp4",
                        //url地址
                        src: require('@/assets/微机原理与接口技术_1.0 教学安排.mp4')
                    }],
                    //你的封面地址
                    poster: '',
                    //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    notSupportedMessage: '此视频暂无法播放，请稍后再试',
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        //全屏按钮
                        fullscreenToggle: true
                    }
                }

            }
        },
        methods: {
            getCourseChapter() {
                findParentChapter(6).then(res => {
                    if (res.data.code === 20000) {
                        this.chapter = res.data.data
                        for (let i = 0; i < this.chapter.length; i++) {
                            findSubChapter(6, this.chapter[i].id).then(res => {
                                if (res.data.code === 20000) {
                                    this.subChapter.push(res.data.data)
                                }
                            })
                        }
                    }
                })
            }
        },

        created() {
            this.getCourseChapter()
        }
    }
</script>

<style>
    .video {
        width: 1200px;
        margin: 0 auto;
    }

    .video-box {
        display: flex;
        justify-content: space-between;
    }

    .video-player {
        width: 800px;
        border-radius: 4px;
        margin: 20px 0;
    }

    .video-chapter {
        width: 350px;
    }

    .chapter {
        margin: 0 5px 20px;
        padding: 20px;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 4px 8px 0 rgba(7, 17, 27, .1);
    }

    .video-ul li {
        margin: 5px 0;
    }

    .video-ul li a {
        display: flex;
        align-items: center;
    }

    .video-ul li a .icon {
        width: 50px;
    }

    .video-ul li a span {
        width: 300px;
    }

    .video-comment {
        width: 800px;
        overflow: hidden;
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
</style>