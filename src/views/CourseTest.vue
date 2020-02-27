<template>
    <div class="course-test">
        <h2>微机原理与接口技术课程的{{this.$route.params.testType}}</h2>
        <br>
        <br>
        <div class="question-detail">
                <h3>{{this.$route.params.testType}}，请选择你认为正确的答案！</h3>
                <div>
                    <p v-if="question.length">{{currentTopic+1}}/{{question.length}}、{{this.question[currentTopic].content}}</p>
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
                <el-button :type="a[index]" @click="currentTopic=index" size="small" v-for="(item, index) in question.length"
                    :key="index">{{item}}</el-button>
            </div>

            <div class="" style="margin-top:40px;" v-if="showDetail">
                <p style="margin:0;">试题详解</p>
                <el-divider></el-divider>
                <p style="font-size:14px;">这是每道题的解析。<br>解析内容有很多。</p>
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
    import {
        findByCourseIdAndType
    } from '@/api/question'
    export default {
        name: 'CourseTest',
        data() {
            return {
                a: [],
                rightCount: 0,
                wrongCount: 0,
                showDetail: false,
                answerSheet: false,
                checked: true,
                currentTopic: 0,
                question: []
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
            }

        },
        created() {
            this.findByCourseIdAndType()
        }
    }
</script>

<style>
    .course-test {
        width: 1000px;
        margin: 0 auto;
    }

    p {
        font-size: 20px;
        margin: 10px 0;
    }

    .question-detail {
        text-align: left;
        width: 1000px;
        margin: 0 auto;
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

    .msg-bar {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
</style>