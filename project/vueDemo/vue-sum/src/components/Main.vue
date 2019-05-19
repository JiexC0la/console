<template>
    <el-container>
        <el-aside width="200px">
            <my-left-menu></my-left-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    import MyLeftMenu from './mainContent/LeftMenu'
    export default {
        components: {
            MyLeftMenu
        }
    }
</script>

<style>

</style>


