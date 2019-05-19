import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import NounSearch from '@/components/mainContent/NounSearch'
import ClassicalPhotos from '@/components/mainContent/ClassicalPhotos'

Vue.use(Router)

const routes = [{
    path: '/login',
    name: 'login',
    component: Login
}, {
    path: '/main',
    name: 'main',
    component: Main,
    redirect: '/nounSearch',
    children: [{
        path: 'nounSearch',
        name: 'nounSearch',
        component: NounSearch
    },{
        path: 'classicalPhotos',
        name: 'classicalPhotos',
        component: ClassicalPhotos
    }]
}, {
    path: '*',
    redirect: '/login'
}];

const router = new Router({
    routes: routes
});


export default router