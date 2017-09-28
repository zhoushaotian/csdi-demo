<template>
    <div class="pagination-wrapper">
        <span @click="handlePrePage" class="page-num"><</span>
        <div class="page-buttons" @click="handlePageChange">
            <span v-for="(button, index) in pageButton" :key="index" :class="{'page-num': true, 'select': button == currentPage}">
                {{button}}
            </span>
        </div>
        <span @click="handleNextPage"  class="page-num"> > </span>
        <span>前往</span><input class="page-input" type="text" @change="handleInputPage" :value="currentPage"/><span>页</span>
    </div>
</template>

<script>
export default {
    data () {
        return {
        };
    },
    methods: {
        handleInputPage (e) {
            let val = e.target.value;
            if (Number.isNaN(parseInt(val)) || parseInt(val) > this.pageNum) {
                e.target.value = this.currentPage;
                return;
            }
            this.onPageChange(parseInt(val));
        },
        handlePageChange (e) {
            if (Number.isNaN(parseInt(e.toElement.innerText))) return;
            this.onPageChange(parseInt(e.toElement.innerText));
        },
        handlePrePage () {
            if (this.currentPage === 1) return;
            this.onPageChange(this.currentPage - 1);
        },
        handleNextPage () {
            if (this.currentPage === this.pageNum) return;
            this.onPageChange(this.currentPage + 1);
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
        onPageChange: {
            type: Function
        },
        currentPage: {
            type: Number,
            default: 1
        }
    },
    computed: {
        pageNum () {
            return Math.ceil(this.total / this.pageSize);
        },
        pageButton () {
            let pageNum = Math.ceil(this.total / this.pageSize);
            let temArray = [];
            // 按钮的总个数不能大于7个
            if (pageNum <= 7) {
                for (let i = 1; i <= pageNum; i++) {
                    temArray.push(i);
                }
                return temArray;
            } else {
                if (this.currentPage <= 5) {
                    for (let i = 1; i <= 5; i++) {
                        temArray.push(i);
                    }
                    temArray.push('...');
                    temArray.push(pageNum);
                    return temArray;
                }
                if (pageNum - this.currentPage > 4) {
                    temArray.push(1);
                    temArray.push('...');
                    temArray.push(this.currentPage - 1);
                    temArray.push(this.currentPage);
                    temArray.push(this.currentPage + 1);
                    temArray.push('...');
                    temArray.push(pageNum);
                    return temArray;
                } else {
                    temArray.push(1);
                    temArray.push('...');
                    for (let i = pageNum - 4; i <= pageNum; i++) {
                        temArray.push(i);
                    }
                    return temArray;
                }
            }
        }
    }
};
</script>

<style scoped>
    .page-buttons{
        display: inline-block;
    }
    .page-input{
        width: 20px;
        text-align: center;
    }
    .page-buttons .select{
        color: white;
        background-color: #292929;
    }
    .page-num{
        display: inline-block;
        width: 25px;
        height: 25px;
        background-color: #eeeeee;
        margin-right: 5px;
        text-align: center;
        font-size: 12px;
        line-height: 25px;
    }
    .page-num:hover{
        cursor: pointer;
    }

</style>
