import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './route';
import VCharts from 'v-charts';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'v-charts/lib/style.css'
import http from "./api/http";
import VueCookies from 'vue-cookies'
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(VueCookies);
Vue.use(VCharts);
Vue.prototype.$http = http;
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
