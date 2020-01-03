<template>
    <div>
        <h2>微机原理与接口技术课程的{{this.$route.params.testName}}</h2>
        <br>
        <br>
        <div class="question-detail">
            <div v-if="this.$route.params.testName=='选择题.docx'">
                <h3>单选题，请选择你认为正确的答案！</h3>
                <div>
                    <p>{{currentTopic+1}}/{{questionList.length}}、{{questionList[currentTopic].title}}</p>
                    <div class="option-radio">
                        <el-radio v-model="questionList[currentTopic].checkedOption" @change="radioChange"
                            @click="check(item.optionName)" :label="item.optionName"
                            v-for="(item,index) in questionList[currentTopic].option" :key="index">
                            {{item.optionName+'、'+item.optionText}}</el-radio>

                    </div>
                </div>
            </div>

            <div v-else-if="this.$route.params.testName=='判断题.docx'">
                <h3>判断题，请选择你认为正确的答案！</h3>
                <div>
                    <p>{{currentTopic+1}}/{{TrueOrFalseList.length}}、{{TrueOrFalseList[currentTopic].title}}</p>
                    <div class="option-radio">
                        <el-radio v-model="TrueOrFalseList[currentTopic].checkedOption" @change="radioChange"
                            @click="check" :label="item.optionName"
                            v-for="(item,index) in TrueOrFalseList[currentTopic].option" :key="index">
                            {{item.optionName+'、'+item.optionText}}</el-radio>

                    </div>
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
                <!-- <el-radio-group v-model="currentTopic" size="medium">
                    <el-radio-button :class="class1" :label="index"
                        v-for="(item, index) in this.$route.params.testName=='选择题.docx'? this.questionList.length:this.TrueOrFalseList.length"
                        :key="index">{{item}}</el-radio-button>
                </el-radio-group> -->
                <br><br>
                <el-button :type="a[index]" @click="currentTopic=index" size="small" v-for="(item, index) in 10"
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
    export default {
        data() {
            return {
                a: [],
                rightCount: 0,
                wrongCount: 0,
                showDetail: false,
                answerSheet: false,
                checked: true,
                currentTopic: 0,
                questionList: [{
                    id: 1,
                    type: '选择题',
                    title: '8086CPU 芯片的外部引线中，数据线的条数为？',
                    option: [{
                        optionName: 'A',
                        optionText: '6条'
                    }, {
                        optionName: 'B',
                        optionText: '8条'
                    }, {
                        optionName: 'C',
                        optionText: '16条'
                    }, {
                        optionName: 'D',
                        optionText: '20条'
                    }, ],
                    answer: 'C',
                    checkedOption: ''
                }, {
                    id: 2,
                    type: '选择题',
                    title: '8088CPU 上 READY 信号为下面哪种信号有效？',
                    option: [{
                        optionName: 'A',
                        optionText: '上升沿'
                    }, {
                        optionName: 'B',
                        optionText: '下降沿'
                    }, {
                        optionName: 'C',
                        optionText: '高电平'
                    }, {
                        optionName: 'D',
                        optionText: '低电平'
                    }, ],
                    answer: 'C',
                    checkedOption: ''
                }, {
                    id: 3,
                    type: '选择题',
                    title: '8088CPU 中的 CS 寄存器是一个多少位的寄存器？',
                    option: [{
                        optionName: 'A',
                        optionText: '8位'
                    }, {
                        optionName: 'B',
                        optionText: '16位'
                    }, {
                        optionName: 'C',
                        optionText: '24位'
                    }, {
                        optionName: 'D',
                        optionText: '32位'
                    }, ],
                    answer: 'B',
                    checkedOption: ''
                }, {
                    id: 4,
                    type: '选择题',
                    title: '属于只读存贮器的芯片是？',
                    option: [{
                        optionName: 'A',
                        optionText: 'SRAM'
                    }, {
                        optionName: 'B',
                        optionText: 'DRAM'
                    }, {
                        optionName: 'C',
                        optionText: 'EPROM'
                    }, {
                        optionName: 'D',
                        optionText: 'SDRAM '
                    }, ],
                    answer: 'C',
                    checkedOption: ''
                }, {
                    id: 5,
                    type: '选择题',
                    title: '内存从 A4000H 到 CBFFFH，共有？',
                    option: [{
                        optionName: 'A',
                        optionText: '124K'
                    }, {
                        optionName: 'B',
                        optionText: '160K'
                    }, {
                        optionName: 'C',
                        optionText: '180K'
                    }, {
                        optionName: 'D',
                        optionText: '224K'
                    }, ],
                    answer: 'B',
                    checkedOption: ''
                }, {
                    id: 6,
                    type: '选择题',
                    title: '擦除 EPROM 是用？',
                    option: [{
                        optionName: 'A',
                        optionText: '＋5V 电压'
                    }, {
                        optionName: 'B',
                        optionText: '＋15V 电压'
                    }, {
                        optionName: 'C',
                        optionText: '＋21V 电压'
                    }, {
                        optionName: 'D',
                        optionText: '紫外光照射'
                    }, ],
                    answer: 'D',
                    checkedOption: ''
                }, {
                    id: 7,
                    type: '选择题',
                    title: '采用查询方式来实现输入输出是因为它？',
                    option: [{
                        optionName: 'A',
                        optionText: '速度最快'
                    }, {
                        optionName: 'B',
                        optionText: 'CPU 可以不介入'
                    }, {
                        optionName: 'C',
                        optionText: '实现起来比较容易'
                    }, {
                        optionName: 'D',
                        optionText: '在对多个事件查询工作时，能对突发事件做出实时响应'
                    }, ],
                    answer: 'C',
                    checkedOption: ''
                }, {
                    id: 8,
                    type: '选择题',
                    title: '实 现 DMA传 送 ， 需 要？',
                    option: [{
                        optionName: 'A',
                        optionText: 'CPU 通过执行指令来完成 '
                    }, {
                        optionName: 'B',
                        optionText: 'CPU 利用中断方式来完成'
                    }, {
                        optionName: 'C',
                        optionText: 'CPU 利用查询方式来完成'
                    }, {
                        optionName: 'D',
                        optionText: '不需要 CPU 参与即可完成'
                    }, ],
                    answer: 'D',
                    checkedOption: ''
                }, {
                    id: 9,
                    type: '选择题',
                    title: '堆栈指针的作用是用来指示？',
                    option: [{
                        optionName: 'A',
                        optionText: '栈底地址'
                    }, {
                        optionName: 'B',
                        optionText: '栈顶地址'
                    }, {
                        optionName: 'C',
                        optionText: '下一条要执行指令的地址'
                    }, {
                        optionName: 'D',
                        optionText: '上一条要执行指令的地址'
                    }, ],
                    answer: 'B',
                    checkedOption: ''
                }, {
                    id: 10,
                    type: '选择题',
                    title: 'CPU 对存储器或 I/O 端口完成一次读/写操作所需的时间为一个？',
                    option: [{
                        optionName: 'A',
                        optionText: '指令周期'
                    }, {
                        optionName: 'B',
                        optionText: '总线周期'
                    }, {
                        optionName: 'C',
                        optionText: '时钟周期'
                    }, {
                        optionName: 'D',
                        optionText: '机器周期'
                    }, ],
                    answer: 'B',
                    checkedOption: ''
                }, ],
                TrueOrFalseList: [{
                    id: 1,
                    type: '判断题',
                    title: '软件与硬件的等价性原理说明软硬件在功能、性能和成本等方面是等价的。',
                    option: [{
                        optionName: 'A',
                        optionText: '正确'
                    }, {
                        optionName: 'B',
                        optionText: '错误'
                    }],
                    answer: 'B',
                    checkedOption: ''
                }, {
                    id: 2,
                    type: '判断题',
                    title: 'IA-64结构是IA-32结构的64位扩展，也就是Intel 64结构。',
                    option: [{
                        optionName: 'A',
                        optionText: '正确'
                    }, {
                        optionName: 'B',
                        optionText: '错误'
                    }],
                    answer: 'B',
                    checkedOption: ''
                }, {
                    id: 3,
                    type: '判断题',
                    title: '8086的数据总线为16位，也就是说8086的数据总线的个数或者说条数、位数是16。',
                    option: [{
                        optionName: 'A',
                        optionText: '正确'
                    }, {
                        optionName: 'B',
                        optionText: '错误'
                    }],
                    answer: 'A',
                    checkedOption: ''
                }, {
                    id: 4,
                    type: '判断题',
                    title: '微机主存只要使用RAM芯片就可以了。',
                    option: [{
                        optionName: 'A',
                        optionText: '正确'
                    }, {
                        optionName: 'B',
                        optionText: '错误'
                    }],
                    answer: 'B',
                    checkedOption: ''
                }, {
                    id: 5,
                    type: '判断题',
                    title: '处理器并不直接连接外设，而是通过I/O接口电路与外设连接。',
                    option: [{
                        optionName: 'A',
                        optionText: '正确'
                    }, {
                        optionName: 'B',
                        optionText: '错误'
                    }],
                    answer: 'A',
                    checkedOption: ''
                }, {
                    id: 6,
                    type: '判断题',
                    title: '处理器是微机的控制中心，内部只包括5大功能部件的控制器。',
                    option: [{
                        optionName: 'A',
                        optionText: '正确'
                    }, {
                        optionName: 'B',
                        optionText: '错误'
                    }],
                    answer: 'B',
                    checkedOption: ''
                }, {
                    id: 7,
                    type: '判断题',
                    title: 'Windows的模拟DOS环境与控制台环境是一样的。',
                    option: [{
                        optionName: 'A',
                        optionText: '正确'
                    }, {
                        optionName: 'B',
                        optionText: '错误'
                    }],
                    answer: 'B',
                    checkedOption: ''
                }, {
                    id: 8,
                    type: '判断题',
                    title: '16位IBM PC/AT采用ISA系统总线。',
                    option: [{
                        optionName: 'A',
                        optionText: '正确'
                    }, {
                        optionName: 'B',
                        optionText: '错误'
                    }],
                    answer: 'A',
                    checkedOption: ''
                }, {
                    id: 9,
                    type: '判断题',
                    title: 'IA-32处理器吸取了RISC技术特长。RISC是指复杂指令集计算机。',
                    option: [{
                        optionName: 'A',
                        optionText: '正确'
                    }, {
                        optionName: 'B',
                        optionText: '错误'
                    }],
                    answer: 'B',
                    checkedOption: ''
                }, {
                    id: 10,
                    type: '判断题',
                    title: '处理器进行读操作，就是把数据从处理器内部读出传送给主存或外设。',
                    option: [{
                        optionName: 'A',
                        optionText: '正确'
                    }, {
                        optionName: 'B',
                        optionText: '错误'
                    }],
                    answer: 'B',
                    checkedOption: ''
                }]
            }
        },
        methods: {
            radioChange(val) {
                if (this.$route.params.testName == '选择题.docx') {
                    this.questionList[this.currentTopic].checkedOption = val
                    this.check()
                    this.checkAccuracy()
                    if (this.a[this.currentTopic]=='success'&&this.checked && (this.currentTopic < this.questionList.length - 1)) {
                        this.next(1)
                    }
                } else if (this.$route.params.testName == '判断题.docx') {
                    this.TrueOrFalseList[this.currentTopic].checkedOption = val
                    this.check()
                    this.checkAccuracy()
                    if (this.a[this.currentTopic]=='success'&&this.checked && (this.currentTopic < this.TrueOrFalseList.length - 1)) {
                        this.next(1)
                    }
                }
            },
            next(val) {
                this.checkAccuracy()
                if (this.$route.params.testName == '选择题.docx') {
                    if ((this.currentTopic + val) == -1) {
                        this.$message({
                            message: '已经到第一题了哦',
                            center: true,
                            type: 'warning',
                            offset: 200
                        });
                    } else if ((this.currentTopic + val) == this.questionList.length) {
                        this.$message({
                            message: '已经到最后一题了哦',
                            center: true,
                            type: 'warning',
                            offset: 200
                        });
                    } else {
                        this.currentTopic = this.currentTopic + val
                    }
                } else if (this.$route.params.testName == '判断题.docx') {
                    if ((this.currentTopic + val) == -1) {
                        this.$message({
                            message: '已经到第一题了哦',
                            center: true,
                            type: 'warning',
                            offset: 200
                        });
                    } else if ((this.currentTopic + val) == this.TrueOrFalseList.length) {
                        this.$message({
                            message: '已经到最后一题了哦',
                            center: true,
                            type: 'warning',
                            offset: 200
                        });
                    } else {
                        this.currentTopic = this.currentTopic + val
                    }
                }

            },
            reset() {
                this.currentTopic = 0;
                this.rightCount = 0;
                this.wrongCount = 0;
                if (this.$route.params.testName == '选择题.docx') {
                    for (let index = 0; index < this.questionList.length; index++) {
                        if (this.questionList[index].checkedOption != '') {
                            this.questionList[index].checkedOption = ''
                        }
                    }
                } else if (this.$route.params.testName == '判断题.docx') {
                    for (let index = 0; index < this.TrueOrFalseList.length; index++) {
                        if (this.TrueOrFalseList[index].checkedOption != '') {
                            this.TrueOrFalseList[index].checkedOption = ''
                        }
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
                if (this.$route.params.testName == '选择题.docx') {
                    if (this.questionList[this.currentTopic].checkedOption == this.questionList[this.currentTopic]
                        .answer) {
                        this.a[this.currentTopic] = 'success'
                    } else {
                        this.a[this.currentTopic] = 'danger'
                    }
                } else if (this.$route.params.testName == '判断题.docx') {
                    if (this.TrueOrFalseList[this.currentTopic].checkedOption == this.TrueOrFalseList[this.currentTopic]
                        .answer) {
                        this.a[this.currentTopic] = 'success'
                    } else {
                        this.a[this.currentTopic] = 'danger'
                    }
                }

 
            },
            checkAccuracy() {
                const countOccurences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
                this.rightCount = countOccurences(this.a, 'success')
                this.wrongCount = countOccurences(this.a, 'danger')
            }

        }

    }
</script>

<style>
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