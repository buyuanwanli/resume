import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

import './assets/reset.scss'
import './assets/iconfont'


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');


function fb1(n) {
  if (n < 1)
    return -1;
  if (n == 1 || n == 2)
    return 1;
  return fb1(n - 1) + fb1(n - 2);
}
