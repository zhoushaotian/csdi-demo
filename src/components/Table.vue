<template>
    <div id="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th v-for="(name, index) in tableColumn" :key="index">{{name}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in tableData" :key="index">
                    <td v-for="(cell, index) in row" :key="index">
                        <span>{{cell}}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            tableData: this.initTableData
        }
    },
    props: {
        tableColumn: {
            type: Array
        },
        initTableData: {
            type: Array
        }
    }
}
</script>

<style>

</style>