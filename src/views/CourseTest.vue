<template>
    <div>
        <h2>微机原理与接口技术课程的{{this.$route.params.testName}}</h2>
        <br>
        <br>
        <div class="question-detail">

            <h3>单选题，请选择你认为正确的答案！</h3>
            <div>
                <p>{{currentTopic+1}}/{{questionList.length}}、{{questionList[currentTopic].title}}</p>
                <div class="option-radio">
                    <el-radio v-model="questionList[currentTopic].checkedOption" @change="radioChange"
                        :label="item.optionName" v-for="(item,index) in questionList[currentTopic].option" :key="index">
                        {{item.optionName+'、'+item.optionText}}</el-radio>

                </div>
            </div>

            <div class="switch-bt">
                <div>
                    <el-button type="primary" @click="next(-1)">上一题</el-button>
                    <el-button type="primary" @click="next(1)">下一题</el-button>
                </div>
                <div>
                    <el-button>显示详情</el-button>
                    <el-button>显示答题卡</el-button>
                </div>
            </div>

            <div class="msg-bar">
                <el-checkbox v-model="checked">答对自动下一题</el-checkbox>
                <span class="left">答对：0 题</span>
                <span class="left">答错：0 题</span>

                <span class="gray">正确率：0%</span>
                <a class="right blue2" ref="loadYundata">云同步做题进度</a>

            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                option: '',
                checked: true,
                currentTopic: 0,
                resetFlag: 0,
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
                    optionCount: 4,
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
                }, ]
            }
        },
        methods: {
            radioChange(val) {
                console.log(val);
                if (val == this.questionList[this.currentTopic].answer) {
                    this.$message({
                        message: '回答正确',
                        center: true,
                        type: 'success',
                        offset: 400
                    });
                    if (this.checked && this.currentTopic < this.questionList.length - 1) {
                        this.questionList[this.currentTopic].checkedOption = val
                        this.next(1)
                    }
                } else {
                    this.$message({
                        message: '回答错误',
                        center: true,
                        type: 'error',
                        offset: 400
                    });
                }

            },
            next(val) {
                if (this.resetFlag == 3) {
                    this.reset()
                    this.resetFlag = 0
                }
                if ((this.currentTopic + val) == -1) {
                    this.resetFlag++;
                    this.$message({
                        message: '已经到第一题了哦',
                        center: true,
                        type: 'warning',
                        offset: 400
                    });

                } else if ((this.currentTopic + val) == this.questionList.length) {
                    this.$message({
                        message: '已经到最后一题了哦',
                        center: true,
                        type: 'warning',
                        offset: 400
                    });
                    this.resetFlag++;
                } else {
                    this.currentTopic = this.currentTopic + val

                }
            },
            reset() {
                for (let index = 0; index < this.questionList.length; index++) {
                    if (this.questionList[index].checkedOption != '') {
                        this.questionList[index].checkedOption = ''
                    }
                }
                this.$message({
                        message: '习题状态已重置！',
                        center: true,
                        type: 'success',
                        offset: 300
                    });
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
        /* display: block; */
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