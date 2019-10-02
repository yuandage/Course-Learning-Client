<template>
    <div class="page">
        <div class="tableBox">
            <el-table :data="tableData">
                <el-table-column prop="date" label="日期" width="180"></el-table-column>
                <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
        </div>

        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize"
            layout="total, sizes,prev, pager, next, jumper" :total="totalCount">
        </el-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 默认显示第几页
            currentPage: 1,
            // 总条数，根据接口获取数据长度(注意：这里不能为空)
            totalCount: 12,
            // 个数选择器（可修改）
            pageSizes: [1, 2, 3, 4],
            // 默认每页显示的条数（可修改）
            pageSize: 2,
            // 总数据
            tableData: [],
            tableDataTemp: [{
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 01 弄'
            }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 02 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 03 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 04 弄'
            }, {
                date: '2016-05-05',
                name: '王小虎',
                address: '上海市普陀区金沙江路 05 弄'
            }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 06 弄'
            }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 07 弄'
            }, {
                date: '2016-05-08',
                name: '王小虎',
                address: '上海市普陀区金沙江路 08 弄'
            }, {
                date: '2016-05-09',
                name: '王小虎',
                address: '上海市普陀区金沙江路 09 弄'
            }, {
                date: '2016-05-10',
                name: '王小虎',
                address: '上海市普陀区金沙江路 10 弄'
            }, {
                date: '2016-05-11',
                name: '王小虎',
                address: '上海市普陀区金沙江路 11 弄'
            }, {
                date: '2016-05-12',
                name: '王小虎',
                address: '上海市普陀区金沙江路 12 弄'
            }, {
                date: '2016-05-13',
                name: '王小虎',
                address: '上海市普陀区金沙江路 13 弄'
            }]
        }
    },
    methods: {
        // 将页码，及每页显示的条数以参数传递提交给后台
        getData(currentPage, pageSize) {
            // pageSize每页显示的条数
            // currentPage显示第几页

            this.tableData = this.tableDataTemp.slice((currentPage - 1) * pageSize, currentPage * pageSize)

            // 将数据的长度赋值给totalCount
            this.totalCount = this.tableDataTemp.length
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
    created: function () {
        this.getData(this.currentPage, this.pageSize)
    }
}
</script>

<style>
.tableBox {
    width: 600px;
    margin: 0 auto;
}
</style>