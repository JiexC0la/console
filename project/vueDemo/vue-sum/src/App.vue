<template>
    <el-container>
        <el-header>
            <my-head-nav></my-head-nav>
        </el-header>
        <el-container class="middle-content">
            <router-view></router-view>
        </el-container>
        <el-footer>
            <my-foot></my-foot>
        </el-footer>
    </el-container>
</template>

<script>
import MyHeadNav from './components/HeadNav.vue'
import MyFoot from './components/Foot.vue'

export default {
    name: 'app',
    components: {
        MyHeadNav,
        MyFoot
    }
}
</script>

<style scoped>
    body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        overflow-x: hidden;
    }

    .el-header {
        top: 0;
        line-height: 60px;
        padding-left: 0px;
    }

    .el-footer {
        bottom: 0;
        line-height: 30px;
        background-color: aquamarine;
    }

    .el-header, .el-footer {
        color: #333;
        text-align: center;
        position: absolute;
        width: 100%;
        height: 60px;
    }
    
    .middle-content {
        top: 60px;
        bottom: 60px;
        position: absolute;
        width: 100%;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
        height: 100%;
    }
    
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
        height: 100%;
    }
</style>
