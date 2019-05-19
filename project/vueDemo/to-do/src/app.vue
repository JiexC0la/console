<template>
    <div id="app">
        <div id="cover"></div>
        <my-header></my-header>
        <my-todo></my-todo>
        <my-footer></my-footer>
    </div>
</template>

<script>
import myHeader from './components/header.vue'
import myFooter from './components/footer.jsx'
import myTodo from './components/todo.vue'

export default {
    components: {
        myHeader,
        myFooter,
        myTodo
    }
}
</script>

<style lang="stylus" scoped>
    #app {
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }
    #cover {
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        background-color #999
        opacity .5
        z-index -1
    }
</style>

