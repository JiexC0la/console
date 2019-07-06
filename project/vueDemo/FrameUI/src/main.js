import Vue from 'vue'
import App from './App.vue'
// import FeFrame from '../public/lib/FeFrame'
// window.FeFrame = new FeFrame()
// console.log(window.FeFrame)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


