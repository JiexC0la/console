<template>
    <section class="real-app">
        <input
            type="text"
            class="add-input"
            autofocus="autofocus"
            placeholder="接下来要做什么？"
            @keyup.enter="addTodo"
        >
        <my-item
            v-for="todo in filteredTodos"
            :key="todo.id"
            :todo="todo"
            @del="deleteTodo"
        ></my-item>
        <my-tabs
            :filter="filter"
            :todos="todos"
            @toggle="toggleFilter"
            @clearAllCompleted="clearAllCompleted"
        ></my-tabs>
        <router-view></router-view>
    </section>
</template>

<script>
import myItem from './item.vue'
import myTabs from './tabs.vue'

let id = 0;

export default {
    data() {
        return {
            todos: [],
            filter: 'all'
        }
    },
    components: {
        myItem,
        myTabs
    },
    computed: {
        filteredTodos() {
            if (this.filter === 'all') {
                return this.todos
            }
            const completed = this.filter === 'completed'
            return this.todos.filter(todo => completed === todo.completed)
        }
    },
    methods: {
        addTodo(e) {
            this.todos.unshift({
                id: id++,
                content: e.target.value.trim(),
                completed: false
            })
            e.target.value = ''
        },
        deleteTodo(id) {
            this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
        },
        toggleFilter(state) {
            this.filter = state
        },
        clearAllCompleted() {
            this.todos = this.todos.filter(todo => !todo.completed)
        }
    }
}
</script>

<style lang="stylus" scoped>
.real-app {
    width 600px
    margin 0 auto
    box-shadow 0 0 5px #666
}
.add-input {
    border none
    width 100%
    position relative
    padding 16px 16px 16px 60px
    font-size 24px
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03)
    outline none
    box-sizing border-box

}
</style>
