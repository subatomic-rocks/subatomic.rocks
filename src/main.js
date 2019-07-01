import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Auto registers all components inside the components folder
const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
