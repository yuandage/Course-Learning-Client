<template>
    <div class="course-test">
        <h2>微机原理与接口技术课程的{{this.$route.params.testType}}</h2>
        <br>
        <br>
        <div class="question-detail">
            <h3>{{this.$route.params.testType}}，请选择你认为正确的答案！</h3>
            <div>
                <div class="question-content">
                    <p v-if="question.length">
                        {{currentTopic+1}}/{{question.length}}、{{this.question[currentTopic].content}}</p>
                    <span v-if="!questionFavoriteStatus" title="收藏" @click="addquestionFavorite">
                        <svg t="1583303946047" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="3921" width="35" height="35">
                            <path
                                d="M768 930.133333c-4.266667 0-8.533333 0-12.8-2.133333l-243.2-128-243.2 128c-8.533333 4.266667-19.2 4.266667-27.733333-2.133333-8.533333-6.4-12.8-17.066667-10.666667-25.6L277.333333 629.333333l-196.266666-192c-6.4-6.4-10.666667-17.066667-6.4-27.733333 2.133333-10.666667 10.666667-17.066667 21.333333-19.2l270.933333-38.4L488.533333 106.666667c4.266667-8.533333 12.8-14.933333 23.466667-14.933334 10.666667 0 19.2 6.4 23.466667 14.933334l121.6 245.333333 270.933333 38.4c10.666667 2.133333 19.2 8.533333 21.333333 19.2 2.133333 10.666667 0 21.333333-6.4 27.733333l-196.266666 192 46.933333 270.933334c2.133333 10.666667-2.133333 19.2-10.666667 25.6-4.266667 4.266667-10.666667 4.266667-14.933333 4.266666z m-256-185.6c4.266667 0 8.533333 0 12.8 2.133334l206.933333 108.8-40.533333-230.4c-2.133333-8.533333 2.133333-17.066667 8.533333-23.466667l168.533334-164.266667L635.733333 405.333333c-8.533333-2.133333-17.066667-6.4-19.2-14.933333L512 179.2l-104.533333 209.066667c-4.266667 8.533333-10.666667 12.8-19.2 14.933333L155.733333 437.333333l168.533334 164.266667c6.4 6.4 8.533333 14.933333 8.533333 23.466667l-40.533333 230.4 206.933333-108.8c4.266667-2.133333 8.533333-2.133333 12.8-2.133334z"
                                fill="" p-id="3922"></path>
                        </svg>

                    </span>
                    <span v-else title="取消收藏" @click="delquestionFavorite">
                        <svg t="1583303873370" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="3233" width="35" height="35">
                            <path
                                d="M542.7 798.8l192.2 122.1c13.2 8.4 30.7 4.5 39.1-8.8 4-6.3 5.4-14 3.7-21.3L718.1 622 918 439.7c11.5-10.6 12.3-28.5 1.8-40-4.8-5.2-11.3-8.5-18.4-9.1l-261.8-23.4-101-251.2c-5.8-14.5-22.3-21.6-36.9-15.7-7.2 2.9-12.9 8.6-15.7 15.7L384.9 367.1l-261.8 23.4c-15.6 1.4-27.1 15.2-25.7 30.8 0.6 7 3.9 13.6 9.1 18.3l200 182.4-59.6 268.9c-3.4 15.3 6.3 30.4 21.6 33.8 7.3 1.6 15 0.3 21.3-3.7l192.1-122.1c18.5-11.9 42.2-11.9 60.8-0.1z"
                                p-id="3234"></path>
                        </svg>
                    </span>
                </div>
                <div class="option-radio" v-if="question.length">
                    <el-radio v-model="question[currentTopic].checkedOption" @change="radioChange"
                        @click="check(index+1)" :label="index+1"
                        v-for="(item,index) in question[currentTopic].optionContent.split('#')" :key="index">
                        {{item}}</el-radio>
                </div>
            </div>

            <div class="switch-bt">
                <div>
                    <el-button type="primary" @click="next(-1)">上一题</el-button>
                    <el-button type="primary" @click="next(1)">下一题</el-button>
                </div>
                <el-button type="warning" @click="reset">重做</el-button>
                <div>
                    <el-button @click="showDetail=!showDetail">{{this.showDetail?'收起':'显示'}}详解</el-button>
                    <el-button @click="answerSheet=!answerSheet">{{this.answerSheet?'收起':'显示'}}答题卡</el-button>
                </div>
            </div>

            <div class="" style="margin-top:40px;" v-if="answerSheet">

                <br><br>
                <el-button :type="a[index]" @click="currentTopic=index" size="small"
                    v-for="(item, index) in question.length" :key="index">{{item}}</el-button>
            </div>

            <div class="question-box" v-if="showDetail">
                    <el-tag size="medium">试题详解</el-tag>
                <el-divider></el-divider>
                <div class="question-analysis">
                     <p style="font-size:14px;">这是每道题的解析。<br>解析内容有很多。</p>
                </div>
               
                <QuestionComment :questionId="question[this.currentTopic].id" :courseId="$route.params.courseId" />
            </div>

            <div class="msg-bar">
                <el-checkbox v-model="checked">答对自动下一题</el-checkbox>
                <span class="left">答对：{{rightCount}} 题</span>
                <span class="left">答错：{{wrongCount}}</span>

                <span
                    class="gray">正确率：{{Math.round(rightCount/((rightCount+wrongCount)==0?1:(rightCount+wrongCount))*100)}}%</span>
                <a class="right blue2" ref="loadYundata">云同步做题进度</a>

            </div>
        </div>

    </div>
</template>

