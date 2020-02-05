<template>
    <div class="course">
        <div class="courseInfo">
            <h2>课程介绍</h2>
            <br>
            <el-form class="courseInfoForm" ref="form" :model="course" label-width="80px" style="width:400px">
                <el-form-item label="课程名称">
                    <span>{{course.name}}</span>
                </el-form-item>

                <el-form-item label="课程简介">
                    <span>{{course.summary}}</span>
                </el-form-item>

                <el-form-item label="创建时间">
                    <span>{{course.createDate | formatDate}}</span>
                </el-form-item>
                <el-form-item label="更新时间">
                    <span>{{course.updateDate | formatDate}}</span>
                </el-form-item>

            </el-form>
        </div>

        <div class="course">
            <h2>在线学习</h2>
            <br>
            <div class="courseLearnTab">

                <div>
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>试题测试</span>
                            <el-button style="float: right; padding: 3px 0" type="text" @click="doTest('选择题.docx')">开始练习
                            </el-button>
                        </div>
                        <div class="text item">
                            <el-button v-for="item in tableData.slice(0,2)" :key="item.id" @click="doTest(item.title)">
                                {{item.title}}</el-button>
                        </div>
                    </el-card>
                </div>
                <div>
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>课程视频</span>
                            <el-button style="float: right; padding: 3px 0" type="text"
                                @click="playVideo('微机原理与接口技术_1.0 教学安排.mp4')">观看视频</el-button>
                        </div>
                        <div class="text item">
                            <el-button v-for="item in VideoData" :key="item.id" @click="playVideo(item.title)"
                                style="margin:10px;">
                                {{item.title}}</el-button>
                        </div>
                    </el-card>
                </div>

            </div>
        </div>

        <div class="courseRes">
            <br>

            <h2>课程资源</h2>
            <br>
            <div class="courseResTab">
                <el-tabs :v-model=0 type="card" tab-position="left">
                    <el-tab-pane label="显示全部" name="0">
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column type="index" label="序号">
                            </el-table-column>

                            <el-table-column prop="title" label="标题">
                            </el-table-column>
                            <el-table-column prop="summary" label="简介">
                            </el-table-column>
                            <el-table-column prop="fileSize" label="文件大小">
                            </el-table-column>
                            <el-table-column prop="uploadName" label="上传人">
                            </el-table-column>
                            <el-table-column prop="updateTime" label="更新时间">
                            </el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">
                                        下载</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="课程试题" name="1">
                        <el-table :data="tableData.slice(0,2)" style="width: 100%">
                            <el-table-column type="index" label="序号">
                            </el-table-column>

                            <el-table-column prop="title" label="标题">
                            </el-table-column>
                            <el-table-column prop="summary" label="简介">
                            </el-table-column>
                            <el-table-column prop="fileSize" label="文件大小">
                            </el-table-column>
                            <el-table-column prop="uploadName" label="上传人">
                            </el-table-column>
                            <el-table-column prop="updateTime" label="更新时间">
                            </el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">
                                        下载</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="课程PPT" name="2">
                        <el-table :data="tableData.slice(2,4)" style="width: 100%">
                            <el-table-column type="index" label="序号">
                            </el-table-column>

                            <el-table-column prop="title" label="标题">
                            </el-table-column>
                            <el-table-column prop="summary" label="简介">
                            </el-table-column>
                            <el-table-column prop="fileSize" label="文件大小">
                            </el-table-column>
                            <el-table-column prop="uploadName" label="上传人">
                            </el-table-column>
                            <el-table-column prop="updateTime" label="更新时间">
                            </el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">
                                        下载</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="课程视频" name="3">
                        <el-table :data="tableData.slice(4,6)" style="width: 100%">
                            <el-table-column type="index" label="序号">
                            </el-table-column>

                            <el-table-column prop="title" label="标题">
                            </el-table-column>
                            <el-table-column prop="summary" label="简介">
                            </el-table-column>
                            <el-table-column prop="fileSize" label="文件大小">
                            </el-table-column>
                            <el-table-column prop="uploadName" label="上传人">
                            </el-table-column>
                            <el-table-column prop="updateTime" label="更新时间">
                            </el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">
                                        下载</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                    <el-tab-pane label="其它资料" name="4">
                        <el-table :data="tableData.slice(6,8)" style="width: 100%">
                            <el-table-column type="index" label="序号">
                            </el-table-column>

                            <el-table-column prop="title" label="标题">
                            </el-table-column>
                            <el-table-column prop="summary" label="简介">
                            </el-table-column>
                            <el-table-column prop="fileSize" label="文件大小">
                            </el-table-column>
                            <el-table-column prop="uploadName" label="上传人">
                            </el-table-column>
                            <el-table-column prop="updateTime" label="更新时间">
                            </el-table-column>
                            <el-table-column label="操作">
                                <template slot-scope="scope">
                                    <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">
                                        下载</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        getCourseInfo
    } from '@/util/api'
    export default {
        data() {
            return {
                course: {},
                tableData: [{
                    id: 1,
                    title: '选择题.docx',
                    summary: '微机接口的选择题',
                    fileSize: '30KB',
                    uploadName: 'YH',
                    updateTime: '2019-12-9'
                }, {
                    id: 2,
                    title: '判断题.docx',
                    summary: '微机接口的判断题',
                    fileSize: '35KB',
                    uploadName: 'YH',
                    updateTime: '2019-12-10'
                }, {
                    id: 3,
                    title: '第01章 接口概述.pptx',
                    summary: '第01章接口概述2019',
                    fileSize: '5MB',
                    uploadName: 'YH',
                    updateTime: '2019-12-4'
                }, {
                    id: 4,
                    title: '第02章 处理器结构.pptx',
                    summary: '第02章处理器结构2019',
                    fileSize: '5MB',
                    uploadName: 'YH',
                    updateTime: '2019-12-1'
                }, {
                    id: 5,
                    title: '微机原理与接口技术_1.1 发展概况.mp4',
                    summary: '第1章 微型计算机基础-1.1 发展概况',
                    fileSize: '200MB',
                    uploadName: 'YH',
                    updateTime: '2019-12-10'
                }, {
                    id: 6,
                    title: '微机原理与接口技术_1.2 硬件结构.mp4',
                    summary: '第1章 微型计算机基础-1.2 硬件结构',
                    fileSize: '205MB',
                    uploadName: 'YH',
                    updateTime: '2019-12-16'
                }, {
                    id: 7,
                    title: '微机接口其它资料文件1.rar',
                    summary: '微机接口其它资料文件1',
                    fileSize: '45MB',
                    uploadName: 'YH',
                    updateTime: '2019-12-11'
                }, {
                    id: 8,
                    title: '微机接口其它资料文件2.rar',
                    summary: '微机接口其它资料文件2',
                    fileSize: '25MB',
                    uploadName: 'YH',
                    updateTime: '2019-12-12'
                }],
                VideoData: [{
                        id: 0,
                        title: '微机原理与接口技术_1.0 教学安排.mp4',
                        summary: '第1章 微型计算机基础-1.0 教学安排',
                        fileSize: '75MB',
                        uploadName: 'YH',
                        updateTime: '2019-12-10'
                    },
                    {
                        id: 1,
                        title: '微机原理与接口技术_1.1 发展概况.mp4',
                        summary: '第1章 微型计算机基础-1.1 发展概况',
                        fileSize: '86MB',
                        uploadName: 'YH',
                        updateTime: '2019-12-10'
                    }, {
                        id: 2,
                        title: '微机原理与接口技术_1.2 硬件结构.mp4',
                        summary: '第1章 微型计算机基础-1.2 硬件结构',
                        fileSize: '48MB',
                        uploadName: 'YH',
                        updateTime: '2019-12-16'
                    }, {
                        id: 3,
                        title: '微机原理与接口技术_1.3 数据表示.mp4',
                        summary: '微机原理与接口技术_1.3 数据表示',
                        fileSize: '88MB',
                        uploadName: 'YH',
                        updateTime: '2019-12-11'
                    }
                ]
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
            playVideo(videoName) {
                this.$router.push({
                    name: 'CourseVideo',
                    params: {
                        videoName: videoName
                    }
                })
            },
            doTest(testName) {
                this.$router.push({
                    name: 'CourseTest',
                    params: {
                        testName: testName
                    }
                })
            }
        },
        created() {
            this.getCourseInfo()
        },
        mounted() {
            document.querySelector(".el-scrollbar__wrap").scrollTop=0 //回到顶部
        }
    }
</script>

<style>
    .course {
        /* max-width: 1386px; */
    }

    .courseInfo {
        /* margin: 0 200px; */
    }

    .courseInfoForm {
        margin: 0 auto;
    }

    span {
        font-size: 18px;
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