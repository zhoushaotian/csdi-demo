<template>
    <div id="app">
        <demo-table :tableColumn="column" :initTableData="tableData"/>
        <pagination :total="50" :pageSize="3"/>
    </div>
</template>

<script>
import demoTable from './components/Table'
import pagination from './components/pagination'
import data from '../test'
export default {
    data () {
        return {
            column: data[0],
            tableData: data.slice(1)
        }
    },
    components: {
        demoTable,
        pagination
    }
}
</script>

<style>
</style>
