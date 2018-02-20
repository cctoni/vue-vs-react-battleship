import Vue from 'vue/dist/vue'
import App from './App.vue'
import 'ress/ress.css'
import './scss/main.scss'
import 'animate.css'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app')

