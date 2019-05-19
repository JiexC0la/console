import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
// 完整引入elementUi，样式文件需单独引入
import 'element-ui/lib/theme-chalk/index.css'
import i18n from './lang'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})


new Vue({
  i18n,
  router,
  /*
  * Vue 在调用 render 方法时，会传入一个 createElement 函数作为参数，
  * 也就是这里的 h 的实参是 createElement 函数，然后 createElement 会以 APP 为参数进行调用
  * vue 2.0写法
  */
  render: h => h(App),
}).$mount('#app')


