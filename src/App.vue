<template>
    <div id="app">
        <demo-table :tableColumn="column" :initTableData="tableData" />
        <pagination :currentPage="currentPage" :total="50" :pageSize="3" :onPageChange="handlePageChange"/>
    </div>
</template>

<script>
import demoTable from './components/Table';
import pagination from './components/pagination';
import data from '../test';
export default {
    data () {
        return {
            column: data[0],
            tableData: data.slice(1),
            currentPage: 1
        };
    },
    components: {
        demoTable,
        pagination
    },
    methods: {
        handlePageChange (page) {
            // 这里处理页码变化，当页码改变的时候请求下一页的数据
            this.currentPage = page;
        }
    }
};
</script>

<style>
</style>
