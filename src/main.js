import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/reset.scss'
import './assets/iconfont'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

function fb1 (n) {
  if (n < 1) { return -1 }
  if (n == 1 || n == 2) { return 1 }
  return fb1(n - 1) + fb1(n - 2)
}
