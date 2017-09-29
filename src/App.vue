<template>
    <div id="app">
        <demo-table :tableColumn="column" :tableData="tableData" />
        <div class="pagination-wrapper">
            <pagination :currentPage="currentPage" :total="total" :pageSize="pageSize" :onPageChange="handlePageChange" />
        </div>
    </div>
</template>

<script>
import demoTable from './components/Table';
import pagination from './components/pagination';
export default {
    data () {
        return {
            column: [
                '变量0',
                '变量1',
                '变量2',
                '变量3',
                '变量4',
                '变量5',
                '变量6',
                '变量7',
                '变量8',
                '变量9',
                '变量10',
                '变量11',
                '变量12',
                '变量13'
            ],
            tableData: [],
            currentPage: 1,
            total: 1,
            pageSize: 10
        };
    },
    created () {
        this.$http.get('/api/tabledata', {
            params: {
                currentPage: 1,
                pageSize: this.pageSize
            }
        }).then((res) => {
            this.tableData = res.body.data;
            this.total = res.body.total;
        });
    },
    components: {
        demoTable,
        pagination
    },
    methods: {
        handlePageChange (page) {
            // 这里处理页码变化，当页码改变的时候请求下一页的数据
            this.currentPage = page;
            this.$http.get('/api/tabledata', {
                params: {
                    currentPage: this.currentPage,
                    pageSize: this.pageSize
                }
            }).then((res) => {
                this.tableData = res.body.data;
                this.total = res.body.total;
            });
        }
    }
};
</script>

<style>
#app{
    position: relative;
    width: 800px;
    height: 400px;
    margin: auto;
}
.pagination-wrapper{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}
.link{
    display: block;
}
</style>
