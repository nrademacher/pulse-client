import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import SignUp from '../components/SignUp.vue';
import LogIn from '../components/LogIn.vue';
import Users from '../components/admin/Users.vue';
import UserDetails from '../components/admin/UserDetails.vue';
import AddMessage from '../components/admin/AddMessage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/login',
    name: 'LogIn',
    component: LogIn,
  },
  {
    path: '/admin/users',
    name: 'Users',
    component: Users,
  },
  {
    path: '/admin/users/:id',
    name: 'UserDetails',
    component: UserDetails,
    props: true,
  },
  {
    path: '/admin/messages/new',
    name: 'AddMessage',
    component: AddMessage,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