<script>
    import QuestionComment from '@/views/QuestionComment.vue'
    import {
        findByCourseIdAndType
    } from '@/api/question'
    import {
        getUserInfo
    } from '@/util/dataStorage'
    import {
        getUserFavorite,
        addUserFavorite,
        delUserFavorite
    } from '@/api/user_favorite'
    export default {
        name: 'CourseTest',
        components: {
            QuestionComment
        },
        data() {
            return {
                a: [],
                rightCount: 0,
                wrongCount: 0,
                showDetail: false,
                answerSheet: false,
                checked: true,
                currentTopic: 0,
                question: [],
                questionFavorite: [],
                questionFavoriteId: ''
            }
        },
        computed: {
            questionFavoriteStatus() {
                let flag = false
                for (let i = 0; i < this.questionFavorite.length; i++) {
                    if (this.questionFavorite[i].questionId === this.question[this.currentTopic].id)
                        flag = true
                }
                return flag
            }
        },
        methods: {
            findByCourseIdAndType() {
                findByCourseIdAndType(this.$route.params.courseId, this.$route.params.testType).then(res => {
                    if (res.data.code == 20000) {
                        this.question = res.data.data
                        for (let i = 0; i < this.question.length; i++) {
                            this.$set(this.question[i], "checkedOption", "")
                        }
                    }
                })
            },
            radioChange(val) {
                this.question[this.currentTopic].checkedOption = val
                this.check()
                this.checkAccuracy()
                if (this.a[this.currentTopic] == 'success' && this.checked && (this.currentTopic < this.question
                        .length - 1)) {
                    this.next(1)
                }
            },
            next(val) {
                this.checkAccuracy()
                if ((this.currentTopic + val) == -1) {
                    this.$message({
                        message: '已经到第一题了哦',
                        center: true,
                        type: 'warning',
                        offset: 200
                    });
                } else if ((this.currentTopic + val) == this.question.length) {
                    this.$message({
                        message: '已经到最后一题了哦',
                        center: true,
                        type: 'warning',
                        offset: 200
                    });
                } else {
                    this.currentTopic = this.currentTopic + val
                }
            },
            reset() {
                this.currentTopic = 0;
                this.rightCount = 0;
                this.wrongCount = 0;
                for (let index = 0; index < this.question.length; index++) {
                    if (this.question[index].checkedOption != '') {
                        this.question[index].checkedOption = ''
                    }
                }
                this.a = []
                this.$message({
                    message: '习题状态已重置！',
                    center: true,
                    type: 'success',
                    offset: 300
                });
            },
            check() {
                if (this.question[this.currentTopic].checkedOption == this.question[this.currentTopic]
                    .answer) {
                    this.a[this.currentTopic] = 'success'
                } else {
                    this.a[this.currentTopic] = 'danger'
                }
            },
            checkAccuracy() {
                const countOccurences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
                this.rightCount = countOccurences(this.a, 'success')
                this.wrongCount = countOccurences(this.a, 'danger')
            },
            getUserFavorite() {
                let user = getUserInfo()
                getUserFavorite(user.id).then(res => {
                    if (res.data.code === 20000) {
                        let userFavorite = res.data.data
                        for (let i = 0; i < userFavorite.length; i++) {
                            if (userFavorite[i].type === '试题') {
                                this.questionFavorite.push(userFavorite[i])

                            }
                        }
                    }
                })
            },
            addquestionFavorite() {
                let user = getUserInfo()
                let userFavorite = {
                    userId: user.id,
                    questionId: this.question[this.currentTopic].id,
                    type: '试题'
                }
                addUserFavorite(userFavorite).then(res => {
                    if (res.data.code === 20000) {
                        this.questionFavorite.push({
                            id: res.data.data,
                            questionId: this.question[this.currentTopic].id
                        })
                        this.$notify({
                            title: '收藏成功',
                            message: '试题已收藏',
                            type: 'success',
                            duration: 1000,
                            offset: 50
                        })
                    }
                })
            },
            delquestionFavorite() {
                let id = ''
                this.questionFavorite.forEach((item, i) => {
                    if (item.questionId === this.question[this.currentTopic].id) {
                        id = item.id
                        this.questionFavorite.splice(i, 1)
                    }
                })
                delUserFavorite(id).then(res => {
                    if (res.data.code === 20000) {
                        this.courseFavoriteStatus = false
                        this.$notify({
                            title: '取消收藏成功',
                            message: '课程已取消收藏',
                            type: 'success',
                            duration: 1000,
                            offset: 50
                        })

                    }
                })
            }

        },
        created() {
            this.findByCourseIdAndType()
            this.getUserFavorite()
        }
    }
</script>

<style>
    .course-test {
        width: 1000px;
        margin: 0 auto;
    }

    .question-detail {
        text-align: left;
        width: 1000px;
        margin: 0 auto;
    }

    .question-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .question-content p {
        font-size: 20px;
        margin: 10px 0;
    }

    .question-content span {
        cursor: pointer;
    }

    .option-radio {
        width: 100px;
    }

    .el-radio {
        margin: 10px;
    }

    .el-radio .el-radio__label {
        font-size: 18px;
        color: black;
    }

    .el-radio .el-radio__inner {
        width: 18px;
        height: 18px;
    }

    .green .el-radio-button .el-radio-button__inner span {
        color: #FFF;
        background-color: green;
        border-color: green;
    }

    .switch-bt {
        margin-top: 100px;
        display: flex;
        justify-content: space-between;
    }

    .el-checkbox .el-checkbox__label {
        font-size: 16px;
    }

.question-box{
    width: 800px;
    margin: 40px 0;
}

.question-analysis{
        background: #fff;
        box-shadow: 0 4px 8px 0 rgba(7, 17, 27, .1);
        border-radius: 12px;
        padding: 10px;
        margin: 15px 5px;
}
    .msg-bar {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
</style>