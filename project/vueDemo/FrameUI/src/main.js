import Vue from 'vue'
import App from './App.vue'
import i18n from './lang'
import FeFrame from './components/index'

Vue.config.productionTip = false
console.log(i18n)
// 全局注册FrameUI
Vue.use(FeFrame)

new Vue({
    i18n,
    render: h => h(App),
}).$mount('#app')


