<template>
    <div id="app">
        <div id="cover"></div>
        <my-header></my-header>
        <p>{{fullName}} {{count}}</p>
        <router-link to="/app">app</router-link>
        <router-link to="/login">login</router-link>
        <router-view />
        <my-footer/>
    </div>
</template>

<script>
    import myHeader from './layout/header.vue'
    import myFooter from './layout/footer.jsx'

    import {
        mapGetters,
        mapState,
        mapActions,
        mapMutations
    } from 'vuex'

    // import myTodo from './views/todo/todo.vue'
    export default {
        components: {
            myHeader,
            myFooter,
            // myTodo
        },
        mounted () {
            console.log(this.$store)
            let i = 1
            setInterval(() => {
                this.updateCount(i++)
            }, 1000)
            this.updateCountSync1({
                num: 10,
                time: 2000
            })
        },
        computed: {
            // count () {
            //     return this.$store.state.count
            // },
            // fullName () {
            //     return this.$store.getters.fullName
            // }
            ...mapState(['count']),
            ...mapGetters(['fullName'])
        },
        methods: {
            ...mapMutations(['updateCount']),
            ...mapActions({
                updateCountSync1: 'updateCountSync'
            })
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

