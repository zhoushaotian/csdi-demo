<template>
    <div class="pagination-wrapper">
        <span @click="handlePrePage"><</span>
        <div class="small-page" v-if="pageNum <= 10" @click="handlePageChange">
            <span v-for="num in pageNum" :key="num" :class="{'select': true}">
                {{num}}
            </span>
        </div>
        <div class="big-page" v-else @click="handlePageChange">
            <span v-for="num in 3" :key="num" :class="{'select': num==currentPage}">
                {{num}}
            </span>
            <span>
                ...
            </span>
            <span>
                {{pageNum - 2}}
            </span>
            <span>
                {{pageNum - 1}}
            </span>
            <span>
                {{pageNum}}
            </span>
        </div>
        <span @click="handleNextPage"> > </span>
        <input class="page-input" type="text" v-model="currentPage"/>
    </div>
</template>

<script>
export default {
    data () {
        return {
            currentPage: 1
        }
    },
    props: {
        pageSize: {
            type: Number,
            default: 1
        },
        total: {
            type: Number,
            default: 1
        },
        handlePageChange: {
            type: Function
        }
    },
    computed: {
        pageNum () {
            return Math.ceil(this.total / this.pageSize)
        }
    }
}
</script>

<style scoped>
    .small-page{
        display: inline-block;
    }
    .big-page{
        display: inline-block
    }
    .page-input{
        width: 20px;
    }
    .select{
        color: red
    }

</style>
