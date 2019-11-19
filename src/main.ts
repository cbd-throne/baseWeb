import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import fetchFn from './util/fetch';

Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(v => {
  v.prototype.$http = fetchFn;
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
