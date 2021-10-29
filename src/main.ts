import Vue from 'vue';
import App from './App.vue';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

import router from './router';
import { apolloProvider } from './apollo-client';

import './styles.scss';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
