<template>
    <div id="table-wrapper">
        <table :style="{'width': width}">
            <thead>
                <tr>
                    <th class="table-header" v-for="(name, index) in tableColumn" :key="index">{{name}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in tableData" :key="index">
                    <td class="table-body" v-for="(cell, index) in row" :key="index">
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
        };
    },
    props: {
        tableColumn: {
            type: Array
        },
        initTableData: {
            type: Array
        },
        width: {
            type: String,
            default: '100%'
        }
    }
};
</script>

<style>
    #table-wrapper{
        background-color: #eeeeee;
    }
    .table-header{
        text-align: left;
    }
</style>