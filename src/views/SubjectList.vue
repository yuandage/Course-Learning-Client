<template>
    <div id="subjectList">
        <div class="wrap ">
            <div class="top">
              
                <div class="course-content">
                    <div class="course-nav-box">
                        <div class="course-nav-row clearfix">
                            <span class="hd l">方向：</span>
                            <div class="bd">
                                <ul class="">
                                    <li class="course-nav-item" @click="changeStyle(-1)">
                                            <a href="#" :class="{courseNavItem:itemOn==-1}">全部</a>
                                    </li>
                                    <li class="course-nav-item" v-for="(item,index) in subject" :key="index" @click="changeStyle(index)" >
                                        <a href="#" :class="{courseNavItem:itemOn==index}">{{item.name}}</a>
                                    </li>
                        
                                </ul>
                            </div>
                        </div>
                        <div class="course-nav-row course-nav-skills clearfix">
                            <div class="js-course-skills course-skills-box">
                                <span class="hd l">分类：</span>
                                <div class="bd">
                                    <ul class="">
                                        <li class="course-nav-item on" @click="changesubStyle(-1)">
                                            <a href="#" :class="{courseNavItem:subItemOn==-1}">全部</a>
                                        </li>
                                        
                                        <li class="course-nav-item" v-for="(item,index) in itemOn==-1?allChildSubject:subject[subjectIndex].subjectList" :key="index" @click="changesubStyle(index)">
                                            <a href="#" :class="{courseNavItem:subItemOn==index}">{{item.name}}</a>
                                        </li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="course-nav-row clearfix border_bottom_none">
                            <a href="javascript:;" class="course-recommend"
                                onclick="_hmt.push(['_trackEvent', 'course', 'click', 'inlet'])"></a>
                            <span class="hd l">难度：</span>
                            <div class="bd">
                                <ul class="">
                                    <li class="course-nav-item on">
                                        <a href="/course/list?">全部</a>
                                    </li>
                                    <li class="course-nav-item ">
                                        <a href="/course/list?is_easy=1">入门</a>
                                    </li>
                                    <li class="course-nav-item ">
                                        <a href="/course/list?is_easy=2">初级</a>
                                    </li>
                                    <li class="course-nav-item ">
                                        <a href="/course/list?is_easy=3">中级</a>
                                    </li>
                                    <li class="course-nav-item ">
                                        <a href="/course/list?is_easy=4">高级</a>
                                    </li>

                                </ul>
                            </div>
                        </div> -->
                    </div>

                </div>
            </div>
        </div>


    <!-- 课程展示信息 -->
    <div class="course-container">
        <div class="course-card-container">

            <div class="course-card-content" v-for="item in course" :key="item.id">
                <h3 class="course-card-name">{{item.name}}</h3>
                <p class="course-card-desc">{{item.summary}}</p>
            </div>


        </div>
    </div>

    <!-- 分页组件 -->
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize"
            layout="total, sizes,prev, pager, next, jumper" :total="totalCount">
        </el-pagination>




    </div>
</template>

<script>
import {getAllCourse,getCourse,getSubjectCourse} from '@/util/api' 

