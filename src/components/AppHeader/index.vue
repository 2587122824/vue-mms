<template>
    <div class="header">
        <a href="#/">
            <span class="company">管理系统</span>
        </a>
        <el-dropdown>
        <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item>双皮奶</el-dropdown-item>
            <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    a{
       
        text-decoration: none;
        color: green;
    }
    a:hover{
        text-decoration: none;
        color: red;
    }
    .company{
        font-size: 30px;
        position: absolute;
        left: 50px;
    }
     .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
    
    }
    .el-icon-arrow-down {
        font-size: 12px;
    }
    .el-dropdown{
        float: right;
        margin-right: 200px;
    }
</style>