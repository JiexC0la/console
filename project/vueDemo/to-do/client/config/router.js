import Router from 'vue-router'
import routes from './routes'

export default () => {
    return new Router({
        routes,
        // 去除url中的#号
        mode: 'history',
        // 设置基础路径
        // base: '/base/',
        // 设置滚动行为
        scrollBehavior (to , from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                return {
                    x: 0,
                    y: 0
                }
            }
        },
        // parseQuery (query) {

        // },
        // stringifyQuery (obj) {

        // }
        fallback: true
    })
}