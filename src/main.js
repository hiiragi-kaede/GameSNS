import Vue from 'vue'
import App from './App.vue'
import "../src/css/style.css"

const routes=[
  {path:"/home"}
]

const router = new VueRouter({
  routes
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
