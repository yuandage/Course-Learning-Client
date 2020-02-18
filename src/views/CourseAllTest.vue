<template>
    <div class="course-all-test">

        <div class="test-box">
            <div class="test-info" v-for="item in course.slice(0,1)" :key="item.id">
                <h3>{{item.name}}</h3>
                <ul>
                    <li>
                        <el-button type="primary">单选题</el-button>
                    </li>
                    <li>
                             <el-button type="primary">判断题</el-button>
                    </li>
                </ul>
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
        getAllCourse
    } from '@/util/api'
    export default {
        name: 'CourseAllTest',
        data() {
            return {
                course: [], // 默认显示第几页
                currentPage: 1,
                // 总条数，根据接口获取数据长度(注意：这里不能为空)
                totalCount: 0,
                // 默认每页显示的条数（可修改）
                pageSize: 5
            }
        },
        methods: {
            getAllCourse() {
                getAllCourse(this.currentPage, this.pageSize).then((res) => { //获取全部的课程信息
                    if (res.data.code === 20000) {
                        this.course = res.data.data.rows
                        this.totalCount = res.data.data.total
                    }
                })
            },
            // 显示第几页
            handleCurrentChange(val) {
                // 改变默认的页数
                this.currentPage = val
                this.getAllCourse()
            }

        },
        created() {
            this.getAllCourse()
        }
    }
</script>

<style>
    .course-all-test {
        width: 1200px;
        margin: 0 auto;
    }

    .test-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

.test-info{
    width: 100px;
    height: 100px;
}

.test-info ul{
  display: flex;
    justify-content: space-between;
}

    .pagination {
        margin-top: 40px;
        text-align: center;
    }
</style>