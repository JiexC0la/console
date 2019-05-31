// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

export default [
    {
        path: '/',
        redirect: '/app'
    },
    {
        path: '/app',
        // component: () => import('../views/todo/todo.vue'),
        component: resolve => require(['../views/todo/todo.vue'], resolve),
        name: 'app',
        meta: {
            title: 'this is app'
        },
        // children: [
        //     {
        //         path: 'test',
        //         component: Login
        //     }
        // ]
    },
    {
        path: '/login',
        component: () => import('../views/login/login.vue')
    }
]