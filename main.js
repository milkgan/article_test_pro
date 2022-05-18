import App from './App'
import module from './ajax/api/index.js';
import userMixin from './common/rulesMixin.js';

Vue.prototype.$http = module;
Vue.use(userMixin)

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif