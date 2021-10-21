import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';
import { ApolloLink, from } from 'apollo-link';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

import './styles.scss';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers }: Request) => ({
    headers: {
      authorization: localStorage.getItem('itemize-user-token'), // however you get your token
      ...headers,
    },
  }));

  return forward(operation);
});

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

const apolloClient = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
