import { RouteConfig } from 'vue-router';

import SignUp from '../components/SignUp.vue';
import LogIn from '../components/LogIn.vue';
import Users from '../components/user/Users.vue';
import UserDetails from '../components/user/UserDetails.vue';
import AddMessage from '../components/user/AddMessage.vue';
import Messages from '../components/user/Messages.vue';
import Home from '../components/Home.vue';
import Message from '../components/Message.vue';

export const routes: RouteConfig[] = [
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
    path: '/users',
    name: 'Users',
    component: Users,
  },
  {
    path: '/users/:id',
    name: 'UserDetails',
    component: UserDetails,
    props: true,
  },
  {
    path: '/user/messages/new',
    name: 'AddMessage',
    component: AddMessage,
  },
  {
    path: '/user/messages',
    name: 'Messages',
    component: Messages,
  },
  {
    path: '/:id',
    name: 'Message',
    component: Message,
    props: true,
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