export default {
    data() {
        return {
            itemOn: -1,
            subItemOn: -1,
            subjectIndex: 0,
            subject: this.$store.state.subject,
            allChildSubject: [],
            course: [],
             // 默认显示第几页
            currentPage: 1,
            // 总条数，根据接口获取数据长度(注意：这里不能为空)
            totalCount: 0,
            // 个数选择器（可修改）
            pageSizes: [1, 2, 3, 4],
            // 默认每页显示的条数（可修改）
            pageSize: 2
        }
    },
    methods: {
        changeStyle(index) {
            this.itemOn = index
            this.subItemOn = -1
            if (index >= 0) {
                this.subjectIndex = index
                getSubjectCourse(index + 1,1,this.pageSize).then((res) => { //获取某个分类下的全部课程信息
                    if (res.data.code === 20000) {
                        this.course = res.data.data.rows
                        this.totalCount = res.data.data.total

                    }
                })
            } else {
                getAllCourse(1,this.pageSize).then((res) => { //获取全部的课程信息
                    if (res.data.code === 20000) {
                        this.course = res.data.data.rows
                        this.totalCount = res.data.data.total

                    }
                })
            }
        },
        changesubStyle(index) {
            this.subItemOn = index
            if (this.itemOn == -1) {
                if (index == -1) {
                    getAllCourse(1,this.pageSize).then((res) => { //获取全部的课程信息
                        if (res.data.code === 20000) {
                            this.course = res.data.data.rows
                            this.totalCount = res.data.data.total

                        }
                    })
                } else {
                    let subId = this.allChildSubject[index].id
                    getCourse(subId,1,this.pageSize).then((res) => {
                        if (res.data.code === 20000) {
                            this.course = res.data.data.rows
                            this.totalCount = res.data.data.total

                        }
                    })
                }
            } else {
                if (index == -1) {
                    getSubjectCourse(this.itemOn + 1,1,this.pageSize).then((res) => { //获取某个分类下的全部课程信息
                        if (res.data.code === 20000) {
                            this.course = res.data.data.rows
                            this.totalCount = res.data.data.total

                        }
                    })
                } else {
                    let parentId = this.subject[this.itemOn].subjectList[index].id
                    console.log(parentId);
                    getCourse(parentId,1,this.pageSize).then((res) => {
                        if (res.data.code === 20000) {
                            this.course = res.data.data.rows
                            this.totalCount = res.data.data.total

                        }
                    })
                }
            }

        },
        getAllChildSubject() {
            this.$store.commit('setAllChildSubject')
            this.allChildSubject = this.$store.state.allChildSubject
        },
        getCourse(id, subId) {
            if (subId == -1) {
                getSubjectCourse(id + 1,1,this.pageSize).then((res) => { //获取某个分类下的全部课程信息
                    if (res.data.code === 20000) {
                        this.course = res.data.data.rows
                        this.totalCount = res.data.data.total

                    }
                })
            } else {
                let parentId = this.subject[id].subjectList[subId].id
                getCourse(parentId,1,this.pageSize).then((res) => {
                    if (res.data.code === 20000) {
                        this.course = res.data.data.rows
                        this.totalCount = res.data.data.total

                    }
                })
            }
            this.totalCount = this.course.length
        },
        // 将页码，及每页显示的条数以参数传递提交给后台
        getData(currentPage, pageSize) {
            // pageSize每页显示的条数
            // currentPage显示第几页
            if (this.itemOn == -1) {
                if (this.subItemOn == -1) {
                    getAllCourse(currentPage, pageSize).then((res) => { //获取全部的课程信息
                        if (res.data.code === 20000) {
                            this.course = res.data.data.rows
                            this.totalCount = res.data.data.total
                        }
                    })
                } else {
                    let subId = this.allChildSubject[this.subItemOn].id
                    getCourse(subId,currentPage, pageSize).then((res) => {
                        if (res.data.code === 20000) {
                            this.course = res.data.data.rows
                            this.totalCount = res.data.data.total
                            
                        }
                    })
                }
            } else {
                if (this.subItemOn == -1) {
                    getSubjectCourse(this.itemOn + 1,currentPage, pageSize).then((res) => { //获取某个分类下的全部课程信息
                        if (res.data.code === 20000) {
                            this.course = res.data.data.rows
                            this.totalCount = res.data.data.total
                        }
                    })
                } else {
                    let parentId = this.subject[this.itemOn].subjectList[this.subItemOn].id
                    getCourse(parentId,currentPage, pageSize).then((res) => {
                        if (res.data.code === 20000) {
                            this.course = res.data.data.rows
                            this.totalCount = res.data.data.total
                        }
                    })
                }
            }

            // 将数据的长度赋值给totalCount
         
        },
        // 分页
        // 每页显示的条数
        handleSizeChange(val) {
            // 改变每页显示的条数 
            this.pageSize = val
            // 点击每页显示的条数时，显示第一页
            this.getData(1, val)
            // 注意：在改变每页显示的条数时，要将页码显示到第一页
            this.currentPage = 1
        },
        // 显示第几页
        handleCurrentChange(val) {
            // 改变默认的页数
            this.currentPage = val
            // 切换页码时，要获取每页显示的条数
            this.getData(val, this.pageSize)
        }

    },
    created() {
        this.getAllChildSubject()
        let subjectId = parseInt(this.$route.path.split("/")[2])
        let childSubjectId = parseInt(this.$route.path.split("/")[3])

        if (subjectId < -1 || subjectId > this.subject.length)
            subjectId = -1
        if (childSubjectId < -1)
            subjectId = -1

        this.itemOn = subjectId
        this.subItemOn = childSubjectId

        this.subjectIndex = subjectId
        if (subjectId == -1 && childSubjectId == -1) {
            getAllCourse(1,this.pageSize).then((res) => { //获取全部的课程信息
                if (res.data.code === 20000) {
                    this.course = res.data.data.rows
                    this.totalCount = res.data.data.total
                    
                }
            })
        } else if (subjectId != -1 && childSubjectId == -1) {
            getSubjectCourse(subjectId + 1,1,this.pageSize).then((res) => { //获取某个分类下的全部课程信息
                if (res.data.code === 20000) {
                    this.course = res.data.data.rows
                    this.totalCount = res.data.data.total

                }
            })
        } else
            this.getCourse(subjectId, childSubjectId) //获取二级分类下的全部课程信息
    },

}
</script>

<style>
    
.wrap {
    text-align: left;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(28,31,33,.1);
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

.course-nav-item:hover a{
    color: #f20d0d;
}
.courseNavItem{
    background: rgba(242,13,13,.1);
    border-radius: 6px;
    font-weight: 700;
    color: #f20d0d;
}

.course-nav-item a {
    display: block;
    line-height: 14px;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 14px;
}

.course-nav-skills {
    max-height: 132px;
}

.course-skills-box {
    position: relative;
    z-index: 1;
}


.course-container{
    margin: 0 auto;
   padding: 20px 60px;;
}

.course-card-container{
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}

.course-card-content{
    width: 216px;
    height: 177px;
    text-align: left;
    margin: 18px;
}

.course-card-content .course-card-name{
    font-size: 16px;
    line-height: 24px;

}

.course-card-content .course-card-desc{
    font-size: 12px;
    line-height: 18px;
}





.pagination{
    margin-top: 40px;
    text-align: center;
}


/* .border_bottom_none {
    border-bottom: none!important;
}

.course-recommend {
    position: absolute;
    width: 223px;
    height: 32px;
    top: 16px;
    right: 0;
    background-image: url(/static/img/course/course-recommend2.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
} */

</style>