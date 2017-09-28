# table-demo

> 一个用vue实现的表格分页组件

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

```
##  项目结构  
```
├─build  //webpack以及devserver配置
├─config //配置文件
├─node_modules 
├─src   //项目源文件
│  ├─assets  //资源文件
│  └─components  //组件
├─static
└─test
```
## 分页组件API  
名称|描述|类型|默认值
-|-|-|-|
pageSize|每页大小|Number|1
total|总条目数|Number|1
currentPage|当前页码|Number|1
onPageChange|当页码改变时候的回调|Function|无  
具体使用请参照App.vue  
## 表格组件API  
名称|描述|类型|默认值
-|-|-|-|
tableColumn|表头名的数组|Array(String)|[]
tableData|表格数据数组|Array(Array)|[]
width|表格宽度|String|100%
与分页结合使用请参照App.vue  



