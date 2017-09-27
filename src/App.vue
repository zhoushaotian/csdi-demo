<template>
    <div id="app">
        <demo-table :tableColumn="column" :initTableData="tableData"/>
    </div>
</template>

<script>
import demoTable from './components/Table'
import data from '../test'
export default {
    data () {
        return {
            column: data[0],
            tableData: data.slice(1)
        }
    },
    components: {
        demoTable
    }
}
</script>

<style>
</style>
