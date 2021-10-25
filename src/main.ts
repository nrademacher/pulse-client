import Vue from 'vue';
import App from './App.vue';

import router from './router';
import store from './store';

import { ApolloLink, split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { HttpLink } from 'apollo-link-http';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueApollo from 'vue-apollo';

import Cookies from 'js-cookie';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import './styles.scss';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

const authLink = new ApolloLink((operation, forward) => {
  const token = Cookies.get('pulse-user-token');
  const authorization = token ? `Bearer ${token}` : '';

  operation.setContext(({ headers }: Request) => ({
    headers: {
      authorization,
      ...headers,
    },
  }));

  return forward(operation);
});

let host;
if (typeof window !== 'undefined') {
  host = 'localhost:4000';
} else {
  host = 'server';
}
const httpLink = new HttpLink({
  uri: `http://${host}/graphql`,
});
const wsLink = new WebSocketLink({
  uri: `ws://${host}/graphql`,
  options: {
    reconnect: true,
  },
});

interface Definintion {
  kind: string;
  operation?: string;
}

const link = split(
  ({ query }) => {
    const { kind, operation }: Definintion = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  authLink.concat(httpLink),
);

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
